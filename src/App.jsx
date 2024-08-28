// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import { UnitsBox } from "./components/UnitsBox"
import { NavbarApp } from "./components/NavbarApp"
import { CarrierProfile } from "./components/CarrierProfile"

function App() {
  return (
    <>
      <NavbarApp />

      {/* Unidades compomente */}
      <UnitsBox />

      {/* Perfil de la empresa */}
      <CarrierProfile/>


    </>
  )
}

export default App
