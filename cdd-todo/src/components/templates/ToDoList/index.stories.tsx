import {Meta, StoryObj} from '@storybook/react';
import {ToDoList} from '.';

const meta = {
  title: 'Templates/ToDoList',
  component: ToDoList,
  argTypes : {
    onDelete: {
      action: 'onDelete',
    },
  }
} satisfies Meta<typeof ToDoList>;
export default meta;

type Template = StoryObj<typeof meta>;
export const Default: Template = {
  args: {
    toDoList: ['리액트 공부하기', 'CDD 공부하기'],
  },
};
