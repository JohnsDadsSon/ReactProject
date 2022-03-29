import React from "react";
import products from "./products";
var availabilityCheck = document.getElementById("availableCheck");
var display = document.getElementById("stockText");

const Availability = (props) => {
  if (props.availability == true) {
    return (
      <div className="availability">
        <img id="availableCheck" className="check" src="../images/check.png" />
        <input id="stockText" value="In Stock!" readOnly></input>
      </div>
    );
  } else if (props.availability == false) {
    return (
      <div className="availability">
        <img
          id="availableCheck"
          className="check"
          src="../images/outOfStock.png"
        />
        <input id="stockText" value="Out Of Stock" readOnly></input>
      </div>
    );
  }
};

export default Availability;
