import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/* Reusable route-change scroll handling, mounted once near the root
   (see App.jsx, inside <BrowserRouter>, alongside <Routes>).

   React Router doesn't reset scroll position on navigation the way a
   traditional multi-page site does, so without this, navigating to a
   new route (e.g. clicking "View all selected work →" near the bottom
   of the homepage) opens the new page at whatever scroll offset the
   previous page happened to be at.

   Rule, applied identically on every navigation (including browser
   Back/Forward, which fire the same location change):
   - a hash in the URL (e.g. "/#work") scrolls to that section, whether
     arriving fresh on a new route or already on the matching page
   - no hash scrolls straight to the top of the page

   Previously duplicated as a near-identical useEffect in Home.jsx,
   Teaching.jsx, and SelectedWork.jsx — consolidated here so every
   route (including case studies, which never had this effect) gets
   the same handling from one place. */
function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1);
      const raf = requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
      return () => cancelAnimationFrame(raf);
    }

    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export default ScrollManager;
