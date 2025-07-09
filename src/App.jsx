import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import CaseStudy from './pages/CaseStudy.jsx';
import './tokens.css';
import './app.css';
import './pages.css';
import backImage from './images/back.png';
import colophonImage from './images/colophon.png';


function App() {
  return (
    <div style={{ 
      '--bg-image': `url(${backImage})`,
      '--colophon-image': `url(${colophonImage})`,
      backgroundImage: `url(${backImage})`,
      backgroundRepeat: 'repeat-x',
      backgroundPosition: 'center top',
      backgroundAttachment: 'scroll',
      minHeight: '100vh'
    }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-study/:id" element={<CaseStudy />} />
      </Routes>
    </div>
  );
}

export default App;