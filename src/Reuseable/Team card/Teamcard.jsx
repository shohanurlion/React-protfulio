import React from 'react'
import { Col } from 'react-bootstrap';
import './Teamcard.css'


function Teamcard(props) {
  return (
   <>
    <Col sm={12} md={6}>
    <div className="team-item">
          <div className="team-img"><img src={props.image} alt="website template image"/>
          </div>
          <div className="team-text">
            <h2>{props.name}</h2>
            <h4>{props.prof}</h4>
            <p>{props.teamtag}</p>
            <div className="team-social">
            <a className="btn" href="#">{props.twitter}</a> 
            <a className="btn" href="#">{props.facebook}</a> 
            <a className="btn" href="#">{props.instagram}</a> 
            <a className="btn" href="#">{props.lindin}</a> 
          </div>
        </div>
        </div>
    </Col>
   </>
  )
}
export default Teamcard;