import {Meta, StoryObj} from '@storybook/react';
import {BlogTitle} from './index';

const meta : Meta<typeof BlogTitle> = {
  title: 'Atoms/BlogTitle',
  component: BlogTitle,
} satisfies Meta<typeof BlogTitle>;
export default meta;

type Template = StoryObj<typeof meta>;
export const Default : Template = {
  args: {
    title: '',
  }
}