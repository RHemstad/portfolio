import { Link } from 'react-router-dom';

/* Compact "More work" link list — for projects that don't yet warrant
   a full row, just title + arrow.

   Not currently rendered (no projects are left over once the real
   featured/expanded/standard rows above are populated) — see
   SelectedWork.jsx's MORE_WORK_ITEMS array. Kept here, fully wired and
   styled, so it's ready to activate later. */
function MoreWorkList({ items }) {
  if (items.length === 0) return null;

  return (
    <div className="work-page-more">
      <span className="work-page-more-heading">More work</span>
      <div className="work-page-more-list">
        {items.map((item) => (
          <Link key={item.link} to={item.link} className="work-page-more-link">
            <span>{item.title}</span>
            <span className="work-page-more-arrow">→</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MoreWorkList;
