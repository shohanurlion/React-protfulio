import React from 'react'
import { Container, Row } from 'react-bootstrap';
import Servicecard from '../../Reuseable/Servicecard/Servicecard';
import { FaLaptop,FaLaptopCode,FaApple  } from "react-icons/fa";
import { DiAndroid } from "react-icons/di";
import Hedar from '../../Reuseable/Hedercard/Hedar';

 function Services() {
  return (
    <>
        <div className="services" id="servicess">
            <Container>
                <div className='service_titel' data-aos="fade-left">
                 <Hedar subtitel="What I do" titel="Awesome Quality Services"/>
                </div>
                <Row>
                    <Servicecard icon={<FaLaptop className='faicon'/>} titel={"Web Design"} ptag={"Lorem ipsum dolor sit amet elit. Phase nec preti mi. Curabi facilis ornare velit non"}/>
                    <Servicecard icon={<FaLaptopCode className='faicon'/>} titel={"Web Development"} ptag={"Lorem ipsum dolor sit amet elit. Phase nec preti mi. Curabi facilis ornare velit non"}/>
                    <Servicecard  icon={<DiAndroid className='faicon'/>} titel={"Apps Design"} ptag={"Lorem ipsum dolor sit amet elit. Phase nec preti mi. Curabi facilis ornare velit non"}/>
                    <Servicecard  icon={<FaApple className='faicon'/>} titel={"Apps Development"} ptag={"Lorem ipsum dolor sit amet elit. Phase nec preti mi. Curabi facilis ornare velit non"}/>
                </Row>
            </Container>
        </div>
    </>
  )
}
export default Services;