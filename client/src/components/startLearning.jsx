import React from 'react'
import imageOne from '../assets/image-learn.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faUser, faGraduationCap, faFileAlt,faSearch } from '@fortawesome/free-solid-svg-icons';


const StartLearning = () => {
  return (
   <div>
    
    <p className='all-courses'>All Courses</p>
    <div className='search'><input type='text' placeholder='search courses here...'/>
    <FontAwesomeIcon icon={faSearch} style={{position:'relative', right: '25', top: '14', color: 'gray'}} /></div>
    
     <div className='courses-div'>
      <div>
       <img src={imageOne} className='course-image'/>
      </div>
      <div>
        <p className='box'>Development</p>
        <p className='course-intro'>Web Development with HTML, CSS and JavaScript</p>
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
        <p className='course-description'>This course offers a foundational exploration of Information Technology (IT), 
        providing students with a broad...</p>
        <p className='course-instructor'>Instructor: Admin</p>
        <p className='course-fee'>$45.00</p>
      </div>
    </div>

    <div className='courses-div'>
      <div>
       <img src={imageOne} className='course-image'/>
      </div>
      <div>
        <p className='box'>Development</p>
        <p className='course-intro'>Web Development with HTML, CSS and JavaScript</p>
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
        <p className='course-description'>This course offers a foundational exploration of Information Technology (IT), 
        providing students with a broad...</p>
        <p className='course-instructor'>Instructor: Admin</p>
        <p className='course-fee'>$45.00</p>
      </div>
    </div>

    <div className='courses-div'>
      <div>
       <img src={imageOne} className='course-image'/>
      </div>
      <div>
        <p className='box'>Development</p>
        <p className='course-intro'>Web Development with HTML, CSS and JavaScript</p>
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
        <p className='course-description'>This course offers a foundational exploration of Information Technology (IT), 
        providing students with a broad...</p>
        <p className='course-instructor'>Instructor: Admin</p>
        <p className='course-fee'>$45.00</p>
      </div>
    </div>

    <div className='courses-div'>
      <div>
       <img src={imageOne} className='course-image'/>
      </div>
      <div>
        <p className='box'>Development</p>
        <p className='course-intro'>Web Development with HTML, CSS and JavaScript</p>
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
        <p className='course-description'>This course offers a foundational exploration of Information Technology (IT), 
        providing students with a broad...</p>
        <p className='course-instructor'>Instructor: Admin</p>
        <p className='course-fee'>$45.00</p>
      </div>
    </div>
    <div className='courses-div'>
      <div>
       <img src={imageOne} className='course-image'/>
      </div>
      <div>
        <p className='box'>Development</p>
        <p className='course-intro'>Web Development with HTML, CSS and JavaScript</p>
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
        <p className='course-description'>This course offers a foundational exploration of Information Technology (IT), 
        providing students with a broad...</p>
        <p className='course-instructor'>Instructor: Admin</p>
        <p className='course-fee'>$45.00</p>
      </div>
    </div>
   </div>
  )
}

export default StartLearning
