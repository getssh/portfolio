import { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation, fadeInUp, scaleIn, staggerContainer } from '../hooks/useScrollAnimation';

const projects = [
  {
    name: 'UNIverse',
    description: 'UNIverse Platform is a multifaceted web application built with the MERN (MongoDB, Express.js, React.js/NextJS, Node.js) stack, designed to serve as a central hub for university students, faculty, and administrators. It aims to enhance campus life by providing tools for communication, collaboration, event management, resource sharing, and community building.',
    tech: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Next.js'],
    github: 'https://github.com/getssh/UNIverse_Backend',
    live: 'https://universeapp-ruby.vercel.app/',
    image: '/project1.png',
    category: 'Web App'
  },
  {
    name: 'Task Manager',
    description: 'This project is designed to help users manage their tasks efficiently, providing a seamless experience from task creation to tracking and deletion. Built using the MERN stack (MongoDB, Express, React, Node.js), this task manager offers a robust set of features to streamline your task management process.',
    tech: ['React.js', 'Express.js','Material UI', 'MongoDB', 'Node.js', 'Socket.io'],
    github: 'https://github.com/getssh/task_manager',
    live: 'https://task-manager-client-blush.vercel.app/',
    image: '/project2.png',
    category: 'Web App'
  },
  {
      name: 'Chat App',
      description: 'Real-time chat application that allows users to send messages, view online statuses of other users, and authenticate using a secure signup and login system. Built with the MERN stack, the app uses Socket.IO for real-time communication, Tailwind CSS with DaisyUI for styling, and Zustand with Context API for state management.',
      tech: ['React.js', 'Express.js', 'MongoDB', 'Node.js', 'Socket.io', 'DaisyUI', 'Zustand', 'Context API'],
      github: 'https://github.com/getssh/chatApp',
      live: 'https://et-chat.onrender.com/',
      image: '/project3.png',
      category: 'Communication'
    },
  {
    name: 'Clinic Appointment',
    description: 'This is an application that use to make an appointements for a doctor visit. It can add many users and users can selected the doctor they choose. Also users can add doctor and can make reservations and can delete reservations and doctors.',
    tech: ['React', 'Ruby on Rails', 'PostgreSQL', 'Bootstrap'],
    github: 'https://github.com/getssh/Doctors_appointment',
    live: 'https://doc-appointment-n7zf.onrender.com/',
    image: '/project5.png',
    category: 'Web App'
  },
  {
    name: 'Top Movies',
    description: 'This is a web application that allows users to search for movies and view details about them. It uses the OMDB API to fetch movie data and displays it in a user-friendly interface.',
    tech: ['React', 'Vanilla JavaScript', 'Moviesdb', 'Webpack'],
    github: 'https://github.com/getssh/Movies-app',
    live: 'https://davidespinog.github.io/capstone_project_2_API/',
    image: '/project4.png',
    category: 'Web App'
  },
  {
    name: 'Betel Consulting',
    description: 'WordPress website for Betel Consulting, a firm specializing in supporting individuals, businesses, and governments in Ethiopia. The site was built to provide a professional online presence, showcasing the company\'s services and core values. Clean, modern, and user-friendly design that effectively communicates the firm\'s mission.',
    tech: ['WordPress', 'PHP', 'CSS', 'JavaScript'],
    github: 'https://betelconsulting.org/',
    live: 'https://betelconsulting.org/',
    image: '/project6.png',
    category: 'WordPress'
  },
];

export default function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = projects.length;
  const { ref: sectionRef, isInView: sectionInView } = useScrollAnimation();

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getVisibleProjects = () => {
    // Show 3 projects starting from current slide
    const visibleProjects = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentSlide + i) % projects.length;
      visibleProjects.push(projects[index]);
    }
    return visibleProjects;
  };

  return (
    <section id="projects" className="max-w-6xl mx-auto py-16" aria-labelledby="projects-heading">
      <motion.header 
        ref={sectionRef}
        initial="initial"
        animate={sectionInView ? "animate" : "initial"}
        variants={fadeInUp}
        className="text-center mb-12"
      >
        <h2 id="projects-heading" className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">Projects</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          Here are some of the projects I've worked on. Each one represents a unique challenge and learning experience.
        </p>
      </motion.header>
      
      {/* Carousel Container */}
      <div className="relative px-4 sm:px-8 lg:px-16">
        {/* Navigation Arrows */}
        {totalSlides > 1 && (
          <>
            {/* Left Arrow */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 group"
            >
              <svg className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-orange-500 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Right Arrow */}
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 group"
            >
              <svg className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-orange-500 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Projects Grid */}
        <motion.div 
          initial="initial"
          animate={sectionInView ? "animate" : "initial"}
          variants={staggerContainer}
          className="flex gap-4 sm:gap-8 overflow-x-auto pb-4"
        >
          {getVisibleProjects().map((project, idx) => (
            <motion.div 
              key={idx} 
              variants={scaleIn}
              className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex-shrink-0 w-72 sm:w-80"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-600/20 flex items-center justify-center" style={{display: 'none'}}>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    <span className="text-white font-semibold">{project.name}</span>
                  </div>
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-4">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors duration-200 flex items-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub
                    </a>
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bg-orange-500/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-orange-600/90 transition-colors duration-200 flex items-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                  {project.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech} 
                      className="bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/50 dark:to-indigo-900/50 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-medium border border-blue-200 dark:border-blue-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Mobile Links (visible on mobile, hidden on desktop) */}
                <div className="flex gap-3 md:hidden">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg text-center text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex-1 bg-orange-500 text-white px-4 py-2 rounded-lg text-center text-sm font-medium hover:bg-orange-600 transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Slide Indicators */}
        {totalSlides > 3 && (
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalSlides }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide
                    ? 'bg-orange-500 scale-125'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
} 