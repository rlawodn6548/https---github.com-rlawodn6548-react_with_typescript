import type { Preview } from '@storybook/react-webpack5'
import {BrowserRouter} from 'react-router-dom'
import {ToDoListContextProvider} from '../src/context/ToDoList'


const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <ToDoListContextProvider>
        <BrowserRouter>
          <Story />
        </BrowserRouter>
      </ToDoListContextProvider>
    )
  ]
};

export default preview;