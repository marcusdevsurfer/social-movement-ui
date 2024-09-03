// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import { UnitsBox } from "./components/UnitsBox"
import { NavbarApp } from "./components/NavbarApp"
import { CarrierProfile } from "./components/CarrierProfile"
import { Route, Switch } from "wouter"

function App() {
  return (
    <>
      <NavbarApp />
      <Switch>
        <Route path="/" component={UnitsBox} />
        <Route path="/profile/:id" component={CarrierProfile} />
        <Route>This is rendered when nothing above has matched</Route>
      </Switch>
    </>
  )
}

export default App
