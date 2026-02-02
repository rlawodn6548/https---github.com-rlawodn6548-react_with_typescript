import {Meta, StoryObj} from '@storybook/react';
import {Label} from './index';

const meta : Meta<typeof Label> = {
  title: 'Atoms/Label',
  component: Label,
} satisfies Meta<typeof Label>;
export default meta;

type Template = StoryObj<typeof meta>;
export const Default : Template = {
}