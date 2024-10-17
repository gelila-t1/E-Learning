import React from 'react'
// import homeImage from './assets/homeImage.jpeg'
import { useEffect } from 'react'
import Homegirl from '../assets/joinImage.png'
import Areas from './Areas'
import FindCourse from './FindCourse'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Counter from './Counter';
import Join from './join';
import LottieAnime from './lottieAnime';
import FeaturedCourses from './FeaturedCourses';
import Footer from './Footer';
import Navbar from './NavBar';
import 'aos/dist/aos.css'; 
import AOS from 'aos'; 


const Home = () => {
  useEffect(()=>{
    AOS.init({duration: 1500});
  },[])

  return (
    
    <div>
      <Navbar/>
      <div className='home-div'>
      <div>
     <h1 data-aos="zoom-in-right">Welcome to our E-learning page</h1>
     <h3 data-aos="zoom-in-right">where you will learn UI/UX Designing, <br/>website development
         and Mobile Application Development </h3>
         <button className='start' data-aos="zoom-in-right">Start Learning  <FontAwesomeIcon 
                icon={faArrowRight} 
                style={{ color: 'black', fontSize: '15px', paddingLeft: '5px', paddingTop: '5px' }} 
            /></button>
      </div>
      <div data-aos="zoom-in-left">
      <img src={Homegirl} alt="Description of my image"  className="home-image"/>
      </div>
    </div>

  
    <div>
      <Counter/>
    </div>
    <LottieAnime/>
    <div>
      <Join/>
    </div>
    <div>
      <FeaturedCourses/>
    </div>
   
    <div>
      <FindCourse/>
    </div>

    <div>
      <Areas/>
    </div>
   <div>
    <Footer/>
   </div>
    </div>
  )
}

export default Home
