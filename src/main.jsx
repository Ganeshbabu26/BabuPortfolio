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

window.addEventListener('appinstalled', () => {
  console.log('✅ PWA Installed!');
});

