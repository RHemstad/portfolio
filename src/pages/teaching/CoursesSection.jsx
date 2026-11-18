const courseGroups = [
  {
    level: 'Graduate courses',
    courses: [
      { code: 'GRDS720', title: 'Digital Studio 1', years: '2011–2015' },
      { code: 'GRDS763', title: 'Digital Studio 2', years: '2012' },
      { code: 'GRDS783', title: 'User Experience Theory', years: '2013–2015' },
      { code: 'GRDS784', title: 'Graphic Design Studio: User Experience Practice', years: '2013–2016' },
    ],
  },
  {
    level: 'Undergraduate courses',
    courses: [
      { code: 'GRDS233', title: 'Vector and Raster Graphics', years: '2013' },
      { code: 'GRDS384', title: 'Website Design and Management', years: '2015–2017' },
      { code: 'GRDS400', title: 'Graphic Design Studio II', years: '2012' },
      { code: 'GRDS502', title: 'Visual Communication History, Research and Discourse', years: '2017' },
    ],
  },
];

const thesisStudents = [
  'Nicole Guerrero', 'Joanna Smith', 'Jason Occhipinti', 'Brian Memmott',
  'David Meyer', 'Ericca Garrison', 'Jason Beaty', 'Jenna Palermo',
  'Peter Bella', 'Robert Soracco',
];

function CoursesSection() {
  return (
    <div id="tp-courses" className="teaching-courses-section">
      <div className="teaching-section-heading">
        <span className="teaching-section-number">03</span>
        <h2>Courses Taught</h2>
      </div>

      <div className="teaching-course-institution">
        <h3>NC State University</h3>
        <div className="teaching-course-group">
          <h4>Undergraduate · Sophomore level</h4>
          <ul className="teaching-courses-list">
            <li className="teaching-course-row">
              <div>
                <span className="teaching-course-code">GD201</span>
                <h5 className="teaching-course-title">Design, Context and Experience</h5>
              </div>
              <span className="teaching-course-terms">Fall 2014</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="teaching-course-institution">
        <h3>Savannah College of Art and Design</h3>
        <p className="teaching-course-note">I taught web design through the graduate courses Digital Studio 1 and Digital Studio 2. Years summarize the listed course offerings; courses were not taught every term.</p>

        {courseGroups.map(({ level, courses }) => (
          <div key={level} className="teaching-course-group">
            <h4>{level}</h4>
            <ul className="teaching-courses-list">
              {courses.map(({ code, title, years }) => (
                <li key={code} className="teaching-course-row">
                  <div>
                    <span className="teaching-course-code">{code}</span>
                    <h5 className="teaching-course-title">{title}</h5>
                  </div>
                  <span className="teaching-course-terms">{years}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="teaching-course-group teaching-advising">
          <h4>Advising &amp; Supervision</h4>
          <ul className="teaching-advising-list">
            <li>Graduate Teaching Internship advisor — Hiram Henriquez, Winter 2013</li>
            <li>Independent study — Maggie Shiyao Peng, Summer 2012</li>
          </ul>
          <h5>Thesis students</h5>
          <ul className="teaching-thesis-students">
            {thesisStudents.map((name) => <li key={name}>{name}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CoursesSection;
