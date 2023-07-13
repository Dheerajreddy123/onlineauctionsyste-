import React from "react";
import { Link } from "react-router-dom";
import { Footer, Navbar } from "../components";
import { useState } from "react";

const Login = () => {
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');

   const usernameHandler = (e)=>{
    const username = e.target.value;
    if(username!==''){
      setUsername(username)
    }  
   }

   const passwordHandler = (e)=>{
    const password = e.target.value;
    if(username!==''){
      setPassword(password)
    }  
   }

   const submitHandler =async (e)=>{
    e.preventDefault()
    const url = 'http://localhost:3000/register'
    const details = {
       username,
       password
    }
    const options = {
       method: "POST",
       body: JSON.stringify(details)
    }
    await fetch(url, options)
   
  }


  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Login</h1>
        <hr />
        <div class="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form onSubmit={submitHandler}>
              <div class="my-3">
                <label for="display-4">Email address</label>
                <input
                  onChange={usernameHandler}
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
              </div>
              <div class="my-3">
                <label for="floatingPassword display-4">Password</label>
                <input
                  onChange={passwordHandler}
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
              </div>
              <div className="my-3">
                <p>New Here? <Link to="/register" className="text-decoration-underline text-info">Register</Link> </p>
              </div>
              <div className="text-center">
                <button class="my-2 mx-auto btn btn-dark" type="submit">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
