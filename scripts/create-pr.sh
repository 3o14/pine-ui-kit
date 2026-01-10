#!/bin/bash

# Automatic PR creation script
# Usage: pnpm pr

set -e

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 Creating Pull Request...${NC}\n"

# 1. Check Git status
if [[ -n $(git status -s) ]]; then
  echo -e "${YELLOW}⚠️  You have uncommitted changes.${NC}"
  echo "Please commit your changes first."
  exit 1
fi

# 2. Check current branch
CURRENT_BRANCH=$(git branch --show-current)
if [[ "$CURRENT_BRANCH" == "main" ]]; then
  echo -e "${RED}❌ Cannot create PR from main branch.${NC}"
  exit 1
fi

echo -e "${GREEN}✓${NC} Current branch: ${BLUE}$CURRENT_BRANCH${NC}"

# 3. Check for changeset
CHANGESET_FILES=$(find .changeset -name "*.md" ! -name "README.md" 2>/dev/null || echo "")
CHANGESET_COUNT=$(echo "$CHANGESET_FILES" | grep -c . || echo "0")

if [[ "$CHANGESET_COUNT" -eq 0 ]]; then
  echo -e "${YELLOW}⚠️  No changeset found. Would you like to create one? (y/n)${NC}"
  read -r CREATE_CHANGESET
  
  if [[ "$CREATE_CHANGESET" == "y" ]]; then
    pnpm changeset
    echo -e "${GREEN}✓${NC} Changeset created"
    
    # Commit changeset
    git add .changeset/
    git commit -m "docs: add changeset"
    echo -e "${GREEN}✓${NC} Changeset committed"
  fi
fi

# 4. Analyze changes
echo -e "\n${BLUE}📊 Analyzing changes...${NC}"
CHANGED_FILES=$(git diff --name-only main...HEAD)
FILE_COUNT=$(echo "$CHANGED_FILES" | wc -l | tr -d ' ')
COMMIT_MESSAGES=$(git log main..HEAD --pretty=format:"%s" | head -5)

# 5. Extract changeset information
if [[ -n "$CHANGESET_FILES" ]]; then
  CHANGESET_CONTENT=$(cat $(echo "$CHANGESET_FILES" | head -1))
  # BSD grep compatible (macOS)
  CHANGESET_TYPE=$(echo "$CHANGESET_CONTENT" | grep -o '"[^"]*"' | head -1 | tr -d '"' || echo "pine-ui-kit")
  CHANGESET_VERSION=$(echo "$CHANGESET_CONTENT" | grep -o ': [a-z]*' | head -1 | sed 's/: //' || echo "patch")
  CHANGESET_DESC=$(echo "$CHANGESET_CONTENT" | tail -n +4)
else
  CHANGESET_TYPE="pine-ui-kit"
  CHANGESET_VERSION="patch"
  CHANGESET_DESC=""
fi

# 6. Generate PR title
echo -e "\n${BLUE}📝 Enter PR title (press Enter for auto-generated):${NC}"
read -r PR_TITLE_INPUT

if [[ -z "$PR_TITLE_INPUT" ]]; then
  # Use first commit message as title
  PR_TITLE=$(echo "$COMMIT_MESSAGES" | head -1)
  
  # Use changeset description if available
  if [[ -n "$CHANGESET_DESC" ]]; then
    PR_TITLE=$(echo "$CHANGESET_DESC" | head -1)
  fi
else
  PR_TITLE="$PR_TITLE_INPUT"
fi

echo -e "${GREEN}✓${NC} PR title: ${BLUE}$PR_TITLE${NC}"

# 7. Generate PR body
PR_BODY="## 📝 Changes

$CHANGESET_DESC

## 🔄 Changeset Info

- **Package**: \`$CHANGESET_TYPE\`
- **Version**: \`$CHANGESET_VERSION\`

## 📊 Commit History

\`\`\`
$COMMIT_MESSAGES
\`\`\`

## 📁 Changed Files ($FILE_COUNT)

\`\`\`
$(echo "$CHANGED_FILES" | head -20)
$(if [[ $(echo "$CHANGED_FILES" | wc -l) -gt 20 ]]; then echo "... and more"; fi)
\`\`\`

## ✅ Checklist

- [x] Changeset added
- [x] Code review ready
- [ ] Tests passing
- [ ] Documentation updated (if needed)

---

<details>
<summary>🤖 Auto-generated PR</summary>

This PR was automatically generated using \`pnpm pr\` command.
</details>
"

# 8. PR Preview
echo -e "\n${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}📋 PR Preview${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}Title:${NC} $PR_TITLE"
echo ""
echo -e "${GREEN}Body:${NC}"
echo "$PR_BODY" | head -20
echo -e "${YELLOW}...${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}\n"

# 9. Confirm
echo -e "${YELLOW}Create this PR? (y/n)${NC}"
read -r CONFIRM

if [[ "$CONFIRM" != "y" ]]; then
  echo -e "${RED}❌ PR creation cancelled${NC}"
  exit 0
fi

# 10. Push
echo -e "\n${BLUE}📤 Pushing branch...${NC}"
git push -u origin "$CURRENT_BRANCH"
echo -e "${GREEN}✓${NC} Push complete"

# 11. Create PR
echo -e "\n${BLUE}🎉 Creating PR...${NC}"

# Use Homebrew's gh explicitly (avoid npm package conflict)
GH_CMD="/opt/homebrew/bin/gh"

# Fallback to system gh if Homebrew version not found
if [[ ! -f "$GH_CMD" ]]; then
  if command -v gh &> /dev/null; then
    GH_CMD="gh"
  else
    echo -e "${RED}❌ GitHub CLI (gh) is not installed.${NC}"
    echo "Install: brew install gh"
    echo "Then authenticate: gh auth login"
    echo ""
    echo "Or create PR manually:"
    echo "https://github.com/$(git remote get-url origin | sed 's/.*github.com[:/]\(.*\)\.git/\1/')/compare/main...$CURRENT_BRANCH"
    exit 1
  fi
fi

# Check authentication
if ! "$GH_CMD" auth status &> /dev/null; then
  echo -e "${RED}❌ Not authenticated with GitHub.${NC}"
  echo "Please run: gh auth login"
  exit 1
fi

# Create PR
if "$GH_CMD" pr create \
  --title "$PR_TITLE" \
  --body "$PR_BODY" \
  --base main \
  --head "$CURRENT_BRANCH"; then
  echo -e "\n${GREEN}✅ PR created successfully!${NC}"
  echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
else
  echo -e "\n${RED}❌ Failed to create PR.${NC}"
  echo "Please check the error message above."
  exit 1
fi
