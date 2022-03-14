import React from "react";
import ReactDOM from "react-dom";

function StarRating() {
  return (
    <div className="starRating">
      <input type="radio" className="input-hidden" id="star1" />
      <label for="star1">
        <img className="star" id="star1image" src="/images/star.png" />
      </label>
      <input type="radio" className="input-hidden" id="star2" />
      <label for="star2">
        <img className="star" id="star2image" src="/images/star.png" />
      </label>
      <input type="radio" className="input-hidden" id="star3" />
      <label for="star3">
        <img className="star" id="star3image" src="/images/star.png" />
      </label>
      <input type="radio" className="input-hidden" id="star4" />
      <label for="star4">
        <img className="star" id="star4image" src="/images/star.png" />
      </label>
      <input type="radio" className="input-hidden" id="star5" />
      <label for="star5">
        <img className="star" id="star5image" src="/images/star.png" />
      </label>
    </div>
  );
}

export default StarRating;
