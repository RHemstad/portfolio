export default function CaseStudySection({ id, title, children }) {
  return (
    <section id={id} className="cs-section" aria-labelledby={`${id}-heading`}>
      <h2 id={`${id}-heading`} className="cs-section-title">{title}</h2>
      {children}
    </section>
  );
}
