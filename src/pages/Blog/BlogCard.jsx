import React, { useContext } from 'react'
import { Context } from '../../context/Context'
import axios from 'axios'
import {Link} from 'react-router-dom'
const BlogCard = ({blog}) => {
  const {admin, url}= useContext(Context)
    const handleDelete= async(e)=>{
        try{
          await axios.delete(`${url}backend/blogs/${blog._id}`)
          window.location.replace('/')
        }catch(err){
          console.log(err)
        }
      }

     
   
  return (
    <>
              
              <h2 className='blog-title'>{blog.title}</h2>
                        <p className='blog-des'>{blog.desc}</p>
                              {admin&&(
                                <div className='blg-btns'>
                                <button className='btn-e' ><Link to={`/edit/${blog._id}`}>Edit </Link> </button>
                                <button className='btn-d' onClick={handleDelete}>Delete</button>
                            </div>
                              )}
              <p style={{color:'grey',textTransform:'lowercase'}}>{admin&&admin.username}</p>
                    
    </>
  )
}

export default BlogCard