import { Link } from 'react-router-dom';

/* 04-style standard row: numeral, thumbnail, category kicker, title,
   one-line description, "View Case Study →". Real data from
   src/data/projects.js. */
function StandardProjectRow({ number, project, isLast = false }) {
  return (
    <div className={`work-page-row work-page-index-row work-page-standard-row ${isLast ? 'work-page-index-row--last' : ''}`}>
      <span className="work-page-row-num work-page-row-num--index">{number}</span>
      <img src={project.image} alt={project.title} className="work-page-standard-image" />
      <div>
        <span className="work-page-index-kicker">{project.category}</span>
        <h3 className="work-page-index-title">{project.title}</h3>
        <p className="work-page-index-desc">{project.description}</p>
      </div>
      <Link to={project.link} className="work-page-index-cta">View Case Study →</Link>
    </div>
  );
}

export default StandardProjectRow;
