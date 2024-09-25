import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Father } from './components/Father'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Father />
  </StrictMode>,
)
