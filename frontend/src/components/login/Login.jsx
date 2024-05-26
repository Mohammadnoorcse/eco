import React, { useState, useEffect } from "react";
import "./login.css"
import {Link,useNavigate} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, login } from "../../Redux/actions/userAction";
import { useAlert } from "react-alert";
import Loader from "../loader/Loader";

export default function Login() {
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.userdata
  );

  const loginSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginEmail, loginPassword));
  };

  const redirect = location.search ? location.search.split("=")[1] : "/";
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (isAuthenticated) {
      navigate(redirect);
    }
  }, [dispatch, error, alert, navigate, isAuthenticated, redirect]);

  return (
      <>
      {loading?<Loader/>:
      
      <div className='login w-100 content-center'>
      <div className="login-content content">
          <div className="login-card">
          <form action="" onSubmit={loginSubmit}>
              <span className='header' >Sign in</span>
               <div style={{marginTop:"1.5rem",marginBottom:"0.5rem"}}>
                  <span>E-mail</span>
                  <input type="email" value={loginEmail}  onChange={(e) => setLoginEmail(e.target.value)}/>
               </div>
               <div>
                  <span>Password</span>
                  <input type="password" value={loginPassword}  onChange={(e) => setLoginPassword(e.target.value)}/>
               </div>
               <button type='submit'>Login</button>
               <div className='or'>
                  <span>OR</span>
                </div>
               
          </form>
            <div className='login-text'> 
              <span>New a User <Link to="/register">Sign Up</Link></span>
            </div>
          
          </div>
      </div>
  </div>
      }
      
      
      </>
  )
}
