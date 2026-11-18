function AppointmentsSection() {
  return (
    <div id="tp-appointments" className="teaching-appt-section">
      <div className="teaching-section-heading">
        <span className="teaching-section-number">02</span>
        <h2>Institutions &amp; Appointments</h2>
      </div>

      <div className="teaching-appt-header-row" aria-hidden="true">
        <span>Institution</span>
        <span>Role</span>
        <span>Dates</span>
        <span>Level</span>
      </div>

      <div className="teaching-appt-row">
        <span className="teaching-appt-name">NC State University</span>
        <span className="teaching-appt-field">Assistant Professor of the Practice, Graphic Design</span>
        <span className="teaching-appt-field teaching-appt-field--italic">Fall 2014</span>
        <span className="teaching-appt-field teaching-appt-field--italic">Undergraduate</span>
      </div>

      <div className="teaching-appt-row teaching-appt-row--last">
        <span className="teaching-appt-name">Savannah College of Art and Design (SCAD eLearning)</span>
        <span className="teaching-appt-field">Part-time Faculty, Graphic Design</span>
        <span className="teaching-appt-field teaching-appt-field--italic">2011–2017</span>
        <span className="teaching-appt-field teaching-appt-field--italic">Undergraduate &amp; Graduate</span>
      </div>

      <section className="teaching-recognition" aria-labelledby="teaching-recognition-heading">
        <h3 id="teaching-recognition-heading">Teaching Recognition</h3>
        <ul className="teaching-recognition-list">
          <li>
            <span className="teaching-recognition-year">2014</span>
            <div>
              <h4>Distinguished eLearning Educator</h4>
              <p>Instructional Technology Council</p>
            </div>
          </li>
          <li>
            <span className="teaching-recognition-year">2013</span>
            <div>
              <h4>Nominee — Online Teaching Professor of the Year</h4>
              <p>Sloan Consortium</p>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default AppointmentsSection;
