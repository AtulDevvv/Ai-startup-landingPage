import React from 'react'
import Button from './Components/Button'
import ButtonGradient from "./assets/svg/ButtonGradient"
import Header from './Components/Header'
import Hero from './Components/Hero'
import Notification from './Components/design/Notification'
import Benefits from './Components/Benefits'
import Collaboration from './Components/Collaboration'
import Services from './Components/Services'
import Pricing from './Components/Pricing'

function App() {
  return (
    <div className=' '>
      <div className=' pt-4 lg:pt[5.25rem overflow-hidden'>

      </div>
      <Header/>
      <Hero/>
  <Benefits/>
  <Collaboration/>
  <Services/>
  <Pricing/>
    
<ButtonGradient/>
    </div>
  )
}

export default App