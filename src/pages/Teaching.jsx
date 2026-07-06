import FallingGlyphsBackground from '../components/FallingGlyphsBackground';
import BackToTop from '../components/BackToTop';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import TeachingToc from './teaching/TeachingToc';
import PhilosophySection from './teaching/PhilosophySection';
import AppointmentsSection from './teaching/AppointmentsSection';
import CoursesSection from './teaching/CoursesSection';
import DevelopmentSection from './teaching/DevelopmentSection';
import AssignmentsSection from './teaching/AssignmentsSection';
import StudentWorkSection from './teaching/StudentWorkSection';
import EvaluationsSection from './teaching/EvaluationsSection';
import AreasSection from './teaching/AreasSection';

/* New second-level page (design_handoff_teaching_page, "2a" approved),
   reached from the homepage's Teaching section. All body content below
   the hero is placeholder per the handoff's content guidelines — do
   not invent institutions, courses, dates, quotes, or credentials. */
function Teaching() {
  // Hash-scroll and top-of-page scroll on route change are now handled
  // globally by <ScrollManager /> (see App.jsx).
  return (
    <>
      <FallingGlyphsBackground />
      <SiteHeader variant="teaching" />

      <main className="teaching-page">
        <div className="teaching-hero">
          <h1>Teaching</h1>
          <p className="teaching-hero-intro">
            [Placeholder — a short introduction to academic interests and teaching background will go here.]
          </p>
        </div>

        <div className="teaching-page-grid">
          <div className="teaching-sections">
            <PhilosophySection />
            <AppointmentsSection />
            <CoursesSection />
            <DevelopmentSection />
            <AssignmentsSection />
            <StudentWorkSection />
            <EvaluationsSection />
            <AreasSection />
          </div>

          <TeachingToc />
        </div>
      </main>

      <SiteFooter />
      <BackToTop />
    </>
  );
}

export default Teaching;
