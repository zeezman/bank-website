import React from 'react'
import { card } from "../assets/index";

const CardDeals = () => {
  return ( 
    <div className="cont">
       <div className="r-text new">
        <h1> Find a better card deal <br />
            in few easy steps.
        </h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br />
          Lorem ipsum dolor sit amet consectetur adipisicing <br />
          Lorem ipsum dolor sit amet consectetur.
         </p>

         <button className="btn">Get Started</button>
       </div>
       <div className="g-text card">
          <img src={card} alt="card icon" />
      </div>
    </div>
  )
}

export default CardDeals