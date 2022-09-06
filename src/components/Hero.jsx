import React from 'react'
import { arrowUp, discount, robot } from "../assets/index";


const Hero = () => {
  return (
    <>
    <div className="gradient"></div>
    <div className="row">
      <div className="text-container">
        <div className="text-upper">
          <img src={discount} alt="discount" />
          <p>20% <span>DISCOUNT FOR</span> 1 MONTH <span>ACCOUNT</span> </p>
        </div>
        <div className="text-lower">
          The Next  <br />
          <span className='gradient-blue'>Generation </span> <br />
           Payment Method.
        </div>
        <div className="desc">
          <p>
            Our team of experts uses methodology to identify <br /> the
            credits card most likely to fits your needs. <br />
            We examine annual percentage rates, annual fees.
          </p>
        </div>
        <div className="g">
          <div>
            Get <img src={arrowUp} alt="arrow up" /> <br /> started 
          </div>
        </div>
      </div>
      <div className="bg">
        <img src={robot} alt="robot" />
        <div className="gradient-left"></div>
      </div>
    </div>
    </>
  )
}

export default Hero