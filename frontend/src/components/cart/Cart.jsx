
import { Link } from "react-router-dom"
import "./cart.css"
export default function Cart() {
  return (
    <div className="cart content-center w-100">
      <div className="cart-content content">
        <div className="cart-content-1">
          <h3>Your shopping cart</h3>
          <div className="cart-item">
             <div className="cart-item-1">
              <div>
                <img src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" alt="" />
              </div>
              <div>
                <span>Winter jacket for men and lady</span>
                <span>Yellow, Jeans</span>
              </div>
             </div>
             <div className="cart-item-2">
              <div>
                <button>+</button>
                <span>1</span>
                <button>-</button>
              </div>
              <div>
                <span>$1156.00</span> 
                <span>$460.00 / per item</span>
              </div>
             </div>
             <div className="cart-item-3">
               <button>Remove</button>
             </div>
          </div>
        </div>
        <div className="cart-content-2">
          <div className="cart-content-2-1">
            <span>Have coupon?</span>
            <div>
              <input type="text" placeholder="coupon code"/>
              <button>Apply</button>
            </div>
          </div>
          <div className="cart-content-2-2">
            <div>
              <span>Total price:</span>
              <span>$329.00</span>
            </div>
            <div>
              <span>Discount:</span>
              <span>-$60.00</span>
            </div>
            <div>
              <span>TAX:</span>
              <span>$14.00</span>
            </div>
            <div className="border"></div>
            <div>
              <span>Total price:</span>
              <span>$283.00</span>
            </div>
            <Link className="purchase" to="/checkout">MAKE PURCHASE</Link>
            <Link to="/all-product" className="back-btn">BACK TO SHOP</Link>
          </div>
        </div>
      </div>

    </div>
  )
}
