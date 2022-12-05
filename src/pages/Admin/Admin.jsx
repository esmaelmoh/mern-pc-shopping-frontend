import React, { useContext, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import './Admin.css'
import axios from 'axios'
import { Context } from "../../context/Context";
const Admin = () => {
  const { admin, dispatch } = useContext(Context);

    const [infos , setInfos] = useState([

    ])
    const [file, setFile]= useState()  
    const [checked,setChecked ] = useState()
    const [core, setCore] = useState()
    const [condition, setCondition] = useState()

    const [info,setInfo] = useState("")
    console.log(core,condition)
    const [pcDetails, setPcDetails]= useState({
    pcModel:"",
    pcFullName:'',
    price:0,
    productCode:0,
    quantity:0,
    storage:0,
    ram:0,
    processor:'',
    graphics:'',
    battery:'',
    screen:'',
    available:false,
    // core:'',
    // condition:'',
    other1:'',
    other2:'',
    other3:''
  })
  
  console.log(infos)



  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPc ={

      pcModel: pcDetails.pcModel,
      pcFullName: pcDetails.pcFullName,
      price: pcDetails.price,
      productCode:pcDetails.productCode,
      quantity:pcDetails.quantity,
      storage:pcDetails.storage,
      ram:pcDetails.ram,
      // condition:condition,
      processor:pcDetails.processor,
      graphics:pcDetails.graphics,
      battery:pcDetails.battery,
      screen:pcDetails.screen,
      // core:core,
      other1:pcDetails.other1,
      other2:pcDetails.other2,
      other3:pcDetails.other3,    
      available:checked,
    }
    newPc.core = core;
    newPc.condition = condition
    newPc.info =infos;
    if (file) {
    const data =new FormData();
    const filename = Date.now() + file.name;
    data.append("name", filename);
    data.append("file", file);
    newPc.pcImage = filename;
    try {
      await axios.post("http://localhost:5000/backend/upload", data);
    } catch (err) {}
  }
    try {
      const res = await axios.post("http://localhost:5000/backend/pcs/pc",newPc );
      console.log(res.data)      
      res.data && window.location.replace("/");

    } catch (err) {
      console.log(err)
    }
  };

const handleChange=(e)=>{
   console.log(e.target.name ,e.target.value)
   setPcDetails((prev)=>{
    return {...prev,[e.target.name]:e.target.value}
   })
}
const addInfo=(e)=>{
  e.preventDefault()
  setInfos([...infos,info])
  setInfo("")
}

  return (
    <div>
      {/* {admin._id} */}
      {}
      <h1 className='add-form-title'>Add A Product</h1>
      <div >
        <form className="write-product" action=""onSubmit={handleSubmit}>
          <div className="form-container1">
          <label htmlFor="">Model:</label>
          <input onChange={handleChange} type="text" name="pcModel" id="" className='product-field'/>
          <label htmlFor="">Image:</label>
          <input type="file" onChange={(e)=>setFile(e.target.files[0])} name="" id="" className='product-field' />
          <label htmlFor="">Price:</label>
          <input type="number" onChange={handleChange}name="price" id="" className='product-field' />
          <label htmlFor="" >Available:</label>
          <input className='check-box' type="checkbox" name="" id="" onChange={(e)=>{setChecked(e.target.checked)}}/>
          <br />
          <br />
          <label htmlFor="">Condition:</label>
          <br />
          <select name="condition" id="" className='select-field'value={condition} onChange={(e)=>{setCondition(e.target.value)}}>
            <option value="NEW">NEW</option>
            <option value="OPEN BOX">OPEN BOX</option>
            <option value="SLIGHTLY USED">SLIGHTLY USED</option>
          </select>
          <br />
          <br />
          <label htmlFor="">Product Code:</label>
          <input type="number" onChange={handleChange}name="productCode" id="" className='product-field' />
          <label htmlFor="">Quantity:</label>
          <input type="number" onChange={handleChange}name="quantity" id="" className='product-field' />
        
          <label htmlFor="">Core:</label>
          <br />
          <select name="core" id="" onChange={(e)=>{setCore(e.target.value)}} value={core} className='select-field'>
            <option value="i3">i3</option>
            <option value="i5">i5</option>
            <option value="i7">i7</option>
            <option value="i9">i9</option>
          </select>
          <br />
          <br />
          <label htmlFor="">Full Model Name:</label>
          <input onChange={handleChange} type="text" name="pcFullName" id="" className='product-field'/>
          <label htmlFor="">Storage:</label>
          <input type="text" onChange={handleChange} name="storage" id=""className='product-field' />
          
          <label htmlFor="">RAM:</label>
          <input type="text" onChange={handleChange} name="ram" id="" className='product-field'/>      
          <label htmlFor="">Processor:</label>
          <input type="text"onChange={handleChange}  name="processor" id="" className='product-field' />           
          
          <label htmlFor="">Graphics:</label>
          <input type="text" onChange={handleChange} name="graphics" id="" className='product-field' />
          <label htmlFor="">Battery:</label>
          <input type="text" onChange={handleChange} name="battery" id=""  className='product-field'/>
          <label htmlFor="">Screen:</label>  
          <input type="text"  onChange={handleChange} name="screen" id="" className='product-field'/>
          <label htmlFor="">Other 1:</label>  
          <input type="text"  onChange={handleChange} name="other1" id="" className='product-field'/>
          <label htmlFor="">Other 2:</label>  
          <input type="text"  onChange={handleChange} name="other2" id="" className='product-field'/>
          <label htmlFor="">Other 3:</label>  
          <input type="text" onChange={handleChange}  name="other3" id="" className='product-field'/>
          </div>
          <div className="form-container2">
          <h1>More Info</h1>
          <br />
          <br />
          <label htmlFor="">Additional Infos:</label>
          <textarea type="text" onChange={(e)=>{setInfo(e.target.value)}} value={info} name="" id="" className='product-field' />
          {/* <label htmlFor="">Additional Info2:</label> */}
          <button onClick={addInfo} className="add-info">add new</button>
          {/* <textarea type="text" ref={info2} name="" id="" className='product-field' />
          <label htmlFor="">Additional Info3:</label>
          <textarea type="text" ref={info3} name="" id="" className='product-field' />
          <label htmlFor="">Additional Info4:</label>
          <textarea type="text" ref={info4} name="" id="" className='product-field' />
          <label htmlFor="">Additional Info5:</label>
          <textarea type="text" ref={info5} name="" id="" className='product-field' /> */}
          
          {infos.map((item)=>{
            return(
              <p className='info-items'>{item}</p>
            )
          })}
          
          <button type="submit" className='admin-form-btn'>submit</button>
          </div>
          
        </form>
      </div>
      {/* <button className='btn-add-admin'> <Link to='/register'>add new admin</Link></button> */}
    </div>
  )
}

export default Admin