import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

// Components
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Pricing from './pages/Pricing'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Quote from './pages/Quote'

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Header />
      
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={ <Pricing /> } />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </AnimatePresence>
      
      <Footer />
    </div>
  )
}

export default App
