import {Meta, StoryObj} from '@storybook/react';
import {NotFoundPage} from './index';

const meta: Meta<typeof NotFoundPage> = {
    title: 'Pages/NotFoundPage',
    component: NotFoundPage,
}

export default meta;
type Story = StoryObj<typeof NotFoundPage>;

export const Default: Story = {
}