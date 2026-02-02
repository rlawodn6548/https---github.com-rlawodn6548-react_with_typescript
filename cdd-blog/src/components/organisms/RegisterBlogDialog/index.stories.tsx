import {Meta, StoryObj} from '@storybook/react';
import {RegisterBlogDialog} from './index'

const meta: Meta<typeof RegisterBlogDialog> = {
    title: 'Organisms/RegisterBlogDialog',
    component: RegisterBlogDialog,
    argTypes: {
        onClose: { action: 'onClose' },
    }
} satisfies Meta<typeof RegisterBlogDialog>;
export default meta;

type Template = StoryObj<typeof meta>;
export const Default : Template = {
 }
