import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Calendar, Users, Target, Award, ChevronRight } from 'lucide-react';

const caseStudyData = {
  'ai-design-system': {
    title: "AI-Powered Design System",
    category: "Design System",
    client: "TechCorp",
    duration: "18 months",
    team: "8 designers, 12 developers",
    role: "Principal Designer & Design Systems Lead",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop",
    overview: "Led the architecture and implementation of a comprehensive design system that scales across 50+ products, featuring AI-assisted component generation and automated accessibility testing.",
    challenge: "The organization had grown through acquisitions, resulting in fragmented user experiences across their product portfolio. Each product team was working in isolation, creating inconsistent interfaces that confused users and increased development costs.",
    solution: "Developed a unified design system called 'Meridian' that included a component library, design tokens, documentation site, and governance framework. The system was built with scalability in mind, supporting both web and mobile platforms.",
    impact: [
      "65% reduction in design-to-development handoff time",
      "50+ products unified under consistent design language",
      "90% designer adoption rate within 6 months",
      "$2.3M annual savings in development costs"
    ],
    process: [
      {
        phase: "Discovery & Audit",
        description: "Conducted comprehensive audit of existing products, interviewed stakeholders, and identified patterns and inconsistencies across the product ecosystem."
      },
      {
        phase: "Foundation Building",
        description: "Established design tokens, typography scales, color systems, and spacing guidelines that would serve as the foundation for all components."
      },
      {
        phase: "Component Development",
        description: "Created a library of 120+ reusable components with comprehensive documentation, usage guidelines, and code examples."
      },
      {
        phase: "Implementation & Training",
        description: "Rolled out the system across teams with training sessions, office hours, and ongoing support to ensure successful adoption."
      }
    ],
    images: [
      "https://images.unsplash.com/photo-196644/pexels-photo-196644.jpeg?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-590016/pexels-photo-590016.jpg?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-265087/pexels-photo-265087.jpeg?w=800&h=500&fit=crop"
    ]
  },
  'ml-interface': {
    title: "Machine Learning Interface",
    category: "AI/ML UI",
    client: "DataFlow Inc",
    duration: "12 months",
    team: "5 designers, 8 developers",
    role: "Lead Product Designer",
    heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop",
    overview: "Designed intuitive interfaces for complex machine learning workflows, making advanced AI capabilities accessible to non-technical users through thoughtful UX patterns.",
    challenge: "Users struggled with complex machine learning workflows, spending excessive time configuring models, interpreting results, and understanding AI-generated insights. The existing interface had a 23% task completion rate.",
    solution: "Redesigned the entire user experience with a focus on simplicity and accessibility. Created intuitive workflows for model configuration, result interpretation, and insight generation with clear visual feedback.",
    process: [
      {
        phase: "User Research",
        description: "Conducted 50+ user interviews, shadowed data scientists, and analyzed user behavior data to understand pain points and opportunities."
      },
      {
        phase: "Information Architecture",
        description: "Restructured the platform's information architecture based on user mental models and ML workflows."
      },
      {
        phase: "Design & Prototyping",
        description: "Created high-fidelity prototypes with accessibility considerations, tested with diverse user groups including non-technical users."
      },
      {
        phase: "Implementation & Iteration",
        description: "Worked closely with development team on implementation, conducted usability testing, and iterated based on user feedback."
      }
    ],
    images: [
      "https://images.unsplash.com/photo-4386466/pexels-photo-4386466.jpeg?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-4386431/pexels-photo-4386431.jpeg?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-4386370/pexels-photo-4386370.jpeg?w=800&h=500&fit=crop"
    ]
  }
};

function CaseStudy() {
  const { id } = useParams();
  const caseStudy = caseStudyData[id];

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
    <div>
      {/* Navigation */}
      <nav className="section" style={{ position: 'sticky', top: 0, background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(8px)', borderBottom: '1px solid #f3f4f6', zIndex: 50 }}>
        <div className="container">
          <Link to="/" className="link">
            <ArrowLeft style={{ width: 'var(--icon-sm)', height: 'var(--icon-sm)', marginRight: 'var(--space-2)' }} />
            Back to Portfolio
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section">
        <div className="container">
          <div className="flex">
            <div>
              <div>
                <span className="badge badge--primary">
                  {caseStudy.category}
                </span>
                <h1>
                  {caseStudy.title}
                </h1>
                <p className="text--large">
                  {caseStudy.overview}
                </p>
              </div>

              <div className="grid" style={{ marginTop: 'var(--space-8)' }}>
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
              </div>
            </div>

            <div>
              <img 
                src={caseStudy.heroImage}
                alt={caseStudy.title}
                style={{ width: '100%', height: 'auto', borderRadius: 'var(--radius-md)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Challenge & Solution Section */}
      <section className="section section--alt">
        <div className="container">
          <div className="flex">
            <div>
              <div>
                <Target style={{ width: 'var(--icon-lg)', height: 'var(--icon-lg)', color: 'var(--color-primary)', marginBottom: 'var(--space-4)' }} />
                <h2>The Challenge</h2>
                <p className="text--large">{caseStudy.challenge}</p>
              </div>
            </div>
            <div>
              <div>
                <Award style={{ width: 'var(--icon-lg)', height: 'var(--icon-lg)', color: 'var(--color-primary)', marginBottom: 'var(--space-4)' }} />
                <h2>The Solution</h2>
                <p className="text--large">
                  {caseStudy.solution}
                </p>
              </div>
            </div>
          </div>
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

    
      {/* Next Steps Section */}
      <section className="section section--dark">
        <div className="container">
          <div className="text-center">
            <h2>Ready to Work Together?</h2>
            <p className="text--large" style={{ color: '#e5e5e5' }}>I'm always interested in discussing new opportunities and collaborative projects that push the boundaries of what's possible.</p>
            <div className="flex" style={{ justifyContent: 'center', marginTop: 'var(--space-8)' }}>
              <a href="mailto:rebecca@hemstad.design" className="button-primary">Get in Touch</a>
              <Link to="/" className="button-secondary">View More Work</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CaseStudy;