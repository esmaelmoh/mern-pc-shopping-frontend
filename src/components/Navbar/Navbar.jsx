import React, { useContext, useState } from 'react'
import {Link} from 'react-router-dom';
import {FaTelegram,FaFacebook,FaInstagram,FaTiktok,FaBars} from 'react-icons/fa'
import { Context } from '../../context/Context'
import {ImPhone} from 'react-icons/im'
import './Navbar.css'

const Navbar = () => {
  const {admin,dispatch }= useContext(Context)
  const [show, setShow ]= useState(false)
  return (
    <div>
        <li className='menu-bar-top' onClick={()=>setShow(!show)}><FaBars/> MENU</li>
        <ul className={`${show?"nav-links show-links":"nav-links"}`}>
            <li onClick={()=>setShow(!show)}><Link to="/">Home</Link></li>
            {/* <li><Link to="/">Laptops</Link></li> */}

            <div class="dropdown">
              <li class="dropbtn"><Link to="/">Laptops</Link>
              </li>
              <div class="dropdown-content" onClick={()=>setShow(!show)}>
                <h5><Link to="/">Gaming Pc</Link></h5>
                <Link to="/?core=i9">Core i9</Link>
                <Link to="/?core=i7">Core i7</Link>
                <Link to="/?core=i5"> Core i5</Link>
                <Link to="/?core=i3">Core i3</Link>
                <br />
                <br />
                <h5><Link>By Condition</Link> </h5>
                <br />
                <Link onClick={()=>setShow(!show)} to="/?condition=NEW" style={{color:'green',fontWeight:'bold'}}>NEW</Link>
                <Link  onClick={()=>setShow(!show)}to="/?condition=OPEN BOX" style={{color:'orange',fontWeight:'bold'}}> OPEN BOX</Link>
                <Link onClick={()=>setShow(!show)} to="/?condition=SLIGHTLY USED" style={{color:'gray',fontWeight:'bold'}}>SLIGHTLY USED</Link>
           </div>
            </div>
            <li onClick={()=>setShow(!show)} ><Link to="/blog">Info Tech(Blog) </Link></li>
            <li onClick={()=>setShow(!show)}><Link to="/contact">Contact Us</Link></li>
            {/* <li><Link to="/about">About Us</Link></li> */}
           {admin&&(<li onClick={()=>setShow(!show)}><Link to="/admin">Admin Dashboard</Link></li>)}
            <div class="dropdown" onClick={()=>setShow(!show)}>
              <li class="dropbtn" onClick={()=>setShow(!show)}><Link >Follow Us</Link>
              </li>
              <div class="dropdown-content" onClick={()=>setShow(!show)}>
                  <div className='sn-link'><a href=""><FaTelegram/></a><a className='sn-name' href="https://telegram.org/">TELEGRAM</a></div>   
                  <div className='sn-link'><a href=""><FaInstagram/></a><a className='sn-name' href="https://www.instagram.com/">INSTAGRAM</a></div>   
                  <div className='sn-link'><a href=""><FaFacebook/></a><a className='sn-name' href="https://www.facebook.com/">FACEBOOK</a></div>  
                  <div className='sn-link'><a href=""><FaTiktok/></a><a className='sn-name' href="https://www.tiktok.com/en/">TIKTOK</a></div> 
           </div>
            </div>
            {admin&&(<li onClick={()=>{dispatch({type:'LOGOUT'}); window.location.replace('/')}}><Link to="/admin">Logout</Link></li>)}
            {/* <li className='menu-bar'><Link to="/contact"><FaBars/> MENU</Link></li> */}
        </ul>
    </div>
  )
}

export default Navbar




      


// .nav-links{
//   /* margin-top: 50px; */
//   display: flex;
//   padding: 0 3.5rem;
//   justify-content: space-around;
//   /* background-color: rgb(5, 5, 5); */
//   background-color: rgb(37, 37, 37);
//   border-bottom: 1px solid #525252;
//   position: relative;
//   /* box-shadow: 10px 10px 10px rgba(0, 0, 0,1); */
// }
// .nav-links li{
//   padding-top: 13px;
//   padding-bottom: 13px;
//   list-style: none;
//   color:black;
// }
// .nav-links li a{
//   font-family: 'Poppins';
//   color: rgb(255, 255, 255);
//   font-size: 16px;
// }
// .nav-links li a:hover{
//   color: rgb(255, 0, 106);
// }
// .dropdown{
//   position: relative;
// }
// .dropdown-content {
//   padding-top: 2rem;
//   padding-bottom: 2rem;
//   /* display: none; */
//   position: relative;
//   /* top: 40px; */
//   visibility: hidden;
//   top: 200px;
//   left: 60px;
//   background-color: #f9f9f9;
//   min-width: 160px;
//   box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
//   z-index: 1;
//   transition: .4s all ease-in;
// }
// .dropdown-content a{
//   font-size: 14px;
//   font-family: sans-serif;
//   float: none;
//   color: black;
//   padding: 12px 16px;
//   text-decoration: none;
//   display: block;
//   text-align: left;
// }
// .dropdown-content a:hover{
//   color:  rgb(255, 94, 161);
// }
// .dropdown:hover .dropdown-content {
  
//   top: 40px;
//   visibility: visible;
//   display: block;
//   /* display: flex;
//   flex-direction: column; */
// }
// .sn-link{
//   display: flex;
//   align-items: center;
//   color:rgb(119, 119, 119);
//   /* gap: 1rem; */
// }
// .sn-link :first-child {
//   display: block;
//   text-decoration: none;
//   font-size: 20px;
//   color:rgb(78, 78, 78)

// }

//   .sn-name{
//       font-size: 16px;
//       font-family: 'Poppins';
//       font-weight: 600;
//   }
//   .sn-name:hover{
//       color: rgb(255, 0, 106);
//   }
      
//   .menu-bar-top{
//       /* float: right; */
//       text-align:right;
//       display: none;
//       padding: 1rem 3.5rem;
//       background-color: rgb(37, 37, 37);
//       border-bottom: 1px solid #525252;
//       font-family: 'Poppins';
//       color: rgb(255, 255, 255);
//       font-size: 16px;
//       cursor: pointer;
//       list-style: none;

//   }
 
//   @media  (max-width: 850px) {
//       .menu-bar-top{
//           display: block;
//       }    
//       .nav-links{
//           display: none;
//           /* display: flex; */
//           padding: 0 3.5rem;
//           justify-content: space-around;
//           background-color: rgb(37, 37, 37);
//          flex-direction: column;
//       }
//       .dropdown-content {
//           /* transition: all ease-in-out; */
//           padding-top: 2rem;
//           padding-bottom: 2rem;
//           /* display: none; */
//           visibility: hidden;
//           position: absolute;
//           background-color: #f9f9f9;
//           min-width: 160px;
//           box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
//           z-index: 1;
//         }
//       .show-links{
//           display: flex;
//           padding: 0 3.5rem;
//           justify-content: space-around;
//           /* background-color: rgb(5, 5, 5); */
//           background-color: rgb(37, 37, 37);
//           position: relative;
        
//       }
//     }















    


