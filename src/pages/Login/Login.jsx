import React, { useContext, useRef, useState } from 'react'
import { Context } from "../../context/Context";
import {useNavigate} from 'react-router-dom'
import axios from "axios";
import './Login.css'
const Login = () => {
  const navigate = useNavigate()
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching ,url,error} = useContext(Context);
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(`${url}backend/auth/login`, {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      console.log(res.data)
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      
      // res.data && window.location.replace("/admin");
      res.data && navigate(-1)

    } catch (err) {
      console.log(err)
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <div>
        
    <form action="" className='login-form' onSubmit={handleSubmit}>
        <p style={{color:'red'}}>the user name and the password is "admin"</p>
        <label htmlFor="">Name:</label>
        <input className='login-field' required type="text" name="" placeholder='admin' ref={userRef} id="" />
        <label htmlFor="">Password:</label>
        <input className='login-field' required type="password" name="" placeholder='................'  ref={passwordRef} id="" />
        <button type="submit" className='login-btn'>Login </button>
        {error?<p style={{color:'red', textAlign:'center',opacity:'0.6'}}>please enter correct credentials</p>:''}
    </form>
    </div>
  )
}

export default Login