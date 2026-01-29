import {Meta, StoryObj} from '@storybook/react'
import { Button } from '.'  

const meta = {
    title: 'Atoms/Button',
    component: Button,
    argTypes: {
        onClick: { action: 'clicked' }
    }
} satisfies Meta<typeof Button>;

export default meta;

type Template = StoryObj<typeof meta>;
export const Default:Template = {
    args : {
        label: '버튼',
    }
}

export const BlueButton:Template = {
    args : {
        label: '파란 버튼',
        color: '#2196f3',
    }
}