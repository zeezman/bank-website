import React from 'react'
import {socialMedia, footerLinks} from '../db/data'
import { logo } from "../assets/index";


const Footer = () => {
  return (
    <div className="footer">
      <div className="row">
        <div className="ft">
          <img src={logo} alt="company logo" />
          <span>A new way to make the payments <br />easy,reliable and secure</span>
        </div> 
        <div className="pd">
          {footerLinks.map((footerLink) => { 
              return(  
                  <div className="colum" key={footerLink.title} >
                    <h4>
                      {footerLink.title}
                    </h4>
                    <ul >
                      {footerLink.links.map((link, index) => (
                        // const{name, link} = link
                        <li key={index} >
                         <a href={link.link}> {link.name} </a>  
                        </li> 
                      ))
                      }
                      </ul>
                  </div>                      
              );
            })}   
        </div>
      </div>  
      <br /> <br />   <hr /> <br />
      <div className="row">
        <div> Copyright Ⓒ 2022 HooBank. All Rights Reserved</div>
        <div className="social">
          {socialMedia.map((socialMedias) => {
            const {id, icon, link} = socialMedias;
            return(  
              <div className="link-bottom" key={id}>
                <a href={link}> <img src={icon} alt="just an icon" /></a>
              </div> 
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default Footer