import {Meta, StoryObj} from '@storybook/react'
import { Header } from '.'

const meta = {
    title: 'Organisms/Header',
    component: Header,
} satisfies Meta<typeof Header>;
export default meta;

type Template = StoryObj<typeof meta>;
export const Default: Template = {

}
