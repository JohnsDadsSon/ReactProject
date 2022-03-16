import React from "react";
import products from "./products";
function ImageAndDiscount(props) {
  return (
    <div>
      <div className="percentDiscount">{props.discount}</div>
      <img className="productImage" src={props.image} />
    </div>
  );
}
export default ImageAndDiscount;
