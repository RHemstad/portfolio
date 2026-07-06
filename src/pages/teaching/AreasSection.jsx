/* 08 Areas Prepared to Teach — the closing section: gold top rule, and
   the largest heading/body treatment of any placeholder list on the
   page, by design, so the page ends on this rather than trailing off.
   Five placeholder subject areas, separated by " · ". */
const AREAS = ['[Subject area]', '[Subject area]', '[Subject area]', '[Subject area]', '[Subject area]'];

function AreasSection() {
  return (
    <div id="tp-areas" className="teaching-areas">
      <div className="teaching-section-heading">
        <span className="teaching-section-number">08</span>
        <h2 className="teaching-areas-heading">Areas Prepared to Teach</h2>
      </div>

      <p className="teaching-areas-list">
        {AREAS.map((area, index) => (
          <span key={index}>
            <span className="teaching-areas-item">{area}</span>
            {index < AREAS.length - 1 && ' · '}
          </span>
        ))}
      </p>
    </div>
  );
}

export default AreasSection;
