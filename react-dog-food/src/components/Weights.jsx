import React, { useState } from "react";
import products from "./products";

const Weights = () => {
  return (
    <div className="weightVarients">
      <div className="weight">
        <input type="radio" id="paw1" className="input-hidden" />
        <label htmlFor="paw1">
          <img className="paw" id="paw1image" src="../images/paw.png" alt="" />
        </label>
        300g
      </div>
      <div className="weight">
        <input type="radio" id="paw2" className="input-hidden" />
        <label htmlFor="paw2">
          <img className="paw" id="paw3image" src="../images/paw.png" alt="" />
        </label>
        1 kg
      </div>
      <div className="weight">
        <input type="radio" id="paw3" className="input-hidden" />
        <label htmlFor="paw3">
          <img className="paw" id="paw3image" src="../images/paw.png" alt="" />
        </label>
        2 kg
      </div>
      <div className="weight">
        <input type="radio" id="paw4" className="input-hidden" />
        <label htmlFor="paw4">
          <img className="paw" id="paw4image" src="../images/paw.png" alt="" />
        </label>
        5 kg
      </div>
    </div>
  );
};

export default Weights;
