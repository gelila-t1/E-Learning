import React from 'react'
import { useEffect } from 'react'
import Lottie from 'lottie-react'
import AnimationOne from '../assets/Animation - 1728759132190.json'
import AnimationTwo from '../assets/Animation - 1728758468712.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import 'aos/dist/aos.css'; 
import AOS from 'aos'; 

const LottieAnime = () => {

  useEffect(()=>{
    AOS.init({duration: 1500});
  },[])

  return (
    <div className='lottie-anime' data-aos="zoom-in">
     
     <div style={{width:'100%', height:'100%'}}>
     <Lottie animationData={AnimationTwo}/>
     </div>
     <div>
      <p className='about-us'>About Our Courses</p>
      <p className='about-text'> Ut eget mattis lacus, sit amet accumsan erat Integer suscipit just<br/>
      vel iaculiso scelerisque. Nam vel porta augue. Proin egestas leo magna.
      <br/><br/>
      Ut eget mattis lacus, sit amet accumsan erat Integer suscipit just<br/>
      vel iaculiso scelerisque. Nam vel porta augue. Proin egestas leo magna, vel tincidunt magna laoreet eu.
      sit amet accumsan erat Integer suscipit just.
      </p>
      <button className='learn-more'>Learn More</button>
      </div>
    
    </div>
  )
}

export default LottieAnime
