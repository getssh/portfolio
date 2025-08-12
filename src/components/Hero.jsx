import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useScrollAnimation, fadeInUp, fadeInLeft, fadeInRight, scaleIn } from '../hooks/useScrollAnimation';

export default function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const { ref: titleRef, isInView: titleInView } = useScrollAnimation();
  const { ref: contentRef, isInView: contentInView } = useScrollAnimation();
  const { ref: imageRef, isInView: imageInView } = useScrollAnimation();
  const { ref: statsRef, isInView: statsInView } = useScrollAnimation();

  return (
    <section id="home" className="min-h-screen flex items-center py-16">
      <div className="max-w-9xl mx-auto px-8 sm:px-8 lg:px-5">
        <div className="grid lg:grid-cols-5 gap-5 items-center">
          <motion.div 
            ref={titleRef}
            initial="initial"
            animate={titleInView ? "animate" : "initial"}
            variants={fadeInUp}
            className="lg:col-span-3 space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
                Hey! I am
              </h1>
              <h2 className="text-5xl sm:text-6xl lg:text-6xl font-extrabold text-orange-500 dark:text-orange-400 leading-tight">
                Getayawkal Tamrat
              </h2>
            </div>
            
            <motion.p 
              ref={contentRef}
              initial="initial"
              animate={contentInView ? "animate" : "initial"}
              variants={fadeInUp}
              className="text-lg sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl"
            >
              A results-driven Full-Stack Developer with over 3 years of experience delivering high-impact web applications. I specialize in building scalable, responsive, and user-centric solutions using JavaScript, React, Node.js, Ruby on Rails, and the MERN stack. I'm an AWS-certified practitioner with knowledge in cloud-native architectures, microservices, and serverless technologies.

              <br/><br/>I've contributed to real-world solutions like smart event registration systems and AI-powered university platforms, which improved user experience by up to 20%. A top 5% graduate of the ALX Tech program and a Gold Fellow, I thrive in collaborative, agile environments and enjoy mentoring junior developers. Whether it's front-end finesse or back-end logic, I bring a problem-solving mindset, clean code, and a passion for innovation.
            </motion.p>
            
            <motion.div 
              initial="initial"
              animate={contentInView ? "animate" : "initial"}
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button 
                onClick={() => scrollToSection('contact')} 
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-semibold shadow-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-200 transform hover:scale-105"
              >
                Hire Me
              </button>
              <button 
                onClick={() => scrollToSection('projects')} 
                className="px-8 py-4 border-2 border-orange-500 text-orange-500 dark:text-orange-400 rounded-full font-semibold hover:bg-orange-500 hover:text-white transition-all duration-200 transform hover:scale-105"
              >
                View Projects
              </button>
            </motion.div>
          </motion.div>

          <motion.div 
            ref={imageRef}
            initial="initial"
            animate={imageInView ? "animate" : "initial"}
            variants={scaleIn}
            className="lg:col-span-2 relative"
          >
            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-300 rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-300 rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-purple-300 rounded-full opacity-30 blur-2xl"></div>
            </div>

            <div className="relative z-10">
              <div className="relative w-80 h-80 mx-auto">
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-3xl shadow-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-60 h-60 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <img src="/profile7.png" alt="Profile" className="w-full h-full object-cover rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={imageInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute top-0 right-0 z-20"
            >
              <div className="bg-pink-100 dark:bg-pink-900 rounded-2xl p-4 shadow-lg flex items-center space-x-3">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">Full-Stack</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={imageInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute bottom-0 right-0 z-20"
            >
              <div className="bg-yellow-100 dark:bg-yellow-900 rounded-2xl p-4 shadow-lg flex items-center space-x-3">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">Web Development</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={imageInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="absolute top-3 left-3 z-20"
            >
              <div className="text-4xl">😎</div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          ref={statsRef}
          initial="initial"
          animate={statsInView ? "animate" : "initial"}
          variants={fadeInUp}
          className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-500 dark:text-orange-400">3+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-500 dark:text-orange-400">20+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-500 dark:text-orange-400">15+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Happy Clients</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 