import React from 'react'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slide1 from "../Assets/img1.jpg"
import slide2 from "../Assets/img2.jpg"
import slide3 from "../Assets/img3.jpg"
import slide4 from "../Assets/img4.png"
import Container from 'react-bootstrap/esm/Container';


function SlideShow() {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
      };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide1}
          alt="First slide" />
        {/* <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide2}
          alt="Second slide" />

        {/* <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide3}
          alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide4}
          alt="Fourth slide" />
        {/* <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>
      Praesent commodo cursus magna, vel scelerisque nisl consectetur.
      </p>
    </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  )
}

export default SlideShow