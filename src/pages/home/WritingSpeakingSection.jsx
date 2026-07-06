import { writing } from '../../data/writing';

const getTypeLabel = (type) => {
  const labels = {
    article: 'Article',
    keynote: 'Keynote',
    workshop: 'Workshop',
    presentation: 'Presentation',
  };
  return labels[type] || type;
};

/* Writing & Speaking section — data source (src/data/writing.js)
   unchanged; the three real entries (Smashing Magazine + two Medium
   pieces) keep their exact titles, dates, and links per the approved
   design. Per that design, the "Lorem Ipsum" placeholder entries already
   in writing.js are not surfaced in this editorial layout (the former
   "Show More" toggle that revealed them is replaced with a static "View
   all" link, so they're no longer reachable from the UI at all — see
   design_handoff README, "not shown in the new default view"). */
function WritingSpeakingSection() {
  const [featured, ...secondary] = writing.slice(0, 3);

  return (
    <section id="writing-speaking" className="writing-speaking">
      <div className="section-content">
        <h2>Writing &amp; Speaking</h2>

        <a href={featured.link} className="writing-featured">
          <div className="writing-featured-meta">
            <span className="writing-type-tag">{getTypeLabel(featured.type)}</span>
            <span className="writing-publication">{featured.publication}</span>
            <span className="writing-meta-dot">·</span>
            <span className="writing-date">{featured.date}</span>
          </div>
          <h3 className="writing-featured-title">{featured.title}</h3>
          <p className="writing-featured-description">{featured.description}</p>
          <span className="link-editorial">Read →</span>
        </a>

        <div className="writing-secondary-list">
          {secondary.map((item) => (
            <a key={item.id} href={item.link} className="writing-row">
              <div className="writing-row-meta">
                <span className="writing-publication">{item.publication}</span>
                <span className="writing-date">{item.date}</span>
              </div>
              <div>
                <h3 className="writing-row-title">{item.title}</h3>
                <p className="writing-row-description">{item.description}</p>
              </div>
            </a>
          ))}
        </div>

        {/* No dedicated Writing & Speaking page exists yet (unlike
            Teaching and Selected Work) — rendered as inert, non-gold
            text rather than a link pointing nowhere real. Swap for a
            real <Link> once that page exists. */}
        <span className="writing-more-note link-editorial--block">
          More writing &amp; speaking — coming soon
        </span>
      </div>
    </section>
  );
}

export default WritingSpeakingSection;
