import React from "react";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import { selectCartItems, selectTotal } from "../../redux/cart/cart.selector";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stipe-button/stripe-button.component";

import "./check-out.styles.scss";

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Name</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} item={cartItem} />
    ))}
    <span className="total">Total: ${total}</span>
    <div className="test-warming">
      *Please use the following credit card for payment* <br />
      4242 4242 4242 4242 - Exp: 0120 - CW: 123
    </div>
    <StripeCheckoutButton price={total} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectTotal
});

export default connect(mapStateToProps)(CheckoutPage);
