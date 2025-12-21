import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Ensure page starts at top on initial load
(function ensureScrollToTop() {
  // Remove any hash immediately to prevent anchor scrolling
  if (window.location.hash) {
    window.history.replaceState(null, null, window.location.href.split('#')[0]);
  }
  
  // Force scroll to top once on initial load
  const forceScrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    if (document.body) document.body.scrollTop = 0;
    if (document.documentElement) document.documentElement.scrollTop = 0;
  };
  
  // Run immediately
  forceScrollTop();
  
  // Run once after DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', forceScrollTop, { once: true });
  } else {
    // DOM already ready, run once after a brief delay
    setTimeout(forceScrollTop, 100);
  }
  
  // Run once after window loads
  window.addEventListener('load', forceScrollTop, { once: true });
})();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
