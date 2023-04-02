import React from 'react';
import { useContext,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginContext } from '../Components/Context/context';
function PrivateRoute(props) {

    const {state}=useContext(loginContext)
    let {Comp}=props
   const navigate=useNavigate();
    useEffect(()=>{
        if(state.isLoggedIn===false){
            navigate("/login")
        }
    })
    
    return (
        <div>
            <Comp/>
        </div>
    );
}

export default PrivateRoute;