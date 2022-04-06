import Header from "../Components/Header"
import React from "react";
import { usePaystackPayment } from 'react-paystack';

function PaymentGateway() {

  const config = {
      reference: (new Date()).getTime().toString(),
      email: "user@example.com",
      amount: 20000,
      publicKey: 'pk_test_49adba3fd5ab98f23f66953305ba7852642e5654',
  };
  
  // you can call this function anything
  const onSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log('closed')
  }

  const PaystackHookExample = () => {
      const initializePayment = usePaystackPayment(config);
      return (
        <div>
            <button onClick={() => {
                initializePayment(onSuccess, onClose)
            }}>Paystack Hooks Implementation</button>
        </div>
      );
  };

  return (
    <div>
            <Header/>
            <PaystackHookExample />
    </div>
  );
}

export default PaymentGateway;