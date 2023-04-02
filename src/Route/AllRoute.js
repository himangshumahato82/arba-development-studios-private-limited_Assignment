import React from 'react';
 import Home from '../Components/Home/Home';
 import Product from '../Components/Product/Product';
 import ProductDetails from '../Components/Product/ProductDetails';
 import Login from '../Components/Home/Login';
 import {Route,Routes} from "react-router-dom"
 import PrivateRoute from './PrivateRoute';
 import "./All.css"

function AllRoute(props) {
    return (
        <div>
          <Routes>
          <Route path='/' element={<PrivateRoute Comp={Home} /> }/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/products' element={<PrivateRoute Comp={Product} /> } />
          <Route path="/products/:id" element={<ProductDetails/>}/>
         
          </Routes>  
        </div>
    );
}

export default AllRoute;