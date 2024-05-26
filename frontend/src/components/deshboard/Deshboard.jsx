import React from 'react'
import "./deshboard.css"

import {cardItem} from "./data.js"
import Card from './Card.jsx'
import EarnChart from './EarnChart.jsx'
import DeshboardTable from './DeshboardTable.jsx'
import StockTable from './StockTable.jsx'
import DeshboardSidebar from './DeshboardSidebar.jsx'
export default function Deshboard() {
  return (
    <div className='deshboard content-center w-100 '>
        <div className="deshboard-content content">
            <div className="deshboard-content-item">
                {/* <div className="deshboard-sidebar">
                    <div className="deshboard-sidebar-title">
                        <span>Ecom-Bazar</span>
                    </div>
                    <div className="deshboard-sidebar-value">
                        <div>
                            <Link to="/">
                             <span><i class="fa-solid fa-landmark"></i></span>
                             <span>Deshboard</span>
                            </Link>
                        </div>
                        <div>
                            <Link to="/">
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
                </div> */}
                <DeshboardSidebar/>
                 <div className="deshboard-item">

                    <div className="deshboard-item-title">
                        <div className="deshboard-item-title-left">
                            <span>Deshboard</span>
                        </div>
                        <div className="deshboard-item-title-right">
                        <div className="deshboard-item-title-right-1">
                            <input type="text" placeholder='Search here' />
                        </div>
                        <div className="deshboard-item-title-right-2">
                            <img src="https://as2.ftcdn.net/v2/jpg/02/14/74/61/1000_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg" alt="" />
                        </div>
                        </div>
                    </div>
                    <div className="deshboard-item-value">
                        <div className="deshboard-item-value-1">
                            <div className="deshboard-item-value-1-1">
                                {cardItem.map((value) =>(
                                    <Card key={value.id} value= {value}/>
                                ))}
                            </div>
                            <div className="deshboard-item-value-1-2">
                                <div className="deshboard-item-value-1-2-title">
                                    <div>
                                        <span>Earning Analytics</span>
                                    </div>
                                    <div>
                                        <span>month</span>
                                        <i class="fa-solid fa-angle-down"></i>
                                    </div>
                                </div>
                                <div className="deshboard-item-value-1-2-earn">
                                    <EarnChart/>
                                </div>
            
                            </div>
                            <div className="deshboard-item-value-1-3">
                                <div className="deshboard-item-value-1-3-title">
                                    <span>Top Selling Product</span>
                                    <span>Week <i class="fa-solid fa-angle-down"></i></span>
                                </div>
                                <div className="deshboard-item-value-1-3-table">
                                    <DeshboardTable/>
                                </div>
                            </div>
                        </div>

                         <div className="deshboard-item-value-2">
                            <div className="deshboard-item-value-2-1">
                                <StockTable/>
                            </div>
                             <div className="deshboard-item-value-2-2">
                                <div className="deshboard-item-value-2-2-title">
                                    <span>Recent Order</span>
                                    <span>...</span>
                                </div>
                                <div className="deshboard-item-value-2-2-value">
                                    <div className="deshboard-item-value-2-2-value-item">
                                        <div className='deshboard-item-value-2-2-value-item-1'>
                                            <img src="https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D" alt="" />
                                            <span>Head Phone</span>
                                        </div>
                                        <div className='deshboard-item-value-2-2-value-item-2'>
                                             <span>$20</span>
                                        </div>
                                    </div>
                                    <div className="deshboard-item-value-2-2-value-item">
                                        <div className='deshboard-item-value-2-2-value-item-1'>
                                            <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                                            <span>Watch</span>
                                        </div>
                                        <div className='deshboard-item-value-2-2-value-item-2'>
                                             <span>$40</span>
                                        </div>
                                    </div>
                                    <div className="deshboard-item-value-2-2-value-item">
                                        <div className='deshboard-item-value-2-2-value-item-1'>
                                            <img src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                                            <span>Camera</span>
                                        </div>
                                        <div className='deshboard-item-value-2-2-value-item-2'>
                                             <span>$60</span>
                                        </div>
                                    </div>
                                    <div className="deshboard-item-value-2-2-value-item">
                                        <div className='deshboard-item-value-2-2-value-item-1'>
                                            <img src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                                            <span>Sun glasses</span>
                                        </div>
                                        <div className='deshboard-item-value-2-2-value-item-2'>
                                             <span>$20</span>
                                        </div>
                                    </div>
                                    <div className="deshboard-item-value-2-2-value-item">
                                        <div className='deshboard-item-value-2-2-value-item-1'>
                                            <img src="https://images.unsplash.com/photo-1503602642458-232111445657?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                                            <span>Table</span>
                                        </div>
                                        <div className='deshboard-item-value-2-2-value-item-2'>
                                             <span>$23</span>
                                        </div>
                                    </div>
                                    <div className="deshboard-item-value-2-2-value-item">
                                        <div className='deshboard-item-value-2-2-value-item-1'>
                                            <img src="https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D" alt="" />
                                            <span>Water Bottle</span>
                                        </div>
                                        <div className='deshboard-item-value-2-2-value-item-2'>
                                             <span>$20</span>
                                        </div>
                                    </div>
                                    <div className="deshboard-item-value-2-2-value-item">
                                        <div className='deshboard-item-value-2-2-value-item-1'>
                                            <img src="https://images.unsplash.com/photo-1560343090-f0409e92791a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                                            <span>Shoes</span>
                                        </div>
                                        <div className='deshboard-item-value-2-2-value-item-2'>
                                             <span>$10</span>
                                        </div>
                                    </div>
                                    <div className="deshboard-item-value-2-2-value-item">
                                        <div className='deshboard-item-value-2-2-value-item-1'>
                                            <img src="https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D" alt="" />
                                            <span>Cosmetics</span>
                                        </div>
                                        <div className='deshboard-item-value-2-2-value-item-2'>
                                             <span>$5</span>
                                        </div>
                                    </div>
                                </div>

                             </div>
                         </div>
                    </div>

                 </div>
            </div>
        </div>
    </div>
  )
}

