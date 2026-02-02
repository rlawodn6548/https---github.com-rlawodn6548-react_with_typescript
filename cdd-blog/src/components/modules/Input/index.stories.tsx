import {Meta, StoryObj} from '@storybook/react';
import {Input} from './index';

const meta: Meta<typeof Input> = {
    title: 'Modules/Input',
    component: Input,
} satisfies Meta<typeof Input>;
export default meta;

type Template = StoryObj<typeof meta>;
export const Default : Template = {
    args : {
        label : 'Title',
        value : '입력하세요',
        onChange : () => {},
    }
}