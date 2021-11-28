import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { SidebarProject } from '../components/SidebarProject';

export default {
    title: 'Sidebar',
    component: SidebarProject,
} as ComponentMeta<typeof SidebarProject>;

export const Primary: ComponentStory<typeof SidebarProject> = () => (
    <SidebarProject {...{ id: '0000-0000-0000', name: 'Demo Project' }} />
);
