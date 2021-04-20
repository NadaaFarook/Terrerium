import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="Navbar p-2">
      <Link to="/products">Products</Link> 
      <Link to="/cart">Cart</Link>
      <Link to="/wishlist">Wishlist</Link>
    </div>
  );
};
