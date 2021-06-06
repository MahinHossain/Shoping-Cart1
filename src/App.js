import logo from "./logo.svg";
import "./App.css";

import Products from "./component/Products";
import Cart from "./component/Cart";
import { getvalue } from "./redux/Action";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItemTest from "./component/CartItemTest";
function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.reducer.valu);

  const [cartItem, setcartItem] = useState([]);
  const [page, setpage] = useState("products");

  const viewItem = () => {
    setpage("cart");
  };
  const viewProduct = () => {
    setpage("products");
  };

  const addToCart = (product) => {
    console.log(`product`, product);
    setcartItem([...cartItem, { ...product }]);
  };

  const removeFromCart = (item) => {
    setcartItem(cartItem.filter((items) => items !== item));
  };
  // const handleInput = (e) => {
  //   console.log(`value`, e);
  //   dispatch(getvalue(cartItem));
  // };

  //
  // useEffect(() => {
  //   dispatch(getvalue());
  // }, []);
  return (
    <div className="App container">
      <input
        className="form-control-sm"
        type="text"
        placeholder="Enter name"
        // onChange={(e) => handleInput(e.target.value)}
      ></input>
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
