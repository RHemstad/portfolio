import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import SiteNav from './SiteNav';

/* Shared header for the homepage, case-study pages, the teaching page,
   and the selected-work page. `variant` controls the layouts (large
   non-linked title on the homepage, a compact linked-back title on
   case studies, a breadcrumb + "Download CV" treatment on the teaching
   page, and a breadcrumb-only masthead on the selected-work page) so
   all pages keep their own appearance while sharing one component. */
function SiteHeader({ variant = 'home' }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  const navAndToggle = (
    <>
      <nav className={`mobile-nav ${isMenuOpen ? 'nav-open' : ''}`}>
        <SiteNav onNavigate={closeMenu} />
      </nav>

      <button
        className="hamburger-menu"
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </>
  );

  if (variant === 'case-study') {
    return (
      <header className="case-study-header">
        <Link to="/" className="case-study-header-link">
          <div className="case-study-header-title">
            <div className="logo">
              <img src="/images/logo.svg" alt="Rebecca Hemstad Logo" />
            </div>
            <h1>Rebecca L. Hemstad</h1>
          </div>
        </Link>

        {navAndToggle}
      </header>
    );
  }

  if (variant === 'teaching') {
    // Same shared global nav + hamburger/overlay as the homepage
    // (navAndToggle above), in addition to the page's own in-page
    // section index (TeachingToc) rendered separately, further down
    // the page — the two are deliberately not merged.
    return (
      <header className="teaching-header">
        <div className="teaching-header-row">
          <Link to="/" className="teaching-header-brand">
            <div className="logo">
              <img src="/images/logo.svg" alt="Rebecca Hemstad Logo" />
            </div>
            <span className="teaching-header-name">Rebecca L. Hemstad</span>
          </Link>

          <div className="teaching-header-actions">
            {navAndToggle}

            {/* Inert until a real CV file exists, same treatment as
                other not-yet-real links on the site (e.g. the
                homepage's "coming soon" links). */}
            <a href="#" className="teaching-cv-link" onClick={(e) => e.preventDefault()}>
              Download CV →
            </a>
          </div>
        </div>

        <span className="teaching-breadcrumb">
          <Link to="/" className="teaching-breadcrumb-link">Home</Link> / Teaching
        </span>
      </header>
    );
  }

  if (variant === 'selected-work') {
    // No "Download CV" here (not relevant to this page), so brand and
    // nav/hamburger can share one row at every breakpoint, same as the
    // homepage's own header.
    return (
      <header className="work-page-header">
        <div className="work-page-header-row">
          <Link to="/" className="work-page-header-brand">
            <div className="logo">
              <img src="/images/logo.svg" alt="Rebecca Hemstad Logo" />
            </div>
            <span className="work-page-header-name">Rebecca L. Hemstad</span>
          </Link>

          {navAndToggle}
        </div>

        <span className="work-page-breadcrumb">
          <Link to="/" className="work-page-breadcrumb-link">Home</Link> / Selected Work
        </span>
      </header>
    );
  }

  return (
    <header className="home-header">
      <div className="home-header-row">
        <div className="home-header-brand">
          <div className="logo">
            <img src="/images/logo.svg" alt="Rebecca Hemstad Logo" />
          </div>
          <h1 className="home-header-name">Rebecca L. Hemstad</h1>
        </div>

        {navAndToggle}
      </div>
    </header>
  );
}

export default SiteHeader;
