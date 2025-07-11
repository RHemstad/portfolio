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

<div className="logo">
  <img src="/images/logo.svg" alt="Rebecca Hemstad Logo" />
</div>
<div>
        <h1>Rebecca L. Hemstad</h1>
        <p>Currently leading design system architecture and AI/ML UI design, I specialize in creating cohesive visual languages that make artificial intelligence accessible and empowering across complex product ecosystems.</p>

        </div>
      </header>

      {/* DESIGN  */}
      <motion.section
        className="design"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <motion.h2 variants={cardVariants}>Design</motion.h2>
        <div className="cards">
          {displayedProjects.map((project) => (
            <motion.article
              key={project.id}
              className="design-card"
              variants={cardVariants}
            >
              <img className="design-card-image" src={project.image} alt={project.title} />
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
          <div className="writing-card-meta">
                <span className="badge">{getTypeLabel(item.type)}</span>
                <span className="date">{item.date}</span>
          </div> 

              <h3><a href={item.link}>{item.title}</a></h3>

              {/*  <p>
                {item.type === 'article'
                  ? item.publication
                  : `${item.event} • ${item.location}`}
              </p>
              */}

              <p>{item.description}</p>

              <a href={item.link} className="cta">
                {item.type === 'article' ? 'Read' : 'Details'}
                <ExternalLink size={16} />
              </a>
            </motion.article>
          ))}
        </div>

        {writing.length > 3 && (
          <motion.div 
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

         
          <section className="footer-main">


            <div className="footer-content-left">
              <h3>Get in touch</h3>
              <p>Interested in design systems, AI/ML interfaces, or scalable design solutions? I'd love to hear from you.</p>
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
    </main>
  );
}

export default Home;