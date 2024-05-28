import React from 'react'
import './Contact.css'
import { Container } from 'react-bootstrap';


 function Contact() {
  return (
   <>
   <div className="contact" id="contacts">
    <div className='container-fluid'>
    <Container>
   <div className="row align-items-center">
        <div className="col-md-4"></div>
        <div className="col-md-8">
          <div className="contact-form">
            <div id="success"></div>
            <form action="#" method="post" name="sentMessage" id="contactForm">
              <div class="control-group">
                <input type="text" class="form-control" id="name" placeholder="Your Name" required=""/>
                <p className="help-block"></p>
              </div>
              <div className="control-group">
                <input type="email" class="form-control" id="email" placeholder="Your Email" required=""/>
                <p claclassNamess="help-block"></p>
              </div>
              <div className="control-group">
                <input type="text" class="form-control" id="subject" placeholder="Subject" required=""/>
                <p className="help-block"></p>
              </div>
              <div className="control-group">
                <textarea className="form-control" id="message" placeholder="Message" required=""></textarea>
                <p className="help-block"></p>
              </div>
              <div>
                <button className="btn" type="submit" id="sendMessageButton">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Container>
    </div>

   </div>
   

   </>
  )
}
export default Contact;