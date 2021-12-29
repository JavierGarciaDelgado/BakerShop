import React from "react";
import CarouselComponent from "../Components/CarouselComponent";
import GridComponent from "../Components/GridComponent";
import Header from "../Components/Header"

function Home() {
  

  return (
    <div>
            <Header/>
            <CarouselComponent/>
            <GridComponent/>
    </div>
  );
}

export default Home;
