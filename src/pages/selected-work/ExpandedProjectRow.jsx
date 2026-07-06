import { Link } from 'react-router-dom';

/* 02 — Expanded secondary spread, the one deliberate exception to the
   numbered-row rhythm (per the approved design, only ever one project
   gets this larger image-led treatment — don't add a second). Real
   data from src/data/projects.js, same as the featured row. */
function ExpandedProjectRow({ number, project }) {
  return (
    <div className="work-page-row work-page-expanded-row">
      <span className="work-page-row-num work-page-row-num--expanded">{number}</span>
      <div className="work-page-expanded-inner">
        <img src={project.image} alt={project.title} className="work-page-expanded-image" />
        <div>
          <span className="work-page-expanded-kicker">{project.category}</span>
          <h2 className="work-page-expanded-title">{project.title}</h2>
          <p className="work-page-expanded-summary">{project.description}</p>
          <Link to={project.link} className="work-page-expanded-cta">View Case Study →</Link>
        </div>
      </div>
    </div>
  );
}

export default ExpandedProjectRow;
