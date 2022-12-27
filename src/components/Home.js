import React from 'react'
import Table from 'react-bootstrap/Table';
import { Link, useNavigate } from 'react-router-dom';
import Data from './Data';
function Home() {
    const history=useNavigate()
    const handleEdit=(id,packages,days,price,inclusion)=>{
      localStorage.setItem("id",id)
      localStorage.setItem("packages",packages)
      localStorage.setItem("days",days)
      localStorage.setItem("price", JSON.stringify(price))
      localStorage.setItem("inclusion",inclusion)

    }
    const handleDelete=(id)=>{
let index= Data.map((item)=>item.id).indexOf(id)
Data.splice(index,1)
console.log(Data);
history()
    }
  return (
    <>
    <div style={{margin:"6rem"}}>
        <h1 className='mt-2'>Tour packages</h1>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>packages</th>
          <th>price</th>
          <th> days</th>
          <th>inclusion</th>
        </tr>
      </thead>
      <tbody>
       
                {
                    Data && Data.length >0 ?                  
                      Data.map((item)=>(
                          
        <tr>
        <td>{item.packages}</td>
        <td>{item.price}</td>
        <td>{item.days}</td>
        <td>{item.inclusion}</td>
        <td><Link to={"/edit"}><button onClick={()=>handleEdit(item.id,item.packages,item.price,item.days,item.inclusion)} className='btn btn-success'><i class="fa-solid fa-pen-to-square"></i></button></Link>
        <button onClick={()=>handleDelete(item.id)} className='btn btn-primary'><i class="fa-solid fa-trash"></i></button>
        </td>
      </tr>
                      ))
                    :"no tabel data available"
                }
           
    
      </tbody>
    </Table>
    </div>
    <div>
        <Link to={"/add"}>        <button className='btn btn-dark'>ADD &nbsp;<i class="fa-solid fa-location-dot"></i></button>
</Link>
    </div>

    </>
  )
}

export default Home