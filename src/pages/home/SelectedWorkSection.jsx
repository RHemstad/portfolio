import { Link } from 'react-router-dom';
import { projects } from '../../data/projects';

/* Selected Work section — data source (src/data/projects.js) and case
   study links unchanged. Per the approved design, only the first three
   projects are surfaced here (a 4th, "Enterprise Design Systems", exists
   in the data but isn't shown — see design_handoff README); the former
   "Show More" toggle is replaced with a static "View all" link pointing
   nowhere yet, since there's no dedicated Work page/route to send it to. */
function SelectedWorkSection() {
  const [featured, ...secondary] = projects.slice(0, 3);

  return (
    <section id="work" className="selected-work">
      <div className="section-content">
        <h2>Selected Work</h2>

        <div className="work-row work-row--featured">
          <span className="work-number work-number--featured">01</span>
          <Link to={featured.link} className="work-featured-panel">
            <img src={featured.image} alt={featured.title} className="work-featured-image" />
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

        <a
          href="#"
          className="link-editorial link-editorial--block"
          onClick={(e) => e.preventDefault()}
        >
          View all selected work →
        </a>
      </div>
    </section>
  );
}

export default SelectedWorkSection;
