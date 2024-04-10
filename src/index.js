import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';
import { SpeedInsights } from '@vercel/speed-insights/react';

ReactDOM.render(
  <React.StrictMode>
    <SpeedInsights />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals(sendToVercelAnalytics);
