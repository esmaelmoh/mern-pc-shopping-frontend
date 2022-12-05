import React, { useState } from 'react'
import Pc from '../Pc/Pc'
import './Laptops.css'
const Laptops = ({pcs}) => {
  
  const [loadmore,setLoadmore] = useState(false)
  console.log(pcs)
  let limitedPc = pcs.slice(0,6)
  return (
    <div className='lap-container'>
    <h1 className='on-sale'>ON SALE PRODUCTS</h1>
    <div className='laptops'>
    {
    loadmore?
    pcs.map((item)=>{
      return <Pc pcItem={item}></Pc>
    })
    :limitedPc?.map((item)=>{
      return <Pc pcItem={item}></Pc>
    })
    }
    </div>
    <button className='btn-loadmore' onClick={()=>setLoadmore(!loadmore)}>LOAD MORE</button>
    </div>
  )
}

export default Laptops