import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "./Auth";
import firebaseConfig from "../config.js";

const LogIn = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    try {
      firebaseConfig.auth().signInWithEmailAndPassword(email.value, password.value);
    } catch (error) {
      alert(error);
    }
  };
  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <Redirect to="/dashboard" />;
  }
  return (

    <div className="limiter">
    <div className="container-login100" style={{ backgroundImage: `url(https://itsabouttime.run/wp-content/uploads/2013/10/background-51.jpg)` }}>
        <div className="wrap-login100 p-t-30 p-b-50">
            <span className="login100-form-title p-b-41">
                Account Login
            </span>
            <form 
                className="login100-form validate-form p-b-33 p-t-5"
                onSubmit={handleSubmit}
            >
                <div className="wrap-input100 validate-input" data-validate="Enter username">
                    <input 
                        className="input100" 
                        type="text" 
                        name="email" 
                        
                        placeholder="Email" 
                        
                    />
                    <span className="focus-input100" data-placeholder="&#xF002;"></span>
                </div>
                
                <div className="wrap-input100 validate-input" data-validate="Enter password">
                    <input 
                        
                        
                        className="input100" 
                        type="password" 
                        name="password" 
                        placeholder="Password"
                        
                    />
                    <span className="focus-input100" data-placeholder="&#xf11c;"></span>
                </div>
                
                <div className="container-login100-form-btn m-t-32">
                    
                    <button 
                        className="login100-form-btn" 
                        type="submit"
                        >
            
                        Login
                    </button>
                </div>
                <div>
                    <p className="input100 p-l-130  m-t-32">Forgot Password?</p>
                </div>    
            </form>
        </div>
    </div>
</div>


       


    // <>
    //   <h1>Log In</h1>
    //   <form onSubmit={handleSubmit}>
    //     <label for="email">Email</label>
    //     <input type="email" name="email" placeholder="Email" />
    //     <label for="password">Password</label>
    //     <input type="password" name="password" placeholder="Password" />
    //     <button type="submit">Submit</button>
    //   </form>
    // </>
  );
};

export default LogIn;