import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Data from './Data';
import { useNavigate } from 'react-router-dom';
function Edit() {
  const [id,setId] =useState('')

const[packages,setPackages]=useState('')
const[price,setPrice]=useState(0)
const[days,setDays]=useState('')
const[inclusion,setInclusion]=useState('')
const history=useNavigate()
useEffect(()=>{
  setId(localStorage.getItem("id"))
setPackages(localStorage.getItem("packages"))
setDays(localStorage.getItem("days"))
setPrice(JSON.parse(localStorage.getItem("price")))

setInclusion(localStorage.getItem("inclusion"))

},[])
console.log(id);
var index=Data.map((item=>item.id)).indexOf(id)
console.log(index);
  const handleEdit=(e)=>{
    e.preventDefault()

  let data =Data[index]
  console.log("data",data);

  data.packages=packages,
  data.days=days,
  data.price=price,

  data.inclusion=inclusion
history('/')
  }
  return (
    <>
    <div className='m-5'>
      <Row>
      <Col md={4}></Col>

         <Col md={5}>
             <Form className='border p-2'>
      <Form.Group className="mb-2" >
        <Form.Label>Packages</Form.Label>
        <Form.Control type="text" value={packages} onChange={(e)=>setPackages(e.target.value)} required
/>
        
      </Form.Group>
      <Form.Group className="mb-2" >
        <Form.Label>Price</Form.Label>
        <Form.Control value={price} type="text" onChange={(e)=>setPrice(e.target.value)} required/>
        
      </Form.Group>
      <Form.Group className="mb-2" >
        <Form.Label>Days</Form.Label>
        <Form.Control value={days} type="text" onChange={(e)=>setDays(e.target.value)} required />
        
      </Form.Group>

      <Form.Group className="mb-2" >
        <Form.Label>Inclusion</Form.Label>
        <Form.Control value={inclusion} type="text" onChange={(e)=>setInclusion(e.target.value)} required/>
      </Form.Group>
     
     <Button onClick={(e)=>handleEdit(e)} variant="primary" type="submit">
       Update
     </Button>
   </Form>
         </Col>
       </Row>
    </div>
    </>

  )
}

export default Edit