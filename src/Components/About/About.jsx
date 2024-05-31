import React from 'react'
import './About.css'
import { Col, Container, Row } from 'react-bootstrap';
import aboutimg from '../../assets/img/liton2.jpg'

 function About() {
  return (
   <>
    <div id="about">
        <Container fluid>
            <Row className='align-items-center'>
                <Col sm={12} md={6}>
                    <div className="about_img">
                        <img src={aboutimg} alt="" />
                    </div>
                </Col>
                <Col sm={12} md={6}>
                    <div className="about_content">
                        <div className='section-header'>
                        <p>Learn About Me</p>
                        <h2>04 Years Experience</h2>
                        <div className="about_text">
                            <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida</h5>
                        </div>
                        </div>
                        <div class="skills">
            <div className="skill-name">
              <p>Web Design</p>
              <p>85%</p>
            </div>
            <div className="progress">
              <div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{width:"85%"}}></div>
            </div>
            <div className="skill-name">
              <p>Web Development</p>
              <p>95%</p>
            </div>
            <div className="progress">
              <div className="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{width:"85%"}}>
              </div>
            </div>
            <div className="skill-name">
              <p>Apps Design</p>
              <p>90%</p>
            </div>
            <div className="progress">
              <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width:"85%"}}></div>
            </div>
            <div className="skill-name">
              <p>Apps Development</p>
              <p>85%</p>
            </div>
            <div className="progress">
              <div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{width:"85%"}}></div>
            </div>
          </div>
                        <a href="#" className='btn'>Learn More</a>
                    </div>
                    
                </Col>
            </Row>
        </Container>
    </div>
   </>
  )
}
export default About;