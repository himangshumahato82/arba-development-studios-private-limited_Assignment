// import Footer from "./Components/Footer/Footer";
import React from "react";
// import Home from "./Components/Home/Home"
import AllRoute from "./Route/AllRoute";
// import Nav from "./Components/NAV/Nav";
import { loginContext } from "./Components/Context/context";
import { useState } from "react";
 
function App() {
  const [state,setState]=useState({
    isLoggedIn:false,
    user:"LogIn",
   })
   const fnLoggedIn =(data)=>{
    setState(data)
   }
   const fnLoggedOut =()=>{
    setState({
      isLoggedIn:false,
    user:"LogIn",
    })
   }
   
  return (
    <div className="App">
    <loginContext.Provider value={{ state, fnLoggedIn,fnLoggedOut}}> 
      <AllRoute/>
    
     </loginContext.Provider>

    </div>
  );
}

export default App;
