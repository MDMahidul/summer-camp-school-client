import React from 'react';
import DashboardHeader from '../../../components/DashboardHeader/DashboardHeader';
import FadeInAnimation from '../../../components/FadeInAnimation/FadeInAnimation';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(`${import.meta.env.VITE_PAYMENT_GATEWAY_PK}`);

const Payment = () => {
    return (
      <div className="container mx-auto px-4 sm:px-8 py-8">
        <DashboardHeader title={"Make Payment"} />
        <FadeInAnimation>
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        </FadeInAnimation>
      </div>
    );
};

export default Payment;