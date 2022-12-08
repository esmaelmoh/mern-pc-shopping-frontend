import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './Pc.css'
import { Context } from '../../context/Context'
const Pc = ({pcItem}) => {
  // console.log(pcItem)
  // const PF = "http://localhost:5000/images/";
  const { url} = useContext(Context);
  const PF = `${url}images/`;

  // console.log(pcItem.price)
  return (
    <Link to={`/pcs/${pcItem?._id}`} style={{textDecoration:'none',color:'black'}}>
    <div className='pc-container' data-aos="zoom-in">
        <img src={PF+pcItem?.pcImage} alt="" />
        <div className='first-desc'>
            <p className='model'>{pcItem?.pcModel.split(' ').slice(0, 2).join(' ')} </p>
            <p className='price'> {pcItem?.price} Birr</p>
        </div>
        <div className='second-desc'>
            <p>Core {pcItem?.core} |</p>
            {/* <p>{pcItem}|</p> */}
            <p>{pcItem?.condition}</p>
        </div>
    </div>
    </Link>
  )
}

export default Pc