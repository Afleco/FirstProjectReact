import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MiAnimal from './MiAnimal.jsx'
import AppGrid from './AppGrid.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MiAnimal />
    <AppGrid />
  </StrictMode>,
)
