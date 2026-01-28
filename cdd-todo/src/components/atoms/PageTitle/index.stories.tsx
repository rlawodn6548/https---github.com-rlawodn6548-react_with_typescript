import {Meta, StoryObj} from '@storybook/react'
import { PageTitle } from '.'

const meta = {
    title: 'Atoms/PageTitle',
    component: PageTitle,
} satisfies Meta<typeof PageTitle>;

export default meta;

type Template = StoryObj<typeof meta>;
export const Default:Template = {
    args : {
        title: '할 일 목록'
    }
}