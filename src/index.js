import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global-styles.css';

import { Hooks } from './templates/Hooks';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Hooks />
  </React.StrictMode>,
);
