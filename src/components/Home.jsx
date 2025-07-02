import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ExternalLink, 
  Mail, 
  Linkedin, 
  Twitter, 
  Dribbble 
} from 'lucide-react';

// Sample data
const projects = [
  {
    id: 1,
    title: "AI-Powered Design System",
    client: "TechCorp",
    category: "Design System",
    year: "2024",
    description: "Led the architecture and implementation of a comprehensive design system that scales across 50+ products, featuring AI-assisted component generation and automated accessibility testing.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    link: "/case-study/ai-design-system"
  },
  {
    id: 2,
    title: "Machine Learning Interface",
    client: "DataFlow Inc",
    category: "AI/ML UI",
    year: "2024",
    description: "Designed intuitive interfaces for complex machine learning workflows, making advanced AI capabilities accessible to non-technical users through thoughtful UX patterns.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
    link: "/case-study/ml-interface"
  },
  {
    id: 3,
    title: "Design Token Architecture",
    client: "DesignCo",
    category: "Design System",
    year: "2023",
    description: "Established semantic token naming conventions and governance frameworks that enable consistent design across distributed teams and multiple platforms.",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=300&fit=crop",
    link: "/case-study/token-architecture"
  },
  {
    id: 4,
    title: "AI Assistant Dashboard",
    client: "ProductAI",
    category: "AI/ML UI",
    year: "2023",
    description: "Created user-friendly dashboards for AI-powered product recommendations, focusing on transparency and user control over algorithmic decisions.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop",
    link: "/case-study/ai-dashboard"
  },
  {
    id: 5,
    title: "Design System Governance",
    client: "Enterprise Corp",
    category: "Design System",
    year: "2023",
    description: "Developed processes and frameworks for design system adoption across 200+ designers and developers, ensuring quality and consistency at scale.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    link: "/case-study/system-governance"
  },
  {
    id: 6,
    title: "Predictive Analytics UI",
    client: "Analytics Pro",
    category: "AI/ML UI",
    year: "2022",
    description: "Designed interfaces for predictive analytics tools that help users understand and trust AI-generated insights through clear visualizations.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    link: "/case-study/predictive-analytics"
  }
];

const writing = [
  {
    id: 1,
    title: "Designing for AI: Principles for Human-Centered Machine Learning Interfaces",
    type: "article",
    publication: "Design Systems Journal",
    date: "December 2024",
    description: "Exploring the unique challenges and opportunities in designing interfaces for AI-powered features, with practical guidelines for creating intuitive ML experiences.",
    link: "#"
  },
  {
    id: 2,
    title: "Token Architecture: Building Scalable Design Systems",
    type: "keynote",
    event: "Design Systems Conference",
    location: "San Francisco",
    date: "November 2024",
    description: "A deep dive into semantic token naming conventions and how they enable design systems to scale across complex product ecosystems.",
    link: "#"
  },
  {
    id: 3,
    title: "The Future of Design System Governance",
    type: "workshop",
    event: "UX Design Summit",
    location: "Austin",
    date: "October 2024",
    description: "Hands-on workshop covering strategies for maintaining design system quality and adoption across distributed teams and multiple products.",
    link: "#"
  },
  {
    id: 4,
    title: "AI/ML Interface Patterns: A Comprehensive Guide",
    type: "article",
    publication: "UX Collective",
    date: "September 2024",
    description: "A comprehensive overview of interface patterns specifically designed for machine learning features, with real-world examples and best practices.",
    link: "#"
  },
  {
    id: 5,
    title: "Designing Trustworthy AI Experiences",
    type: "presentation",
    event: "AI/UX Symposium",
    location: "Seattle",
    date: "August 2024",
    description: "How to design AI interfaces that build user trust through transparency, control, and clear communication of algorithmic capabilities.",
    link: "#"
  },
  {
    id: 6,
    title: "Scaling Design Systems: Lessons from Enterprise Implementation",
    type: "article",
    publication: "Design Leadership Forum",
    date: "July 2024",
    description: "Case study of implementing design systems at enterprise scale, covering challenges, solutions, and measurable outcomes across large organizations.",
    link: "#"
  }
];

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
    <div>
      {/* Hero Section */}
      <section className="section hero">
        <div className="container container--sm">
         
          <h1>Rebecca L.<br /><span className="text-accent">Hemstad</span></h1>
          <h2>Principal Visual Designer</h2>

          <p>I craft design systems and user experiences for artificial intelligence products, 
            bridging the gap between complex AI capabilities and intuitive human interfaces 
            with over a decade of expertise in enterprise-scale digital products.</p>

          <p>Currently leading design system architecture and AI/ML UI design, I specialize in 
            creating cohesive visual languages that make artificial intelligence accessible 
            and empowering across complex product ecosystems.</p>

          <div className="flex">
            <a href="#work" className="button-primary">View Selected Work</a>
            <a href="#contact" className="button-secondary">Get in Touch</a>
          </div>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section id="work" className="section section--alt work">

        <div className="container">

          <div className="text-center mb-lg">
            <h2>Selected Work</h2>
            <p>A selection of projects focused on AI/ML interface design, design system architecture, and scalable design patterns.</p>
          </div>

          <div className="grid grid--center">
            {displayedProjects.map((project) => (
              <article key={project.id} className="card work-card">
                <img src={project.image} alt={project.title} />
                <div>
                  <div className="flex flex--between flex--center">
                    <span className={`badge`}>{project.category} </span>
                    <span className="text--xs">{project.year}</span>
                  </div>

                  <h3>{project.title}</h3>
                  <p className="text--small">{project.client}</p>
                  <p className="text">{project.description}</p>
                  <Link to={project.link} className="link">View Case Study <ExternalLink className="link__icon" /></Link>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-lg">
            {!showAllProjects ? (
              <button 
                onClick={() => setShowAllProjects(true)}
                className="button-secondary button"
              >
                Show More Projects
              </button>
            ) : (
              <button 
                onClick={() => setShowAllProjects(false)}
                className="button-secondary button"
              >
                Show Less
              </button>
            )}
          </div>
        </div>
      </section>



      {/* Writing & Speaking Section */}
      <section className="section writing">
        <div className="container container--lg">
          <div className="text-center mb-lg">
            <h2>Writing & Speaking</h2>
            <p>
              Sharing insights on design system architecture, AI/ML interface design, and 
              building scalable design languages through articles and academic presentations.
            </p>
          </div>
          <div>
            {displayedWriting.map((item) => (
              <article key={item.id} className="card">
                <div className="flex flex--between flex--start">
                  <div className="flex flex--center">
                    <span className="badge">{getTypeLabel(item.type)}</span>
                    <span className="text--xs">{item.date}</span>
                  </div>
                </div>
                
                <h3><a href={item.link} className="link">{item.title}</a></h3>
                
                <p className="text--base">
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
            
            <div className="writing-inquiries">
              <a href="#" className="link">
                Speaking Inquiries <Mail className="link__icon" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Design System Architecture Section */}
      <section className="section section--alt design-system">
        <div className="container">
          <div className="flex">
            <div>
              <h2>Design System<br /><span className="text-accent">Architecture</span></h2>
              <div className="text--medium">
                <p>My approach to design system architecture is rooted in systematic thinking and 
                  deep understanding of how design tokens, components, and patterns work together 
                  to create scalable, maintainable design languages.</p>

                <p>I've established token naming conventions, component architecture, and governance 
                  frameworks that enable teams to build consistent, accessible interfaces across 
                  complex product ecosystems while maintaining design integrity at scale.</p>
              </div>
            </div>
            <div>
              <div className="card">
                <h3>Token Architecture</h3>
                <p className="text">Designing semantic token naming systems that scale across platforms and maintain consistency while supporting complex design requirements.</p>
              </div>
              <div className="card">
                <h3>AI/ML Interface Design</h3>
                <p className="text">Creating intuitive interfaces for artificial intelligence features that make complex capabilities accessible and empowering for users.</p>
              </div>
              <div className="card">
                <h3>System Governance</h3>
                <p className="text">Establishing processes and frameworks that ensure design system adoption and maintain quality across distributed teams and products.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Footer */}
      <footer id="contact" className="section section--dark contact">
        <div className="container">
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
        </div>
      </footer>
    </div>
  );
}

export default Home;