import React, { useState } from 'react';
import { Outlet } from 'react-router';
import { Sidebar } from '../components/Sidebar';
import { globalSettings } from '../stores/Settings.stores';

export const IndexPage = () => {
    const [settings_state] = useState(globalSettings);
    const settings = settings_state.get();

    return (
        <div className="flex flex-row w-full h-full">
            <Sidebar projects={settings.projects} />
            <Outlet />
        </div>
    );
};
