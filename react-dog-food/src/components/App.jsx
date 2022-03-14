import React from "react";
import ReactDOM from "react-dom";
import Weights from "../components/Weights";
import StarRating from "../components/StarRating";
import AddToCart from "../components/AddToCart";
function App() {
  return (
    <div className="box">
      <StarRating />
      <Weights />
      <AddToCart />
    </div>
  );
}
export default App;
