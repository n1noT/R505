import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ToastContextProvider } from "./contexts/ToastContext";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastContextProvider>
      <App />
    </ToastContextProvider>
  </StrictMode>
)
