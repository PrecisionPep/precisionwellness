import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTop() {
  const { pathname } = useLocation();
  const isInitialMount = useRef(true);
  const previousPathname = useRef(pathname);

  useEffect(() => {
    // Skip scroll on initial mount to allow free scrolling
    if (isInitialMount.current) {
      isInitialMount.current = false;
      previousPathname.current = pathname;
      return;
    }

    // Scroll to top on any route change, including when clicking home
    if (previousPathname.current !== pathname) {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      previousPathname.current = pathname;
    }
  }, [pathname]);

  return null;
}

