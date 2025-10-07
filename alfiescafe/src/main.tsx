import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/header.tsx'
import Footer from './components/footer.tsx'
import Homepage from './pages/homepage.tsx'
import './assets/fonts.css'
import './assets/colours.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <Homepage />
    <Footer />
  </StrictMode>,
)
