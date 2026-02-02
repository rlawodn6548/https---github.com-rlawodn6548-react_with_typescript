import {Meta, StoryObj} from '@storybook/react';
import {BlogBody} from './index';

const meta : Meta<typeof BlogBody> = {
  title: 'Atoms/BlogBody',
  component: BlogBody,
} satisfies Meta<typeof BlogBody>;
export default meta;

type Template = StoryObj<typeof meta>;
export const Default : Template = {
  args: {
    body: '이것은 블로그 본문입니다.'
  }
}