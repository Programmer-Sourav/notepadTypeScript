import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router'
import { notePadContext, NotePadProvider } from './context/NotePadContext.tsx'

export {notePadContext}


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <NotePadProvider>
    <App />
    </NotePadProvider>
    </BrowserRouter>
  </StrictMode>,
)
