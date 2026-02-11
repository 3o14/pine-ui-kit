<div align="center">
  <h1>🍍 Pine UI</h1>
  <p><strong>A modern React component library built with design tokens at its core</strong></p>
  
  <p>
    <a href="https://www.npmjs.com/package/pine-ui-kit"><img src="https://img.shields.io/npm/v/pine-ui-kit?style=flat-square" alt="npm version" /></a>
    <a href="https://www.npmjs.com/package/pine-ui-kit"><img src="https://img.shields.io/npm/dm/pine-ui-kit?style=flat-square" alt="npm downloads" /></a>
    <a href="https://github.com/3o14/pine-ui-kit/blob/main/LICENSE"><img src="https://img.shields.io/npm/l/pine-ui-kit?style=flat-square" alt="license" /></a>
  </p>
  
  <p>
    Pine UI is a <strong>token-driven component library</strong> for React applications.<br />
    Built with TypeScript, accessibility, and developer experience in mind.
  </p>
</div>

---

## Features

- **Three Unique Themes** — Switch between basic, game, and crayon themes instantly
- **Token-First Design** — Consistent theming through design tokens
- **Light & Dark Mode** — Built-in theme variants for all themes
- **Tree-Shakeable** — Import only what you need
- **TypeScript Native** — First-class TypeScript support
- **Zero-Runtime CSS** — Powered by Vanilla Extract

## Quick Start

Install Pine UI using your preferred package manager:

```bash
npm install pine-ui-kit
# or
pnpm add pine-ui-kit
# or
yarn add pine-ui-kit
```

Wrap your app with `ThemeProvider` and start building:

```tsx
import { ThemeProvider, Button, Badge, TextField, Switch } from "pine-ui-kit";
import "pine-ui-kit/style.css";

function App() {
	return (
		<ThemeProvider theme="basic" defaultMode="light">
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

## Themes

Pine UI comes with **three distinct design themes** that can be switched seamlessly with a single prop change:

### 🎯 Basic Theme

A clean, modern design system perfect for professional applications. Features smooth animations, subtle shadows, and a refined aesthetic.

```tsx
<ThemeProvider theme="basic">
	<YourApp />
</ThemeProvider>
```

### 🎮 Game Theme

Pixel-art inspired design for gamified experiences. Features retro aesthetics, bold borders, and playful interactions that bring a nostalgic gaming feel to your interface.

```tsx
<ThemeProvider theme="game">
	<YourApp />
</ThemeProvider>
```

### 🖍️ Crayon Theme

Soft, warm, and friendly design with hand-drawn aesthetics. Features rounded corners, gentle shadows, and a cozy feel perfect for creative or educational applications.

```tsx
<ThemeProvider theme="crayon">
	<YourApp />
</ThemeProvider>
```

**All themes support both light and dark modes:**

```tsx
<ThemeProvider theme="game" defaultMode="dark">
	<YourApp />
</ThemeProvider>
```

Change the theme dynamically at runtime:

```tsx
function App() {
	const [theme, setTheme] = useState<"basic" | "game" | "crayon">("basic");

	return (
		<ThemeProvider theme={theme} onThemeChange={setTheme}>
			<button onClick={() => setTheme("game")}>Switch to Game Theme</button>
			<YourApp />
		</ThemeProvider>
	);
}
```

## Documentation

**Visit our [Storybook documentation](https://3o14.github.io/pine-ui-kit/) for:**

- **Getting Started Guide** — Installation and usage
- **Component API** — Props, variants, and examples
- **Design Tokens** — Theming and customization
- **Accessibility** — A11y guidelines and best practices

To run Storybook locally:

```bash
git clone https://github.com/3o14/pine-ui-kit.git
cd pine-ui-kit
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
    <a href="https://3o14.github.io/pine-ui-kit/">Documentation</a> •
    <a href="https://github.com/3o14/pine-ui-kit">GitHub</a> •
    <a href="https://www.npmjs.com/package/pine-ui-kit">npm</a>
  </p>
</div>
