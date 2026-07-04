import { Mail } from 'lucide-react';
import LinkedinIcon from '../../components/LinkedinIcon';

/* About & Contact section. The "Let's connect" content and social links
   are migrated as-is from the old shared footer (see git history / audit)
   so they aren't duplicated between SiteFooter and this section anymore.
   The copy below is real, previously-existing content (from the
   case-study page footer, which already mentioned teaching) — not newly
   written. The "About" bio itself doesn't exist yet, so it's a clearly
   labeled placeholder rather than an invented biography. */
function AboutContactSection() {
  return (
    <section id="about-contact" className="about-contact">
      <div className="section-content">
        <h2>About &amp; Contact</h2>

        <div className="provisional-block">
          <h3>About</h3>
          <p className="text provisional-note">
            [Placeholder — a short professional bio will go here.]
          </p>
        </div>

        <div className="footer-main">
          <div className="footer-content-left">
            <h3>Let's connect</h3>
            <p>
              I'm currently seeking my next UI design role or academic teaching opportunity. If my work resonates with you, drop me a note or ping me on LinkedIn—I'd love to talk.
            </p>
          </div>

          <div className="footer-content-right">
            <div className="social-links">
              <a
                href="mailto:rebecca@example.com"
                className="social-link"
                aria-label="Email Rebecca"
              >
                <Mail className="social-icon" />
              </a>
              <a
                href="https://linkedin.com/in/rebeccahemstad"
                className="social-link"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="social-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutContactSection;
