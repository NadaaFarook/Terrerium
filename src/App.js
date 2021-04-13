
import './App.css';
import axios from 'axios'
import React, { useState, useEffect } from 'react'
// import useAxios from './customHooks/useAxios'
// import Loader from './UI_components/loader';
import {Link} from 'react-router-dom';
import RoutesHolder from './routes'


export default function App() {
  
  return (
    <div>
    {/* {loader &&  <Loader />} */}
    <Link to="/products">Products</Link> ||
    <Link to="/cart">Cart</Link>
    
    {/* {
      data.map(({name , price})=>{
        return(
          <div>
            <h3>{name}</h3>
            <p>$ {price}</p>
          </div>
        )
      })
    } */}
<RoutesHolder />
    </div>
  )
}
