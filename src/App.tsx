import React from 'react';

import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { IndexPage } from './pages/Index';
import { NotFoundPage } from './pages/NotFound';
import { ProjectNotSelectedPage } from './pages/projects/NoSelected';
import { ProjectPage } from './pages/projects/[id]';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<IndexPage />}>
                    <Route path="/:id" element={<ProjectPage />} />
                    <Route path="/" element={<ProjectNotSelectedPage />} />
                </Route>
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
