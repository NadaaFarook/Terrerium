import React, { useEffect} from 'react'
import { useFilter } from '../../Context-Reducer/FilterContext'
import { useNavigate} from 'react-router-dom'
const Filters = () => {

    const {state , dispatch} = useFilter()
    const {filterPrice , filterRating , sortBy , recommended ,  includeOutOfStock} = state
    const {min , max} = filterPrice
    const navigate = useNavigate()
    const rating = [4,3,2,1]
    useEffect(()=>{
        navigate(`?sortBy="${sortBy}"&filterRating="${filterRating}"&recommended="${recommended}"&includeOutOfStock="${includeOutOfStock}"&min="${min}"&max="${max}"`)
    } , [sortBy , recommended , filterPrice , filterRating , min ,max , includeOutOfStock , navigate])
return(
    <div className="Filters">
        <fieldset>
            <legend>Sort</legend>
            <input
                type="radio"
                defaultChecked
                name="sort"
                onChange={()=>dispatch({type : 'SORT' , payload : 'HIGH_TO_LOW' })}
            />
            <label>Sort - High to Low</label>
            <br />
            <input
                type="radio"
                name="sort"
                onChange={()=>dispatch({type : 'SORT' , payload : 'LOW_TO_HIGH' })}
            />
            <label>Sort - Low to High</label>
       
        </fieldset>
        <fieldset>
            <legend>Ratings</legend>
            { rating.map(stars =>{
                 return(
                        <>
            <input type="radio"
            name="rating"
             onChange={()=>dispatch({type : 'FILTER_RATING' , payload : stars })} />
            <label>{stars} stars & above</label>
            <br />
                        </>
                    )})}
        </fieldset>
        <fieldset>
                    <legend>Price Range</legend>
            <input
            type="range"
            min="20"
            defaultValue="999"
            max="999"
            value={max}
            onChange={
                (e)=>{
                  
                        dispatch({type : 'FILTER_PRICE' , payload : {min , max : parseInt(e.target.value)}})
                        
                    
                }
            }
            />
            <br />
            <input
            value={min}
            onChange={
               (e)=>dispatch({type : 'FILTER_PRICE' , payload : {max , min : parseInt(e.target.value)}})}
        
            />
<br />
            <input 
             value={max}
             onChange={(e)=>{console.log(e)
             dispatch({type : 'FILTER_PRICE' , payload :{min , max :parseInt(e.target.value)}})}}
            
             />
             
            
        </fieldset>
        <fieldset>
            <input type="checkbox"
            onChange={()=>dispatch({type : 'IS_RECOMMENDED'})}
             />
             <label>
             Reccommended by Terrerium
             </label>
        </fieldset>
        <fieldset>
            <legend>
                Availability
            </legend>
            <input 
            type="checkbox"
            onChange={()=>dispatch({type : 'INCLUDE_OUT_OF_STOCK'})}
            />
            <label>Include out of stock</label>
        </fieldset>
    </div>

)
}

export default Filters