import { writing } from '../../data/writing';

// Show the four published entries newest first.
// Keep placeholder entries off the homepage.
function WritingSpeakingSection() {
  const entries = writing.slice(0, 4);

  return (
    <section id="writing-speaking" className="writing-speaking">
      <div className="section-content">
        <h2>Writing &amp; Speaking</h2>

        <div className="writing-secondary-list">
          {entries.map((item) => (
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
      </div>
    </section>
  );
}

export default WritingSpeakingSection;
