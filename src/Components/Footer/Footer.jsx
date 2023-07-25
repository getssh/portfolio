import React from 'react'
import './Footer.css'
import Wave from '../../img/wave.png'
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Github from '@iconscout/react-unicons/icons/uil-github'

const Footer = () => {
  return (
    <div className="footer">
        <img src={Wave} alt="" style={{Width: '100%'}}/>
        <div className="f-content">
            <span>gtamrat33@gmail.com</span>
            <div className="f-icons">
                <a href="https://www.linkedin.com/in/getayawkal-tamrat" target="_blank"><Linkedin color='white' size='3rem'/></a>
                <a href="https://www.github.com/getssh" target="_blank"><Github color='white' size='3rem'/></a>
            </div>
        </div>
    </div>
  )
}

export default Footer