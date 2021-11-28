import React, { useState } from 'react';
import { globalSettings } from '../../stores/Settings.stores';

export const ProjectNotSelectedPage = () => {
    const [settings_state] = useState(globalSettings);
    const settings = settings_state.get();

    return (
        <div className="bg-gray-50 w-full h-full flex flex-col items-center justify-center text-2xl">
            {settings.projects.length >= 1 ? (
                <p>
                    Please <span className="font-bold">select</span> a project!
                </p>
            ) : (
                <p>
                    Please <span className="font-bold">create</span> a project!
                </p>
            )}
        </div>
    );
};
