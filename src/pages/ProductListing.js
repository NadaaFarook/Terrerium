import React from 'react'
import Products from './components/Products'
import Filters from './components/Filters'

const ProductListing = () => {
return(
    <div className="ProductListing flex">
        <Filters /><Products />
    </div>
)
}

export default ProductListing