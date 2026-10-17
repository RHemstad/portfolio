export default function CaseStudyIndex({ sections }) {
  return (
    <nav className="cs-index" aria-label="On this page">
      <p className="cs-index-title">On this page</p>
      <ol className="cs-index-list">
        {sections.map(({ id, title }) => (
          <li key={id}><a href={`#${id}`}>{title}</a></li>
        ))}
      </ol>
    </nav>
  );
}
