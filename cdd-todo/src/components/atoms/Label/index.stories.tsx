import {Meta, StoryObj} from '@storybook/react'
import { Label } from '.'

const meta = {
    title : 'Atoms/Label',
    component: Label,
} satisfies Meta<typeof Label>;
export default meta;

type Template = StoryObj<typeof meta>;
export const Default:Template = {
    args : {
        label: '리액트 공부하기'
    }
}