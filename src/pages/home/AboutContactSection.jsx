/* Contact section. Keep the existing "about-contact" id so incoming
   "Get in touch" links continue to reach this section. */
function AboutContactSection() {
  return (
    <section id="about-contact" className="about-contact">
      <div className="section-content">
        <h2 className="connect-heading">Contact</h2>
        <p className="about-contact-body">
          For questions about my work, teaching, or research interests, you can reach me by email or on LinkedIn.
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
    </section>
  );
}

export default AboutContactSection;
