import React from 'react'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/portprofile.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import { themeContext } from '../../Context'
import { useContext } from 'react'
import {motion} from 'framer-motion'
import {Link} from 'react-scroll'
import './Intro.css'

function Intro() {

    const transition = {duration: 2, type: 'spring'}

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span style={{color : darkMode ? 'white' : ''}}>Hey! I am</span>
                <span>Getayawkal Tamrat</span>
                <span style={{color : darkMode ? '#aaaaaa' : ''}}>Front-end web Developer
                with a 10 month expriance with Html, CSS, JavaScript, React and
                more.
                </span>
            </div>
            <Link
            spy={true}
            to='Contact'
            smooth={true}>
            <button className='button i-button'>Hire Me</button>
            </Link>
            <div className="i-icons">
                <a href="https://www.github.com/getssh" target="_blank"><img src={Github} alt="" /></a>
                <a href="https://www.linkedin.com/in/getayawkal-tamrat" target="_blank"><img src={LinkedIn} alt="" /></a>
                <img src={Instagram} alt="" />
            </div>
        </div>

        <div className="i-right">
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={boy} alt="" />
            <motion.img 
            initial={{left: '-36%'}}
            whileInView={{left: '-24%'}}
            transition={transition}
            src={glassesimoji} alt="" />

            <motion.div
            initial={{top: '-4%', left: '74%'}}
            whileInView={{left: '68%'}}
            transition={transition}
            style={{top:'-4%', left:'68%'}}
            className='floating-div float1'
            >
                <FloatingDiv image={crown} txt1="Web" txt2="Developer"/>
            </motion.div>
            <motion.div
            initial={{top: '18rem', left: '9rem'}}
            whileInView={{left: '0rem'}}
            transition={transition}
            style={{top:'18rem', left:'0rem'}}
            className='floating-div'
            >
                <FloatingDiv className='float2' image={thumbup} txt1="Best Design" txt2="Web Apps"/>
            </motion.div>
            <div className='blur' style={{
                background: "rgb(238 210 255)"}}></div>
            <div className='blur' style={{
                background: "#c1f5ff",
                top: "17rem",
                width: "21rem",
                height: "11rem",
                left: "-9rem"}}>
            </div>
        </div>
    </div>
  )
}

export default Intro