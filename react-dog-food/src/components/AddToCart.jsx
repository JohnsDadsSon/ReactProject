import React, { useState } from "react";
import products from "./products";
import Cards from "./Cards";

const AddToCart = (props) => {
  const [isMouseOverCart, setMouseOverCart] = useState(false);

  function handleClick(event, id) {
    props.onDelete(id);
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
        onClick={(event) => handleClick(event, props.idTest)}
      >
        {isMouseOverCart ? "Are you sure?" : "Delete Item"}
      </button>
    </div>
  );
};
export default AddToCart;
