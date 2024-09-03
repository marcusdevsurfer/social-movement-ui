// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import { UnitsBox } from "./components/UnitsBox"
import { NavbarApp } from "./components/NavbarApp"
import { CarrierProfile } from "./components/CarrierProfile"
import { Route, Router, Switch } from "wouter"
import { UnitCard } from './components/UnitCard'

function App() {
  return (
    <>
      <NavbarApp />
      <Router base='/app'>
        {/* Unidades compomente */}
        <Route path="/" component={UnitsBox} />
        {/* Perfil de la empresa */}
        <Router path="/profile/:id">
          <Route path={'/:id'} component={UnitCard}>
          </Route>
        </Router>
      </Router>
    </>
  )
}

export default App
