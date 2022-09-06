import React from 'react'
import {stats} from '../db/data'


const Stats = () => {
  return (
    <div className="stats">
        {stats.map((stat) => {
              const { id, title, value} = stat;
              return (
                <div className="each"  key={id}>
                   <h1>{value}</h1>
                   <p>{title}</p>
                   <span className="v">|</span>
                </div>
              );
            })}
    </div>
  )
}

export default Stats