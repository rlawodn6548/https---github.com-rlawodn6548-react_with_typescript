import {Meta, StoryObj} from '@storybook/react'
import { Counter } from 'components/organisms/Counter'
import { Title } from 'components/atoms/Title'
import {CounterApp} from '.'

const meta = {
    title: 'Templates/CounterApp',
    component: CounterApp,
} satisfies Meta<typeof CounterApp>;
export default meta;

type Template = StoryObj<typeof meta>;

export const Default:Template = {
    
}