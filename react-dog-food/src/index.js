import React from "react";
import ReactDOM from "react-dom";
import Card from "./components/Card";

ReactDOM.render(
  <div className="fourbytwo">
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
  </div>,
  document.getElementById("root")
);
// const card = (products) => {
//   return
// };
// const wrapper = document.querySelector(".cardWrapper");
// let cards = "";
// products.forEach((item) => {
//   cards = cards + card(item);
// });
// wrapper.innerHTML = cards;
