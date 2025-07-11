import { useParams, Link } from 'react-router-dom';
import { ExternalLink, Calendar, Users, Target, Award, ChevronRight, Menu, X } from 'lucide-react';
import { caseStudyData } from '../data/caseStudies';
import { useState } from 'react';

function CaseStudy() {
  const { id } = useParams();
  const caseStudy = caseStudyData[id];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
      <div className="case-study-header">
        <img src="/images/logo.svg" alt="Rebecca Hemstad Logo" />
        <h1>Rebecca L. Hemstad</h1>
      </div>
    </Link>

    <nav className={`case-study-nav ${isMenuOpen ? 'nav-open' : ''}`}>
      <Link to="/#about" className="nav-link">About</Link>
      <Link to="/#design" className="nav-link">Design</Link>
      <Link to="/#writing" className="nav-link">Writing</Link>
      <Link to="/#speaking" className="nav-link">Speaking</Link>
      <Link to="/#contact" className="nav-link">Contact</Link>
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
{/* ===== HEADER ===== */}
{/* ************************** */}

<main>

{/* ************************** */}
{/* ===== TITLE & OVERVIEW ===== */}
{/* ************************** */}

<section>
<div>
<h2>{caseStudy.title}</h2>
<p>{caseStudy.overview} Note you might need a table of contents at some point</p>
</div>
</section>

{/* ************************** */}
{/* ===== DETAILS ===== */}
{/* ************************** */}

<section className="case-study-details">

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

      <section>
        <Target style={{ width: 'var(--icon-lg)', height: 'var(--icon-lg)', color: 'var(--color-primary)', marginBottom: 'var(--space-4)' }} />
        <h2>The Challenge</h2>
        <p className="text--large">{caseStudy.challenge}</p>



      <div>
      <Award style={{ width: 'var(--icon-lg)', height: 'var(--icon-lg)', color: 'var(--color-primary)', marginBottom: 'var(--space-4)' }} />
      
      <h2>The Solution</h2>
      <p className="text--large">{caseStudy.solution}</p>
      
      </div>
            
      </section>

      {/* Process Section */}
      <section className="section">
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
                  background: 'var(--color-primary)', 
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

      {/* Gallery Section */}
      <section className="section section--alt">
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

      </main>

    {/* ************************** */}
    {/* ===== FOOTER ===== */}
    {/* ************************** */}

      {/* Next Steps Section */}
      <footer>
            <h2>Ready to Work Together?</h2>
            <p className="text--large" style={{ color: '#e5e5e5' }}>I'm always interested in discussing new opportunities and collaborative projects that push the boundaries of what's possible.</p>
            <div className="flex" style={{ justifyContent: 'center', marginTop: 'var(--space-8)' }}>
              <a href="mailto:rebecca@hemstad.design" className="button-primary">Get in Touch</a>
              <Link to="/" className="button-secondary">View More Work</Link>
            </div>

       </footer>



    </>

  );
}

export default CaseStudy;