import {Meta, StoryObj} from '@storybook/react';
import {BlogItem} from './index';

const meta: Meta<typeof BlogItem> = {
    title: 'Organisms/BlogItem',
    component: BlogItem,
} satisfies Meta<typeof BlogItem>;
export default meta;

type Template = StoryObj<typeof meta>;
export const Default : Template = {
    args: {
        title: 'Blog Title',
        body: 'Blog Body',
    }
 }
