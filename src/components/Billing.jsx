import React from 'react'
import { bill, apple, google } from "../assets/index";

const Billing = () => {
  return (
  <div className="cont">
    <div className="gradient new"></div>
    <div className="g-text">
      <img src={bill} alt="bill icon" />
    </div>
    <div className="r-text new">
     <h1> Easily control your <br />
       billing & invoicing.
     </h1>
     <p>Lorem ipsum dolor sit amet consectetur Voluptatibus, <br />
       Lorem ipsum dolor sit amet, consectetur adi At. <br />
       Lorem ipsum dolor, sit amet consectetur 
      </p>
      <div className="b-flex">
        <span className="new-btn"><img src={apple} alt="apple" /></span>
        <span className="new-btn"><img src={google} alt="google" /></span>
      </div>
    </div>
    </div>
  )
}

export default Billing