import React from "react";
import Header from "../Components/Header"

function Flour() {
  const fetchFlour = function() {
    fetch("localhost:5000/api/Product")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }
  fetchFlour();
  return (
    <div>
            <Header/>
            Flour
    </div>
  );
}

export default Flour;