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

  const [isButtonClicked, setButtonClicked] = useState(false);
  function handleButtonClick() {
    setButtonClicked(true);
  }

  let newArray = [...itemState];
  function deleteCard(id) {
    newArray.splice(
      itemState.findIndex((i) => i.id === id),
      1
    );
    setItemState(newArray);
  }
  if (isButtonClicked == true) {
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
              <AddToCart onDelete={deleteCard} idTest={product.id} />
            </div>
          );
        })}
      </div>
    );
  } else
    return (
      <button className="homeButton" onClick={handleButtonClick}>
        <span className="text">Load product cards</span>
      </button>
    );
};
export default Cards;
