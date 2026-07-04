import { useEffect } from 'react';
import FallingGlyphsBackground from '../components/FallingGlyphsBackground';
import BackToTop from '../components/BackToTop';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import IntroSection from './home/IntroSection';
import TeachingSection from './home/TeachingSection';
import SelectedWorkSection from './home/SelectedWorkSection';
import WritingSpeakingSection from './home/WritingSpeakingSection';
import AboutContactSection from './home/AboutContactSection';

function Home() {
  // Arriving from another route with a hash (e.g. "/#teaching" from a
  // case-study page's nav) doesn't auto-scroll in a client-rendered SPA,
  // so scroll to the matching section once Home has mounted.
  useEffect(() => {
    if (!window.location.hash) return;
    const id = window.location.hash.slice(1);
    const target = document.getElementById(id);
    if (target) {
      requestAnimationFrame(() => target.scrollIntoView({ behavior: 'smooth', block: 'start' }));
    }
  }, []);

  return (
    <>
      <FallingGlyphsBackground />
      <SiteHeader variant="home" />

      <main>
        <IntroSection />
        <TeachingSection />
        <SelectedWorkSection />
        <WritingSpeakingSection />
        <AboutContactSection />
      </main>

      <SiteFooter />
      <BackToTop />
    </>
  );
}

export default Home;
