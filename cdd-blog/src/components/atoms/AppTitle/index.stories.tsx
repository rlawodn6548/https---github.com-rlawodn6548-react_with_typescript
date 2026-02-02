import {Meta, StoryObj} from '@storybook/react';
import {AppTitle} from './index';

const meta : Meta<typeof AppTitle> = {
  title: 'Atoms/AppTitle',
  component: AppTitle,
} satisfies Meta<typeof AppTitle>;
export default meta;

type Template = StoryObj<typeof meta>;
export const Default : Template = {
}