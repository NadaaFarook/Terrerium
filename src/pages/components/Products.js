import React from "react";
import Loader from "../../UI_components/loader";
import { useFilter } from "../../Context-Reducer/FilterContext";
import { useProductData } from "../../Context-Reducer/productDataContext";
import { useUserData } from "../../Context-Reducer/UserDatacontext";
import { Link } from "react-router-dom";
const Products = () => {
  const { UserData, setUserData } = useUserData();
  //    // const cartId
  const cartIds = UserData.cart;
  const { state } = useFilter();
  const { data, loader } = useProductData();
  const getsortedData = (data, sortBy) => {
    if (sortBy === "HIGH_TO_LOW") {
      return data.sort((a, b) => b["price"] - a["price"]);
    }

    if (sortBy === "LOW_TO_HIGH") {
      return data.sort((a, b) => a["price"] - b["price"]);
    }
    return data;
  };

  const getFilteredData = (data, state) => {
    return data
      .filter((product) => product.rating > state.filterRating)
      .filter((product) => product.price < state.filterPrice.max)
      .filter((product) => product.price > state.filterPrice.min)
      .filter((product) =>
        state.recommended ? product.recommended === true : product
      )
      .filter((product) =>
        state.includeOutOfStock ? product.includeOutOfStock === true : product
      );
  };

  const sortedData = getsortedData([...data], state.sortBy);
  const filteredData = getFilteredData([...sortedData], state);
  return (
    <div className="ProductsPage">
      {loader && <Loader />}
      <div style={{ flexWrap: "wrap" }} className="products flex">
        {filteredData.map(
          ({ name, price, image, discount, includeOutOfStock, recommended, id }) => {
            return (
              <div key={id} className="product">
                <img src={image} alt="ygjbjbk" className={includeOutOfStock ? '' : 'out_of_stock'} />
                <h4>{name}</h4>
                <div className="flex">
                  {" "}
                  <p className="p-1">
                    {(price - (price * discount) / 100).toFixed(2)}
                  </p>
                  <p className="p-1" style={{ textDecoration: "line-through" }}>
                    {price}
                  </p>
                  <p>{includeOutOfStock}</p>
                </div>
                <div className="buttons">
                  {
cartIds.includes(id) ? <button>
<Link to="/cart">Go to cart</Link>
</button> : <button
                    onClick={() => {
                      setUserData({
                        ...UserData,
                        cart: [...UserData.cart, id],
                      });
                    }}
                  >
                    Add To Cart
                  </button>
                  }
                
                  
                  <button
                    onClick={() =>
                      setUserData({
                        ...UserData,
                        wishlist: [...UserData.wishlist, id],
                      })
                    }
                  >
                    Wishlist
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Products;
