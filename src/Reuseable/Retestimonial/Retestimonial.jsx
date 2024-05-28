import React from 'react'
import './Retestimonial.css'
import testmonial from '../../assets/img/testimonial-1.jpg'
function Slider() {
  return (
    <>

    <div className="active_custom">
        <div className="testimonial-item">
        <div className="testimonial-img">
            <img src={testmonial} alt="website template image"/>
        </div>
        <div className="testimonial-text">
          <p>Lorem ipsum dolor sit amet consec adipis elit. Etiam accums lacus eget velit tincid, quis suscip justo dictum. Lorem ipsum dolor sit amet consec adipis elit.</p>
          <h3>Customer Name</h3>
          <h4>Profession</h4>
        </div>
      </div>
      </div>
    </>
  )
}
export default Slider;