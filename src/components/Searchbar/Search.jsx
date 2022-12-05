import React from 'react'
import './Search.css'
import {FaSearch} from 'react-icons/fa'
const Search = () => {
  return (
    <div className='search-container'>
      <div className='search-wrapper'>
      <input type="text" name="" id="" placeholder='Search...' className="search-field" >
        </input>
     <i className='icon'><FaSearch/></i> 
      </div>
      
    </div>
  )
}

export default Search