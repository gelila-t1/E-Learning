import React from 'react'
import logo from '../assets/logoclick.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <div className='footer-div'>
       <div>
       <img src={logo} className='footer-logo'/>
       <p>Ut eget mattis lacus, sit amet accumsan erat Integer suscipit just<br/>
       vel iaculiso scelerisque. Nam vel porta augue Proin egestas leo magna,</p>
       </div>
       <div >
        <h4 className='get-in-touch'>Get in Touch</h4>
        <p><FontAwesomeIcon icon={faPhone} className='icon-footer'/> +1234567890</p>
        <p><FontAwesomeIcon icon={faMapMarkerAlt} className='icon-footer'/> Addis Ababa, Ethiopia</p>
        <p> <FontAwesomeIcon icon={faEnvelope} className='icon-footer'/> info@clickshifts.com</p>
       </div>
      <div>
        <p>About us</p>
        <p>Start Learning</p>
        <p>Why Join us</p>
        <p>Privacy Policy</p>
      </div>
    </div>
  )
}

export default Footer
