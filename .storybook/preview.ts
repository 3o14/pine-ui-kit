import type { Preview } from '@storybook/react'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    docs: {
      toc: true,
    },
    options: {
      storySort: {
        order: ['Components', ['Badge', 'Button', 'Checkbox', 'Dialog', 'Switch', 'TextField']],
      },
    },
  },
};

export default preview;