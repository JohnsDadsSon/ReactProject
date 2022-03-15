import React from "react";
import Weights from "../components/Weights";
import StarRating from "../components/StarRating";
import AddToCart from "../components/AddToCart";
import ImageAndDiscount from "./ImageAndDiscount";
import Availability from "./Availability";
import Title from "./Title";

function Card() {
  return (
    <div className="box">
      <ImageAndDiscount />
      <div className="ratingAndAvailability">
        <StarRating />
        <Availability />
      </div>
      <Title />
      <Weights />
      <AddToCart />
    </div>
  );
}
export default Card;
