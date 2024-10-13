import React from 'react'
import { useEffect } from 'react'
import joinGirl from '../assets/home-girl.png'
import 'aos/dist/aos.css'; 
import AOS from 'aos'; 

const Join = () => {
   useEffect(()=>{
      AOS.init({duration: 1500});
    },[])

  return (
    <div className='join-us'>
      <div>
       <p className='join-heading'data-aos="fade-down">Why Join Us?</p>
       <p className='join-text' data-aos="fade-down">Ut eget mattis lacus, sit amet accumsan erat Integer suscipit just<br/> vel 
        iaculiso scelerisque. Nam vel porta augue. Proin egestas leo magna, vel tincidunt magna laoreet eu.</p>
        <div className='join-features'>
            <div data-aos="zoom-in">
               <p className='join-one'>Verified</p>
               <p>Ut eget mattis lacus, sit amet accumsan erat.</p>
            </div>
            <div data-aos="zoom-in">
               <p className='join-one'>Powerful</p>
               <p>Ut eget mattis lacus, sit amet accumsan erat.</p>
            </div>
        </div>
        <div className='join-features'>
            <div data-aos="zoom-in">
               <p className='join-one'>Easiest</p>
               <p>Ut eget mattis lacus, sit amet accumsan erat.</p>
            </div>
            <div data-aos="zoom-in">
               <p className='join-one'>Trusted</p>
               <p>Ut eget mattis lacus, sit amet accumsan erat.</p>
            </div>
        </div>
        <button className='all-features'>All Features</button>
      </div>
      <div className='gradient-background'>
      <img src={joinGirl} className='join-girl' data-aos="zoom-in"/>
      </div>
    </div>
  )
}

export default Join
