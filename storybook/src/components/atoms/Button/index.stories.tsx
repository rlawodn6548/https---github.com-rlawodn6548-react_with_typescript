import {Meta, StoryObj} from '@storybook/react'
import {Button} from '.'
import { fn } from '@storybook/test'

const meta = {
    title: 'Atoms/Button',
    component: Button,
    args: {
        label: '',
        onClick: fn(),
    },
} satisfies Meta<typeof Button>;

export default meta;

type Template = StoryObj<typeof meta>;

export const Default:Template = {
    args : {
       label : 'Button1' 
    }
}