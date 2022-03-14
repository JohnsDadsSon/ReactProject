import React from "react";
import ReactDOM from "react-dom";

function App() {
  return (
    <div className="box">
      <div class="starRating">
        <input
          type="radio"
          className="stars"
          id="star1"
          src="assets/images/star.png"
        />
        <input
          type="radio"
          className="stars"
          id="star2"
          src="assets/images/star.png"
        />
        <input
          type="radio"
          className="stars"
          id="star3"
          src="assets/images/star.png"
        />
        <input
          type="radio"
          className="stars"
          id="star4"
          src="assets/images/star.png"
        />
        <input
          type="radio"
          className="stars"
          id="star5"
          src="assets/images/star.png"
        />
      </div>
    </div>
  );
}
export default App;
