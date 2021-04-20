import React from "react";
import { useProductData } from "../Context-Reducer/productDataContext";
import { useUserData } from "../Context-Reducer/UserDatacontext";

const Cart = () => {
  const { data } = useProductData();
  const { UserData, setUserData } = useUserData();

  //    // const cartId
  const cartIds = UserData.cart;

  const cartData = cartIds.map((id) =>
    data.find((product) => product.id === id)
  );
  const func = (state, value) => {
    return {
      totalPrice: Number(state.totalPrice) + Number(value.price),
      discountPrice: state.discountPrice + (value.price * value.discount) / 100,
    };
  };

  const state = cartData.reduce(func, { totalPrice: 0, discountPrice: 0 });
  console.log(state.totalPrice, "pr");
  return (
    <div className="Cart">
      {cartData.length === 0 ? (
        <div>
          <h2 className="p-2 center">No products added in cart</h2>
        </div>
      ) : (
        cartData.map(({ name, price, description, id, discount }) => {
          return (
            <div>
              <h2>{name}</h2>
              <p>{price}</p>
              <p>{description}</p>
              <p>{discount}</p>
              <button>Add to cart</button>

              <button
                onClick={() =>
                  setUserData({
                    ...UserData,
                    cart: UserData.cart.filter((idd) => idd !== id),
                  })
                }
              >
                Remove from cart
              </button>
            </div>
          );
        })
      )}

      <div className="price_card">
        <p>
          Total price <span>${state.totalPrice}</span>
        </p>
        <p>
          Total discount <span>${state.discountPrice}</span>
        </p>
        <h3>
          Final Price <span>${state.totalPrice - state.discountPrice}</span>
        </h3>
      </div>
    </div>
  );
};

export default Cart;
