import FallingGlyphsBackground from '../components/FallingGlyphsBackground';
import BackToTop from '../components/BackToTop';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import { projects } from '../data/projects';
import FeaturedProjectRow from './selected-work/FeaturedProjectRow';
import ExpandedProjectRow from './selected-work/ExpandedProjectRow';
import StandardProjectRow from './selected-work/StandardProjectRow';
import ConfidentialProjectRow from './selected-work/ConfidentialProjectRow';
import TextOnlyProjectRow from './selected-work/TextOnlyProjectRow';
import MoreWorkList from './selected-work/MoreWorkList';
import ClosingTransition from './selected-work/ClosingTransition';

/* Provisional category index shown in the masthead — not wired to
   filters yet (per design_handoff_selected_work_page/README.md). */
const CATEGORIES = [
  'Design Systems',
  'Interface & Visual Design',
  'Inclusive Experiences',
  'AI & Emerging Patterns',
  'Systems & Research',
];

/* No real project is flagged confidential, in-progress (text-only), or
   left over as "more work" yet — these stay empty so the page shows
   real content only, but the row components above remain fully built
   and ready: add entries here (shape: { category, title, description,
   link } for the first two, { title, link } for MORE_WORK_ITEMS) the
   moment real projects need this treatment. */
const CONFIDENTIAL_PROJECTS = [];
const TEXT_ONLY_PROJECTS = [];
const MORE_WORK_ITEMS = [];

function SelectedWork() {
  // Hash-scroll and top-of-page scroll on route change are now handled
  // globally by <ScrollManager /> (see App.jsx).
  const [featured, expanded, ...standardProjects] = projects;

  return (
    <>
      <FallingGlyphsBackground />
      <SiteHeader variant="selected-work" />

      <main className="work-page">
        <div className="work-page-hero">
          <h1>Selected Work</h1>
          <p className="work-page-hero-intro">
            [Placeholder — a short introduction framing the range and focus of the work shown on this page.]
          </p>
          <div className="work-page-categories">
            {CATEGORIES.map((category) => (
              <span key={category} className="work-page-category-pill">{category}</span>
            ))}
          </div>
        </div>

        <div className="work-page-content">
          <FeaturedProjectRow number="01" project={featured} />
          <ExpandedProjectRow number="02" project={expanded} />

          {CONFIDENTIAL_PROJECTS.map((project, index) => (
            <ConfidentialProjectRow
              key={project.link}
              number={String(index + 3).padStart(2, '0')}
              project={project}
            />
          ))}

          {standardProjects.map((project, index) => (
            <StandardProjectRow
              key={project.id}
              number={String(index + 3 + CONFIDENTIAL_PROJECTS.length).padStart(2, '0')}
              project={project}
              isLast={
                index === standardProjects.length - 1 &&
                TEXT_ONLY_PROJECTS.length === 0
              }
            />
          ))}

          {TEXT_ONLY_PROJECTS.map((project, index) => (
            <TextOnlyProjectRow
              key={project.link}
              number={String(index + 3 + CONFIDENTIAL_PROJECTS.length + standardProjects.length).padStart(2, '0')}
              project={project}
              isLast={index === TEXT_ONLY_PROJECTS.length - 1}
            />
          ))}

          <MoreWorkList items={MORE_WORK_ITEMS} />
          <ClosingTransition />
        </div>
      </main>

      <SiteFooter />
      <BackToTop />
    </>
  );
}

export default SelectedWork;
