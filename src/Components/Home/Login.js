import React from 'react';
import Nav from '../NAV/Nav';
import {useState,useContext} from "react";
import { useNavigate } from 'react-router-dom'
import { loginContext } from '../Context/context';
function Login(){
   const [name,setName]=useState()
   const [password,setPassword]=useState()
   const {fnLoggedIn}=useContext(loginContext)
   let navigate=useNavigate();
    const hendleSubmit=(e)=>{
      setName("")
      setPassword("")
      e.preventDefault()
      const obj ={
        name:name,
        password:password
      }
    //    console.log({name}.name)
    
     if(obj.name==="himangshu" && obj.password==="himu@1998"){

        // alert("done");
        fnLoggedIn({
            isLoggedIn:true,
            user:"Himangshu",
        })
    
     navigate("/")

     }else{
        alert("Please Check the Credentials");
     }
     
    }
    return (
           <div>
           <Nav/>

        <div style={{textAlign:"center",marginTop:"100px"}}>
           <form onSubmit={hendleSubmit}>
           <input type="text"
             placeholder='Enter Name:- himangshu'
               onChange={(e)=>setName(e.target.value)}
              style={{width:"300px",height:"30px",margin:"10px",borderRadius:"10px"}}/>
            <br />
           <input type="text"
            placeholder='Enter Password:- himu@1998' 
             onChange={(e)=>setPassword(e.target.value)}  
              style={{width:"300px",height:"30px",margin:"10px",borderRadius:"10px"}}/>
            <br />
           <button type='submit' style={{padding:"8px",borderRadius:"5px",marginBottom:"50px"}}>Submit</button>
           </form> 
        </div>
        </div>
    );
}

export default Login;