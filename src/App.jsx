import React, {useEffect} from 'react'
import Nav from './component/Headers'
import Home from './component/Home'
import Contact from './component/Contact'
import Tracking from './component/Tracking'
import Services from './component/Services'
import Footer from './component/Footer'
import AOS from 'aos'
import 'aos/dist/aos.css'


import{BrowserRouter as Router, Routes, Route} from "react-router-dom"


function App() {
  useEffect(() =>{
    AOS.init({
      duration:3000
    })
  })
  return (
    <div>
      <Nav/>
          <Router>
            <Routes>
              <Route exact path='/' element={<Home/>}/>
              <Route exact path='/services' element={<Services/>}/>
              <Route exact path='/contact' element={<Contact/>}/>
              <Route exact path='/Tracking' element={<Tracking/>}/>
            </Routes>
          </Router>
          <Footer/>
      
      
    </div>
  )
}

export default App