import React from 'react'
import './Portfolio.css'
import {Swiper, SwiperSlide, SwiperSlides} from 'swiper/react'
import Sidebar from "../../img/netflixx.png";
import Ecommerce from "../../img/dicegame.png";
import HOC from "../../img/memegene.png";
import QuizApp from "../../img/quizApp.png";
import MoviesApp from "../../img/movis_app.png";
import Recipe from "../../img/recipe.png";
import Travel from "../../img/space_travler.png";
import Budget from "../../img/budget_app.png";
import Crypto from "../../img/cripto_app.png";
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
                <a href='https://davidespinog.github.io/capstone_project_2_API/' target='_blank'>
                    <img src={MoviesApp} alt="" />
                </a>
                <h3 className='port-discription' style={dark}>Movies App</h3>
            </SwiperSlide>
            <SwiperSlide>
                <a href='https://budget-appp-rp0t.onrender.com/' target='_blank'>
                    <img src={Budget} alt="" />
                </a>
                <h3 className='port-discription' style={dark}>Expense Manager</h3>
            </SwiperSlide>
            <SwiperSlide>
                <a href='https://space-travelers-qc4o.onrender.com/' target='_blank'>
                    <img src={Travel} alt="" />
                </a>
                <h3 className='port-discription' style={dark}>Space Traveler</h3>
            </SwiperSlide>
            <SwiperSlide>
                <a href='https://github.com/getssh/recipe_app' target='_blank'>
                    <img src={Recipe} alt="" />
                </a>
                <h3 className='port-discription' style={dark}>Recipe App</h3>
            </SwiperSlide>
            <SwiperSlide>
                <a href='https://crypto-tracker-app-uclw.onrender.com/' target='_blank'>
                    <img src={Crypto} alt="" />
                </a>
                <h3 className='port-discription' style={dark}>Mobile crypto detail</h3>
            </SwiperSlide>
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
                <a href='https://getssh.github.io/quiztime/' target='_blank'>
                    <img src={QuizApp} alt="" />
                </a>
                <h3 className='port-discription' style={dark}>Quiz App</h3>
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