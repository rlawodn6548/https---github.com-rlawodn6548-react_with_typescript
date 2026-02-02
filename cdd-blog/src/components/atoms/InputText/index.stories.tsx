import {Meta, StoryObj} from '@storybook/react';
import {InputText} from './index';

const meta : Meta<typeof InputText> = {
  title: 'Atoms/InputText',
  component: InputText,
} satisfies Meta<typeof InputText>;
export default meta;

type Template = StoryObj<typeof meta>;
export const Default : Template = {
  args: {
    value: '',
    onChange: (value) => console.log(value),
  }
}