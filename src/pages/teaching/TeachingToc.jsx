const TOC_ITEMS = [
  { id: 'tp-philosophy', label: '01 Philosophy' },
  { id: 'tp-appointments', label: '02 Appointments' },
  { id: 'tp-courses', label: '03 Courses' },
  { id: 'tp-development', label: '04 Development' },
  { id: 'tp-assignments', label: '05 Assignments' },
  { id: 'tp-studentwork', label: '06 Student Work' },
  { id: 'tp-evals', label: '07 Evaluations' },
  { id: 'tp-areas', label: '08 Areas Prepared' },
];

function scrollToSection(event, id) {
  event.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* Single component, two render modes, toggled purely by CSS (no JS
   breakpoint check — matching how the rest of the site's responsive
   behavior is driven by tokens.css media queries): a pill-row index
   below the header on mobile, and a sticky right-hand column on
   tablet/desktop. Rendered as a fragment so both navs land as direct
   children of .teaching-page-grid; .teaching-toc-mobile is pulled to the
   top of the single mobile column with `order`, and .teaching-toc-sticky
   occupies the grid's second column on tablet/desktop. */
function TeachingToc() {
  return (
    <>
      <nav className="teaching-toc-mobile" aria-label="Section index">
        {TOC_ITEMS.map(({ id, label }) => (
          <a key={id} href={`#${id}`} onClick={(e) => scrollToSection(e, id)}>
            {label}
          </a>
        ))}
      </nav>

      <nav className="teaching-toc-sticky" aria-label="On this page">
        <span className="teaching-toc-heading">On this page</span>
        <div className="teaching-toc-links">
          {TOC_ITEMS.map(({ id, label }) => (
            <a key={id} href={`#${id}`} onClick={(e) => scrollToSection(e, id)}>
              {label}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
}

export default TeachingToc;
