# pine-ui-kit (deprecated)

This package has been **renamed** to [pine-design-system](https://www.npmjs.com/package/pine-design-system).

- **Migration**: `npm uninstall pine-ui-kit && npm install pine-design-system`
- **Compatibility**: This package re-exports `pine-design-system`. Existing `import … from 'pine-ui-kit'` and `import 'pine-ui-kit/style.css'` will continue to work but please migrate when possible.

---

## Publishing this bridge (maintainers)

After **pine-design-system** is published to npm:

1. From repo root: `cd packages/pine-ui-kit && pnpm publish --no-git-checks`
2. Then deprecate: `npm deprecate pine-ui-kit "This package has been renamed to pine-design-system. Install with: npm install pine-design-system"`
