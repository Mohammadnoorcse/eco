import { useState } from "react";
import "./checkout.css";
import { PaymentData } from "./paymentdata";
import PaymentCard from "./PaymentCard";
import { useNavigate } from "react-router-dom";

const CheckOut = () => {
  const navigate = useNavigate();
  const [radio, setRadio] = useState(false);

  const submithandler = (e) =>{
    e.preventDefault();
    navigate("/download");
  }
  return (
    <div className="checkout w-100 content-center">
      <div className="checkout-content content">
        <div className="checkout-content-1">
          <h3>Checkout Page</h3>
          <div className="checkout-item">
              <form action="" onSubmit={submithandler}>
              <div className="checkout-item-1">
              <div>
                <span>Name</span>
                <input type="text" />
              </div>
              <div>
                <span>Last Name</span>
                <input type="text" />
              </div>
            </div>
            <div className="checkout-item-1">
              <div>
                <span>Email</span>
                <input type="email" />
              </div>
              <div>
                <span>Phone number</span>
                <input type="text" />
              </div>
            </div>
            <div className="checkout-item-1">
              <div>
                <span>Country</span>
                <input type="text" />
              </div>
              <div>
                <span>City</span>
                <input type="text" />
              </div>
            </div>
            <div className="checkout-item-2">
              <div>
                <span>Street Address</span>
                <input type="text" />
              </div>
            </div>
            <div className="checkout-item-1">
              <div>
                <span>Area</span>
                <input type="text" />
              </div>
              <div>
                <span>Post Code</span>
                <input type="text" />
              </div>
            </div>
            <div className="checkout-item-3">
              <span>Payment Method</span>
              <div className="checkout-checkbox">
                <div>
                  <input
                    type="radio"
                    id="cashondelivery"
                    name="payment"
                    value="cashondelivery"
                    onClick={() => setRadio(false)}
                  />
                  <label for="cashondelivery"> Cash On Delivery</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="Online"
                    name="payment"
                    value="Online"
                    onClick={() => setRadio(true)}
                  />
                  <label for="Online"> Online</label>
                </div>
              </div>
              {radio ? (
                <>
                  <div className="checkout-card">
                    <div className="checkout-payment">
                      {PaymentData.map((value) => (
                        <PaymentCard key={value.id} value={value} />
                      ))}
                    </div>
                    <div className="checkout-card-input">
                      <span>TransId</span>
                      <input type="text" />
                    </div>
                  </div>
                </>
              ) : (
                <></>
              )}

              <button className="checkout-submit">submit</button>
            </div>
             </form>
          </div>
        </div>
        {/* <div className="checkout-content-2">
           <h3></h3>
         </div> */}
      </div>
    </div>
  );
};

export default CheckOut;
