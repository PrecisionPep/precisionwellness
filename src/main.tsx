import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Remove hash from URL to prevent anchor scrolling on initial load
if (window.location.hash) {
  window.history.replaceState(null, null, window.location.href.split('#')[0]);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
