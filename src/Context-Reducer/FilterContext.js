import React, { createContext , useContext , useReducer } from 'react'


const FilterContext = createContext()

const reducerFunction = (state , action) =>{
    switch(action.type){
        case 'SORT' :
            return {...state , sortBy : action.payload} 
        case 'FILTER_RATING' : 
            return {...state , filterRating : action.payload}
        case 'FILTER_PRICE' : 
            return {...state , filterPrice : action.payload}
        case 'IS_RECOMMENDED' : 
            return {...state , recommended : !state.recommended}
            case 'INCLUDE_OUT_OF_STOCK' : 
            return {...state , includeOutOfStock : !state.includeOutOfStock}


    }
}


const FilterContextProvider = ({children})=>{
    
const [state, dispatch] = useReducer(reducerFunction, {
    sortBy: 'HIGH_TO_LOW' ,
    filterRating: 4 ,
    filterPrice : {
        min : 20,
        max : 999
    },
    recommended : false ,
    includeOutOfStock : false ,
})



    return(
        <FilterContext.Provider value={{state , dispatch}}>
            {children}
        </FilterContext.Provider>
    )
}
export default FilterContextProvider
//custom hook for context call
export const useFilter = () =>{
    return(
      useContext(FilterContext)
    )
}
