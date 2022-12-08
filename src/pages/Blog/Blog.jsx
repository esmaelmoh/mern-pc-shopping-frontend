import React, { useContext, useEffect, useState } from 'react'
import './Blog.css'
import axios from 'axios'
import { Context } from '../../context/Context'
import BlogCard from './BlogCard'
import HashLoader from 'react-spinners/HashLoader'

const Blog = () => {
 
  const cssOverride = {
    display: "block",
    margin: "5rem auto",
    borderColor: "rgb(255, 0, 106)",
  };
  
  const {admin,url}= useContext(Context)
  const [blogTitle, setBlogTitle]= useState('')
  const [blogContent,setBlogContent] = useState('')
  const [blogs, setBlogs]= useState([])
  const [loading, setLoading] = useState(false)
  const handleSubmit = async(e)=>{
    e.preventDefault()
    
    try {
      setLoading(true)
     const res = await axios.post(`${url}backend/blogs`,{
      title:blogTitle,
      desc:blogContent
    })
    setBlogContent("")
    setBlogTitle("")
    setLoading(false)
    // setBlogs(res.data)
    console.log(res.data)
    } catch (err) {
      console.log(err)
    }
  }
  const fetchBlogs = async ()=>{
    // const res = await axios.get("http://localhost:5000/backend/blogs")
    try {
      const res = await axios.get(`${url}backend/blogs`)
      console.log(res.data)
      setBlogs(res.data)
     } catch (err) {
       console.log(err)
     }
  }
  useEffect(()=>{
    fetchBlogs()
  },[blogContent])
  return (
    <div className='blog-wrapper'>
       {admin?<div className="blog-form">
      <h1 style={{textAlign:'center',margin:'2rem'}}>Write Blog</h1>
      <form action="" className='write-blog' onSubmit={handleSubmit}>
        <label htmlFor="">Title:</label>
        <input type="text" name="" id="" value={blogTitle} onChange={(e)=>{setBlogTitle(e.target.value)}} className='blog-field'/>
        <label htmlFor="">Content:</label>
        <textarea name="" id="" cols="30"className='blog-field' value={blogContent} onChange={(e)=>setBlogContent(e.target.value)} rows="10"></textarea>
        <button className='add-blog-btn' type="submit">Add Blog</button>
      </form>
    </div>:''}
        <h1 style={{textAlign:'center',color:'rgb(77, 77, 77)',}}>Tech Blogs</h1>
    {loading?<HashLoader
                  color='#ff0593'
                  loading={loading}
                  cssOverride={cssOverride}
                  size={40}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />:(
      blogs.map((blog)=>{
        return(
            <div className="blog-container" data-aos="zoom-in-up" data-aos-easing="linear"
            data-aos-duration="1000" key={blog._id}>
              <BlogCard blog={blog} />
            </div>
        )
      })
    
                )
}
   
   
    </div>
  )
}

export default Blog






{/* <div className="blog-container">
                        
                        <h2 className='blog-title'>{blog.title}</h2>
                        <p className='blog-des'>{blog.desc}</p>
                              {admin&&(
                                <div className='blg-btns'>
                                <button className='btn-e'>Edit </button>
                                <button className='btn-d' onClick={handleDelete}>Delete</button>
                            </div>
                              )}

                              <p>{admin&&admin.username}</p>
                    
                </div> */}