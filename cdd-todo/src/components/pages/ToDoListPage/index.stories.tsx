import { Meta, StoryObj } from '@storybook/react';
import { ToDoListPage } from '.';

const meta = {
  title: 'Pages/ToDoListPage',
  component: ToDoListPage,
} satisfies Meta<typeof ToDoListPage>;
export default meta;

type Template = StoryObj<typeof meta>;
export const Default: Template = {};
