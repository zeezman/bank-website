import React from 'react'
import { Billing, Business, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero, CardDeals } from "./components";
import './App.scss';

const App = () => {
  return (
    <>
      <div className="container">
        {/* Navbar component  */}
        <div className="header">
          <div className="nav">
            <Navbar />
          </div>
        </div>

        {/* Hero section  */}
        <div className="banner">
          <div className="hero">
            <Hero />
          </div>
        </div>

        {/* Other components  */}
        <div className="components">
          <div className="new__width">
          <Stats />
          <Business />
          <Billing />
          <CardDeals />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
          </div>
        </div>
      </div>
    </>
  )
}

export default App