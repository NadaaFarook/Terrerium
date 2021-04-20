import React, { createContext, useContext, useState } from "react";

const UserDataContext = createContext();

const UserDataContextProvider = ({ children }) => {
  const [UserData, setUserData] = useState({
    wishlist: [],
    cart: [],
    toast: {
      display: false,
      value: "Added item to cart",
    },
  });

  return (
    <UserDataContext.Provider value={{ UserData, setUserData }}>
      {children}
    </UserDataContext.Provider>
  );
};
export default UserDataContextProvider;
//custom hook for context call
export const useUserData = () => {
  return useContext(UserDataContext);
};
