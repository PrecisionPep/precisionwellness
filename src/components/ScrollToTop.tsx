import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, [pathname]);

  useEffect(() => {
    // Aggressively scroll to top on initial mount
    const forceScrollTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    };
    
    // Run immediately
    forceScrollTop();
    
    // Run multiple times to ensure it sticks
    const timeouts = [0, 10, 50, 100, 200, 500, 1000].map(delay => 
      setTimeout(forceScrollTop, delay)
    );
    
    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, []);

  return null;
}

