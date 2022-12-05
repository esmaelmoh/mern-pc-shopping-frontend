import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Context } from '../../context/Context'
import { useLocation } from "react-router";
const EditBlog = () => {
    const [blogTitle, setBlogTitle]= useState('')
  const [blogContent,setBlogContent] = useState('')
  const [blogs, setBlogs]= useState([])
  const location = useLocation();
  const {admin,url}= useContext(Context)
  const path = location.pathname.split("/")[2];
  console.log(path)
  
  const fetchBlogs = async ()=>{
    
    // const res = await axios.get("http://localhost:5000/backend/blogs")
    try {
      const res = await axios.get(`${url}backend/blogs/` +path)
      console.log(res.data)
    //   setBlogs(res.data)
      setBlogContent(res.data.desc)
      setBlogTitle(res.data.title)
     } catch (err) {
       console.log(err)
     }
  }
  useEffect(()=>{
    fetchBlogs()
  },[])

  const handleSubmit = async(e)=>{
    e.preventDefault()
    try {
     const res = await axios.put(`${url}backend/blogs/`+path,{
      title:blogTitle,
      desc:blogContent
    })
    setBlogContent("")
    setBlogTitle("")
    window.location.replace('/blog')
    console.log(res.data)
    } catch (err) {
      console.log(err)
    }
  }
 
  return (
    <div className="blog-form">
    <h1 style={{textAlign:'center',margin:'2rem'}}>Write Blog</h1>
    <form action="" className='write-blog' onSubmit={handleSubmit}>
      <label htmlFor="">Title:</label>
      <input type="text" name="" id="" value={blogTitle} onChange={(e)=>{setBlogTitle(e.target.value)}} className='blog-field'/>
      <label htmlFor="">Content:</label>
      <textarea name="" id="" cols="30"className='blog-field' value={blogContent} onChange={(e)=>setBlogContent(e.target.value)} rows="10"></textarea>
      <button className='add-blog-btn' type="submit">Add Blog</button>
    </form>
  </div>
  )
}

export default EditBlog