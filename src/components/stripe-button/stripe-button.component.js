import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HHAgNACpD585S5jFHcGUPZLblNhz1ieHuba1upkoCb1jqIyytEpCXlxFl5nXEDCRNLuLRvqUNJ3CPTk63ahfCRq00elxvOitF";

  const onToken = (token) => {
    console.log(token);
    alert("Payment success!");
  };

  return (
    <StripeCheckout
      label="Pay now"
      name="CRWM Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;