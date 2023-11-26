import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import  { useState } from 'react';
import './CheckoutForm.css';
import toast from 'react-hot-toast';

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError,setCardError] = useState("");
    const [transactionId,setTransactionId] = useState("");
    const [clientSecret,setClientSecret] = useState("");

    const handleSubmit= async(e)=>{
        e.preventDefault();
        if(!stripe || !elements){
            return;
        }
        const card = elements.getElement(CardElement);
        if(card ===  null){
            return;
        }

        const {error,paymentMethod} = await stripe.createPaymentMethod({type:'card',card})

        if(error){
            console.log('error: ',error);
            toast.error(error.message);
        }else{
            console.log('Method: ',paymentMethod);
        }
    }
    return (
      <>
        <form className="payment shadow-lg" onSubmit={handleSubmit}>
          <p className='text-gray-700 font-semibold py-4'>Provide Card Information:</p>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
          <button
            className=" "
            type="submit"
            onClick={handleSubmit}
            disabled={!stripe || !clientSecret || processing}
          >
            Pay
          </button>
        </form>
        {transactionId && (
          <p className="text-green-600 text-center">
            Transaction Complete: {transactionId}
          </p>
        )}
      </>
    );
};

export default CheckoutForm;