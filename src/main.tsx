import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import '@fontsource-variable/inter'
import '@/assets/globals.css'
import { ThemeProvider } from './components/ui/theme-provider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="with-story-ui-theme">
      <App />
    </ThemeProvider>
  </StrictMode>
)
