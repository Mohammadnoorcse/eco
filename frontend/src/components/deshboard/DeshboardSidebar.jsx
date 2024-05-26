import React from 'react'
import {Link} from "react-router-dom"
import "./sidebar.css"
export default function DeshboardSidebar() {
  return (
    <div className="deshboard-sidebar">
    <div className="deshboard-sidebar-title">
        <span>Ecom-Bazar</span>
    </div>
    <div className="deshboard-sidebar-value">
        <div>
            <Link to="/deshboard">
             <span><i class="fa-solid fa-landmark"></i></span>
             <span>Deshboard</span>
            </Link>
        </div>
        <div>
            <Link to="/deshboard/product">
             <span><i class="fa-solid fa-shirt"></i></span>
             <span>Product</span>
            </Link>
        </div>
        <div>
            <Link to="/">
             <span><i class="fa-solid fa-bicycle"></i></span>
             <span>Order</span>
            </Link>
        </div>
        <div>
            <Link to="/">
             <span><i class="fa-solid fa-check"></i></span>
             <span>Sales</span>
            </Link>
        </div>
        <div>
            <Link to="/">
             <span><i class="fa-solid fa-lock-open"></i></span>
             <span>Logout</span>
            </Link>
        </div>
    </div>
</div>
  )
}
