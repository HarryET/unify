import React from 'react';

import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { NotFoundPage } from './pages/NotFound';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
