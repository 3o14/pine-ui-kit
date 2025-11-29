# @3o14/pie-ui

## 2.0.0

### Major Changes

- 2745df8: ## Major Changes

  ### Breaking Changes

  #### Token Naming Convention
  - **All token sizes changed from abbreviations to full names**:
    - `radius`: `sm` → `small`, `md` → `medium`, `lg` → `large`, `xl` → `xlarge`
    - `shadow`: `xs` → `xsmall`, `sm` → `small`, `md` → `medium`, `lg` → `large`, `xl` → `xlarge`
    - `typography`: `xs` → `xsmall`, `sm` → `small`, `md` → `medium`, `lg` → `large`, `xl` → `xlarge`, `display-sm` → `display-small`, `display-md` → `display-medium`, `display-lg` → `display-large`

  #### Component Size Props
  - **All component size props changed from abbreviations to full names**:
    - `Badge`: `"sm" | "md" | "lg"` → `"small" | "medium" | "large" | "xlarge"`
    - `Button`: `"sm" | "md" | "lg"` → `"small" | "medium" | "large" | "xlarge"`
    - `Checkbox`: `"sm" | "md" | "lg"` → `"small" | "medium" | "large" | "xlarge"`
    - `Dialog`: `"sm" | "md" | "lg" | "xl"` → `"small" | "medium" | "large" | "xlarge" | "full"`
    - `Dropdown`: `"sm" | "md" | "lg"` → `"small" | "medium" | "large"`
    - `Switch`: `"sm" | "md" | "lg"` → `"small" | "medium" | "large" | "xlarge"`
    - `Text`: `"xs" | "sm" | "md" | "lg" | "xl" | "display-sm" | "display-md" | "display-lg"` → `"xsmall" | "small" | "medium" | "large" | "xlarge" | "display-small" | "display-medium" | "display-large"`
    - `TextField`: `"sm" | "md" | "lg"` → `"small" | "medium" | "large" | "xlarge"`

  #### Rounded Prop Type Changes
  - **`rounded` prop changed from boolean to string type**:
    - `Badge`: `rounded?: boolean` → `rounded?: "small" | "medium" | "large"` (default: `"medium"`)
    - `Button`: `rounded?: boolean` → `rounded?: "small" | "medium" | "large"` (default: `"medium"`)
    - `Dialog`: Added `rounded?: "small" | "medium" | "large"` (default: `"medium"`)
    - `Dropdown`: Added `rounded?: "small" | "medium" | "large"` (default: `"medium"`)
    - `TextField`: Added `rounded?: "small" | "medium" | "large"` (default: `"medium"`)

  #### Component-Specific Breaking Changes

  **Badge**
  - `rounded` prop type changed: `boolean` → `"small" | "medium" | "large"`
  - `size` prop default changed: `"md"` → `"medium"`
  - `rounded` prop default changed: `false` → `"medium"`

  **Button**
  - `rounded` prop type changed: `boolean` → `"small" | "medium" | "large"`
  - `size` prop default changed: `"md"` → `"medium"`
  - `rounded` prop default changed: `undefined` → `"medium"`

  **Checkbox**
  - `rounded` prop removed
  - `variant` prop added: `"circle" | "square"` (default: `"square"`)
  - `size` prop default changed: `"md"` → `"medium"`
  - Label now uses `Text` component internally

  **Dialog**
  - `size` prop default changed: `"md"` → `"medium"`
  - `rounded` prop added: `"small" | "medium" | "large"` (default: `"medium"`)
  - `title` and `description` now use `Text` component internally
  - `closeButton` now uses `Button` component internally
  - `footer` prop kept for backward compatibility, but new `actions` prop added for simplified button rendering

  **Dropdown**
  - `variant` prop removed
  - `intent` prop added: `ColorIntent` (default: `"primary"`)
  - `size` prop default changed: `"md"` → `"medium"`
  - `rounded` prop added: `"small" | "medium" | "large"` (default: `"medium"`)
  - Menu items now also respect `intent` prop

  **Switch**
  - `size` prop default changed: `"md"` → `"medium"`
  - Label now uses `Text` component internally

  **TextField**
  - `error` prop removed (use `status="error"` instead)
  - `size` prop default changed: `"md"` → `"medium"`
  - `rounded` prop added: `"small" | "medium" | "large"` (default: `"medium"`)
  - `label` and `helperText` now use `Text` component internally
  - `helperText` size now scales with `size` prop

  **Text**
  - `size` prop default changed: `"md"` → `"medium"`
  - `TextElement` type now includes `"label"`

  ### New Features

  #### Weak Variant
  - **Badge**: Added `weak` variant option for pastel-like background colors
  - **Button**: Added `weak` variant option for pastel-like background colors

  #### Color Tokens
  - Added `weak` color state to all color scales in light and dark palettes
  - `getWeakColor` utility function added to tokens package for generating weak colors using `color-mix()`

  ### Improvements
  - **Storybook**: Default values now properly set in all component stories
  - **Storybook**: Panel controls now correctly apply to all components
  - **Storybook**: Removed `DarkMode` stories (theme is now handled globally)
  - **Consistency**: All components now use consistent naming conventions
  - **Accessibility**: Improved component structure with proper semantic HTML elements

## 1.0.0

### Major Changes

- 5621030: 스토리북 다크모드 세팅

## 0.2.0

### Minor Changes

- 5385878: Text, Icon 컴포넌트를 추가해요.

## 0.1.3

### Patch Changes

- Initial release with core components
- Badge, Button, Checkbox, Dialog, Dropdown, Switch, TextField components
- Design token system with light/dark themes
