/* 05 Selected Assignments & Syllabi — indexed rows: title + one-line
   description, "Download" aligned right on desktop / stacked below on
   mobile (direction/alignment driven by --teach-assignment-dir/-align).
   "Download" links are inert until real files exist, same treatment as
   other not-yet-real links on the site. */
function AssignmentsSection() {
  return (
    <div id="tp-assignments" className="teaching-assignments-section">
      <div className="teaching-section-heading">
        <span className="teaching-section-number">05</span>
        <h2>Selected Assignments &amp; Syllabi</h2>
      </div>

      <div className="teaching-assignments-list">
        <div className="teaching-assignment-row">
          <div>
            <span className="teaching-assignment-title">[Placeholder — Assignment / Syllabus Title]</span>
            <br />
            <span className="teaching-assignment-desc">[Placeholder — one-line description]</span>
          </div>
          <a href="#" className="teaching-assignment-download" onClick={(e) => e.preventDefault()}>
            Download →
          </a>
        </div>

        <div className="teaching-assignment-row teaching-assignment-row--last">
          <div>
            <span className="teaching-assignment-title">[Placeholder — Assignment / Syllabus Title]</span>
            <br />
            <span className="teaching-assignment-desc">[Placeholder — one-line description]</span>
          </div>
          <a href="#" className="teaching-assignment-download" onClick={(e) => e.preventDefault()}>
            Download →
          </a>
        </div>
      </div>
    </div>
  );
}

export default AssignmentsSection;
