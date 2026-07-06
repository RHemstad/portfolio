/* 01 Teaching Philosophy — sits in its own full-bleed panel (same
   rgba(24,41,44,0.88) treatment as the homepage Teaching section) so it
   reads as the page's lead idea. Deliberately two distinct pieces of
   content — an intro paragraph, then a separated "guiding principle"
   block — per the approved design; do not collapse these back into a
   single quote. */
function PhilosophySection() {
  return (
    <div id="tp-philosophy" className="teaching-philosophy">
      <div className="teaching-section-heading">
        <span className="teaching-section-number">01</span>
        <h2>Teaching Philosophy</h2>
      </div>

      <p className="teaching-body teaching-philosophy-intro">
        [Placeholder — a short paragraph describing teaching approach, values, and what students can expect will go here.]
      </p>

      <div className="teaching-principle">
        <span className="teaching-principle-label">A guiding principle</span>
        <p className="teaching-principle-quote">
          &ldquo;[Placeholder — one core principle or short quote that anchors the teaching philosophy.]&rdquo;
        </p>
      </div>
    </div>
  );
}

export default PhilosophySection;
