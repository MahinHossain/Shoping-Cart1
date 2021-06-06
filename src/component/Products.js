import React from "react";
import data from "./Data";
import { useDispatch, useSelector } from "react-redux";
import { getvalue } from "../redux/Action";

export default function Products({ addToCart1 }) {
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Products</h2>
      <div className="row">
        {data.map((item) => (
          <div class="card heightwidth">
            <img
              class="card-img-top imgheightwidth"
              src={item.image}
              alt="Card image cap"
            />
            <h5 class="card-title">{item.name}</h5>
            <h6>{item.price}</h6>
            <button
              onClick={() => addToCart1(item)}
              class="btn btn-outline-dark small"
            >
              Add to card
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
