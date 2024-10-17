import imageOne from '../assets/image-learn.jpeg'
import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faUser, faGraduationCap, faFileAlt,faSearch } from '@fortawesome/free-solid-svg-icons';import React from 'react'
import courseImage from '../assets/course-image.jpg'
import AnimationThree from '../assets/Animation - 1728758374277.json'
import Lottie from 'lottie-react';
import 'aos/dist/aos.css'; 
import AOS from 'aos'; 

const FeaturedCourses = () => {
  useEffect(()=>{
    AOS.init({duration: 1500});
  },[])

  return (
    <div>
        <p className='feature-heading'>Take a look at some of our Courses</p>
        <p className='feature-text'>Ut eget mattis lacus, sit amet accumsan erat Integer suscipit just
        vel iaculiso scelerisque. <br/>Nam vel porta augue Proin egestas leo magna, vel tincidunt magna laoreet eu.</p>
      <div className='featured-course'>
      <div className='Fcourses-div' data-aos="flip-up">
      <div>
       <img src={courseImage} className='course-image'/>
      </div>
      <div className='padd'>
        <p className='course-intro feature'>UI/UX Principles</p>
        <div className='course-detail'>
          <div>
          <FontAwesomeIcon icon={faClock} style={{color: '#d43434', paddingRight: '7px'}}/>
            10 weeks
          </div>
          <div>
            <FontAwesomeIcon icon={faFileAlt} style={{color: '#d43434', paddingRight: '7px'}}/>
            4 Lessons
          </div>
          <div>
          <FontAwesomeIcon icon={faGraduationCap} style={{color: '#d43434', paddingRight: '7px'}}/>
           2 Quiz
          </div>
          <div>
          <FontAwesomeIcon icon={faUser} style={{color: '#d43434', paddingRight: '7px'}}/>
             100+ Students
          </div>
        </div>
        <p className='course-description'>This course offers a foundational exploration of Information Technology </p>
        <p className='course-instructor'>Instructor: Admin</p>
        <p className='course-feee'>Free</p>
      </div>
    </div>
    <div className='Fcourses-div' data-aos="flip-up">
      <div>
       <img src={courseImage} className='course-image'/>
      </div>
      <div className='padd'>
        <p className='course-intro feature'>Web Development with HTML, CSS and JavaScript</p>
        <div className='course-detail'>
          <div>
          <FontAwesomeIcon icon={faClock} style={{color: '#d43434', paddingRight: '7px'}}/>
            10 weeks
          </div>
          <div>
            <FontAwesomeIcon icon={faFileAlt} style={{color: '#d43434', paddingRight: '7px'}}/>
            4 Lessons
          </div>
          <div>
          <FontAwesomeIcon icon={faGraduationCap} style={{color: '#d43434', paddingRight: '7px'}}/>
           2 Quiz
          </div>
          <div>
          <FontAwesomeIcon icon={faUser} style={{color: '#d43434', paddingRight: '7px'}}/>
             100+ Students
          </div>
        </div>
        <p className='course-description'>This course offers a foundational exploration of Information Technology </p>
        <p className='course-instructor'>Instructor: Admin</p>
        <p className='course-feee'>$45.00</p>
      </div>
    </div>
    <div className='Fcourses-div' data-aos="flip-up">
      <div>
       <img src={courseImage} className='course-image'/>
      </div>
      <div className='padd'>
        <p className='course-intro feature'>Introduction to Mobile App Development</p>
        <div className='course-detail'>
          <div>
          <FontAwesomeIcon icon={faClock} style={{color: '#d43434', paddingRight: '7px'}}/>
            10 weeks
          </div>
          <div>
            <FontAwesomeIcon icon={faFileAlt} style={{color: '#d43434', paddingRight: '7px'}}/>
            4 Lessons
          </div>
          <div>
          <FontAwesomeIcon icon={faGraduationCap} style={{color: '#d43434', paddingRight: '7px'}}/>
           2 Quiz
          </div>
          <div>
          <FontAwesomeIcon icon={faUser} style={{color: '#d43434', paddingRight: '7px'}}/>
             100+ Students
          </div>
        </div>
        <p className='course-description'>This course offers a foundational exploration of Information Technology </p>
        <p className='course-instructor'>Instructor: Admin</p>
        <p className='course-feee'>$55.00</p>
      </div>
    </div>
      </div>


    
      <p className='gain-heading'>By the end of all of our Courses<br/> all of these are guaranteed for you!</p>
    
   
      <div className='wrap-gain'>

<div className='gain'>
<div>
<Lottie animationData={AnimationThree} className='check'/>
</div>
<div className="gain-text">
  Completion Certificate 
</div>
</div>

<div className='gain'>
<div>
<Lottie animationData={AnimationThree} className='check'/>
</div>
<div className="gain-text">
 Recommendation Letter
</div>
</div>

<div className='gain'>
<div>
<Lottie animationData={AnimationThree} className='check'/>
</div>
<div className="gain-text">
Job Ready Skills
</div>
</div>

</div>
<div className='wrap-gain'>

<div className='gain'>
<div>
<Lottie animationData={AnimationThree} className='check'/>
</div>
<div className="gain-text">
  Completion Certificate 
</div>
</div>

<div className='gain'>
<div>
<Lottie animationData={AnimationThree} className='check'/>
</div>
<div className="gain-text">
 Recommendation Letter
</div>
</div>

<div className='gain'>
<div>
<Lottie animationData={AnimationThree} className='check'/>
</div>
<div className="gain-text">
Job Ready Skills
</div>
</div>

</div>
<div className='wrap-gain'>

<div className='gain'>
<div>
<Lottie animationData={AnimationThree} className='check'/>
</div>
<div className="gain-text">
  Completion Certificate 
</div>
</div>

<div className='gain'>
<div>
<Lottie animationData={AnimationThree} className='check'/>
</div>
<div className="gain-text">
 Recommendation Letter
</div>
</div>

<div className='gain'>
<div>
<Lottie animationData={AnimationThree} className='check'/>
</div>
<div className="gain-text">
Job Ready Skills
</div>
</div>

</div>


    </div>
  )
}

export default FeaturedCourses
