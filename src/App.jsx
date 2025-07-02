import { Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import CaseStudy from './components/CaseStudy.jsx';
import './tokens.css';
import './app.css';
import './components.css';



function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/case-study/:id" element={<CaseStudy />} />
    </Routes>
  );
}

export default App;