import React, { useState } from "react";
import Weights from "./Weights";
import StarRating from "./StarRating";
import AddToCart from "./AddToCart";
import ImageAndDiscount from "./ImageAndDiscount";
import Availability from "./Availability";
import Title from "./Title";
import products from "./products";

const Cards = () => {
  return (
    <div className="fourbytwo">
      {products.map((product) => {
        return (
          <div className="box">
            <ImageAndDiscount
              discount={product.discount}
              image={product.image}
            />
            <div className="ratingAndAvailability">
              <StarRating />
              <Availability availability={product.inStore} />
            </div>
            <Title name={product.description} />
            <Weights />
            <AddToCart />
          </div>
        );
      })}
    </div>
    // <div className="box">
    //   <ImageAndDiscount image={props.image} discount={props.discount} />
    //   <div className="ratingAndAvailability">
    //     <StarRating />
    //     <Availability availability={props.availability} />
    //   </div>
    //   <Title name={props.name} />
    //   <Weights />
    //   <AddToCart />
    // </div>
  );
};
export default Cards;
