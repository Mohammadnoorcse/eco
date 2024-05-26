import React from 'react'
import {Link} from "react-router-dom"
export default function Topnavbar() {
  return (
    <div className='topnavbar content-center w-100'>
        <div className="topnavbar-content content">
            <Link to="/">WELCOME TO Ecombazar.COM</Link>
            <Link to="/">Sell On Ecombazar</Link>
        </div>
    </div>
  )
}
