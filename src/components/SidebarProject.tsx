import type { Project } from '@unify/types';
import React from 'react';
import { PlusIcon } from '@heroicons/react/solid';

export const SidebarProject: React.FC<{
    type: 'project' | 'new_project';
    project?: Project;
    onClickProject?: () => void;
}> = ({ type, project, onClickProject }) => {
    return (
        <div
            className="p-2 bg-gray-200 text-gray-500 rounded-lg transition-all hover:rounded-full hover:bg-gray-300 hover:text-gray-600"
            onClick={onClickProject}
        >
            {type == 'new_project' || project == null ? (
                <PlusIcon className="w-8 h-8" />
            ) : (
                <p>{project.name.charAt(0).toUpperCase()}</p>
            )}
        </div>
    );
};
