import { Meta, StoryObj } from '@storybook/react';
import { Input } from '.';

const meta = {
  title: 'Atoms/Input',
  component: Input,
  argTypes: {
    onChange: { action: 'changed' }
  },
} satisfies Meta<typeof Input>;
export default meta;

type Template = StoryObj<typeof meta>;
export const Default: Template = {
  args: {
    value: '',
  },
};
