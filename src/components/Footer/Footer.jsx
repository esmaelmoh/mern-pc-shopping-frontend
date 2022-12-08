import React from 'react'
import "./Footer.css"
import {FaTelegram,FaFacebook,FaInstagram,FaYoutube,FaTiktok} from 'react-icons/fa'
import {ImPhone} from 'react-icons/im'
const Footer = () => {
  return (
    <div className='foot-container'>
        <div className='foot-info'>
            <div className='foot-logo' data-aos="flip-right" data-aos-duration="1500">
            <h1>Addis</h1>
            <h2>Computer</h2>
            </div>
            <div className='foot-about' data-aos="zoom-in" data-aos-duration="1500">
            <h1>ABOUT</h1>
            <p>We are ADDIS Computer. <br /> If you are looking for Brand new, Gaming And used Laptops, You are in the right place! With one year guarantee <br /> “Quality product with Affordable price”
                location: Megenagna Betelehem building ground floor no 17</p>
            </div>
            <div className='foot-contact' data-aos="flip-left" data-aos-duration="1500">
            <h1>CONTACT US</h1>
            <p>ADDIS COMPUTER</p>
            <p>Megenaga Maraton Building, Ground Floor, No 17</p>
            <p>+251 912 75 99 00 <br />
                +251 920 15 33 33 </p>
            <p>addiscomputer@gmail.com</p>
            </div>
        </div>
        <hr  className='horizontal-line'/>
        <ul className="social-med" data-aos="flip-left" data-aos-duration="1500">
          <div className="first-container">
              <div className='s-link'><a href=""><FaTelegram/></a><a className='s-name' href="">TELEGRAM</a></div>   
            <div className='s-link'><a href=""><ImPhone/></a><a className='s-name' href="">PHONE </a></div>   
            <div className='s-link'><a href=""><ImPhone/></a><a className='s-name' href="">PHONE2</a></div>   
          </div>
        <div className="second-container">
        <div className='s-link'><a href=""><FaInstagram/></a><a className='s-name' href="">INSTAGRAM</a></div>   
         <div className='s-link'><a href=""><FaFacebook/></a><a className='s-name' href="">FACEBOOK</a></div>  
         <div className='s-link'><a href=""><FaTiktok/></a><a className='s-name' href="">TIKTOK</a></div>   
        </div>
       
           
        </ul>
        <p className='developer'>Developed by <span style={{color:'rgb(255, 0, 106)'}}>Esmael Mohammed</span>  | © Addis Computer 2022</p>
    </div>
  )
}

export default Footer