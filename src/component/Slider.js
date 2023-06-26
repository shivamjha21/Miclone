import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Slider({ start }) {
  return (
    <Carousel fade>
      {start.map((item, index) => (
        <Carousel.Item key={index}>
          <img className="d-block w-100" src={item} alt={`slide ${index}`} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
