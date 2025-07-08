import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import App from './App.jsx';
import { Babu } from './components/Babu.jsx';

// Choose whether to render App or Babu
const root = createRoot(document.getElementById('root'));

// Option 1: Render full App
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Option 2: Render Babu only (for testing or standalone use)
// root.render(<Babu />);
// main.jsx or index.js

// Remove existing service workers
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then(registrations => {
    for (let registration of registrations) {
      registration.unregister().then(() => {
        console.log('✅ Service worker unregistered.');
      });
    }
  });
}
