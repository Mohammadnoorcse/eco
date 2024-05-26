import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, register } from "../../Redux/actions/userAction";
import { useAlert } from "react-alert";
import Loader from "../loader/Loader";

// import axios from "axios";

// const postData = async(data)=>{
//   const res = await axios.post("http://localhost:4000/api/v1/register",data);
//   if(res.data.success){
//     console.log('secccc')
//   }
// }
export const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const alert = useAlert();
  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.userdata
  );

  const submitHandler = (e) => {
    e.preventDefault();
    //dispatch
    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("password", password);
    if (password === confirmPassword) {
      dispatch(register(myForm));
    } else {
      alert.error("Please Enter the password and confirmpassword same");
      dispatch(clearErrors());
    }

    // postData(myForm);
  };

  const redirect = location.search ? location.search.split("=")[1] : "/";
  const navigate = useNavigate();
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (isAuthenticated) {
      navigate(redirect);
      alert.success("Successfully Register");
    }
  }, [dispatch, error, alert, navigate, isAuthenticated, redirect]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="login w-100 content-center">
          <div className="login-content content">
            <div className="login-card">
              <form action="" onSubmit={submitHandler}>
                <span className="header">Sign Up</span>
                <div style={{ marginTop: "1.5rem", marginBottom: "0.5rem" }}>
                  <span>Name</span>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div>
                  <span>E-mail</span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <span>Password</span>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div style={{ marginTop: ".5rem" }}>
                  <span>Confirm Password</span>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                <button type="submit">Register</button>
                <div className="or">
                  <span>OR</span>
                </div>
              </form>
              <div className="login-text">
                <span>
                  Already a User <Link to="/login">Login</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
