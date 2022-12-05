import React, { useEffect, useState } from 'react'
import Pc from '../Pc/Pc'
import './NewArrival.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import PcSlider from './PcSlider'


console.log(window.screen.width)
const Laptops = ({pcs,screenSize}) => {
  let slideToshow = 3;
  console.log(screenSize, "secreen")
  if(screenSize<= 600){
    slideToshow = 1
  }
  if(screenSize>=600&& screenSize<=1000){
    slideToshow = 2
  }

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: slideToshow,
    // slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  const [loadmore,setLoadmore] = useState(false)
  let limitedPc = pcs.slice(0,6)

  return (
    <div>
    
    {/* <div className='lap-container-arrival'> */}
    <h1 className='new-arrival'>NEW ARRIVAL</h1>
       {/* <div className='laptops-arrival'> */}
   
   <Slider {...settings} className = "slider">
      {loadmore?pcs.map((item)=>{
        return( 
          <Pc pcItem= {item}/>
           )
      }):limitedPc.map((item)=>{
        return( 
          <Pc pcItem= {item}/>
           )
      })}
    </Slider>
    {/* </div> */}
   {/* </div> */}
  <div className="btncontainer">
  <button className='btn-loadmore' onClick={()=>setLoadmore(!loadmore)}>LOAD MORE</button>
  </div>
  
   </div>
  )
}

export default Laptops