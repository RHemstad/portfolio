import { useParams, Link } from 'react-router-dom';
import { ExternalLink, Calendar, Users, Target, Award, ChevronRight, Menu, X, Mail, Linkedin } from 'lucide-react';
import { caseStudyData } from '../data/caseStudies';
import { useState } from 'react';

function CaseStudy() {
  const { id } = useParams();
  const caseStudy = caseStudyData[id];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Navigation items for the case study sections
  const caseStudyNavItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'details', label: 'Details' },
    { id: 'challenge', label: 'Challenge & Solution' },
    { id: 'process', label: 'Process' },
    { id: 'gallery', label: 'Gallery' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!caseStudy) {
    return (
      <div className="section">
        <div className="container text-center">
          <h1>Case Study Not Found</h1>
          <Link to="/" className="link">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
  
  {/* ************************** */}
  {/* ===== HEADER ===== */}
  {/* ************************** */}

  <header className="case-study-header">

    <Link to="/" className="case-study-header-link">
      <div className="case-study-header-title">
        <img src="/images/logo.svg" alt="Rebecca Hemstad Logo" />
        <h1>Rebecca L. Hemstad</h1>
      </div>
    </Link>

    <nav className={`mobile-nav ${isMenuOpen ? 'nav-open' : ''}`}>
      <ul>
        <li><Link to="/#about" className="nav-link">About</Link></li>
        <li><Link to="/#design" className="nav-link">Design</Link></li>
        <li><Link to="/#writing" className="nav-link">Writing</Link></li>
        <li><Link to="/#speaking" className="nav-link">Speaking</Link></li>
        <li><Link to="/#contact" className="nav-link">Contact</Link></li>
      </ul>
    </nav>

    <button 
      className="hamburger-menu" 
      onClick={toggleMenu}
      aria-label="Toggle navigation menu"
    >
      {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
    </button>

  </header>


{/* ************************** */}
{/* ===== CONTENT ===== */}
{/* ************************** */}

<main className="case-study-main">

<div className="left-column">

{/* ************************** */}
{/* ===== TITLE & OVERVIEW ===== */}
{/* ************************** */}

<section id="overview" className="case-study-title-overview-section">
<div>
<h2>{caseStudy.title}</h2>
<p>{caseStudy.overview}</p>
</div>
</section>


{/* ************************** */}
{/* ===== DETAILS ===== */}
{/* ************************** */}

<section id="details" className="case-study-details">

<img 
  src={caseStudy.heroImage}
  alt={caseStudy.title}
  />

<div>
<h3>Client:</h3>
<p>{caseStudy.client}</p>
</div>

<div>
 <h3>Duration</h3>
<p>{caseStudy.duration}</p>
</div>

<div>
<h3>Team</h3>
 <p>{caseStudy.team}</p>
</div>

<div>
 <h3>Role</h3>
 <p>{caseStudy.role}</p>
</div>



</section>

{/* ************************** */}
{/* ===== CHALLENGE & SOLUTION ===== */}
{/* ************************** */}

      <section id="challenge">
        <Target style={{ width: 'var(--icon-lg)', height: 'var(--icon-lg)', color: 'var(--color-accent-primary)', marginBottom: 'var(--space-4)' }} />
        <h2>The Challenge</h2>
        <p className="text--large">{caseStudy.challenge}</p>
 
      <h2>The Solution</h2>
      <p className="text--large">{caseStudy.solution}</p>
       
      </section>

  {/* ************************** */}
  {/* ===== PROCESS ===== */}
  {/* ************************** */}

  
      <section id="process" className="section">
        <div className="container">
          <div className="text-center mb-lg">
            <h2 className="heading heading--large">Process</h2>
            <p className="text--large">A systematic approach to solving complex design challenges through research, iteration, and collaboration.</p>
          </div>
          <div>
            {caseStudy.process.map((step, index) => (
              <div key={index} className="flex" style={{ marginBottom: 'var(--space-8)' }}>
                <div style={{ 
                  width: '60px', 
                  height: '60px', 
                  borderRadius: '50%', 
                  background: 'var(--color-accent-primary)', 
                  color: '#fff', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  fontSize: 'var(--font-size-lg)',
                  fontWeight: 'var(--font-weight-bold)',
                  marginRight: 'var(--space-6)',
                  flexShrink: 0
                }}>
                  {index + 1}
                </div>
                <div>
                  <h3>{step.phase}</h3>
                  <p className="text">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


  {/* ************************** */}
  {/* ===== GALLERY ===== */}
  {/* ************************** */}

      <section id="gallery" className="section section--alt">
        <div className="container">
          <div className="text-center mb-lg">
            <h2>Gallery</h2>
            <p className="text--large">Visual examples of the design work and key interface elements.</p>
          </div>
          <div className="grid">
            {caseStudy.images.map((image, index) => (
              <div key={index}>
                <img 
                  src={image}
                  alt={`${caseStudy.title} - Image ${index + 1}`}
                  style={{ 
                    width: '100%', 
                    height: 'auto', 
                    borderRadius: 'var(--radius-md)',
                    boxShadow: '0 4px 24px rgba(100,116,139,0.16)'
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      </div>

  {/* ************************** */}
  {/* ===== TOC ===== */}
  {/* ************************** */}


      <div className="right-column">
        <nav className="toc-navigation">
          <h3>Table of Contents</h3>
          <ul className="toc-nav-list">
            {caseStudyNavItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                  className="toc-nav-link"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>



      </main>

    {/* ************************** */}
    {/* ===== FOOTER ===== */}
    {/* ************************** */}

      {/* Next Steps Section */}
      <footer>

      <section className="footer-main">
            <div className="footer-content-left">
              <h3>Let's Connect</h3>
              <p>I’m currently seeking my next UI design role or academic teaching opportunity. If my work resonates with you, drop me a note or ping me on LinkedIn—I'd love to talk.</p>
            </div>

            <div className="footer-content-right">
              <div className="social-links">
                <a href="mailto:rebecca@example.com" className="social-link" aria-label="Email Rebecca">
                  <Mail className="social-icon" />
                </a>
                <a href="https://linkedin.com/in/rebeccahemstad" className="social-link" aria-label="LinkedIn Profile">
                  <Linkedin className="social-icon" />
                </a>
              </div>
            </div>


          </section>

          <section className="footer-bottom">
            <p className="copyright">© 2025 Rebecca L. Hemstad. All rights reserved.</p>
          </section>


       </footer>



    </>

  );
}

export default CaseStudy;