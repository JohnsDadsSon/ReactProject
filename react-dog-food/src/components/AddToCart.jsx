import React, { useState } from "react";
import products from "./products";
const AddToCart = () => {
  const [isMouseOverWeight, setMouseOverWeight] = useState(false);

  function handleMouseOverWeight() {
    setMouseOverWeight(true);
  }
  function handleMouseOutWeight() {
    setMouseOverWeight(false);
  }
  return (
    <div className="priceAndAdd">
      <div className="price">$100</div>
      <button
        className="addToCart"
        style={{ backgroundColor: isMouseOverWeight ? "#0099dd" : "#00d4ff" }}
        onMouseOver={handleMouseOverWeight}
        onMouseOut={handleMouseOutWeight}
      >
        Add to cart
      </button>
    </div>
  );
};
export default AddToCart;
