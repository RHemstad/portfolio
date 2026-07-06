import { Link } from 'react-router-dom';

/* 01 — Featured project. Real data (title/category/description/image/
   link) comes from src/data/projects.js — the same source already
   shown on the homepage's Selected Work section, so this isn't new
   content. The "Role" line has no matching field in that data yet, so
   it stays a literal bracketed placeholder rather than inventing one. */
function FeaturedProjectRow({ number, project }) {
  return (
    <div className="work-page-row work-page-featured-row">
      <span className="work-page-row-num work-page-row-num--featured">{number}</span>
      <div className="work-page-featured-panel">
        <img src={project.image} alt={project.title} className="work-page-featured-image" />
        <div>
          <span className="work-page-featured-kicker">{project.category}</span>
          <h2 className="work-page-featured-title">{project.title}</h2>
          <p className="work-page-featured-summary">{project.description}</p>
          <p className="work-page-featured-role">
            Role — <span className="work-page-featured-role-value">[Placeholder — role or contribution]</span>
          </p>
          <Link to={project.link} className="work-page-featured-cta">View Case Study →</Link>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProjectRow;
