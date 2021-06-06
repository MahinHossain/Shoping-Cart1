import React from "react";
import { useSelector } from "react-redux";

export default function CartItemTest() {
  const state = useSelector((state) => state.reducer.valu);

  return <div className="mt-5 bg-success p-5">{state.name}</div>;
}
