import React, { useContext } from 'react'
import './SinglePost.css'
import axios from 'axios'
import { Context } from '../../context/Context'
import {Link} from 'react-router-dom'
// import image1 from '../../../public/images/pc1.jpg'
const SinglePost = ({singelPc}) => {
    // console.log(singelPc.price)
  console.log(singelPc.info)
  const {admin}= useContext(Context)
    const PF = "http://localhost:5000/images/";
  
    const handleDelete = async()=>{
      try{
        await axios.delete("http://localhost:5000/backend/pcs/"+singelPc._id)
        window.location.replace('/')
      }
      catch(err){
        console.log(err)
      }
    }

  return (
    <div>
        <div className="model-container" >
           
            <h1>{singelPc.pcModel} | Addis Computer</h1>
            <p>Home / {singelPc.pcModel}</p>
        </div>


        <div className='pc-details'>
            <div className='pc-images'>
                {/* <img src={PF+"1669883711555pc7.png"} alt="alternative" /> */}
                {/* {singelPc.price} */}
                <img src={PF+singelPc.pcImage} alt="" />
            </div>
            <div className='pc-desc'>
                <div className='desc1'>
                <p style={{color:'green',fontWeight:'bolder'}}>NEW</p>
                <p style={{fontSize:'30px',fontWeight:'bold',margin:'1rem 0rem'}}>{singelPc.pcModel}</p>
                <p>Available: <span style={{fontWeight:'bold'}}>{singelPc.available? "IN STOCK":"OUT OF STOCK"}</span></p>
                <p>Product Code: <span style={{fontWeight:'bold'}}>{singelPc.productCode}</span> </p>
                <p>QUANTITY: {singelPc.quantity}</p>
                <p>POSTED DATE: 2022-10-24 2:12 PM</p>
                </div>
                <hr/>
                <h3 >SHORT DESCRIPTION</h3>
                <div className='desc1'>
                {/* <p style={{fontWeight:'bold'}}>{singelPc.condition}</p> */}
                
                <p><span >⭐️Condition </span>: {singelPc.condition}</p>
                <p><span >💎graphics</span> :{singelPc.graphics}</p>
                <p><span >📼 Storage </span>: {singelPc.storage}</p>
                <p><span >⏳Ram </span>:{singelPc.ram}</p>
                <p><span >❤️ screen :</span> {singelPc.screen}</p>
                <p><span >🔋Battery :</span>{singelPc.battery}</p>
                <p className='other'> {singelPc.other1}</p>
                <p className='other'>{singelPc.other2}</p>
                <p className='other'> {singelPc.other3}</p>
                </div>
                <div className='desc1'>
                {/* {console.log(typeof(infos))} */}
                {singelPc.info? (<><h2 className='more-info'>More Info</h2><hr className='more-info'/></>):''
                }
                {singelPc.info?.map((item)=>{
                  return <div className='more-info-container'>
                    <p className='info-p'>{item}</p>
                  </div>
                })}
                </div>
                <div>
                    <h1>Call us :- 0912759900 or 0920153333</h1>
                    <div className='btn-container'>
                        <button  className='btn'><a href="https://www.telegram.org/" > FOLLOW US ON TELELGRAM</a></button>
                        <button  className='btn'><Link to="/contact" > CONTACT US</Link></button>
                    </div>
                   { admin?<div className='btn-control'>
                        <Link to={`/admin/edit/${singelPc._id}`}><button  className='btn-e'>Edit  </button></Link>
                        <button  className='btn-d' onClick={handleDelete}> Delete</button>
                    </div>:''}
                </div>
            </div>
        </div>
    </div>
  )
}

export default SinglePost


// import React from 'react'
// import './SinglePost.css'
// // import image1 from '../../../public/images/pc1.jpg'
// const SinglePost = ({singelPc}) => {
//     // console.log(singelPc.price)
//     const PF = "http://localhost:5000/images/";

//   return (
//     <div>
//         <div className="model-container" >
           
//             <h1>HP Ryzen ultra slim | Addis Computer</h1>
//             <p>Home / HP Ryzen ultra slim</p>
//         </div>


//         <div className='pc-details'>
//             <div className='pc-images'>
//                 {/* <img src={PF+"1669883711555pc7.png"} alt="alternative" /> */}
//                 {/* {singelPc.price} */}
//                 <img src={PF+singelPc.pcImage} alt="" />
//             </div>
//             <div className='pc-desc'>
//                 <div className='desc1'>
//                 <p style={{color:'green',fontWeight:'bolder'}}>NEW</p>
//                 <p style={{fontSize:'20px',fontWeight:'bold'}}>HP RYZEN ULTRA SLIM</p>
//                 <p>Available: <span style={{fontWeight:'bold'}}>IN STOCK</span></p>
//                 <p>Product Code: <span style={{fontWeight:'bold'}}>642</span> </p>
//                 <p>QUANTITY: 1</p>
//                 <p>POSTED DATE: 2022-10-24 2:12 PM</p>
//                 </div>
//                 <hr/>
//                 <h3 >SHORT DESCRIPTION</h3>
//                 <div className='desc1'>
//                 <p style={{fontWeight:'bold'}}>NEW ARRIVAL</p>
//                 <p>⭐️ intel® ryzen 3 ultra slim</p>
//                 <p><span >Condition </span>: brand new</p>
//                 <p><span >💎graphics</span> : 2gb radeon graphics</p>
//                 <p><span >📼 Storage </span>: 1tb hdd</p>
//                 <p><span >⏳Ram </span>: 8GB DDR4</p>
//                 <p><span >❤️ Inch :</span> 14"</p>
//                 <p><span >🔋Battery :</span> 5hours ++ battery life</p>
//                 </div>
//                 <div>
//                     <h1>Call us :- 0912759900 or 0920153333</h1>
//                     <div className='btn-container'>
//                         <button className='btn'>FOLLOW US ON TELELGRAM</button>
//                         <button  className='btn'>CONTACT US</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default SinglePost
{/* <select name="" id="">
            <option value="">256</option>
            <option value="">512</option>
            <option value="">1TB</option>
            <option value="">2TB</option>
            <option value="">3TB</option>
          </select>
          <select name="" id="">
            <option value="">SSD</option>
            <option value="">HDD</option>
          </select>
          <label htmlFor="">RAM:</label>
         <select name="" id="">
            <option value="">256</option>
            <option value="">512</option>
            <option value="">1TB</option>
            <option value="">2TB</option>
            <option value="">3TB</option>
          </select> */}