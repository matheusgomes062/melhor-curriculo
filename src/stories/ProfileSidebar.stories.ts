import type { Meta, StoryObj } from '@storybook/react';
import '../app/globals.css';

import { ProfileSidebar } from '../components/ProfileSidebar';

const meta = {
  title: 'ProfileSidebar',
  component: ProfileSidebar,
} satisfies Meta<typeof ProfileSidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
