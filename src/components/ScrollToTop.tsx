import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTop() {
  const { pathname } = useLocation();
  const isInitialMount = useRef(true);

  useEffect(() => {
    // Skip scroll on initial mount to allow free scrolling
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    // Only scroll to top on route change, not on initial mount
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

