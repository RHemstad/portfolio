/* 06 Student Work & Outcomes — carries a "Shown when available" pill
   (reusing .provisional-tag) since there's nothing to show yet. This
   section is meant to flex between finished student work, annotated
   assignment excerpts, or — when work can't be shared publicly — a
   short explanatory note instead; the striped tiles below are
   illustrative placeholders only.

   PLACEHOLDER_TILES models real content as 0–3 items (never assume
   exactly three): the gallery row only renders when there's at least
   one tile, so an empty array collapses cleanly instead of leaving a
   blank striped row. */
const PLACEHOLDER_TILES = ['student work sample', 'student work sample', 'student work sample'];

function StudentWorkSection() {
  return (
    <div id="tp-studentwork" className="teaching-studentwork-section">
      <div className="teaching-section-heading teaching-section-heading--wrap">
        <span className="teaching-section-number">06</span>
        <h2>Student Work &amp; Outcomes</h2>
        <span className="provisional-tag">Shown when available</span>
      </div>

      <p className="teaching-body teaching-studentwork-intro">
        [Placeholder — this section can hold finished student projects, annotated assignment excerpts, or, where work can't be shared publicly, a short note explaining why.]
      </p>

      {PLACEHOLDER_TILES.length > 0 && (
        <div className="teaching-studentwork-gallery">
          {PLACEHOLDER_TILES.map((label, index) => (
            <div key={index} className="teaching-studentwork-tile">{label}</div>
          ))}
        </div>
      )}
    </div>
  );
}

export default StudentWorkSection;
