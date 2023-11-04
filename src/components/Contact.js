import React from 'react'
import '../Styles/Contact.css'
import {BsFacebook , BsInstagram ,BsGithub ,BsLinkedin} from 'react-icons/bs'

import {} from 'react-icons/bs'
import ParticlesContainer from '../SubComponents/Particles'

const Contact = () => {
  return (
    <>
      <div className="mega-contact-container">
        <div className="contact-container">
          <div className="contact">
            <h1>Contact Me:</h1>
            <h6>Hello there! I'm thrilled that you want to get in touch. Whether you have a job opportunity, a collaboration in mind, or just want to say hello, feel free to reach out. I'm always open to new connections and discussions.</h6>
          </div>

          <div className="reach">
            <h1>How to Reach Me:</h1>
            <div className="socials">
               <div className="icons">
                <a href="https://www.facebook.com/profile.php?id=100008989508430"  > <BsFacebook className='icon'/></a>
               </div>

               <div className="icons">
                <a href="https://instagram.com/_kunal81?igshid=OGQ5ZDc2ODk2ZA==" > <BsInstagram className='icon'/></a>
               </div>

               <div className="icons">
                <a href="https://github.com/Kunal1223" > <BsGithub className='icon' /></a>
               </div>

               <div className="icons">
                <a href="https://www.linkedin.com/in/kunal-kishor-3868a7244/" > <BsLinkedin className='icon'/></a>
               </div>
            </div>
          </div> 
        </div> 

        <div className="contact-right">
          <img src="./images/phone.png" alt="" className='phone'/>
        </div>
        <ParticlesContainer particleColor='#EB4F43' linkColor='#ffff' number="500" />
      </div>
    </>
  )
}

export default Contact