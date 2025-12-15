# pine-ui-kit

## 0.1.1

### Patch Changes

- d58af62: refactor: move ThemeProvider to providers package for better dependency hierarchy
  - Moved ThemeProvider from components/ to providers/ package
  - Components now use useTheme hook instead of direct ThemeContext imports
  - Improved encapsulation and clearer dependency direction
  - No breaking changes - public API remains unchanged

## 0.1.0

### Minor Changes

- 4e1a358: Add `primaryColor` prop to ThemeProvider to allow custom primary color configuration. The primary color automatically generates all variant colors (solid, outline, ghost, weak) and disabled states. Each ThemeProvider instance can independently set its own primary color using CSS variables scoped to its container element.

## 0.0.3

### Patch Changes

- 26d6a48: Fix border styling consistency in Badge and Button components by explicitly setting borderColor and updating border property usage.
