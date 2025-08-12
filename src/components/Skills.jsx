import { motion } from 'framer-motion';
import { useScrollAnimation, fadeInUp, scaleIn, staggerContainer } from '../hooks/useScrollAnimation';

const skills = {
  Frontend: ['React', 'Bootstrap', 'Vue', 'Tailwind CSS', 'TypeScript', 'Redux'],
  Backend: ['NodeJS', 'Express', 'MongoDB', 'PostgreSQL', 'Rails', 'REST APIs'],
  DevOps: ['Docker', 'AWS', 'Vercel', 'CI CD', 'Linux'],
  Tools: ['Git', 'Wordpress', 'Jest', 'Webpack', 'VS Code'],
};

export default function Skills() {
  const { ref: sectionRef, isInView: sectionInView } = useScrollAnimation();
  const { ref: skillsRef, isInView: skillsInView } = useScrollAnimation();

  return (
    <section id="skills" className="max-w-6xl mx-auto py-16">
      <motion.div 
        ref={sectionRef}
        initial="initial"
        animate={sectionInView ? "animate" : "initial"}
        variants={fadeInUp}
        className="text-center mb-12"
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">Skills</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          A comprehensive overview of my technical skills and expertise across different domains.
        </p>
      </motion.div>
      
      <motion.div 
        ref={skillsRef}
        initial="initial"
        animate={skillsInView ? "animate" : "initial"}
        variants={staggerContainer}
        className="grid gap-8 md:grid-cols-2 mb-8"
      >
        {/* Frontend */}
        <motion.div 
          variants={scaleIn}
          className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl shadow-lg p-3 border border-blue-200 dark:border-blue-800"
        >
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">Frontend</h3>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {skills.Frontend.map((skill) => (
              <div key={skill} className="text-center group">
                <div className="w-10 h-10 bg-white dark:bg-gray-800 rounded-lg shadow-md flex items-center justify-center mx-auto mb-2 group-hover:shadow-lg transition-shadow duration-200">
                  <img 
                    src={`/tools/${skill.toLowerCase().replace(/[\s/]+/g, '-')}.png`} 
                    alt={skill}
                    className="w-6 h-6 object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <div className="w-5 h-5 bg-gradient-to-br from-blue-400 to-indigo-500 rounded flex items-center justify-center text-white text-xs font-bold" style={{display: 'none'}}>
                    {skill.charAt(0)}
                  </div>
                </div>
                <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{skill}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Backend */}
        <motion.div 
          variants={scaleIn}
          className="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl shadow-lg p-3 border border-green-200 dark:border-green-800"
        >
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4 6h16M4 10h16M4 14h16M4 18h16"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-green-600 dark:text-green-400">Backend</h3>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {skills.Backend.map((skill) => (
              <div key={skill} className="text-center group">
                <div className="w-10 h-10 bg-white dark:bg-gray-800 rounded-lg shadow-md flex items-center justify-center mx-auto mb-2 group-hover:shadow-lg transition-shadow duration-200">
                  <img 
                    src={`/tools/${skill.toLowerCase().replace(/[\s/]+/g, '-')}.png`} 
                    alt={skill}
                    className="w-6 h-6 object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <div className="w-5 h-5 bg-gradient-to-br from-green-400 to-emerald-500 rounded flex items-center justify-center text-white text-xs font-bold" style={{display: 'none'}}>
                    {skill.charAt(0)}
                  </div>
                </div>
                <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{skill}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Row - DevOps and Tools */}
      <motion.div 
        initial="initial"
        animate={skillsInView ? "animate" : "initial"}
        variants={staggerContainer}
        className="grid gap-8 md:grid-cols-2"
      >
        {/* DevOps */}
        <motion.div 
          variants={scaleIn}
          className="bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl shadow-lg p-3 border border-purple-200 dark:border-purple-800"
        >
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-purple-600 dark:text-purple-400">DevOps</h3>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {skills.DevOps.map((skill) => (
              <div key={skill} className="text-center group">
                <div className="w-10 h-10 bg-white dark:bg-gray-800 rounded-lg shadow-md flex items-center justify-center mx-auto mb-2 group-hover:shadow-lg transition-shadow duration-200">
                  <img 
                    src={`/tools/${skill.toLowerCase().replace(/\s+/g, '-')}.png`} 
                    alt={skill}
                    className="w-6 h-6 object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <div className="w-5 h-5 bg-gradient-to-br from-purple-400 to-pink-500 rounded flex items-center justify-center text-white text-xs font-bold" style={{display: 'none'}}>
                    {skill.charAt(0)}
                  </div>
                </div>
                <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{skill}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tools */}
        <motion.div 
          variants={scaleIn}
          className="bg-gradient-to-br from-orange-50 to-red-100 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl shadow-lg p-3 border border-orange-200 dark:border-orange-800"
        >
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-orange-600 dark:text-orange-400">Tools</h3>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {skills.Tools.map((skill) => (
              <div key={skill} className="text-center group">
                <div className="w-10 h-10 bg-white dark:bg-gray-800 rounded-lg shadow-md flex items-center justify-center mx-auto mb-2 group-hover:shadow-lg transition-shadow duration-200">
                  <img 
                    src={`/tools/${skill.toLowerCase().replace(/\s+/g, '-')}.png`} 
                    alt={skill}
                    className="w-6 h-6 object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <div className="w-5 h-5 bg-gradient-to-br from-orange-400 to-red-500 rounded flex items-center justify-center text-white text-xs font-bold" style={{display: 'none'}}>
                    {skill.charAt(0)}
                  </div>
                </div>
                <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{skill}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
} 