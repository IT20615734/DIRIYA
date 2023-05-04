import React from 'react'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slide1 from "../Assets/img1.png"
import slide2 from "../Assets/img2.png"
import slide3 from "../Assets/img3.png"
import slide4 from "../Assets/img4.png"


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
            alt="First slide" 
            slide1={{height: '0%', width: '97%', marginTop: 5}}/>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide2}
            alt="Second slide" />
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
        </Carousel.Item>

      </Carousel>
    // </div>
    //   </>
  )
}

export default SlideShow