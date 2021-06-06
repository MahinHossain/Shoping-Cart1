import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Cart({ cartItem, removeFromCart }) {
  const state = useSelector((state) => state.reducer.valu);

  return (
    <div>
      {" "}
      <h2>Cart</h2>
      <div className="row">
        {" "}
        {cartItem.map((item, index) => (
          <div class="card heightwidth">
            <img
              class="card-img-top imgheightwidth"
              src={item.image}
              alt="Card image cap"
            />

            <h5 class="card-title">{item.name}</h5>

            <h6 className="card-title">{item.price}</h6>
            <a
              href="#"
              class="btn btn-outline-dark small"
              onClick={() => removeFromCart(item)}
            >
              Remove Item
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
