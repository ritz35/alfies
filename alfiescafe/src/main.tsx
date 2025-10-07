import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import Header from './components/header.tsx'
import Footer from './components/footer.tsx'
import Homepage from './pages/homepage.tsx'
import AboutPage from './pages/aboutpage.tsx'
import MenuPage from './pages/menupage.tsx'
import ContactsPage from './pages/contactpage.tsx'

import './assets/fonts.css'
import './assets/colours.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/contact" element={<ContactsPage />} />
      </Routes>
      <Footer />
    </Router>
  </StrictMode>,
)
