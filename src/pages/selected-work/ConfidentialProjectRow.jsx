import { Link } from 'react-router-dom';

/* 03-style confidential/limited-detail row — the template to reuse
   whenever a project can't show real screenshots: same numbered-row
   grid as the standard row, but the thumbnail slot is replaced with an
   abstracted diagram placeholder (always CSS-drawn, never a real
   screenshot, even once real project data is wired in) and an italic
   confidentiality note.

   Not currently rendered anywhere (no real project is flagged
   confidential yet) — see SelectedWork.jsx's CONFIDENTIAL_PROJECTS
   array. Kept here, fully wired and styled, so it's ready to activate
   the moment a project needs this treatment. */
function ConfidentialProjectRow({ number, project, isLast = false }) {
  return (
    <div className={`work-page-row work-page-index-row work-page-confidential-row ${isLast ? 'work-page-index-row--last' : ''}`}>
      <span className="work-page-row-num work-page-row-num--index">{number}</span>
      <div className="work-page-confidential-diagram">abstracted process diagram</div>
      <div>
        <span className="work-page-index-kicker">{project.category}</span>
        <h3 className="work-page-index-title">{project.title}</h3>
        <p className="work-page-index-desc">{project.description}</p>
        <span className="work-page-confidential-note">Confidential — shown as an abstracted overview only.</span>
      </div>
      <Link to={project.link} className="work-page-index-cta">View Overview →</Link>
    </div>
  );
}

export default ConfidentialProjectRow;
