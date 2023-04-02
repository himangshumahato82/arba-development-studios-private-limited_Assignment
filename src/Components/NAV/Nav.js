import React from 'react';
import { Link } from 'react-router-dom';
import { loginContext } from '../Context/context';
import { useContext } from 'react';
function Nav(props) {

    const{state,fnLoggedOut}=useContext(loginContext)
    return (
        <div  style={{backgroundColor:"teal",height:"70px",textAlign:"center", justifyContent:"space-evenly",display:"flex"}}>
           <Link to={"/"}> <h2 style={{marginTop:"15px"}}>Home </h2></Link>
           <Link to={"/products"}> <h2 style={{marginTop:"15px"}}>Products</h2></Link>
           <Link to={"/login"}> <h2 style={{marginTop:"15px"}}>{state.user}</h2></Link>
          <button style={{textDecoration:"none",border:"none",backgroundColor:"teal"}} onClick={()=>fnLoggedOut()}>{state.user==="Himangshu"?<h2>Logout</h2>:""}</button>
        </div>
    );
}

export default Nav;