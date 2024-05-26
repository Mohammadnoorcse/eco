import React from 'react'
import "./home.css";
import {topsection} from "./home.js";
import {Link} from "react-router-dom"
function TopSection() {
    console.log(topsection)
  return (
    <div className='topsection content-center w-100'>
        <div className="topsection-content content">
            {topsection.map((value) => (
                <div key={value.id} className="topsection-card">
                    <Link to={value.link}>
                     <img src={value.img} alt=""  className='topsecation-card-img'/>
                       <span >{value.name}</span>
                    </Link>
                </div>
            ))}

        </div>
    </div>
  )
}

export default TopSection