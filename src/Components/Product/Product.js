import React from 'react';
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import "./product.css"
function Product(props) {
    const [state,setState]=useState([])
  const arr=[...state]
  console.log(arr)
 const LowtoH=()=>{
   const news=arr.sort((a, b) => ((a.brand.length > b.brand.length)?1:-1)) 

   setState(news)
 }

 const HightoL=()=>{
    const news=arr.sort((a, b) => b.price - a.price) 
 
    setState(news)
  }


   useEffect(()=>{
    fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products")
    .then((res)=>res.json())
    .then((data)=>{
     setState(data.data)
    })
   },[])
   
    return (
        <div >
        <h1 style={{textAlign:"center",color:"teal"}}>WELCOME TO PRODUCT PAGE</h1>
         <button  onClick={LowtoH} style={{backgroundColor:"teal"}}>Low to High</button>
         <button  onClick={HightoL} style={{backgroundColor:"pink"}}>High to Low</button>
        <div className='product'>
            {state.map((e,i)=>{
                return(
                    
                <div className='productC' key={i}>
               
                 <img src={e.image} alt="" className='img'/>
                <div style={{display:"flex",justifyContent:"space-evenly",marginTop:"20px"}}>
                  <p style={{color:"teal"}}>{e.category}</p>
                  <h5 style={{color:"green"}}>₹:-{e.price}</h5>
                  <h5 style={{color:"green"}}>{e.brand}</h5>
                  </div>
                  <Link to = {`${e.id}`}>
                  <button style={{marginLeft:"90px",backgroundColor:'yellow',borderRadius:"20px"}}>Add To Cart</button>
                  </Link>
                </div>)
            })}
            </div>
            
        </div>
    );
}

export default Product;