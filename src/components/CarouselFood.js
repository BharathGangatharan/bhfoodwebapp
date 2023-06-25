import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import products from '../assets/fake-data/products';
import './Home.css'

const CarouselFood = () => {

    const [index, setIndex] = useState();

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    return (
      <div className="CarouselFoodContainer">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {products.slice(1, 7).map((item, key) => {
            return (
              <Carousel.Item interval={500000} key={item.id}>
                <div className="carousel-img">
                    <img
                    className="d-block w-100"
                    src={item.image01}
                    alt={item.title}
                    />
                </div>
                <Carousel.Caption>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    );
}

export default CarouselFood;
