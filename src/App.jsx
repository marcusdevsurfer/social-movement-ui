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
      {/* Unidades compomente
      <Route path={'/'} component={UnitsBox} />

      {/* Perfil de la empresa 
      <Router path="/profile" >
        <Route path="/:id" component={CarrierProfile} >
        </Route>
      </Router> */}

      <Switch>
        <Route path="/" component={UnitsBox} />
        <Route path="/profile/:id" component={CarrierProfile} />
        {/* 
     in wouter, any Route with empty path is considered always active. 
     This can be used to achieve "default" route behaviour within Switch. 
     Note: the order matters! See examples below.
  */}
        <Route>This is rendered when nothing above has matched</Route>
      </Switch>;
    </>
  )
}

export default App
