import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom';
import UTMFrameChecker from './Components/UTMFrameChecker';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <UTMFrameChecker>
        <App />
      </UTMFrameChecker>
    </Router>
  </StrictMode>,
)
