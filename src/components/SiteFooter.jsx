/* Shared, minimal site-wide footer (used on both the homepage and
   case-study pages). Contact information lives
   in the homepage's Contact section (see
   src/pages/home/AboutContactSection.jsx) so it isn't duplicated here. */
function SiteFooter() {
  return (
    <footer>
      <section className="footer-bottom">
        <p className="copyright">© 2026 Rebecca L. Hemstad. All rights reserved.</p>
      </section>
    </footer>
  );
}

export default SiteFooter;
