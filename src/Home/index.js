import CarouselComponent from "../Components/CarouselComponent";
import Footer from "../Components/FooterComponent";
import GridComponent from "../Components/GridComponent";
import Header from "../Components/Header"
import React from "react";

function Home() {
  return (
    <div>
            <Header/>
            <CarouselComponent/>
            <GridComponent/>
            <Footer/>
    </div>
  );
}

export default Home;
