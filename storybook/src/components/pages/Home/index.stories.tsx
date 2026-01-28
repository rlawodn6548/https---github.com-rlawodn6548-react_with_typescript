import {Meta, StoryObj} from '@storybook/react'
import { Home } from '.'

const meta = {
    title: 'Pages/Home',
    component: Home,
} satisfies Meta<typeof Home>;
export default meta;

type Template = StoryObj<typeof meta>;

export const Default: Template = {

}
