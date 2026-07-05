/* Teaching section — new for the redesign, no prior content to migrate.
   Everything bracketed below is a clearly-labeled placeholder standing in
   for content that hasn't been finalized yet (see project constraints:
   do not invent teaching history, courses, or credentials). Layout is
   the approved "numbered column" treatment — no card/border boxes. */
function TeachingSection() {
  return (
    <section id="teaching" className="teaching">
      <div className="section-content">
        <div className="teaching-heading-row">
          <h2>Teaching</h2>
          <span className="provisional-tag">Placeholder</span>
        </div>

        <p className="teaching-intro">
          [Placeholder — a short introduction to teaching philosophy and academic interests will go here.]
        </p>

        <div className="teaching-grid">
          <div className="teaching-column">
            <span className="teaching-number">01</span>
            <h3>Selected Courses</h3>
            <p className="provisional-note">[Placeholder — courses, institutions, terms taught.]</p>
          </div>

          <div className="teaching-column">
            <span className="teaching-number">02</span>
            <h3>Teaching Philosophy</h3>
            <p className="provisional-note">[Placeholder — a short statement of approach and values.]</p>
          </div>

          <div className="teaching-column">
            <span className="teaching-number">03</span>
            <h3>Guest Lectures</h3>
            <p className="provisional-note">[Placeholder — guest lectures &amp; workshops.]</p>
          </div>
        </div>

        <a
          href="#"
          className="link-editorial"
          onClick={(e) => e.preventDefault()}
        >
          Full teaching page — coming soon
        </a>
      </div>
    </section>
  );
}

export default TeachingSection;
