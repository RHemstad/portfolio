import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import SiteNav from './SiteNav';

/* Shared header for both the homepage and case-study pages. `variant`
   controls the two existing layouts (large non-linked title on the
   homepage vs. a compact linked-back title on case studies) so both
   pages keep their current appearance while sharing one component. */
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

  return (
    <header className="home-header">
      <div className="home-header-nav">
        {navAndToggle}
      </div>

      <div className="home-header-title">
        <div className="logo">
          <img src="/images/logo.svg" alt="Rebecca Hemstad Logo" />
        </div>
        <div className="home-header-title-text">
          <h1>Rebecca L. Hemstad</h1>
        </div>
      </div>
    </header>
  );
}

export default SiteHeader;
