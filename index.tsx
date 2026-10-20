import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Old hash links (/#/roles) land on the matching path. Only the six known routes are
// rewritten, and a failure here must never stop the app from mounting.
const LEGACY_ROUTES = ['/', '/understanding-ai', '/roles', '/uses', '/tools', '/about'];
try {
  const legacy = window.location.hash.slice(1).split(/[?#]/)[0].replace(/(.)\/+$/, '$1');
  if (window.location.hash.startsWith('#/') && LEGACY_ROUTES.includes(legacy)) {
    window.history.replaceState(null, '', window.location.hash.slice(1));
  }
} catch (e) {
  console.warn('Legacy hash redirect skipped:', e);
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);