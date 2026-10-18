// Authored list items preserve reading order as the visual grid changes.
export default function CaseStudySequence({ children }) {
  return <ol className="cs-media-sequence" aria-label="Interaction flow">{children}</ol>;
}
