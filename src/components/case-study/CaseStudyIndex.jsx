import { Link, useLocation } from 'react-router-dom';

export default function CaseStudyIndex({ sections }) {
  const { hash } = useLocation();

  function handleSectionClick(event, id) {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    // New hashes use ScrollManager; an unchanged hash needs a fresh scroll.
    if (hash === `#${id}`) {
      event.preventDefault();
      const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth';
      document.getElementById(id)?.scrollIntoView({ behavior, block: 'start' });
    }
  }

  return (
    <nav className="cs-index" aria-label="On this page">
      <p className="cs-index-title">On this page</p>
      <ol className="cs-index-list">
        {sections.map(({ id, title }) => (
          <li key={id}>
            <Link to={`#${id}`} onClick={(event) => handleSectionClick(event, id)}>{title}</Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
