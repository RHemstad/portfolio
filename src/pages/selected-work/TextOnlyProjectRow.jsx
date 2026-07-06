import { Link } from 'react-router-dom';

/* 05-style text-only row — same row grid without an image column, for
   projects whose case study is still in development. "Notes →" (not
   "View Case Study →") reflects that the destination is lighter-weight
   than a full case study.

   Not currently rendered anywhere (no real project is in this state
   yet) — see SelectedWork.jsx's TEXT_ONLY_PROJECTS array. Kept here,
   fully wired and styled, so it's ready to activate later. */
function TextOnlyProjectRow({ number, project, isLast = false }) {
  return (
    <div className={`work-page-row work-page-row--baseline work-page-index-row work-page-textonly-row ${isLast ? 'work-page-index-row--last' : ''}`}>
      <span className="work-page-row-num work-page-row-num--index">{number}</span>
      <div>
        <span className="work-page-index-kicker">{project.category}</span>
        <h3 className="work-page-index-title">{project.title}</h3>
        <p className="work-page-index-desc work-page-textonly-desc">{project.description}</p>
      </div>
      <Link to={project.link} className="work-page-index-cta">Notes →</Link>
    </div>
  );
}

export default TextOnlyProjectRow;
