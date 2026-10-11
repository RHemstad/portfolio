/* About / contact section (id stays "about-contact" — case-study pages
   deep-link to /#about-contact). Its two headings, "About" and "Let's
   connect", are the only labels here: an enclosing "About & Contact"
   title just restated both of them.

   The "Let's connect" copy is real, previously-existing content
   (migrated from the old shared footer) — not newly written. The bio
   doesn't exist yet, so it's a clearly labeled placeholder rather than
   an invented biography. Email and LinkedIn are presented as solid pill
   actions per the approved design, replacing the previous circular icon
   buttons. */
function AboutContactSection() {
  return (
    <section id="about-contact" className="about-contact">
      <div className="section-content">
        <div className="about-contact-grid">
          <div>
            <h2>About</h2>
            <p className="about-contact-bio">
              [Placeholder — a short professional bio will go here.]
            </p>
          </div>

          <div>
            <h3 className="connect-heading">Let&apos;s connect</h3>
            <p className="about-contact-body">
              I'm currently seeking my next UI design role or academic teaching opportunity. If my work resonates with you, drop me a note or ping me on LinkedIn—I'd love to talk.
            </p>
            <div className="pill-actions">
              <a href="mailto:rhemstad@mac.com" className="pill-action">
                ✉ Email
              </a>
              <a href="https://linkedin.com/in/rebeccahemstad" className="pill-action">
                in LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutContactSection;
