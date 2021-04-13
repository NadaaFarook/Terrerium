import React, { createContext , useContext} from 'react'


const UserDataContext = createContext()


const UserData = [
    {wishlist : [
//pass id of product
    ]} ,
    {cart : [
        
    ]}
]


const UserDataContextProvider = ({children})=>{
    return(
        <UserDataContext.Provider value={{UserData}}>
            {children}
        </UserDataContext.Provider>
    )
}
export default UserDataContextProvider
//custom hook for context call
export const useUserData = () =>{
    return(
      useContext(UserDataContext)
    )
}
