/* Shared, minimal site-wide footer (used on both the homepage and
   case-study pages). The substantive "let's connect" content now lives
   in the homepage's About & Contact section (see
   src/pages/home/AboutContactSection.jsx) so it isn't duplicated here. */
function SiteFooter() {
  return (
    <footer>
      <section className="footer-bottom">
        <p className="copyright">© 2025 Rebecca L. Hemstad. All rights reserved.</p>
      </section>
    </footer>
  );
}

export default SiteFooter;
