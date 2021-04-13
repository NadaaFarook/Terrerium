import React from 'react'

import {Routes , Route , useLocation} from 'react-router-dom'
import { useFilter } from './Context-Reducer/FilterContext.js'
import { Error404 ,Cart ,Home ,Login ,ProductListing ,ProductPage ,Wishlist} from './pages/index.js'

const RoutesHolder = () =>{
    const  {state} = useFilter()
    return(
        <div>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Error404 />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path={`/products`} element={<ProductListing />} />
            <Route path="/product/:productId" element={<ProductPage />} />
            <Route path="/wishlist" element={<Wishlist />} />
            </Routes>
        </div>
    )
}
export default RoutesHolder