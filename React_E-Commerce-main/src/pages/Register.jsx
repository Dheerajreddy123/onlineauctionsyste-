import React from 'react'
import { Footer, Navbar } from "../components";
import { Link } from 'react-router-dom';
import {useState} from 'react'
const Register = () => {
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
 
    const submitHandler = async (e) => {
        e.preventDefault();
        const url = 'http://localhost:3001/register';
        const details = {
          username,
          password
        };
        const options = {
          method: 'POST',
          body: JSON.stringify(details), // stringify the details object
          headers: {
            'Content-Type': 'application/json' // set the content type to JSON
          }
        };
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data);
      };      

    return (
        <>
            <Navbar />
            <div className="container my-3 py-3">
                <h1 className="text-center">Register</h1>
                <hr />
                <div class="row my-4 h-100">
                    <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
                        <form onSubmit={submitHandler}>
                            <div class="form my-3">
                                <label for="Name">Full Name</label>
                                <input
                                    onChange={usernameHandler}
                                    type="text"
                                    class="form-control"
                                    id="Name"
                                    placeholder="Enter Your Name"
                                />
                            </div>
                            {/* <div class="form my-3">
                                <label for="Email">Email address</label>
                                <input
                                    type="email"
                                    class="form-control"
                                    id="Email"
                                    placeholder="name@example.com"
                                />
                            </div> */}
                            <div class="form  my-3">
                                <label for="Password">Password</label>
                                <input
                                    onChange={passwordHandler}
                                    type="password"
                                    class="form-control"
                                    id="Password"
                                    placeholder="Password"
                                />
                            </div>
                            <div className="my-3">
                                <p>Already has an account? <Link to="/login" className="text-decoration-underline text-info">Login</Link> </p>
                            </div>
                            <div className="text-center">
                                <button class="my-2 mx-auto btn btn-dark" type="submit" >
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Register