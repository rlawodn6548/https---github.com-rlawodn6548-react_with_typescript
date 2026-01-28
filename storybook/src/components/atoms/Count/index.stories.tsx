import {Meta, StoryObj} from '@storybook/react'
import {Count} from '.'

const meta = {
    title: 'Atoms/Count',
    component: Count,

} satisfies Meta<typeof Count>;

export default meta;

type Template = StoryObj<typeof meta>

export const Default:Template = {
    args : {
        count: 0
    }
}
