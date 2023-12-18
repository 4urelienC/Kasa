import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/index.css'
import Home from './pages/Home/'
//import Fiches from './pages/Fiches/'
import Header from './components/Header'
import Footer from './components/Footer'
import Error from './components/Error'

import Collapse from './components/Collapse'
 
ReactDOM.render(
    <React.StrictMode>
        <div className="main-page">
        <Router>
          <Header />
          <Collapse title='bonjour' text='ceci est un text ma gueule !!!'/>
              <Routes>
                  <Route path="/" element={<Home />} />
                  {/* <Route path="/fiche-logement" element={<Fiches />} /> */}
                  <Route path="*" element={<Error />} />
              </Routes>
          <Footer />
        </Router>
        </div>
    </React.StrictMode>,
document.getElementById('root')
)