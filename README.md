<div align="center">
  <h1>🍍 Pine Design System</h1>
  <p><strong>A comprehensive design system with token-driven theming and accessible React components</strong></p>
  
  <p>
    <a href="https://www.npmjs.com/package/pine-design-system"><img src="https://img.shields.io/npm/v/pine-design-system?style=flat-square" alt="npm version" /></a>
    <a href="https://www.npmjs.com/package/pine-design-system"><img src="https://img.shields.io/npm/dm/pine-design-system?style=flat-square" alt="npm downloads" /></a>
    <a href="https://github.com/3o14/pine-design-system/blob/main/LICENSE"><img src="https://img.shields.io/npm/l/pine-design-system?style=flat-square" alt="license" /></a>
  </p>
  
  <p>
    Pine Design System is a <strong>complete design system</strong> for React applications.<br />
    Built with design tokens, TypeScript, accessibility, and exceptional developer experience in mind.
  </p>
</div>

---

## Features

- **Three Unique Design Variants** — Switch between basic, game, and crayon designs instantly
- **Token-Driven Architecture** — Consistent theming through semantic design tokens
- **Light & Dark Themes** — Built-in theme support for all design variants
- **Tree-Shakeable** — Import only what you need
- **TypeScript Native** — First-class TypeScript support with full type safety
- **Zero-Runtime CSS** — Powered by Vanilla Extract for optimal performance
- **Accessible by Default** — Built on top of Base UI for WCAG compliance

## Quick Start

Install Pine Design System using your preferred package manager:

```bash
npm install pine-design-system
# or
pnpm add pine-design-system
# or
yarn add pine-design-system
```

Wrap your app with `ThemeProvider` and start building:

```tsx
import { ThemeProvider, Button, Badge, TextField, Switch } from "pine-design-system";
import "pine-design-system/style.css";

function App() {
	return (
		<ThemeProvider design="basic" defaultTheme="light">
			<Button intent="primary" size="md">
				Get Started
			</Button>
			<Badge variant="solid" intent="success">
				New
			</Badge>
			<Switch size="md" intent="primary" />
			<TextField
				label="Email"
				placeholder="you@example.com"
				variant="outline"
			/>
		</ThemeProvider>
	);
}
```

## Design System

Pine Design System comes with **three distinct design variants** that can be switched seamlessly with a single prop change:

### 🎯 Basic Design

A clean, modern design perfect for professional applications. Features smooth animations, subtle shadows, and a refined aesthetic.

```tsx
<ThemeProvider design="basic">
	<YourApp />
</ThemeProvider>
```

### 🎮 Game Design

Pixel-art inspired design for gamified experiences. Features retro aesthetics, bold borders, and playful interactions that bring a nostalgic gaming feel to your interface.

```tsx
<ThemeProvider design="game">
	<YourApp />
</ThemeProvider>
```

### 🖍️ Crayon Design

Soft, warm, and friendly design with hand-drawn aesthetics. Features rounded corners, gentle shadows, and a cozy feel perfect for creative or educational applications.

```tsx
<ThemeProvider design="crayon">
	<YourApp />
</ThemeProvider>
```

**All design variants support both light and dark themes:**

```tsx
<ThemeProvider design="game" defaultTheme="dark">
	<YourApp />
</ThemeProvider>
```

Change the design dynamically at runtime:

```tsx
function App() {
	const [design, setDesign] = useState<"basic" | "game" | "crayon">("basic");
	const [theme, setTheme] = useState<"light" | "dark">("light");

	return (
		<ThemeProvider design={design} onDesignChange={setDesign} theme={theme} onThemeChange={setTheme}>
			<button onClick={() => setDesign("game")}>Switch to Game Design</button>
			<button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
				Toggle Theme
			</button>
			<YourApp />
		</ThemeProvider>
	);
}
```

## Documentation

**Visit our [Storybook documentation](https://3o14.github.io/pine-design-system/) for:**

- **Getting Started Guide** — Installation and usage
- **Component API** — Props, variants, and examples
- **Design Tokens** — Theming and customization
- **Accessibility** — A11y guidelines and best practices

To run Storybook locally:

```bash
git clone https://github.com/3o14/pine-design-system.git
cd pine-design-system
pnpm install
pnpm run storybook
```

## Components

| Component     | Description                            |
| ------------- | -------------------------------------- |
| **Badge**     | Display status, labels, or counts      |
| **Button**    | Primary actions with multiple variants |
| **Checkbox**  | Selectable input with custom styling   |
| **Dialog**    | Modal dialogs with Portal support      |
| **Dropdown**  | Select input with custom options       |
| **Switch**    | Toggle between two states              |
| **TextField** | Text input with validation states      |

## Tech Stack

Built with modern tools for optimal developer experience:

- [React 19](https://react.dev/) — UI library
- [TypeScript](https://www.typescriptlang.org/) — Type safety
- [Vanilla Extract](https://vanilla-extract.style/) — Zero-runtime CSS-in-TS
- [Vite](https://vitejs.dev/) — Lightning-fast build tool
- [Storybook 8](https://storybook.js.org/) — Component documentation

## Contributing

Contributions are welcome! This project is part of a learning journey toward building production-ready design systems.

If you'd like to contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the [MIT License](LICENSE) — feel free to use it in your projects! :D

<div align="center">
  <p>
    <a href="https://3o14.github.io/pine-design-system/">Documentation</a> •
    <a href="https://github.com/3o14/pine-design-system">GitHub</a> •
    <a href="https://www.npmjs.com/package/pine-design-system">npm</a>
  </p>
</div>
