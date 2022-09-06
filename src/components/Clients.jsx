import React from 'react'
import { airbnb, binance, coinbase, dropbox } from "../assets/index";
import { clients } from "../db/data";

const Clients = () => {
  return (
    <div className="clit">
       {/* {feedback.map((feedbacks) => {
          const {id, img} = feedbacks;
          return(  
            <div className="t-content" key={id}>
                  <img src={img} alt="icon" />
              </div> 
          );
        })} */}
      <img src={airbnb} alt="clients" />
      <img src={binance} alt="clients" />
      <img src={coinbase} alt="clients" />
      <img src={dropbox} alt="clients" />
    </div>
  )
}

export default Clients