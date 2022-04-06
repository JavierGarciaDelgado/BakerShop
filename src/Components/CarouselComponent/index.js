import React from "react";
import { Carousel } from 'react-bootstrap';
import "./carouselComponent.css"

function CarouselComponent() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 tamanyo"
          src="http://cdn29.us1.fansshare.com/pictures/bread/amazing-bread-wallpaper-hd-wallpapers-29870920.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className="textShadow">Pan de centeno</h3>
          <p className="textShadow">Riquísimo pan de centeno elaborado a mano por nuestros expertos artesanos.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 tamanyo"
          src="https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/06/06152214/Mas-Mariana-Masa-Madre.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className="textShadow">Pan de masa madre</h3>
          <p className="textShadow">Increible pan de masa madre al horno de leña</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 tamanyo"
          src="https://www.recetasderechupete.com/wp-content/uploads/2018/01/Pan-casero-f%C3%A1cil.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className="textShadow">Third slide label</h3>
          <p className="textShadow">
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;
