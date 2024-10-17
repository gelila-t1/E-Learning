import React from 'react'
import homeImage from '../assets/homeImage.png'
import findimage from '../assets/findimage.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import AnimationTwo from '../assets/Animation - 1728758468712.json'
import AnimationOne from '../assets/Animation - 1728759132190.json'
import Lottie from 'lottie-react';

const FindCourse = () => {
  return (
    <div className='find-div'>
         <div className='find-animation'>
        {/* <img src={findimage} width= '103%' height='auto'/> */}
        <Lottie animationData={AnimationOne}/>
      </div>
      <div>
       <p className='find-heading'>Let's Find the right<br/> Course for you! </p>
       <p className='find-text'>Discover the perfect course tailored to your interests and
        goals with our <br/>comprehensive guide. Explore a variety of subjects, 
        learn about<br/> different programs, and find the best fit for your educational journey.</p>
        <button className='find-courses'>Find Courses <FontAwesomeIcon 
                icon={faArrowRight} 
                style={{ color: 'black', fontSize: '15px', paddingLeft: '5px', paddingTop: '5px' }} 
            /></button>
        </div>
   
    </div>
  )
}

export default FindCourse
