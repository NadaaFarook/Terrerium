import React  , { useState , useEffect}from 'react'
import axios from 'axios'
import {useLocation } from 'react-router-dom'
import Loader from '../../UI_components/loader'
import { useFilter } from '../../Context-Reducer/FilterContext'
const Products = () => {
    const [data, setData] = useState([])
   const [loader , setLoader] = useState(true)
   const query = new URLSearchParams(useLocation().search)
const {state} = useFilter()

   useEffect(() => {
    const fetchData = async () => {
      const result = await axios('/api/products');
      setData(result.data.products);
      setLoader(false)
    };
 
    fetchData();
  } , [])

  const sortBy = query.get('sortBy').slice(1,-1)
  const filterRating = JSON.parse(query.get('filterRating'))
  const recommended = JSON.parse(query.get('recommended'))
  const  includeOutOfStock = JSON.parse(query.get(' includeOutOfStock'))
  const min =JSON.parse(query.get('min'))
  const max = JSON.parse(query.get('max'))
  const getsortedData = (data , sortBy) => {

    if (sortBy === "HIGH_TO_LOW") {
        return data.sort((a, b) => b["price"] - a["price"])
      }
  
      if (sortBy === "LOW_TO_HIGH") {
        return data.sort((a, b) => a["price"] - b["price"])
        
      }
      return data;

  }

  const getFilteredData = (data , filterRating , recommended , min , max , includeOutOfStock) =>{
    return data.filter(product => product.rating > filterRating)
    .filter(product =>  product.price < max)
    .filter(product =>  
     {  console.log(min , '1')
       return product.price > min}
     )
     .filter(product => 
     { 
       return recommended ? product.recommended === true : product
  }
        
     )
    
  }
  
 const sortedData = getsortedData([...data] ,sortBy)
const filteredData = getFilteredData([...sortedData] , filterRating  , recommended , min , max , includeOutOfStock )
return(
    <div className="ProductsPage">
        {loader && <Loader /> }
        <div style={{flexWrap:"wrap"}} className="products flex">{filteredData.map(({name , price , image , discount , availability , recommended , id})=> {
            return(
                <div key={id}>
                    <img style={{width: '150px',
    height: '100px',
}} src={image} />
                    <h4>{name}</h4>
                   <div className="flex"> <p>{price - price*discount/100}</p>
                    <p style={{textDecoration : 'line-through'}}>{price}</p>
                    <p>{recommended? 'true' : 'false'}</p>
                    </div>
                        <div className="buttons">
                            <button>Add To Cart</button>
                            <button>Wishlist</button>
                        </div>
                </div>
            )
        })}
        </div>
    </div>
)
}

export default Products