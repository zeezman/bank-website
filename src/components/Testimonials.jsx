import React from 'react'
import { quotes } from "../assets/index";
import {feedback} from '../db/data'

const Testimonials = () => {
  return (
   <div className="mt">
      <div className="rol-right">
        <div className="h1">What people are <br /> saying about us</div>
        <div className="p">Everything you need accept card payments <br />
        and grow your business anywhere in the planet </div>
      </div>
    <div >
      <div className="test">

        {feedback.map((feedbacks) => {
          const {id,name, content, title, img} = feedbacks;
          return(  
            <div className="t-content" key={id}>
              <img src={quotes} alt="quotes logo" />
              <span>{content}</span>

                <div className="card-new">
                  <img src={img} alt="icon" />
                  <div className="text-flex">
                    {name} <br />
                    <span>{title}</span>
                  </div>
                </div>
              </div> 
          );
        })}
      </div>
    </div>
    <div className="gradient pink"></div>
   </div>
  )
}

export default Testimonials