import { Link } from 'react-router-dom';
import { projects } from '../../data/projects';

const homepageTitles = {
  5: 'AI-Powered Design Workflows',
  1: 'From Tokens to Shared Infrastructure',
  2: 'Conversational AI Design',
};

function SelectedWorkSection() {
  const [featured, ...secondary] = [5, 1, 2].map((id) => {
    const project = projects.find((project) => project.id === id);
    return {
      ...project,
      title: homepageTitles[id] ?? project.title,
      category: id === 2 ? 'Component Design' : project.category,
    };
  });

  return (
    <section id="work" className="selected-work">
      <div className="section-content">
        <h2>Selected Work</h2>

        <div className="work-row work-row--featured">
          <span className="work-number work-number--featured">01</span>
          <Link to={featured.link} className="work-featured-panel">
            <img src={featured.image || 'https://placehold.co/320x200'} alt={featured.title} className="work-featured-image" />
            <div>
              <span className="work-kicker">{featured.category}</span>
              <h3 className="work-featured-title">{featured.title}</h3>
              <p className="work-featured-description">{featured.description}</p>
              <span className="link-editorial">View Case Study →</span>
            </div>
          </Link>
        </div>

        {secondary.map((project, index) => (
          <Link key={project.id} to={project.link} className="work-row work-row--secondary">
            <span className="work-number">{String(index + 2).padStart(2, '0')}</span>
            <div className="work-row-content">
              <div>
                <span className="work-kicker">{project.category}</span>
                <h3 className="work-row-title">{project.title}</h3>
              </div>
              <span className="link-editorial link-editorial--nowrap">View Case Study →</span>
            </div>
          </Link>
        ))}

        <Link to="/selected-work" className="link-editorial link-editorial--block">
          View all selected work →
        </Link>
      </div>
    </section>
  );
}

export default SelectedWorkSection;
