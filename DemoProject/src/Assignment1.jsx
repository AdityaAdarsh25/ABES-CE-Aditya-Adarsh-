import React from 'react'
import TopBody from './Components/Assignment1/TopBody.jsx'
import CardA1 from './Components/Assignment1/CardA1.jsx'
import NavbarA1 from './Components/Assignment1/NavbarA1.jsx'
import Footer from './Components/Assignment1/Footer1.jsx'
import Navbar from './Components/Navbar.jsx'

function Assignment1() {
  return (
    <div>
      <NavbarA1/>
      <br/>
      <TopBody/>
      <br/>
      <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
        <CardA1 food="Pizza" cost="300" />
        <CardA1 food="Burger" cost="200" />
        <CardA1 food="Coke" cost="50" />
    </div>
    <br/>
    <Footer/>
    <br/>
    </div>
    
  )
}

export default Assignment1
