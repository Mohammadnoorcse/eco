import React from 'react'
import "./footer.css"
import {Link} from "react-router-dom"
export default function Footer() {
  return (
    <>
    <div className="top-footer content-center w-100">
        <div className="top-footer-content content">
            <div className="top-footer-content-1">
                <div>
                    <i class="fa-regular fa-envelope"></i>
                </div>
                <div>
                    <span>SUBSCRIBE TO OUR NEWSLETTER</span>
                    <span>Get all the latest information on Events, Sales and Offers.</span>
                </div>
            </div>
            <div className="top-footer-content-2">
                <div>
                    <span>DOWNLOAD OUR NEW APP TODAY!</span>
                    <span>Dont Miss our mobile-only offers and shop with Android Play.</span>
                </div>
                <div>
                    <Link to="/">
                        Download
                    </Link>
                </div>
            </div>
        </div>
    </div>
     
     <div className="main-footer content-center w-100">
        <div className="main-footer-content content">
            <div>
                <div className="item-1">
                    <span>Ecom-Bazar</span>
                    <p>Got Question? Call us 9 AM- 10 PM</p>
                    <h1>01775296704</h1>
                </div>
                <div className="item-2">
                    <p>Follow Us</p>
                    <div>
                        <Link to="/"><i class="fa-brands fa-facebook"></i></Link>
                        <Link to="/"><i class="fa-brands fa-twitter"></i></Link>
                        <Link to="/"><i class="fa-brands fa-linkedin"></i></Link>
                        <Link to="/"><i class="fa-brands fa-youtube"></i></Link>
                    </div>
                </div>
            </div>
            <div>
                <span>COMPANY</span>
                <div>
                    <Link to="/">About Us</Link>
                    <Link to="/">Career</Link>
                    <Link to="/">Contact Us</Link>
                    <Link to="/">Privacy Policy</Link>
                    <Link to="/">Ecom-bazar Certified</Link>
                    <Link to="/">Terms & Condition</Link>
                    <Link to="/">Next/Same day delivery TC</Link>
                </div>
            </div>
            <div>
                <span>MY ACCOUNT</span>
                <div>
                    <Link to="/">Sign In</Link>
                    <Link to="/">Orders</Link>
                    <Link to="/">Addresses</Link>
                    <Link to="/">My Wishlist</Link>
                    <Link to="/">Order History</Link>
                    <Link to="/">Track My Order</Link>
                    
                </div>
            </div>
            <div>
                <span>CUSTOMER SERVICE</span>
                <div>
                    <Link to="/">Payment Methods</Link>
                    <Link to="/">Support Center</Link>
                    <Link to="/">How To Shop On Ecom-bazar</Link>
                    <Link to="/">Featured Recommendation</Link>
                    <Link to="/">Cancellation, Return & Refund</Link>
                
                </div>
            </div>

        </div>
     </div>
 
    </>
  )
}
