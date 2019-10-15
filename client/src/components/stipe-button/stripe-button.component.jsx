import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_2pXzErU2SXPfB2ilDzxUO8vP00Zv48CvGB";

  const onToken = token => {
    axios({
      url: "payment",
      method: "Post",
      data: {
        amount: priceForStripe,
        token
      }
    })
      .then(response => {
        alert("Payment was successful");
      })
      .catch(error => {
        console.log("Payment error", JSON.parse(error));
        alert(
          "Payment Unsuccessful. Please make sure to use the credit card provided"
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`You total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
