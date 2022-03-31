import React, { useState, useEffect } from "react";
import Weights from "./Weights";
import StarRating from "./StarRating";
import AddToCart from "./AddToCart";
import ImageAndDiscount from "./ImageAndDiscount";
import Availability from "./Availability";
import Title from "./Title";
import products from "./products";

const Cards = () => {
  let productData = [];

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        productData = [...json];
        console.log("Test 2: " + productData);
      });
  }, []);

  console.log("Test 1: " + productData);

  return (
    <div className="fourbytwo">
      {products.map((product) => {
        return (
          <div className="box" key={product.id}>
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
  );
};
export default Cards;
