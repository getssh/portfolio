import React from 'react'
import './Services.css'
import Card from '../Card/Card'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import { themeContext } from '../../Context'
import { useContext } from 'react'
import {motion} from 'framer-motion'

function Services() {
  const transition = {duration: 1, type: 'spring'}

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="services" id="Services">
        <div className="awesome">
            <span style={{color: darkMode ? 'white' : ''}}>My Awesome</span>
            <span>services</span>
            <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            <br/>incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            </span>
            <a href="#">
              <button className='button s-button'>Download CV</button>
            </a>
            <div className='blur s-blur1' style={{background: '#ABF1FF94'}}></div>
        </div> 
        <div className="cards">
            <motion.div
            initial={{left: '25rem'}}
            whileInView={{left: '14rem'}}
            transition={transition}
            style={{left: '14rem'}}>
              <Card
                emoji={HeartEmoji}
                heading={'Design'}
                detail={'Figma, Adobe xd, Photoshop'}
              />
            </motion.div>
            <div style={{top: '12rem', left: '-4rem'}}>
              <Card
                emoji={Glasses}
                heading={'Developer'}
                detail={'HTML, CSS, Javascript, React'}
              />
            </div>
            <div style={{top: '19rem', left: '12rem'}}>
              <Card
                emoji={Humble}
                heading={'UI/UX'}
                detail={'Designing Different user freindly website and apps'}
              />
            </div>
            <div className='blur s-blur2' style={{background: 'var(--purple'}}></div>
        </div>
    </div>
  )
}

export default Services