export default function CaseStudyFigure({ src, alt, caption, wide = false }) {
  return (
    <figure className={`cs-figure ${wide ? 'cs-media' : 'cs-prose'}`}>
      <img src={src} alt={alt} loading="lazy" decoding="async" />
      {caption && <figcaption className="cs-figure-caption">{caption}</figcaption>}
    </figure>
  );
}
