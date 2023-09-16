import React, {useState} from 'react'
import './Portfolio.css'
import {Swiper, SwiperSlide, SwiperSlides} from 'swiper/react'
import MoviesApp from "../../img/movis_app.png";
import Travel from "../../img/space_travler.png";
import Crypto from "../../img/cripto_app.png";
import Doctor from "../../img/docapp.png";
import 'swiper/css'
import { themeContext } from '../../Context'
import { useContext } from 'react'

const projects = [
  {
    title: "Doctor Appointment Booking",
    imageUrl: Doctor,
    description: "This is an application that use to make an appointements for a doctor visit. It can add many users and users can selected the doctor they choose. Also users can add doctor and can make reservations and can delete reservations and doctors.",
    seeLive: 'https://doc-appointment-n7zf.onrender.com/',
    seeSource: 'https://github.com/getssh/Doctors_appointment',
  },
  {
    title: "Movies App",
    imageUrl: MoviesApp,
    description: "This is a project done as a requirment to complete microverse module 2. It emulates a movie's trending app where we display the 20 most popular movies of the day. It allows users to interact with the app by liking, commenting, and reserving a digital copy of each specific movie.",
    seeLive: 'https://davidespinog.github.io/capstone_project_2_API/',
    seeSource: 'https://github.com/getssh/Movies-app',
  },
  {
    title: "Space Traveler",
    imageUrl: Travel,
    description: "This is a web application that allows users to browse available space rockets and missions and reserve a spot on them. The application is built using React and Redux, and utilizes a mock API to simulate backend functionality. Users can view a list of available rockets, missions, reserve or cancel their spot on a rocket or mission, and view their reserved rockets and missions.",
    seeLive: 'https://space-travelers-qc4o.onrender.com/',
    seeSource: 'https://github.com/getssh/space-travelers-hub',
  },
  {
    title: "Mobile crypto detail",
    imageUrl: Crypto,
    description: "crypto-tracker-app is a React application that utilizes the Crypto API to display trending cryptocurrencies and their details. The app is built with React, Router, React Redux, Redux Toolkit, React Testing Library, Jest, and TailWind CSS. The home page shows trending coins and when the user click on a specific coin a detail numirical information will be shown on the screen. It also have a searching feature and users can input what they are looking for.",
    seeLive: 'https://crypto-tracker-app-uclw.onrender.com/',
    seeSource: 'https://github.com/getssh/crypto-tracker-app',
  },
]

const Modal = ({ isOpen, onClose, project }) => {
  const modalStyle = {
    display: isOpen ? 'block' : 'none',
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: '1000',
    overflowY: 'auto',
  };

  const contentStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff',
    padding: '20px',
    zIndex: '1001',
    width: '80%',
    maxWidth: '900px',
    textAlign: 'center',
    borderRadius: '8px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
    overflowY: 'auto',
  };

  const closeButtonStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    cursor: 'pointer',
  };

  const imageStyle = {
    maxWidth: '100%',
    height: 'auto',
  };

  return isOpen ? (
    <div style={modalStyle}>
      <div style={contentStyle}>
        <div style={closeButtonStyle} onClick={onClose}>
          <button>X</button>
        </div>
        <h2>{project.title}</h2>
        <img src={project.imageUrl} alt={project.title} style={imageStyle} />
        <p style={{color: "#000"}}>{project.description}</p>
        <div>
          <a href={project.seeLive} target='_blank' style={{margin: "0rem 0.5rem"}}><button className="button s-button">See Live</button></a>
          <a href={project.seeSource} target='_blank' style={{margin: "0rem 0.5rem"}}><button className="button s-button">See Source</button></a>
        </div>
      </div>
    </div>
  ) : null;
};

const Portfolio = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const dark = { color: darkMode ? '#fff' : '' };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  return (
    
    <div className="portfolio" id="Porfolio">
      <span style={dark}>Recent Projects</span>
      <span>Portfolio</span>

      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div>
              <h3 className="port-discription" style={dark}>
                {project.title}
              </h3>
              <div onClick={() => openModal(project)}>
                <img src={project.imageUrl} alt="" />
              </div>
              <button
                style={{ margin: '1rem 0rem 0rem 4rem' }}
                className="button s-button d-button"
                onClick={() => openModal(project)}
              >
                See Details
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {selectedProject && (
        <Modal isOpen={isModalOpen} onClose={closeModal} project={selectedProject} />
      )}
    </div>
  )
}

export default Portfolio