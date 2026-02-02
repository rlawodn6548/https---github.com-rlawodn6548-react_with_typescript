import {Meta, StoryObj} from '@storybook/react';
import {BlogListPage} from './index';

const meta: Meta<typeof BlogListPage> = {
    title: 'Pages/BlogListPage',
    component: BlogListPage,
} satisfies Meta<typeof BlogListPage>;
export default meta;

type Template = StoryObj<typeof meta>;
export const Default : Template = {
 }
