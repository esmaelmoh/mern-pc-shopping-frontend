import React, { useContext, useState } from 'react'
import './Register.css'
import axios from 'axios'
import { Context } from '../../context/Context';
const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const { url} = useContext(Context);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post(`${url}backend/auth/register`, {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div>
        <form action="" className='login-form' onSubmit={handleSubmit}>
        <label htmlFor="">Name:</label>
        <input className='login-field' type="text" name="" placeholder='Esmael Mohammed' id=""   onChange={(e) => setUsername(e.target.value)}/>
        <label htmlFor="">Email Address:</label>
        <input className='login-field' type="email" name="" placeholder='esmaelmoh664@gmail.com' id="" onChange={(e) => setEmail(e.target.value)}/>
        <label htmlFor="">Password:</label>
        <input className='login-field' type="password" name="" placeholder='................' id="" onChange={(e) => setPassword(e.target.value)}/>
        <button type="submit" className='login-btn'>Register </button>
    </form>
    </div>
  )
}

export default Register