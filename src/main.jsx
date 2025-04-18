import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Add dark theme class to body
document.body.classList.add('dark-theme');
// Ensure content isn't constrained
document.body.style.minHeight = '100vh';
document.body.style.width = '100%';
document.body.style.display = 'block';
document.body.style.backgroundColor = '#121212';

// Apply dark theme to root element for consistent styling
const rootStyles = document.documentElement.style;
rootStyles.setProperty('--card-bg', '#1e1e1e');
rootStyles.setProperty('--card-text', '#e0e0e0');
rootStyles.setProperty('--card-border', '#333333');

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
