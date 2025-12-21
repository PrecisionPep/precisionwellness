import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Aggressively prevent scrolling to bottom on initial load
(function preventScrollToBottom() {
  // Remove any hash immediately
  if (window.location.hash) {
    window.history.replaceState(null, null, window.location.href.split('#')[0]);
  }
  
  // Force scroll to top multiple times
  const forceScrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    if (document.body) document.body.scrollTop = 0;
    if (document.documentElement) document.documentElement.scrollTop = 0;
  };
  
  // Run immediately
  forceScrollTop();
  
  // Run after a short delay
  setTimeout(forceScrollTop, 0);
  setTimeout(forceScrollTop, 10);
  setTimeout(forceScrollTop, 50);
  setTimeout(forceScrollTop, 100);
  setTimeout(forceScrollTop, 200);
  
  // Run after DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', forceScrollTop);
  }
  
  // Run after window loads
  window.addEventListener('load', () => {
    setTimeout(forceScrollTop, 0);
    setTimeout(forceScrollTop, 100);
  });
  
  // Watch for scroll events and prevent scrolling down on initial load
  let scrollPreventionActive = true;
  const preventScroll = () => {
    if (scrollPreventionActive && window.scrollY > 100) {
      forceScrollTop();
    }
  };
  
  window.addEventListener('scroll', preventScroll, { passive: true });
  
  // Disable scroll prevention after 2 seconds
  setTimeout(() => {
    scrollPreventionActive = false;
    window.removeEventListener('scroll', preventScroll);
  }, 2000);
})();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
