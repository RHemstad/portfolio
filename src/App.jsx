import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import CaseStudy from './pages/CaseStudy.jsx';
import './tokens.css';
import './app.css';
import './pages.css';

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/case-study/:id" element={<CaseStudy />} />
    </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;