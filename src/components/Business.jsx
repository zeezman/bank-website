import React from 'react'
import {features} from '../db/data' 


const Business = () => {
  return (
    <div className="cont">
       <div className="r-text">
        <h1> You do the business, <br />
          we handle the money.
        </h1>
        <p>we the right credit card, you can improve your financial life, <br />
          by building credits, earning rewards and saving money.But <br />
          with hundreds of credit card on the markets.
         </p>

         <button className="btn">Get Started</button>
       </div>
       <div className="l-text">
        {features.map((feature) => {
          const {id, icon, title, content} = feature;
          return( 
            <div className="card-icon" key={id}>
              <img src={icon} alt="icon" />
              <div className="text-flex">
                {title} <br />
                <span>{content}</span>
              </div>
            </div>
          );
        })}
       </div>
    </div>
  )
}

export default Business