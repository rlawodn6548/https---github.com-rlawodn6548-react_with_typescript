import {Meta, StoryObj} from '@storybook/react';
import {ToDoInputPage} from './index';

const meta: Meta<typeof ToDoInputPage> = {
    title: 'Pages/ToDoInputPage',
    component: ToDoInputPage,
}

export default meta;
type Story = StoryObj<typeof ToDoInputPage>;

export const Default: Story = {
}
