import logo from "./logo.svg";
import "./App.css";

import Products from "./component/Products";
import Cart from "./component/Cart";
import { getvalue, cartItemAc } from "./redux/Action";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
function App() {
  const dispatch = useDispatch();

  const [cartItem, setcartItem] = useState([]);
  const [page, setpage] = useState("products");

  const viewItem = () => {
    setpage("cart");
  };
  const viewProduct = () => {
    setpage("products");
  };

  const addToCart = (product) => {
    setcartItem([...cartItem, { ...product }]);
    alert("item added to cart");
  };

  const removeFromCart = (item) => {
    setcartItem(cartItem.filter((items) => items !== item));
  };

  useEffect(() => {
    dispatch(getvalue());
    dispatch(cartItemAc(cartItem));
  }, [cartItem]);
  return (
    <div className="App container mt-5">
      <div className="">
        <div className=" row">
          <button
            className=" btn btn-outline-dark  "
            onClick={() => viewProduct()}
          >
            Products
          </button>
          <button
            className="btn btn-danger ml-auto "
            onClick={() => viewItem()}
          >
            <i class="fas fa-shopping-cart"> </i>{" "}
            <span class="badge badge-danger">{cartItem.length}</span>
          </button>
        </div>
      </div>
      {page === "products" && <Products addToCart1={addToCart} />}

      {page === "cart" && (
        <Cart cartItem={cartItem} removeFromCart={removeFromCart} />
      )}
    </div>
  );
}

export default App;
