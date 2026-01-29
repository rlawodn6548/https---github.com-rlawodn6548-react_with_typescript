import {Meta, StoryObj} from '@storybook/react'
import {ToDoItem} from '.'

const meta = {
    title: 'Organisms/ToDoItem',
    component: ToDoItem,
    argTypes: {
        onClick: { action: 'clicked' }
    },
} satisfies Meta<typeof ToDoItem>;
export default meta;

type Template = StoryObj<typeof meta>;
export const Default: Template = {
    args: {
        label: '리액트 공부하기',
    },
}