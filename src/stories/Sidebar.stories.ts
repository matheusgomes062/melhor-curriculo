import type { Meta, StoryObj } from '@storybook/react';
import "../app/globals.css";

import { Sidebar } from '../components/Sidebar';

const meta = {
    title: 'Sidebar',
    component: Sidebar,
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};