import React from 'react'
import {navLinks} from '../db/data'
import { logo } from "../assets/index";

const Navbar = () => {

  return (
    <div className='navbar'>
      <img src={logo} alt="company logo" />

      <div className="links">
        <ul>
            {navLinks.map((link) => {
              const { id, url, title} = link;
              return (
                <li key={id}>
                  <a href={url}>{title}</a>
                </li>
              );
            })}
          </ul>
      </div>
    </div>
  )
}

export default Navbar