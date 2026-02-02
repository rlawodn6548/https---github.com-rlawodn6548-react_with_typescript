import {Meta, StoryObj} from '@storybook/react';
import {BlogList} from './index';

const meta: Meta<typeof BlogList> = {
    title: 'Template/BlogList',
    component: BlogList,
} satisfies Meta<typeof BlogList>;
export default meta;

type Template = StoryObj<typeof meta>;
export const Default : Template = {
    args: {
        posts: [
            {
                id: 1,
                title: '제목1',
                body: '내용1',
            },
            {
                id: 2,
                title: '제목2',
                body: '내용2',
            },
        ],
    },
 }
