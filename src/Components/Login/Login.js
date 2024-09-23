import React,{useState} from 'react'
import { assets } from '../../assets/assets'
import './Login.css';

function Login({setLogin}) {
    const [currentstate,setCurrentstate]=useState("Login")
  return (
    <div className="login">
      <form className="login-container">
        <div className="login-title">
            <h2>{currentstate}</h2>
            <img onClick={()=>setLogin(false)} src={assets.cross_icon} alt=''/>
        </div>
        <div className="login-inputs">
            {currentstate==="Login"?<></>:<input type="text" placeholder='Enter Your Name' required />}             
            <input type="email" placeholder='Enter your Email' required/>
            <input type="password" placeholder='Enter Your Password' required/>
        </div>
        <button>{currentstate==="Sign Up"?"Create account":"Login"}</button>
        <div className="login-condition">
            <input type="checkbox" required/>
        <p>By continuing,i agree to the terms of use &privacy policy</p>
        </div>
        {currentstate==="Login"?
        <p>Create a new account ? <span onClick={()=>setCurrentstate("Sign Up")}>Click here</span></p>
        :<p>Already have an account? <span onClick={()=>setCurrentstate("Login")}>Login here</span></p> }
      </form>
    </div>
  )
}

export default Login
