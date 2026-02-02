import {Meta, StoryObj} from '@storybook/react';
import {DialogTitle} from './index';

const meta : Meta<typeof DialogTitle> = {
  title: 'Atoms/DialogTitle',
  component: DialogTitle,
} satisfies Meta<typeof DialogTitle>;
export default meta;

type Template = StoryObj<typeof meta>;
export const Default : Template = {
}