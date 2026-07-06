import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import CaseStudy from './pages/CaseStudy.jsx';
import Teaching from './pages/Teaching.jsx';
import SelectedWork from './pages/SelectedWork.jsx';
import ScrollManager from './components/ScrollManager.jsx';
import './tokens.css';
import './app.css';
import './pages.css';

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
    <ScrollManager />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/case-study/:id" element={<CaseStudy />} />
      <Route path="/teaching" element={<Teaching />} />
      <Route path="/selected-work" element={<SelectedWork />} />
    </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;