import React from 'react'
import './Services.css'
import Card from '../Card/Card'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Resume from './resume.pdf'
import { themeContext } from '../../Context'
import { useContext } from 'react'
import {motion} from 'framer-motion'
import {Link} from 'react-scroll'

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
            I provid services related with Front end web design and development Including UI/UX
            <br/>and developing/building a functional and good looking website or web app
            <br/>for your personal or organization uses.
            </span>
            <a href={Resume}>
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
                heading={'Database'}
                detail={'Postgres, MySQL'}
              />
            </motion.div>
            <div style={{top: '12rem', left: '-4rem'}}>
              <Card
                emoji={Glasses}
                heading={'Developer'}
                detail={'HTML, CSS, Javascript, React Redux, Ruby on Rails'}
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