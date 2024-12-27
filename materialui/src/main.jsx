import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import App from './App.jsx'
import HideAppBar from './components/HideAppBar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HideAppBar />
  </StrictMode>,
)
