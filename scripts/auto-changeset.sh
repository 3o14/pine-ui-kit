#!/bin/bash

# Automatic changeset generation from commit history
# Usage: pnpm changeset:auto

set -e

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
NC='\033[0m'

echo -e "${PURPLE}🤖 Auto-generating changeset from commits...${NC}\n"

# 1. Check if on main branch
CURRENT_BRANCH=$(git branch --show-current)
if [[ "$CURRENT_BRANCH" == "main" ]]; then
  echo -e "${RED}❌ Cannot create changeset on main branch.${NC}"
  exit 1
fi

echo -e "${GREEN}✓${NC} Current branch: ${BLUE}$CURRENT_BRANCH${NC}"

# 2. Check for existing changesets
EXISTING_CHANGESETS=$(find .changeset -name "*.md" ! -name "README.md" 2>/dev/null || echo "")
if [[ -n "$EXISTING_CHANGESETS" ]]; then
  echo -e "${YELLOW}⚠️  Changeset already exists:${NC}"
  echo "$EXISTING_CHANGESETS" | while read -r file; do
    echo "  - $(basename "$file")"
  done
  echo ""
  echo -e "${YELLOW}Do you want to create another one? (y/n)${NC}"
  read -r CONTINUE
  if [[ "$CONTINUE" != "y" ]]; then
    echo -e "${BLUE}ℹ️  Changeset creation cancelled${NC}"
    exit 0
  fi
fi

# 3. Get commits since main
COMMITS=$(git log main..HEAD --pretty=format:"%s" --no-merges)
COMMIT_COUNT=$(echo "$COMMITS" | grep -c . || echo "0")

if [[ "$COMMIT_COUNT" -eq 0 ]]; then
  echo -e "${RED}❌ No commits found since main branch.${NC}"
  echo "Make some commits first!"
  exit 1
fi

echo -e "${GREEN}✓${NC} Found ${BLUE}$COMMIT_COUNT${NC} commit(s)"
echo ""
echo -e "${BLUE}Commits:${NC}"
echo "$COMMITS" | nl -w2 -s'. '
echo ""

# 4. Analyze commit types to determine version bump
HAS_BREAKING=false
HAS_FEAT=false
HAS_FIX=false

while IFS= read -r commit; do
  # Check for breaking changes (BSD grep compatible)
  if echo "$commit" | grep -q "!" || echo "$commit" | grep -q "BREAKING CHANGE:"; then
    HAS_BREAKING=true
  fi
  
  # Check for features
  if echo "$commit" | grep -q "^feat"; then
    HAS_FEAT=true
  fi
  
  # Check for fixes and other changes
  if echo "$commit" | grep -qE "^(fix|docs|style|refactor|perf|test|chore)"; then
    HAS_FIX=true
  fi
done <<< "$COMMITS"

# Determine version type
if [[ "$HAS_BREAKING" == true ]]; then
  VERSION_TYPE="major"
  VERSION_EMOJI="💥"
  VERSION_DESC="Breaking Change"
elif [[ "$HAS_FEAT" == true ]]; then
  VERSION_TYPE="minor"
  VERSION_EMOJI="✨"
  VERSION_DESC="New Feature"
else
  VERSION_TYPE="patch"
  VERSION_EMOJI="🐛"
  VERSION_DESC="Bug Fix / Improvement"
fi

echo -e "${GREEN}✓${NC} Detected version type: ${PURPLE}$VERSION_TYPE${NC} ($VERSION_EMOJI $VERSION_DESC)"

# 5. Generate changeset summary
echo -e "\n${BLUE}📝 Generating changeset summary...${NC}"

# Extract meaningful parts from commits
SUMMARY=""
DETAILS=""

# Group commits by type (BSD grep compatible)
FEAT_COMMITS=$(echo "$COMMITS" | grep "^feat" || echo "")
FIX_COMMITS=$(echo "$COMMITS" | grep "^fix" || echo "")
OTHER_COMMITS=$(echo "$COMMITS" | grep -vE "^(feat|fix)" || echo "")

# Create summary from first significant commit
FIRST_COMMIT=$(echo "$COMMITS" | head -1)
SUMMARY=$(echo "$FIRST_COMMIT" | sed -E 's/^[a-z]+(\(.+\))?!?: //' | sed 's/^./\u&/')

# Create detailed description (BSD sed compatible)
if [[ -n "$FEAT_COMMITS" ]]; then
  DETAILS="${DETAILS}**New Features:**\n"
  while IFS= read -r commit; do
    DESC=$(echo "$commit" | sed 's/^feat[^:]*: //')
    DETAILS="${DETAILS}- ${DESC}\n"
  done <<< "$FEAT_COMMITS"
  DETAILS="${DETAILS}\n"
fi

if [[ -n "$FIX_COMMITS" ]]; then
  DETAILS="${DETAILS}**Bug Fixes:**\n"
  while IFS= read -r commit; do
    DESC=$(echo "$commit" | sed 's/^fix[^:]*: //')
    DETAILS="${DETAILS}- ${DESC}\n"
  done <<< "$FIX_COMMITS"
  DETAILS="${DETAILS}\n"
fi

if [[ -n "$OTHER_COMMITS" ]]; then
  DETAILS="${DETAILS}**Other Changes:**\n"
  while IFS= read -r commit; do
    DESC=$(echo "$commit" | sed 's/^[a-z]*[^:]*: //')
    DETAILS="${DETAILS}- ${DESC}\n"
  done <<< "$OTHER_COMMITS"
fi

# 6. Preview changeset
echo ""
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}📋 Changeset Preview${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}Version Type:${NC} ${PURPLE}$VERSION_TYPE${NC} $VERSION_EMOJI"
echo -e "${GREEN}Summary:${NC} $SUMMARY"
echo ""
echo -e "${GREEN}Details:${NC}"
echo -e "$DETAILS"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}\n"

# 7. Allow customization
echo -e "${YELLOW}Would you like to customize? (y/n)${NC}"
read -r CUSTOMIZE

if [[ "$CUSTOMIZE" == "y" ]]; then
  echo ""
  echo -e "${BLUE}Select version type:${NC}"
  echo "1) patch (bug fixes, small improvements)"
  echo "2) minor (new features, backwards compatible)"
  echo "3) major (breaking changes)"
  echo ""
  echo -e "${YELLOW}Enter number [current: $VERSION_TYPE]:${NC}"
  read -r VERSION_CHOICE
  
  case $VERSION_CHOICE in
    1) VERSION_TYPE="patch" ;;
    2) VERSION_TYPE="minor" ;;
    3) VERSION_TYPE="major" ;;
    *) echo -e "${BLUE}ℹ️  Keeping: $VERSION_TYPE${NC}" ;;
  esac
  
  echo ""
  echo -e "${BLUE}Enter summary [press Enter to keep current]:${NC}"
  read -r CUSTOM_SUMMARY
  if [[ -n "$CUSTOM_SUMMARY" ]]; then
    SUMMARY="$CUSTOM_SUMMARY"
  fi
fi

# 8. Create changeset file
echo ""
echo -e "${BLUE}📝 Creating changeset...${NC}"

# Generate random changeset filename (similar to changeset CLI)
ADJECTIVES=("happy" "sad" "quick" "slow" "bright" "dark" "hot" "cold" "big" "small")
NOUNS=("dog" "cat" "bird" "fish" "tree" "flower" "mountain" "river" "cloud" "star")
VERBS=("run" "jump" "swim" "fly" "dance" "sing" "sleep" "wake" "laugh" "smile")

RANDOM_ADJ=${ADJECTIVES[$RANDOM % ${#ADJECTIVES[@]}]}
RANDOM_NOUN=${NOUNS[$RANDOM % ${#NOUNS[@]}]}
RANDOM_VERB=${VERBS[$RANDOM % ${#VERBS[@]}]}
CHANGESET_FILENAME="$RANDOM_ADJ-$RANDOM_NOUN-$RANDOM_VERB.md"

# Create changeset content
CHANGESET_CONTENT="---
\"pine-ui-kit\": $VERSION_TYPE
---

$SUMMARY

$(echo -e "$DETAILS" | sed 's/\\n/\n/g')
"

# Write changeset file
echo "$CHANGESET_CONTENT" > ".changeset/$CHANGESET_FILENAME"

echo -e "${GREEN}✓${NC} Changeset created: ${BLUE}.changeset/$CHANGESET_FILENAME${NC}"

# 9. Show the file
echo ""
echo -e "${BLUE}📄 Generated changeset:${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
cat ".changeset/$CHANGESET_FILENAME"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}\n"

# 10. Offer to commit
echo -e "${YELLOW}Commit this changeset? (y/n)${NC}"
read -r COMMIT_CHANGESET

if [[ "$COMMIT_CHANGESET" == "y" ]]; then
  git add ".changeset/$CHANGESET_FILENAME"
  git commit -m "docs: add changeset for $VERSION_TYPE release"
  echo -e "${GREEN}✓${NC} Changeset committed"
fi

echo ""
echo -e "${GREEN}✅ Done!${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"

