import React, { useState, useEffect } from "react";
import products from "./products";

const Title = (props) => {
  return (
    <div id="cardTitle" className="productTitle">
      {props.name}
    </div>
  );
};
export default Title;
