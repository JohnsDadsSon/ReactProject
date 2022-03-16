import React from "react";
import products from "./products";
function StarRating() {
  return (
    <div className="starRating">
      <input type="radio" className="input-hidden" id="star1" />
      <label for="star1">
        <img className="star" id="star1image" src="/images/star.png" alt="" />
      </label>
      <input type="radio" className="input-hidden" id="star2" />
      <label for="star2">
        <img className="star" id="star2image" src="/images/star.png" alt="" />
      </label>
      <input type="radio" className="input-hidden" id="star3" />
      <label for="star3">
        <img className="star" id="star3image" src="/images/star.png" alt="" />
      </label>
      <input type="radio" className="input-hidden" id="star4" />
      <label for="star4">
        <img className="star" id="star4image" src="/images/star.png" alt="" />
      </label>
      <input type="radio" className="input-hidden" id="star5" />
      <label for="star5">
        <img className="star" id="star5image" src="/images/star.png" alt="" />
      </label>
    </div>
  );
}

export default StarRating;

// var currentStar1 = document.getElementById("star1image");
// var currentStar2 = document.getElementById("star2image");
// var currentStar3 = document.getElementById("star3image");
// var currentStar4 = document.getElementById("star4image");
// var currentStar5 = document.getElementById("star5image");

// function mouseOutRating(ele) {
//   if (ele == 1) {
//     currentStar1.setAttribute("src", "../images/star.png");
//   } else if (ele == 2) {
//     currentStar2.setAttribute("src", "../images/star.png");
//   } else if (ele == 3) {
//     currentStar3.setAttribute("src", "../images/star.png");
//   } else if (ele == 4) {
//     currentStar4.setAttribute("src", "../images/star.png");
//   } else {
//     currentStar5.setAttribute("src", "../images/star.png");
//   }
// }

// function starRating(ele) {
//   if (ele == 5) {
//     currentStar1.setAttribute("src", "../images/starblue.png");
//     currentStar2.setAttribute("src", "../images/starblue.png");
//     currentStar3.setAttribute("src", "../images/starblue.png");
//     currentStar4.setAttribute("src", "../images/starblue.png");
//     currentStar5.setAttribute("src", "../images/starblue.png");
//   } else if (ele == 4) {
//     currentStar1.setAttribute("src", "../images/starblue.png");
//     currentStar2.setAttribute("src", "../images/starblue.png");
//     currentStar3.setAttribute("src", "../images/starblue.png");
//     currentStar4.setAttribute("src", "../images/starblue.png");
//   } else if (ele == 3) {
//     currentStar1.setAttribute("src", "../images/starblue.png");
//     currentStar2.setAttribute("src", "../images/starblue.png");
//     currentStar3.setAttribute("src", "../images/starblue.png");
//   } else if (ele == 2) {
//     currentStar1.setAttribute("src", "../images/starblue.png");
//     currentStar2.setAttribute("src", "../images/starblue.png");
//   } else {
//     currentStar1.setAttribute("src", "../images/starblue.png");
//   }
// }
