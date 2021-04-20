import axios from 'axios'
import React ,  { createContext , useContext, useState , useEffect}  from 'react'


const ProductDataContext = createContext()



const ProductDataContextProvider = ({children})=>{
    const [data, setData] = useState([])
    const [loader , setLoader] = useState(true)
 
    useEffect(() => {
     const fetchData = async () => {
       const result = await axios('/api/products');
       setData(result.data.products);
       setLoader(false)
     };
  
     fetchData();
   } , [])
    return(
        <ProductDataContext.Provider value={{data , loader}}>
            {children}
        </ProductDataContext.Provider>
    )
}
export default ProductDataContextProvider
//custom hook for context call
export const useProductData = () =>{
    return(
      useContext(ProductDataContext)
    )
}
