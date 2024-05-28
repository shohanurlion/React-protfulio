import React from 'react'
import './Team.css'
import { Container, Row } from 'react-bootstrap';
import Teamcard from '../../Reuseable/Team card/Teamcard';
import { FaTwitter,FaFacebookF,FaInstagram ,FaLinkedin  } from "react-icons/fa";
import teamimg from '../../assets/img/team-1.jpg'
import Hedar from '../../Reuseable/Hedercard/Hedar';


function Team() {
  return (
    <>
    <Container>
      <div className='team_titel' id="teams">
          <Hedar subtitel="MY TEAM" titel="Expert Team Members"/>
      </div>
        <Row>
            <Teamcard image={teamimg} name={"Mollie Ross"} prof={"Web Designer"} teamtag={"Lorem ipsum dolor sit amet consec adipis elit. Etiam accum lacus"} twitter={<FaTwitter />} facebook={<FaFacebookF />} instagram={<FaInstagram />} lindin={<FaLinkedin />}/>

            <Teamcard image={teamimg} name={"Mollie Ross"} prof={"Web Designer"} teamtag={"Lorem ipsum dolor sit amet consec adipis elit. Etiam accum lacus"} twitter={<FaTwitter />} facebook={<FaFacebookF />} instagram={<FaInstagram />} lindin={<FaLinkedin />}/>

            <Teamcard image={teamimg} name={"Sanjana Afrin "} prof={"Web Designer"} teamtag={"Lorem ipsum dolor sit amet consec adipis elit. Etiam accum lacus"} twitter={<FaTwitter />} facebook={<FaFacebookF />} instagram={<FaInstagram />} lindin={<FaLinkedin />}/>

            <Teamcard image={teamimg} name={"Mollie Ross"} prof={"Web Designer"} teamtag={"Lorem ipsum dolor sit amet consec adipis elit. Etiam accum lacus"} twitter={<FaTwitter />} facebook={<FaFacebookF />} instagram={<FaInstagram />} lindin={<FaLinkedin />}/>
        </Row>
    </Container>
    </>
  )
}
export default Team;