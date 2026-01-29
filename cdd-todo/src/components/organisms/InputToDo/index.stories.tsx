import { Meta, StoryObj } from '@storybook/react';
import { InputToDo } from '.';

const meta = {
  title: 'Organisms/InputToDo',
  component: InputToDo,
} satisfies Meta<typeof InputToDo>;

export default meta;

type Template = StoryObj<typeof meta>;

export const Default: Template = {};
