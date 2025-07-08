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

function Home() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllWriting, setShowAllWriting] = useState(false);

  const displayedProjects = showAllProjects ? projects : projects.slice(0, 3);
  const displayedWriting = showAllWriting ? writing : writing.slice(0, 3);

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
      <section className="design-system">

            <div>
              <h2>Design System<br /><span className="text-accent">Architecture</span></h2>
              <div className="text--medium">
                <p>My approach to design system architecture is rooted in systematic thinking and deep understanding of how design tokens, components, and patterns work together to create scalable, maintainable design languages.</p>

                <p>I've established token naming conventions, component architecture, and governance frameworks that enable teams to build consistent, accessible interfaces across complex product ecosystems while maintaining design integrity at scale.</p>
              </div>
            </div>


            <div>
            {displayedProjects.map((project) => (
              <article key={project.id} className="card">
                  <h3>{project.title}</h3>
                  <p className="text">{project.description}</p>
                  <Link to={project.link} className="link">View Case Study <ExternalLink className="link__icon" /></Link>
              </article>
            ))}
            </div>

      </section>



      {/* ***************************** */}
      {/* ********* WRITING & SPEAKING ********** */}
      {/* ***************************** */}
      <section className="writing">
     
          <div>
            <h2>Writing & Speaking</h2>
            <p>
              Sharing insights on design system architecture, AI/ML interface design, and building scalable design languages through articles and academic presentations.
            </p>
          </div>

          <div>
            {displayedWriting.map((item) => (
              <article key={item.id} className="card">
                  <div className="flex flex--center">
                    <span className="badge">{getTypeLabel(item.type)}</span>
                    <span className="text--xs">{item.date}</span>
                  </div>
             
                
                <h3><a href={item.link} className="link">{item.title}</a></h3>
                
                <p>
                  {item.type === 'article' ? (
                    <span>{item.publication}</span>
                  ) : (
                    <span>{item.event} • {item.location}</span>
                  )}
                </p>
                
                <p className="text">
                  {item.description}
                </p>
                
                <a href={item.link} className="link">
                  {item.type === 'article' ? 'Read Article' : 'Event Details'} 
                  <ExternalLink className="link__icon" />
                </a>
              </article>
            ))}
            
            <div className="text-center mt-lg">
              {!showAllWriting ? (
                <button 
                  onClick={() => setShowAllWriting(true)}
                  className="button-secondary button"
                >
                  Show More Articles & Talks
                </button>
              ) : (
                <button 
                  onClick={() => setShowAllWriting(false)}
                  className="button-secondary button"
                >
                  Show Less
                </button>
              )}
            </div>
            
          </div>

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