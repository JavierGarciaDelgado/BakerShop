import React from "react";
import CarouselComponent from "../Components/CarouselComponent";
import GridComponent from "../Components/GridComponent";
import Header from "../Components/Header"
import { getUserId } from "../Config/firebase";

function Home() {
  console.log(getUserId());

  return (
    <div>
            <Header/>
            <CarouselComponent/>
            <GridComponent/>
    </div>
  );
}

export default Home;
