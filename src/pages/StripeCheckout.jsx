import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import "../Stripe.css";
import CheckoutForm from "./CheckoutForm";
import { useSelector } from "react-redux";
import { selectCurrentOrder } from "../features/Order/orderSlice";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe("pk_test_51O0lNOSHkYgXgY638B2cLcdDuyAWz8HmmWHqOG7K8RPy32HTPLqK9hq5xWIdhTTO4vSF5NPEHjjhQpJA2Ma3nBBA00Z3jeaKdQ");

export default function StripeCheckout() {
  const [clientSecret, setClientSecret] = useState("");
  const currentorder= useSelector(selectCurrentOrder)
  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ TotalAmount: currentorder.TotalAmount, orderId:currentorder.id }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="Stripe">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}