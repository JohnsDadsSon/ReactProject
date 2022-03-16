import React from "react";
import products from "./products";
function Weights() {
  return (
    <div className="weightVarients">
      <div className="weight">
        <input
          type="radio"
          id="paw1"
          className="input-hidden"
          // defaultChecked={false}
          // onInput={console.log("hey!")}
        />
        <label htmlFor="paw1">
          <img className="paw" id="paw1image" src="/images/paw.png" alt="" />
        </label>
        300g
      </div>
      <div className="weight">
        <input type="radio" id="paw2" className="input-hidden" />
        <label htmlFor="paw2">
          <img className="paw" id="paw3image" src="/images/paw.png" alt="" />
        </label>
        1 kg
      </div>
      <div className="weight">
        <input type="radio" id="paw3" className="input-hidden" />
        <label htmlFor="paw3">
          <img className="paw" id="paw3image" src="/images/paw.png" alt="" />
        </label>
        2 kg
      </div>
      <div className="weight">
        <input type="radio" id="paw4" className="input-hidden" />
        <label htmlFor="paw4">
          <img className="paw" id="paw4image" src="/images/paw.png" alt="" />
        </label>
        5 kg
      </div>
    </div>
  );
}

var currentPaw1 = document.getElementById("paw1image");
var currentPaw2 = document.getElementById("paw2image");
var currentPaw3 = document.getElementById("paw3image");
var currentPaw4 = document.getElementById("paw4image");

function weightClick(ele) {
  if (ele === 1) {
    currentPaw1.setAttribute("src", "../images/pawblue.png");
  } else if (ele === 2) {
    currentPaw2.setAttribute("src", "../images/pawblue.png");
  } else if (ele === 3) {
    currentPaw3.setAttribute("src", "../images/pawblue.png");
  } else if (ele === 4) {
    currentPaw4.setAttribute("src", "../images/pawblue.png");
  }
}
export default Weights;
