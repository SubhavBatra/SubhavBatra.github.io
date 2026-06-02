import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from './context/ThemeContext'
import './index.css'
import App from './App'

// Apply theme before paint to avoid flash
const stored = localStorage.getItem('portfolio-theme')
const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches
const theme =
  stored === 'light' || stored === 'dark' ? stored : prefersLight ? 'light' : 'dark'
document.documentElement.classList.toggle('dark', theme === 'dark')
document.documentElement.setAttribute('data-theme', theme)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
