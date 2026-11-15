import SiteHeader from '../SiteHeader';
import SiteFooter from '../SiteFooter';
import BackToTop from '../BackToTop';
import './case-study.css';

export default function CaseStudyLayout({ children, intro, index, sidebarIndex = false }) {
  const layoutClass = [
    'cs-layout',
    index && 'cs-layout--indexed',
    index && sidebarIndex && 'cs-layout--sidebar-index',
  ].filter(Boolean).join(' ');

  return (
    <div className="authored-case-study">
      <SiteHeader variant="case-study" titleAsHeading={false} />
      <main className={layoutClass}>
        {intro && <div className="cs-opening">{intro}</div>}
        {index && <aside className="cs-index-area">{index}</aside>}
        <div className="cs-content">{children}</div>
      </main>
      <SiteFooter />
      <BackToTop />
    </div>
  );
}
