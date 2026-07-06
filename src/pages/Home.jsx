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
  // Hash-scroll and top-of-page scroll on route change are now handled
  // globally by <ScrollManager /> (see App.jsx).
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
