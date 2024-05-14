import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);

  function handleClick() {
    setInCart((inCart) => !inCart);
  }

  let appClass;
  inCart ? appClass = "in-cart" : appClass = "";

  let buttonLabel;
  inCart ? buttonLabel = "Remove From Cart" : buttonLabel = "Add to Cart";



  return (
    <li className={appClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{buttonLabel}</button>
    </li>
  );
}

export default Item;
