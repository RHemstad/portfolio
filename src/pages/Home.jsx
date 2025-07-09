import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ExternalLink, 
  Mail, 
  Linkedin
} from 'lucide-react';
import { projects } from '../data/projects';
import { writing } from '../data/writing';
import FallingGlyphsBackground from './FallingGlyphsBackground';
import { motion } from 'framer-motion';

function Home() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllWriting, setShowAllWriting] = useState(false);

  const displayedProjects = showAllProjects ? projects : projects.slice(0, 3);
  const displayedWriting = showAllWriting ? writing : writing.slice(0, 3);

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

  const writingSectionVariants = {
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

  const writingCardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const getTypeLabel = (type) => {
    const labels = {
      article: 'Article',
      keynote: 'Keynote',
      workshop: 'Workshop',
      presentation: 'Presentation'
    };
    return labels[type] || type;
  };

  return (
    <main>
      {/* HEADER */}
      <header>
        <FallingGlyphsBackground />
        <h1>Rebecca L. Hemstad</h1>
        <p>Currently leading design system architecture and AI/ML UI design, I specialize in creating cohesive visual languages that make artificial intelligence accessible and empowering across complex product ecosystems.</p>
      </header>

      {/* DESIGN SYSTEM */}
      <motion.section
        className="design"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <motion.h2 variants={cardVariants}>Selected Work</motion.h2>
        <div className="cards">
          {displayedProjects.map((project) => (
            <motion.article
              key={project.id}
              className="design-card"
              variants={cardVariants}
            >
              <h3>{project.title}</h3>
              <p className="text">{project.description}</p>
              <Link to={project.link} className="link">
                View Case Study <ExternalLink className="link__icon" />
              </Link>
            </motion.article>
          ))}
        </div>
      </motion.section>

      {/* WRITING & SPEAKING */}
      <motion.section
        className="writing"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={writingSectionVariants}
      >
        <motion.div variants={writingCardVariants} className="writing-header">
          <h2>Writing &amp; Speaking</h2>
          <p>
            Insights on design-system architecture, AI/ML UI design, and scalable
            design languages—shared through articles and talks.
          </p>
        </motion.div>

        <div className="writing-strip">
          {displayedWriting.map((item, index) => (
            <motion.article
              key={item.id}
              className="writing-card"
              initial="hidden"
              animate="visible"
              variants={writingCardVariants}
              transition={{ delay: index >= 3 ? (index - 3) * 0.1 : 0 }}
            >
              <header>
                <span className="badge">{getTypeLabel(item.type)}</span>
                <span className="date">{item.date}</span>
              </header>
              <h3 className="title">
                <a href={item.link}>{item.title}</a>
              </h3>
              <p className="meta">
                {item.type === 'article'
                  ? item.publication
                  : `${item.event} • ${item.location}`}
              </p>
              <a href={item.link} className="cta">
                {item.type === 'article' ? 'Read' : 'Details'}
                <ExternalLink size={16} />
              </a>
            </motion.article>
          ))}
        </div>

        {writing.length > 3 && (
          <motion.div 
            className="text-center mt-lg"
            variants={writingCardVariants}
          >
            <button
              onClick={() => setShowAllWriting(!showAllWriting)}
              className="button-secondary"
            >
              {showAllWriting ? 'Show Less' : 'Show More'}
            </button>
          </motion.div>
        )}
      </motion.section>

      {/* FOOTER */}
      <footer>
        <div className="footer-content">
          <div className="footer-section">
            <h3>Let's Connect</h3>
            <p>Interested in design systems, AI/ML interfaces, or scalable design solutions? I'd love to hear from you.</p>
            <div className="footer-links">
              <a href="mailto:rebecca@example.com" className="link">
                <Mail className="link__icon" />
                rebecca@example.com
              </a>
              <a href="https://linkedin.com/in/rebeccahemstad" className="link">
                <Linkedin className="link__icon" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default Home;