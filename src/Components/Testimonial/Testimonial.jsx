import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import './Textimonial.css'
import Retestimonial from '../../Reuseable/Retestimonial/Retestimonial'
import Slider from "react-slick";


 function Testimonial() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };
  return ( 
     <>
     <div id="testimonial">
        <Container>
            <Row>
              <Slider {...settings}>
              <Col sm={12} md={12} className='d-flex justify-content-center align-items-center'>
                <Retestimonial/>
                </Col>
                <Col sm={12} md={12} className='d-flex justify-content-center align-items-center'>
                <Retestimonial/>
                </Col>
                <Col sm={12} md={12} className='d-flex justify-content-center align-items-center'>
                <Retestimonial/>
                </Col>
              </Slider>
              
            </Row>
        </Container>
     </div>
    </>
  )
}
export default Testimonial;