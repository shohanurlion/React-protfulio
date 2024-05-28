import React from 'react'
import './Experience.css'
import { Container } from 'react-bootstrap';
import Hedar from '../../Reuseable/Hedercard/Hedar';
function Experience() {
  return (
    <>
    <Container>
    <div className='timeline_titel' id="experience">
          <Hedar subtitel="MY RESUME" titel="Working Experience"/>
      </div>
    <div className="timeline">
      <div className="timeline-item left wow slideInLeft" data-wow-delay="0.1s">
        <div className="timeline-text">
          <div className="timeline-date">2045 - 2050</div>
          <h2>Web Developer</h2>
          <h4>Soft Agency, San Francisco, CA</h4>
          <p>Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.</p>
        </div>
      </div>
      <div className="timeline-item right wow slideInRight" data-wow-delay="0.1s">
        <div className="timeline-text">
          <div className="timeline-date">2045 - 2050</div>
          <h2>Web Developer</h2>
          <h4>Soft Agency, San Francisco, CA</h4>
          <p>Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.</p>
        </div>
      </div>
      <div className="timeline-item left wow slideInLeft" data-wow-delay="0.1s">
        <div className="timeline-text">
          <div className="timeline-date">2045 - 2050</div>
          <h2>Web Developer</h2>
          <h4>Soft Agency, San Francisco, CA</h4>
          <p>Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.</p>
        </div>
      </div>
      <div className="timeline-item right wow slideInRight" data-wow-delay="0.1s">
        <div className="timeline-text">
          <div className="timeline-date">2045 - 2050</div>
          <h2>Web Developer</h2>
          <h4>Soft Agency, San Francisco, CA</h4>
          <p>Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.</p>
        </div>
      </div>
      <div className="timeline-item left wow slideInLeft" data-wow-delay="0.1s">
        <div className="timeline-text">
          <div className="timeline-date">2045 - 2050</div>
          <h2>Web Developer</h2>
          <h4>Soft Agency, San Francisco, CA</h4>
          <p>Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.</p>
        </div>
      </div>
      <div className="timeline-item right wow slideInRight" data-wow-delay="0.1s">
        <div className="timeline-text">
          <div className="timeline-date">2045 - 2050</div>
          <h2>Web Developer</h2>
          <h4>Soft Agency, San Francisco, CA</h4>
          <p>Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.</p>
        </div>
      </div>
    </div>
    </Container>
    </>
  )
}
export default Experience;