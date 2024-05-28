import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import heroimg from '../../assets/img/liton.png'
import './Banner.css'
import { ReactTyped } from "react-typed";

export default function Banner() {
  return (
    <>
    <div id='banner'>
    <Container fluid>
        <Row className='align-items-center'>
            <Col sm={12} md={6}>
                <div className="hero_content">
                    <div className="hero_text">
                        <p>I'm</p>
                        <h1>MD.Liton Rahman</h1>
                        <h3><ReactTyped strings={["Front-End Development.","Apps Designer"]} typeSpeed={40} loop /></h3>
                    </div>
                    <div className="hero_btn">
                        <a href="#" className='btn'>Hire Me</a>
                        <a href="#" className='btn'>Contact Me</a>
                    </div>
                </div>
            </Col>
            <Col sm={12} md={6} className='d-none d-md-block'>
                <div className="hero_img">
                    <img src={heroimg} alt="hero_img" className='heroimg_custom' />
                </div>
            </Col>
        </Row>
    </Container>
    </div>
 
    </>
  )
}
