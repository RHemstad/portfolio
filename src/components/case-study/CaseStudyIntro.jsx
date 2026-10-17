export default function CaseStudyIntro({ eyebrow, title, children }) {
  return (
    <div className="cs-intro">
      <p className="cs-eyebrow">{eyebrow}</p>
      <h1 className="cs-title">{title}</h1>
      <div className="cs-prose cs-intro-copy">{children}</div>
    </div>
  );
}
