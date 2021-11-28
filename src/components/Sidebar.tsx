import type { Project } from '@unify/types';
import React from 'react';
import { SidebarProject } from './SidebarProject';

export type SidebarProps = {
    projects: Project[];
};

export const Sidebar: React.FC<SidebarProps> = ({ projects }) => {
    return (
        <div className="flex flex-col h-full p-2 bg-gray-100 rounded-tr-xl rounded-br-xl">
            {projects.map((project) => (
                <SidebarProject type={'project'} key={project.id} {...project} />
            ))}
            <SidebarProject type={'new_project'} key={'-1'} />
        </div>
    );
};
