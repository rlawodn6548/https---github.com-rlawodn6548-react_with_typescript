import {Meta, StoryObj} from '@storybook/react'
import {Title} from '.';


const meta = {
    title: 'Atoms/Title',
    component: Title,

    args: {
        title: ''
    },
} satisfies Meta<typeof Title>

export default meta;

type Template = StoryObj<typeof meta>;

export const Default: Template = {
    args: {
        title: 'Counter App',
    }
}