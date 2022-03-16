import React from "react";
import ReactDOM from "react-dom";
import Cards from "./components/Cards";
import products from "./components/products";
ReactDOM.render(
  <div className="fourbytwo">
    <Cards
      name={products[0].description}
      discount={products[0].discount}
      image={products[0].image}
    />
    <Cards
      name={products[1].description}
      discount={products[1].discount}
      image={products[1].image}
    />
    <Cards
      name={products[2].description}
      discount={products[2].discount}
      image={products[2].image}
    />
    <Cards
      name={products[3].description}
      discount={products[3].discount}
      image={products[3].image}
    />
    <Cards
      name={products[4].description}
      discount={products[4].discount}
      image={products[4].image}
    />
    <Cards
      name={products[5].description}
      discount={products[5].discount}
      image={products[5].image}
    />
  </div>,
  document.getElementById("root")
);
