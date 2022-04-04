import React, { useState, useEffect } from "react";
import Weights from "./Weights";
import StarRating from "./StarRating";
import AddToCart from "./AddToCart";
import ImageAndDiscount from "./ImageAndDiscount";
import Availability from "./Availability";
import Title from "./Title";
import products from "./products";

const Cards = () => {
  const [itemState, setItemState] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos?_start=0&_limit=6")
      .then((response) => response.json())
      .then((data) => setItemState(data));
  }, []);

  // const removeCard = (arr, item) => {
  //   let newArray = [...arr];
  //   const index = newArray.findIndex(/*search by id*/);
  //   if (index !== -1) {
  //     newArray.splice(index, 1);
  //     return newArray;
  //   }
  // };

  return (
    <div className="fourbytwo">
      {itemState.map((product) => {
        return (
          <div className="box" key={product.id}>
            <ImageAndDiscount image={product.url} />
            <div className="ratingAndAvailability">
              <StarRating />
              {/* <Availability availability={product.inStore} /> */}
            </div>

            <Title name={product.title} />
            <Weights />
            <AddToCart />
          </div>
        );
      })}
    </div>
  );
};
export default Cards;
