/* Teaching section — new for the redesign, no prior content to migrate.
   Everything below is a clearly-labeled placeholder standing in for
   content that hasn't been finalized yet (see project constraints:
   do not invent teaching history, courses, or credentials). */
function TeachingSection() {
  return (
    <section id="teaching" className="teaching">
      <div className="section-content">
        <h2>
          Teaching
          <span className="provisional-tag">Placeholder</span>
        </h2>
        <p className="text provisional-note">
          [Placeholder — a short introduction to teaching philosophy and academic interests will go here.]
        </p>

        <div className="cards">
          <article className="card provisional-card">
            <h3>Courses Taught</h3>
            <p className="text">
              [Placeholder — courses, institutions, and terms taught.]
            </p>
          </article>

          <article className="card provisional-card">
            <h3>Teaching Philosophy</h3>
            <p className="text">
              [Placeholder — a short statement of teaching approach and values.]
            </p>
          </article>

          <article className="card provisional-card">
            <h3>Guest Lectures &amp; Workshops</h3>
            <p className="text">
              [Placeholder — guest lectures, workshops, or mentorship activities.]
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default TeachingSection;
