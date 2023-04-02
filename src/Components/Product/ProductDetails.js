import React from 'react';
 import {useState,useEffect} from "react"
 import { useParams } from 'react-router-dom';
function ProductDetails(props) {
const [state,setState]=useState([{}])
let {id}=useParams()
useEffect(()=>{
    fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products/${id}`)
    .then((res)=>res.json())
    .then((data)=>{
      setState(data.data)
      console.log(data)
    })

},[id])
     
    return (
        <div style={{display:"flex",justifyContent:"space-around",marginTop:"50px",marginBottom:"50px"}}>
              
            <img src={state.image} alt="" style={{width:"400px",height:"400px",marginLeft:"20px"}}/>
              <div style={{marginTop:"60px",marginLeft:"50px"}}>
              <h5 style={{color:"teal"}}>Brand:-{state.brand}</h5>
              <h5 style={{color:"red"}}> Title:-{state.title}</h5>
               <h5 style={{color:"navy"}}>{state.category}</h5>
               <h4 style={{color:"teal"}}>Price:-${state.price}</h4>
               
              </div>
           
        </div>
    );
}

export default ProductDetails;