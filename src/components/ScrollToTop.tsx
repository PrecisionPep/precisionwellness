import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Only scroll to top on route change, not on initial mount
    // This allows the page to load naturally and user can scroll freely
    if (pathname !== '/') {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  }, [pathname]);

  return null;
}

