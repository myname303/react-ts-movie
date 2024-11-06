import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './routes/HomePage';
import ComingSoonPage from './routes/ComingSoonPage';
import NowPlayingPage from './routes/NowPlayingPage';
import MovieDetail from './components/Modal'; // Modal component to display movie details

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/coming-soon" element={<ComingSoonPage />} />
                <Route path="/now-playing" element={<NowPlayingPage />} />
                <Route path="/movie/:id"  />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
