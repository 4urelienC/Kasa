import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/index.css'
import Home from './pages/Home/'
import Fiches from './pages/Fiches/'
import APropos from './pages/APropos/'
import Header from './components/Header'
import Footer from './components/Footer'
import Error from './components/Error'
 
ReactDOM.render(
    <React.StrictMode>
        <div className="main-page">
        <Router>
          <Header />
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/a-propos" element={<APropos />} />
                  <Route path="/fiche-logement/:title" element={<Fiches />} />
                  <Route path="/erreur" element={<Error />} />
                  <Route path="*" element={<Error />} />
              </Routes>
          <Footer />
        </Router>
        </div>
    </React.StrictMode>,
document.getElementById('root')
)