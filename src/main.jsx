import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';  // Wrap with BrowserRouter
import './index.css';
import AppRoutes from './routes'; // Import AppRoutes

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>  {/* Wrap AppRoutes with BrowserRouter */}
      <AppRoutes />
    </BrowserRouter>
  </StrictMode>
);
