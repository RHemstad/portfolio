import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ExternalLink, 
  Mail, 
  Linkedin, 
  Twitter, 
  Dribbble 
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
      {/* ***************************** */}
      {/* ********* HERO ********** */}
      {/* ***************************** */}

      <section className="hero">
  <FallingGlyphsBackground /> {/* <- We'll build this next */}

  <div className="hero-content">
    <h1>
      Rebecca L.<br />
      <span className="text-accent">Hemstad</span>
    </h1>

    <p>
      Currently leading design system architecture and AI/ML UI design, I specialize in creating cohesive visual languages that make artificial intelligence accessible and empowering across complex product ecosystems.
    </p>

    <div className="flex">
      <a href="#work" className="button-primary">View Selected Work</a>
      <a href="#contact" className="button-secondary">Get in Touch</a>
    </div>
  </div>
</section>


      {/* ***************************** */}
      {/* ********* DESIGN SYSTEM ********** */}
      {/* ***************************** */}
      <motion.section
  className="design-system"
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
        className="card"
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



      {/* ***************************** */}
      {/* ********* WRITING & SPEAKING ********** */}
      {/* ***************************** */}
      <section className="writing">
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
  >
    Writing & Speaking
  </motion.h2>

  <p className="writing-intro">
    Insights on design-system architecture, AI/UI, and inclusive design—
    shared through articles, talks, and workshops.
  </p>

  <div className="writing-strip">
    {displayedWriting.map((item) => (
      <article key={item.id} className="writing-card">
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
      </article>
    ))}
  </div>

  {/* Toggle button stays the same, or hide it if you keep them all inline */}
</section>




      {/* ***************************** */}
      {/* ********* FOOTER ********** */}
      {/* ***************************** */}
      <footer id="contact">

          <div className="flex">
            <div>
              <h2>Let's Create<br /><span className="text-primary">Something Great</span></h2>
              <p>I'm always interested in discussing new opportunities, design challenges, and collaborative projects that push the boundaries of what's possible.</p>

              <div className="mb-lg"><a href="mailto:rebecca@hemstad.design" className="link"><Mail /></a></div>
            </div>

            <div>
              <div className="mb-lg">
                <h3>Connect</h3>
                <div className="social">
                  <a href="#" className="rounded-full">
                    <Linkedin />
                  </a>
                  <a href="#" className="rounded-full">
                    <Twitter />
                  </a>
                  <a href="#" className="rounded-full">
                    <Dribbble />
                  </a>
                </div>
              </div>
              <div className="copyright">
                <p>
                  © 2025 Rebecca L. Hemstad. All rights reserved.
                </p>
              </div>
            </div>
          </div>

      </footer>
    </main>
  );
}

export default Home;