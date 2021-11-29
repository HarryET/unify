import type { Project } from '@unify/types';
import React, { useState } from 'react';
import { SidebarProject } from './SidebarProject';
import { CreateProjectModal } from './CreateProjectModal';

export type SidebarProps = {
    projects: Project[];
};

export const Sidebar: React.FC<SidebarProps> = ({ projects }) => {
    const [modalState, setModalState] = useState<boolean>(false);

    const handleModelOpen = (): void => {
        setModalState((prevState) => !prevState);
    };

    return (
        <div className="flex flex-col h-full p-2 bg-gray-100 rounded-tr-xl rounded-br-xl">
            {projects.map((project) => (
                <SidebarProject type={'project'} key={project.id} {...project} />
            ))}
            <SidebarProject type={'new_project'} key={'-1'} onClickProject={handleModelOpen} />
            <CreateProjectModal modalOpen={modalState} handleModelOpen={handleModelOpen} />
        </div>
    );
};
