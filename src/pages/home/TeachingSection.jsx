import { Link } from 'react-router-dom';

function TeachingSection() {
  return (
    <section id="teaching" className="teaching">
      <div className="section-content">
        <div className="teaching-heading-row">
          <h2>Teaching</h2>
        </div>

        <p className="teaching-intro">
          My teaching connects graphic design, web design, and user experience through hands-on projects, experimentation, and individual feedback.
        </p>

        <div className="teaching-grid">
          <div className="teaching-column">
            <span className="teaching-number">01</span>
            <h3>Teaching Experience</h3>
            <p>Undergraduate and graduate teaching at SCAD eLearning, and undergraduate teaching at NC State University.</p>
          </div>

          <div className="teaching-column">
            <span className="teaching-number">02</span>
            <h3>Course Development</h3>
            <p>Developed and taught User Experience Theory, a graduate course exploring the foundations of UX.</p>
          </div>

          <div className="teaching-column">
            <span className="teaching-number">03</span>
            <h3>Teaching Recognition</h3>
            <p>Named a Distinguished eLearning Educator by the Instructional Technology Council in 2014.</p>
          </div>
        </div>

        <Link to="/teaching" className="link-editorial">
          Explore my teaching →
        </Link>
      </div>
    </section>
  );
}

export default TeachingSection;
