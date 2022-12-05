import React from 'react'
import {Link} from 'react-router-dom'
const PageNotFound = () => {
  return (
    <div style={{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column',
        height:'60vh'

    }}>
        <h1 style={{color:'red'}}>PageNotFound</h1>
        <br />
       
        <Link to='/'> <button style ={{color:"white",padding:'0.5rem 2rem',backgroundColor:'black', cursor:"pointer",border:'none',borderRadius:'10px'}}>go to home</button> </Link>
        </div>
  )
}

export default PageNotFound