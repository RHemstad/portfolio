/* 03 Courses Taught — numbered index list, followed by a full-width
   pull-quote placeholder bordered on top with the gold rule. Three
   placeholder courses, matching the approved design. */
function CoursesSection() {
  return (
    <div id="tp-courses" className="teaching-courses-section">
      <div className="teaching-section-heading">
        <span className="teaching-section-number">03</span>
        <h2>Courses Taught</h2>
      </div>

      <div className="teaching-courses-list">
        <div className="teaching-course-row">
          <span className="teaching-course-num">01</span>
          <span className="teaching-course-title">[Placeholder — Course Title]</span>
          <span className="teaching-course-terms">[level / terms]</span>
        </div>
        <div className="teaching-course-row">
          <span className="teaching-course-num">02</span>
          <span className="teaching-course-title">[Placeholder — Course Title]</span>
          <span className="teaching-course-terms">[level / terms]</span>
        </div>
        <div className="teaching-course-row teaching-course-row--last">
          <span className="teaching-course-num">03</span>
          <span className="teaching-course-title">[Placeholder — Course Title]</span>
          <span className="teaching-course-terms">[level / terms]</span>
        </div>
      </div>

      <p className="teaching-pull-quote">
        &ldquo;[A pull-quote from a course description or future evaluation can anchor this space.]&rdquo;
      </p>
    </div>
  );
}

export default CoursesSection;
