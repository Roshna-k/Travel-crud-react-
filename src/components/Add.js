import React, { useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import uuid from 'react-uuid';
import Data from './Data';
import { useNavigate } from 'react-router-dom';
function Add() {
const[packages,setPackages]=useState('')
const[price,setPrice]=useState(0)
const[days,setDays]=useState('')
const[inclusion,setInclusion]=useState('')
const history=useNavigate()


  const handleData=(e)=>{
e.preventDefault()
let ids=uuid()
const uniqueId=ids.slice(0,8)
console.log(uniqueId);
Data.push({
  id:uniqueId,
  packages:packages,
  price:price,
  days:days,
  inclusion:inclusion
})
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
        <Form.Control type="text"  onChange={(e)=>setPackages(e.target.value)} required
/>
        
      </Form.Group>
      <Form.Group className="mb-2" >
        <Form.Label>Price</Form.Label>
        <Form.Control type="text" onChange={(e)=>setPrice(e.target.value)} required/>
        
      </Form.Group>
      <Form.Group className="mb-2" >
        <Form.Label>Days</Form.Label>
        <Form.Control type="text" onChange={(e)=>setDays(e.target.value)} required />
        
      </Form.Group>

      <Form.Group className="mb-2" >
        <Form.Label>Inclusion</Form.Label>
        <Form.Control type="text" onChange={(e)=>setInclusion(e.target.value)} required/>
      </Form.Group>
      
      <Button onClick={(e)=>handleData(e)} variant="primary" type="submit">
        Add
      </Button>
    </Form>
          </Col>
        </Row>
     </div>
     </>

  )
}

export default Add