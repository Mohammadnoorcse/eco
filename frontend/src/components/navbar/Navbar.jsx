import { useState } from "react";
import Topnavbar from "./Topnavbar";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import { logout } from "../../Redux/actions/userAction";


export default function Navbar() {
  const dispatch = useDispatch();
  const alert = useAlert();
 

  const [showItem,setShowItem] = useState(false);
  const {user } = useSelector((state) => state.userdata);

  function logoutUser() {
    dispatch(logout());
    alert.success("Logout Successfully");
  }

  return (
    <>
      <Topnavbar />
      <div className="navbar content-center w-100">
        <div className="navbar-content content">
          <div className="navbar-content-1">
            <Link to="/">Ecom-Bazar</Link>
          </div>
          <div className="navbar-content-2">
            <form action="">
              <input type="text" />
              <button type="submit">
                <i class="fas fa-search" style={{ color: "white" }}></i>
              </button>
            </form>
            <div className="search-result">
              <Link to="/">a</Link>
              <Link to="/">a</Link>
              <Link to="/">a</Link>
              <Link to="/">a</Link>
              <Link to="/">a</Link>
              <Link to="/">a</Link>
              <Link to="/">a</Link>
              <Link to="/">a</Link>
            </div>
          </div>
          <div className="navbar-content-3">
            <div className="navbar-content-3-1">
              {user && user ? (
                <>
                  <span
                    className="navbar-content-3-1-header"
                    onClick={() => setShowItem(true)}
                  >
                    {user.name} ⬇
                  </span>
                  <div
                    className={
                      showItem
                        ? "navbar-content-3-1-item"
                        : "navbar-content-3-1-item-display-none"
                    }
                  >
                    <div className="navbar-content-3-1-item-title">
                      <div className="navbar-content-3-1-item-title-1">
                        <img
                          src="https://images.othoba.com/images/thumbs/0578718_special-weekly-offer.jpeg"
                          alt=""
                        />
                        {/* <span>Noor</span> */}
                      </div>
                      <div className="navbar-content-3-1-item-title-2">
                        <span onClick={() => setShowItem(false)}>x</span>
                      </div>
                    </div>
                    <div className="navbar-content-3-1-item-content">
                      {user.role === "user" && <Link to="/deshboard">Admin</Link>}
                      <Link to="/profile">Profile</Link>
                      <Link to="/profile">Profile</Link>
                      <Link to="/profile">Profile</Link>
                      <Link to="/profile">Profile</Link>
                      <Link onClick={()=>logoutUser()}>LogOut</Link>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <i class="fa-regular fa-user"></i>
                  <Link to="/login">sign in</Link>
                </>
              )}
            </div>
            <div className="navbar-content-3-2">
              <div>
                <Link to="/">
                  <i class="fa-regular fa-heart"></i>
                  <span>wishList</span>
                </Link>
              </div>
              <div>
                <Link to="/">
                  <i class="fa-solid fa-code-compare"></i>
                  <span>compare</span>
                </Link>
              </div>
              <div className="navbar-content-3-2-3">
                <Link to="/cart">
                  <i class="fa-solid fa-cart-shopping"></i>
                  <span>cart</span>
                  <span className="items">0</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-navbar content-center w-100">
        <div className="mobile-navbar-content content">
          <div className="mobile-navbar-content-1">
            <div className="navbar-content-1">
              <Link to="/">Ecom-Bazar</Link>
            </div>
            <div className="navbar-content-3">
              <div className="navbar-content-3-1">
                {/* <i class="fa-regular fa-user"></i>
                <Link to="/login">sign in</Link>
                 
                <div className={showItem?"navbar-content-3-1-item":"navbar-content-3-1-item-display-none"}>
                <div className="navbar-content-3-1-item-title">
                  <div className="navbar-content-3-1-item-title-1">
                    <img src="https://images.othoba.com/images/thumbs/0578718_special-weekly-offer.jpeg" alt="" />
                    
                  </div>
                  <div className="navbar-content-3-1-item-title-2">
                    <span onClick={()=>setShowItem(false)}>x</span>
                  </div>
                </div>
                <div className="navbar-content-3-1-item-content">
                  <Link to="/profile">Profile</Link>
                  <Link to="/profile">Profile</Link> 
                  <Link to="/profile">Profile</Link>
                  <Link to="/profile">Profile</Link>
                  <Link to="/profile">Profile</Link>

                </div> 


                
              </div> */}

                {user && user ? (
                  <>
                    <span
                      className="navbar-content-3-1-header"
                      onClick={() => setShowItem(true)}
                    >
                      {user.name}⬇
                    </span>
                    <div
                      className={
                        showItem
                          ? "navbar-content-3-1-item"
                          : "navbar-content-3-1-item-display-none"
                      }
                    >
                      <div className="navbar-content-3-1-item-title">
                        <div className="navbar-content-3-1-item-title-1">
                          <img
                            src="https://images.othoba.com/images/thumbs/0578718_special-weekly-offer.jpeg"
                            alt=""
                          />
                          {/* <span>Noor</span> */}
                        </div>
                        <div className="navbar-content-3-1-item-title-2">
                          <span onClick={() => setShowItem(false)}>x</span>
                        </div>
                      </div>
                      <div className="navbar-content-3-1-item-content">
                        {user.role === "user" && (
                          <Link to="/deshboard">Admin</Link>
                        )}
                        <Link to="/profile">Profile</Link>
                        <Link to="/profile">Profile</Link>
                        <Link to="/profile">Profile</Link>
                        <Link to="/profile">Profile</Link>
                        <Link to="/profile">Profile</Link>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <i class="fa-regular fa-user"></i>
                    <Link to="/login">sign in</Link>
                  </>
                )}
              </div>

              <div className="navbar-content-3-2">
                <div>
                  <Link to="/">
                    <i class="fa-regular fa-heart"></i>
                    <span>wishList</span>
                  </Link>
                </div>
                <div>
                  <Link to="/">
                    <i class="fa-solid fa-code-compare"></i>
                    <span>compare</span>
                  </Link>
                </div>
                <div className="navbar-content-3-2-3">
                  <Link to="/cart">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <span>cart</span>
                    <span className="items">0</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mobile-navbar-content-2">
            <form action="">
              <input type="text" />
              <button type="submit">
                <i class="fas fa-search" style={{ color: "white" }}></i>
              </button>
            </form>
            <div className="search-result">
              <Link to="/">a</Link>
              <Link to="/">a</Link>
              <Link to="/">a</Link>
              <Link to="/">a</Link>
              <Link to="/">a</Link>
              <Link to="/">a</Link>
              <Link to="/">a</Link>
              <Link to="/">a</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
