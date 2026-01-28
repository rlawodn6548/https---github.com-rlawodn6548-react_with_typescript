import type { Preview } from '@storybook/react-webpack5'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    actions: {
      argTypesRegex: "^on[A-Z].*",
    }
  },
};

export default preview;