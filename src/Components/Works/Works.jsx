import React from 'react'
import './Works.css'
import Upwork from "../../img/jslogo.png";
import Fiverr from "../../img/css.png";
import Amazon from "../../img/reactlogo.png";
import Shopify from "../../img/python.png";
import Facebook from "../../img/mysql.png";
import { themeContext } from '../../Context'
import { useContext } from 'react'
import {motion} from 'framer-motion'
import {Link} from 'react-scroll'

const Works = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

  return (
    <div className="works" id='Works'>
        <div className="awesome">
            <span style={{color: darkMode ? '#fff' : ''}}>Some of the tools &</span>
            <span>Programing languages</span>
            <span style={{color : darkMode ? '#aaaaaa' : ''}}>
            I use diffrent tools and programing languages to give you a
            <br/>
            quality web development out put. Those tools are currently one of
            <br/>
            the most popular languages and frameworks. using latest updates
            <br/>
            will benefit your company, as it's more user friendly and easy
            <br/>
            to access for customers.
            </span>
            <Link
            spy={true}
            to='Contact'
            smooth={true}>
              <button className='button s-button'>Hire Me</button>
            </Link>
            <div className='blur s-blur1' style={{background: '#ABF1FF94'}}></div>
        </div>
        {/*right side*/}
        <div className='w-right'>
        <motion.div
            initial={{rotate: 45}}
            whileInView={{rotate: 0}}
            viewport={{margin: '-40px'}}
            transition={{duration: 3.5, type:'spring'}}
            className="w-mainCircle">
                <div className="w-secCircle">
                    <img src={Upwork} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Fiverr} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Amazon} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Shopify} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Facebook} alt="" />
                </div>
        </motion.div>
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
        </div>
        
    </div>
  )
}

export default Works