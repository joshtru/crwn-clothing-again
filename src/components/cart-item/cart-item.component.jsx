import React from "react";

import "./cart-item.styles.scss";

const CartItem = ({ item: { name, imageUrl, price, quatity } }) => (
  <div className="cart-item">
    <img src={imageUrl} alt="item" />
    <div className="item-details">
      <span className="name">{name}</span>
      <span>
        {quatity} x {price}
      </span>
    </div>
  </div>
);

export default CartItem;
