import {Meta, StoryObj} from '@storybook/react';
import {Button} from './index';

const meta : Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
} satisfies Meta<typeof Button>;
export default meta;

type Template = StoryObj<typeof meta>;
export const Default : Template = {
  args: {
    label: '등록',
  }
}