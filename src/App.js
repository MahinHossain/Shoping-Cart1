import logo from "./logo.svg";
import "./App.css";

import Products from "./component/Products";
import Cart from "./component/Cart";
import { getvalue, cartItemAc } from "./redux/Action";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItemTest from "./component/CartItemTest";
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
  };

  const removeFromCart = (item) => {
    setcartItem(cartItem.filter((items) => items !== item));
  };

  useEffect(() => {
    dispatch(getvalue());
    dispatch(cartItemAc(cartItem));
  }, [cartItem]);
  return (
    <div className="App container">
      <div className="float-right">
        <div className=" row">
          <button className="btn btn-danger" onClick={() => viewItem()}>
            <i class="fas fa-shopping-cart"> </i>{" "}
            <span class="badge badge-danger">{cartItem.length}</span>
          </button>

          <button className=" btn btn-primary " onClick={() => viewProduct()}>
            Products
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
