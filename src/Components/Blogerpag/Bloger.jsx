import React from 'react'
import './Bloger.css'
import Hedar from '../../Reuseable/Hedercard/Hedar';
import {Col, Container, Row } from 'react-bootstrap';
import Blog from '../../Reuseable/Blogcard/Blog';
import Slider from "react-slick";

 function Bloger() {
  var settings = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
    <Container>
    <div id="blog">
        <div className='blog_titel'>
            <Hedar subtitel="FROM BLOG" titel="Latest Articles"/>
        </div>
        <Row>
          <Slider{...settings} >
            <Blog/>
            <Blog/>
            <Blog/>
            <Blog/>
            <Blog/>
          </Slider>
        </Row>
    </div>
    </Container>

    </>
  )
}
export default Bloger;