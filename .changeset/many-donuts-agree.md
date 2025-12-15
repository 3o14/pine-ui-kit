---
"pine-ui-kit": patch
---

refactor: move ThemeProvider to providers package for better dependency hierarchy

- Moved ThemeProvider from components/ to providers/ package
- Components now use useTheme hook instead of direct ThemeContext imports
- Improved encapsulation and clearer dependency direction
- No breaking changes - public API remains unchanged
