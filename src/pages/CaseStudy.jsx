import { useParams, Link } from 'react-router-dom';
import { Target } from 'lucide-react';
import { caseStudyData } from '../data/caseStudies';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import BackToTop from '../components/BackToTop';

function CaseStudy() {
  const { id } = useParams();
  const caseStudy = caseStudyData[id];

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
      <>
        <SiteHeader variant="case-study" />
        <main className="case-study-main">
          <div className="section text-center">
            <h1>Case Study Not Found</h1>
            <Link to="/" className="link-generic">
              Return to Home
            </Link>
          </div>
        </main>
        <SiteFooter />
      </>
    );
  }

  return (
    <>

  <SiteHeader variant="case-study" />

{/* ************************** */}
{/* ===== CONTENT ===== */}
{/* ************************** */}

<main className="case-study-main">

<div className="left-column">

{/* ************************** */}
{/* ===== TITLE & OVERVIEW ===== */}
{/* ************************** */}

<section id="overview" className="case-study-title-overview-section">
<h2>{caseStudy.title}</h2>
<p>{caseStudy.overview}</p>
</section>


{/* ************************** */}
{/* ===== DETAILS ===== */}
{/* ************************** */}

<section id="details" className="case-study-details">

<img
  src={caseStudy.heroImage}
  alt={caseStudy.title}
  className="case-study-details-image"
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
        <Target style={{ width: 'var(--icon-md)', height: 'var(--icon-md)', color: 'var(--color-accent-primary)', marginBottom: 'var(--space-4)' }} />
        <h2>The Challenge</h2>
        <p className="text--large">{caseStudy.challenge}</p>

      <h2>The Solution</h2>
      <p className="text--large">{caseStudy.solution}</p>

      </section>

  {/* ************************** */}
  {/* ===== PROCESS ===== */}
  {/* ************************** */}


      <section id="process">
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

    <SiteFooter />

    <BackToTop />

    </>

  );
}

export default CaseStudy;
