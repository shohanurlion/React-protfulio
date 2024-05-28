import React from 'react'
import './Servicecard.css'

import { Col } from 'react-bootstrap';
function Servicecard(props) {
  return (
   <>
   <Col sm={12} md={6}>
   <div class="service-item">
          <div class="service-icon">{props.icon}</div>
          <div class="service-text">
            <h3>{props.titel}</h3>
            <p>{props.ptag}</p>
          </div>
        </div>
   </Col>

   </>
  )
}
export default Servicecard;