import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ExternalLink,
  Mail,
  Linkedin,
  Menu,
  X,
} from 'lucide-react';
import { projects } from '../data/projects';
import { writing } from '../data/writing';
import FallingGlyphsBackground from '../components/FallingGlyphsBackground';
import BackToTop from '../components/BackToTop';
import FloatingImages from '../components/FloatingImages';
import { motion, AnimatePresence } from 'framer-motion';

/* ────────────────────────────────────────────────
   Re‑usable Show‑More / Show‑Less toggle button
   ──────────────────────────────────────────────── */
function WritingToggle({ isOpen, onToggle }) {
  return (
    <motion.div
      className="button-center"
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
    >
      <motion.button
        type="button"
        aria-expanded={isOpen}
        onClick={onToggle}
        className={`button-primary ${isOpen ? 'open' : ''}`}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.18 }}
      >
        <span className="label">{isOpen ? 'Show Less' : 'Show More'}</span>
        <motion.svg
          className="chevron"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          initial={false}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.18 }}
          aria-hidden="true"
        >
          <path d="M4 6l4 4 4-4" />
        </motion.svg>
      </motion.button>
    </motion.div>
  );
}

/* ────────────────────────────────────────────────
   Main Home component
   ──────────────────────────────────────────────── */
function Home() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllWriting, setShowAllWriting] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const displayedProjects = showAllProjects ? projects : projects.slice(0, 3);
  const displayedWriting = showAllWriting ? writing : writing.slice(0, 3);

  /* ——— Motion variants ——— */
  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        when: 'beforeChildren',
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const writingSectionVariants = sectionVariants; // identical timing
  const writingCardVariants = cardVariants;

  const getTypeLabel = (type) => {
    const labels = {
      article: 'Article',
      keynote: 'Keynote',
      workshop: 'Workshop',
      presentation: 'Presentation',
    };
    return labels[type] || type;
  };

  return (
    <main>
      <FallingGlyphsBackground />

      {/* ************************** */}
      {/* ===== HEADER ===== */}
      {/* ************************** */}

      <header className="home-header">
        <div className="home-header-nav">
          <nav className={`mobile-nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul>
              <li>
                <Link to="/#about" className="nav-link">
                  About
                </Link>
              </li>
              <li>
                <Link to="/#design" className="nav-link">
                  Design
                </Link>
              </li>
              <li>
                <Link to="/#writing" className="nav-link">
                  Writing
                </Link>
              </li>
              <li>
                <Link to="/#speaking" className="nav-link">
                  Speaking
                </Link>
              </li>
              <li>
                <Link to="/#contact" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <button
            className="hamburger-menu"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className="home-header-title">
          <div className="logo">
            <img src="/images/logo.svg" alt="Rebecca Hemstad Logo" />
          </div>
          <div className="home-header-title-text">
            <h1>Rebecca L. Hemstad</h1>
            <p>
              Currently leading design system architecture and AI/ML UI design, I specialize in creating cohesive visual languages that make artificial intelligence accessible and empowering across complex product ecosystems.
            </p>
          </div>
        </div>
      </header>

      {/* ************************** */}
      {/* ===== DESIGN ===== */}
      {/* ************************** */}
      <motion.section
        className="design"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="section-content">
          <motion.h2 variants={cardVariants}>Design</motion.h2>
          <div className="cards">
            {displayedProjects.map((project, index) => (
              <motion.article
                key={project.id}
                className="card"
                initial="hidden"
                animate="visible"
                variants={cardVariants}
                transition={{ delay: index >= 3 ? (index - 3) * 0.1 : 0 }}
              >
                <img
                  className="design-card-image"
                  src={project.image}
                  alt={project.title}
                />
                <h3>{project.title}</h3>
                <p className="text">{project.description}</p>
                <Link to={project.link} className="link-generic">
                  View Case Study <ExternalLink className="link__icon" />
                </Link>
              </motion.article>
            ))}
          </div>

          {/* Show‑More / Show‑Less toggle */}
          {projects.length > 3 && (
            <WritingToggle
              isOpen={showAllProjects}
              onToggle={() => setShowAllProjects((prev) => !prev)}
            />
          )}
        </div>
      </motion.section>

      {/* ************************** */}
      {/* ===== WRITING & SPEAKING ===== */}
      {/* ************************** */}
      <motion.section
        className="writing"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={writingSectionVariants}
      >
       {/*  <FloatingImages />*/}
        <div className="section-content">
          <motion.div variants={writingCardVariants}>
            <h2>Writing &amp; Speaking</h2>
          </motion.div>

          <div className="cards">
            {displayedWriting.map((item, index) => (
              <motion.article
                key={item.id}
                className="card writing-card"
                initial="hidden"
                animate="visible"
                variants={writingCardVariants}
                transition={{ delay: index >= 3 ? (index - 3) * 0.1 : 0 }}
              >
                <a href={item.link} className="card-link">
                  <div className="writing-card-meta">
                    <span className="badge">{getTypeLabel(item.type)}</span>
                    <span className="date">{item.date}</span>
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                  <span className="link-generic">
                    {item.type === 'article' ? 'Read' : 'Details'}
                    <ExternalLink className="link__icon" />
                  </span>
                </a>
              </motion.article>
            ))}
          </div>

          {/* Show‑More / Show‑Less toggle */}
          {writing.length > 3 && (
            <WritingToggle
              isOpen={showAllWriting}
              onToggle={() => setShowAllWriting((prev) => !prev)}
            />
          )}
        </div>
      </motion.section>

      {/* ************************** */}
      {/* ===== FOOTER ===== */}
      {/* ************************** */}
      <footer>
        <section className="footer-main">
          <div className="footer-content-left">
            <h2>Let's connect</h2>
            <p>
              I craft scalable design systems and human-centered AI interfaces,and I’m currently looking for my next role. If that matches what you need, let’s talk.
            </p>
          </div>

          <div className="footer-content-right">
            <div className="social-links">
              <a
                href="mailto:rebecca@example.com"
                className="social-link"
                aria-label="Email Rebecca"
              >
                <Mail className="social-icon" />
              </a>
              <a
                href="https://linkedin.com/in/rebeccahemstad"
                className="social-link"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="social-icon" />
              </a>
            </div>
          </div>
        </section>

        <section className="footer-bottom">
          <p className="copyright">
            © 2025 Rebecca L. Hemstad. All rights reserved.
          </p>
        </section>
      </footer>
      <BackToTop />
    </main>
  );
}

export default Home;