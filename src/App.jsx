import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './Components/Banner/Banner';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Team from './Components/Team Member/Team';
import Experience from './Components/Experience/Experience';
import Testimonial from './Components/Testimonial/Testimonial';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import "slick-carousel/slick/slick.css";
import Bloger from './Components/Blogerpag/Bloger';
import Portfolio from './Components/Portfolio/Portfolio';
import Menu from './Menu';
import { Dots } from 'react-preloaders';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Dots/>
    <Menu/>
    <Banner/>
    <About/>
    <Services/>
    <Team/>
    <Experience/>
    <Portfolio/>
    <Testimonial/>
    <Contact/>
    <Bloger/>
    <Footer/>
    </>
  )
}

export default App
