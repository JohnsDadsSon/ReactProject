// To-Do: Figure out radio buttons;
//        issues with setAttribute() method,
//        which seems required for changing paw colour.
//        If clarified, can complete buttons this afternoon.
//
//        Once project reviewed and finalised,
//        discuss next/final project.

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
      availability={products[0].inStore}
    />
    <Cards
      name={products[1].description}
      discount={products[1].discount}
      image={products[1].image}
      availability={products[1].inStore}
    />
    <Cards
      name={products[2].description}
      discount={products[2].discount}
      image={products[2].image}
      availability={products[2].inStore}
    />
    <Cards
      name={products[3].description}
      discount={products[3].discount}
      image={products[3].image}
      availability={products[3].inStore}
    />
    <Cards
      name={products[4].description}
      discount={products[4].discount}
      image={products[4].image}
      availability={products[4].inStore}
    />
    <Cards
      name={products[5].description}
      discount={products[5].discount}
      image={products[5].image}
      availability={products[5].inStore}
    />
  </div>,
  document.getElementById("root")
);
