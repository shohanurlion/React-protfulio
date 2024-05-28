import React from 'react'
import './Portfolio.css'
import { Container, Row } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import portimg from '../../assets/img/portfolio-1.jpg'
import Hedar from '../../Reuseable/Hedercard/Hedar'

function Portfolio() {
  return (
    <>
<div className="portfolio" id="portfolio">
  <Hedar subtitel="MY PORTFOLIO" titel="My Excellent Portfolio"/>
<Container>
    <div className='custom_tab'>
    <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"
      fill>
      <Tab eventKey="home" title="ALL">
       <Row>
       <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-1 wow fadeInUp">
        <div className="portfolio-wrap">
          <div className="portfolio-img"><img src={portimg} alt="website template image"/></div>
          <div className="portfolio-text">
            <h3>eCommerce Website</h3>
            <a className="btn" href="assets/img/portfolio-1.jpg" data-lightbox="portfolio">+</a></div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-1 wow fadeInUp">
        <div className="portfolio-wrap">
          <div className="portfolio-img"><img src={portimg} alt="website template image"/></div>
          <div className="portfolio-text">
            <h3>eCommerce Website</h3>
            <a className="btn" href="assets/img/portfolio-1.jpg" data-lightbox="portfolio">+</a></div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-1 wow fadeInUp">
        <div className="portfolio-wrap">
          <div className="portfolio-img"><img src={portimg} alt="website template image"/></div>
          <div className="portfolio-text">
            <h3>eCommerce Website</h3>
            <a className="btn" href="assets/img/portfolio-1.jpg" data-lightbox="portfolio">+</a></div>
        </div>
      </div>
       </Row>
      </Tab>
      <Tab eventKey="profile" title="ECommerce site">
        <Row>
        <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-1 wow fadeInUp">
        <div className="portfolio-wrap">
          <div className="portfolio-img"><img src={portimg} alt="website template image"/></div>
          <div className="portfolio-text">
            <h3>eCommerce Website</h3>
            <a className="btn" href="assets/img/portfolio-1.jpg" data-lightbox="portfolio">+</a></div>
        </div>
      </div>
        </Row>
      </Tab>
      <Tab eventKey="longer-tab" title="Loooonger Tab">
        <Row>
        <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-1 wow fadeInUp">
        <div className="portfolio-wrap">
          <div className="portfolio-img"><img src={portimg} alt="website template image"/></div>
          <div className="portfolio-text">
            <h3>eCommerce Website</h3>
            <a className="btn" href="assets/img/portfolio-1.jpg" data-lightbox="portfolio">+</a></div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-1 wow fadeInUp">
        <div className="portfolio-wrap">
          <div className="portfolio-img"><img src={portimg} alt="website template image"/></div>
          <div className="portfolio-text">
            <h3>eCommerce Website</h3>
            <a className="btn" href="assets/img/portfolio-1.jpg" data-lightbox="portfolio">+</a></div>
        </div>
      </div>
        </Row>
      </Tab>
    </Tabs>
    </div>


</Container>
</div>

    </>
  )
}
export default Portfolio;