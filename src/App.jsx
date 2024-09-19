// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import { UnitsBox } from "./components/UnitsBox"
import { NavbarApp } from "./components/NavbarApp"
import { CarrierProfile } from "./components/CarrierProfile"
import { Route, Router, useLocation } from "wouter"
import { useEffect } from 'react'

function App() {
  const [location, setLocation] = useLocation()
  
  const ScrollToTop = () => {
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [location]);
    return null;
  }

  return (
    <>
      <NavbarApp />
      <Router>
        <ScrollToTop />
        <Route path="/" component={UnitsBox} />
        <Route path="/profile/:id" component={CarrierProfile} />
      </Router>
    </>
  )
}

export default App
