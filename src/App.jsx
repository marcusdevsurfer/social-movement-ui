// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import { UnitsBox } from "./components/UnitsBox"
import { NavbarApp } from "./components/NavbarApp"
import { CarrierProfile } from "./components/CarrierProfile"
import { Route } from "wouter"

function App() {
  return (
    <>
      <NavbarApp />
      {/* Unidades compomente */}
      <Route path="/" component={UnitsBox} />
      {/* Perfil de la empresa */}
      <Route path="/profile/:id" component={CarrierProfile} />
    </>
  )
}

export default App
