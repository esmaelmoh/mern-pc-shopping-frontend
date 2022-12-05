import React, { useContext, useRef, useState } from 'react'
import { Context } from "../../context/Context";
import axios from "axios";
import './Login.css'
const Login = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching ,error} = useContext(Context);
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("http://localhost:5000/backend/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      console.log(res.data)
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      
      res.data && window.location.replace("/admin");

    } catch (err) {
      console.log(err)
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <div>
        
    <form action="" className='login-form' onSubmit={handleSubmit}>
        <label htmlFor="">Name:</label>
        <input className='login-field' required type="text" name="" placeholder='Esmael Mohammed' ref={userRef} id="" />
        {/* <label htmlFor="">Email Address</label>
        <input type="text" name="" placeholder='Esmael Mohammed' id="" /> */}
        <label htmlFor="">Password:</label>
        <input className='login-field' required type="password" name="" placeholder='................'  ref={passwordRef} id="" />
        <button type="submit" className='login-btn'>Login </button>
        {error?<p style={{color:'red', textAlign:'center',opacity:'0.6'}}>please enter correct credentials</p>:''}
    </form>
    </div>
  )
}

export default Login