import React from 'react'
import './Portfolio.css'
import {Swiper, SwiperSlide, SwiperSlides} from 'swiper/react'
import Sidebar from "../../img/netflixx.png";
import Ecommerce from "../../img/dicegame.png";
import HOC from "../../img/memegene.png";
import MusicApp from "../../img/musicapp.png";
import 'swiper/css'
import { themeContext } from '../../Context'
import { useContext } from 'react'

const Portfolio = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const dark = {color: darkMode ? '#fff' : ''}
  return (
    
    <div className="portfolio" id='Porfolio'>
        <span style={dark}>Recent Projects</span>
        <span>Portfolio</span>

        <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'
        >
            <SwiperSlide>
                <a href='https://dagemtsehay1.github.io/netflix-clone/' target='_blank'>
                    <img src={Sidebar} alt="" />
                </a>
                <h3 className='port-discription' style={dark}>Netflix Clone</h3>
            </SwiperSlide>
            <SwiperSlide>
                <a href='https://getssh.github.io/dice_game/' target='_blank'>
                    <img src={Ecommerce} alt="" />
                </a>
                <h3 className='port-discription' style={dark}>Kids Dice Game</h3>
            </SwiperSlide>
            <SwiperSlide>
                <img src={MusicApp} alt="" />
                <h3 className='port-discription' style={dark}>Music App</h3>
            </SwiperSlide>
            <SwiperSlide>
                <a href='https://getssh.github.io/meme_generator/' target='_blank'>
                    <img src={HOC} alt="" />
                </a>
                <h3 className='port-discription' style={dark}>Meme Generator</h3>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Portfolio