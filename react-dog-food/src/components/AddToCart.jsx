import React, { useState } from "react";
import products from "./products";
const AddToCart = () => {
  const [isMouseOverCart, setMouseOverCart] = useState(false);
  function handleClick() {
    // setCards();
  }
  function handleMouseOverCart() {
    setMouseOverCart(true);
  }
  function handleMouseOutCart() {
    setMouseOverCart(false);
  }
  return (
    <div className="priceAndAdd">
      <div className="price">$100</div>
      <button
        className="addToCart"
        style={{ backgroundColor: isMouseOverCart ? "#0099dd" : "#00d4ff" }}
        onMouseOver={handleMouseOverCart}
        onMouseOut={handleMouseOutCart}
        onClick={handleClick}
      >
        {isMouseOverCart ? "Are you sure?" : "Delete Item"}
      </button>
    </div>
  );
};
export default AddToCart;
