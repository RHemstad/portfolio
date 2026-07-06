import { Link, useLocation } from 'react-router-dom';

/* Real homepage section ids (src/pages/Home.jsx). The site name/logo in
   SiteHeader already links back to the top of the homepage, so no
   "Introduction" item is needed here. */
const NAV_ITEMS = [
  { id: 'teaching', label: 'Teaching' },
  { id: 'work', label: 'Work' },
  { id: 'writing-speaking', label: 'Writing & Speaking' },
  { id: 'about-contact', label: 'About & Contact' },
];

function SiteNav({ onNavigate }) {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  const handleClick = (event, id) => {
    // Already on the homepage: scroll directly instead of a full navigation.
    if (isHome) {
      event.preventDefault();
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    // From another route (e.g. a case study), let the Link navigate to
    // "/#id" normally; Home.jsx scrolls to the matching section on mount.
    onNavigate?.();
  };

  return (
    <ul>
      {NAV_ITEMS.map(({ id, label }) => (
        <li key={id}>
          <Link to={`/#${id}`} className="nav-link" onClick={(e) => handleClick(e, id)}>
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default SiteNav;
