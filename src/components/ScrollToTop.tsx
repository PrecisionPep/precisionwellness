import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    // Scroll to top on initial mount
    window.scrollTo(0, 0);
    // Also ensure body is at top
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);

  return null;
}

