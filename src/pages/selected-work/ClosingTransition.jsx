import { Link } from 'react-router-dom';

/* Closing transition — thin rule, one line of connective copy, links
   back to the homepage's Writing & Speaking and About & Contact
   sections. Deliberately not a repeat of the full About & Contact
   section itself. */
function ClosingTransition() {
  return (
    <div className="work-page-closing">
      <p className="work-page-closing-copy">More projects and full case studies are being added over time.</p>
      <div className="work-page-closing-links">
        <Link to="/#writing-speaking" className="work-page-closing-link">Writing &amp; Speaking →</Link>
        <Link to="/#about-contact" className="work-page-closing-link">Get in touch →</Link>
      </div>
    </div>
  );
}

export default ClosingTransition;
