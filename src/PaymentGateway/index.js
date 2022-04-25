import Header from "../Components/Header";
import React, { useState } from "react";
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import "./paymentGateway.css";
import { Col, Row } from "react-bootstrap";
import { Button } from "bootstrap";
import CartCardComponent from "../Components/CartCardsComponent";

const stripePromise = loadStripe(
  "pk_test_51KrJmIGgcRvkHitN5xa6yqmw2iYqoHlGGVXhza8LSk0IlKGtkBoMIDD43wSDyltFb485KT8B6Cd1gRrm9ZPVmXyX00CPt20eeb"
);



const PaymentGateway = (props) => (
  <Elements stripe={stripePromise}>
    <Header />
    <MyComponent {...props} />
  </Elements>
);


const MyComponent = (props) => {
  const [useDelete, setUseDelete] = useState(1);
  const stripe = useStripe();
  const elements = useElements();
  const keys = Object.keys(localStorage);
  let totalPrice = 0;

  const deleteProducts = (name) => {
    if (window.confirm("Do you really want to delete?")) {
      localStorage.removeItem(name)
      setUseDelete(useDelete + 1);      
    }
    
  };

  const productBuy = () => {
    alert("Product bought")
  }
  // rest of the component
  return (
    <div className="row mt-5 p-5">
      <div className="col-6">
        <div className="card card-body">
          <h4>My shopping cart</h4>
          <div>
          {keys.map(function (key) {
                  let item = JSON.parse(localStorage.getItem(key));
                  {totalPrice=totalPrice+(item.price*item.amount)}
                  return (
                <Col sm key={item._id} className="mt-4">
                  {" "}
                  <button
                    name={item.name}
                    onClick={(e) => deleteProducts(item.name)}
                    className="DeleteButtonCart"
                  >
                    <i class="bi bi-trash"></i>
                  </button>
                  <CartCardComponent
                    id={item._id}
                    image={item.image}
                    title={item.name}
                    text={item.weight}
                    price={item.price}
                    amount={item.amount}
                  />
                </Col>
                );
              })}
          </div>
        </div>
      </div>
      <div className="col-6">
        <form className="card card-body">
          {/* Product Information */}

          <h3 className="text-center my-2">TOTAL: {totalPrice.toFixed(2)}€</h3>

          {/* User Card Input */}
          <div className="form-group">
            <input
              type="text"
              class="form-control"
              placeholder="Name on card"
              style={{ marginBottom: "20px" }}
            />
            <input
              type="text"
              class="form-control"
              placeholder="Street address"
              style={{ marginBottom: "20px" }}
            />
            <CardElement className="form-control" style={"font-size: 30px"} />
            <br />
            <label>
              🔒 Payment secured by{" "}
              <a href="https://stripe.com/docs/security/stripe">Stripe</a>
            </label>
          </div>

          <button disabled={!stripe} onClick={productBuy} className="btn btn-success">
            buy
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentGateway;
