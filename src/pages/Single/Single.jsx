import React from 'react'
import SinglePost from '../../components/SinglePost/SinglePost'
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Context } from '../../context/Context';
const Single = () => {
  const { url} = useContext(Context);
  const location = useLocation();
  let data = null
  const path = location.pathname.split("/")[2];
  // console.log(path)
  const [singelPc , setSinglePc]= useState({})
  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(`${url}backend/pcs/` + path);
      setSinglePc(res.data)
    //  console.log( typeof(res.data))
    };
    getPost();
  }, [path]);

  return (
    <div>
    {/* {singelPc._id} */}
        <SinglePost singelPc={singelPc}/>
    </div>
  )
}

export default Single