import { motion } from 'framer-motion';
import { useScrollAnimation, fadeInUp, fadeInLeft, staggerContainer } from '../hooks/useScrollAnimation';

const experience = [
  {
    role: 'Web Developer',
    org: 'MMCY TECH',
    duration: '2021 - Present',
    type: 'work',
    highlights: [
      'Developing websites for diverse clients by utilizing web development technologies.',
      'Collaborated with cross-functional teams',
      'Built the entire front end of the application with Javascript, React, and TailWind.',
      'Implemented responsive design patterns',
      'Developed and maintained web applications using React, Node.js, and MongoDB.',
    ],
  },
  {
    role: 'Mentor',
    org: 'MICROVERSE',
    duration: '2023 - 2024',
    type: 'work',
    highlights: [
      'Mentored 2 junior web developers per month, providing technical support through code reviews.',
      'Helped students on the onboarding process to get them started with the program.',
      'Providing mentorship through Zoom and Slack',
      'Providing advice and tips for 8 students on how to maintain motivation to maintain longevity in the program.',
    ],
  },
  {
    role: 'Msc Computer Science',
    org: 'American College of Technology',
    duration: '2024 - 2026',
    type: 'education',
    highlights: [
      'Gaining expertise in software development, algorithms, and system design through coursework and research projects.',
      'Enhancing problem-solving and technical skills, with an emphasis on real-world applications and innovation in computer science',
    ],
  },
  {
    role: 'MICROVERSE',
    org: 'Remote Full Stack Web Development Program',
    duration: '2023 - 2024',
    type: 'education',
    highlights: [
      'Spending 1300+ hours mastering algorithms, data structures, and full-stack development while simultaneously developing projects with Ruby, Rails, JavaScript, React, and Redux.',
      'Developing skills in remote pair programming using GitHub, industry-standard git-flow, and daily standups to communicate and collaborate with international remote developers.',
    ],
  },
  {
    role: 'Software Engineering Program',
    org: 'ALX Africa',
    duration: '2021 - 2022',
    type: 'education',
    highlights: [
      'Built different web apps using different programming languages such as HTML, CSS, JavaScript, and React.',
      'Made databases and business logic for websites.',
      'Gained experience in software development, algorithms, and system design through coursework and projects.',
    ],
  },
];

export default function Experience() {
  const { ref: sectionRef, isInView: sectionInView } = useScrollAnimation();
  const { ref: timelineRef, isInView: timelineInView } = useScrollAnimation();

  const getIcon = (type) => {
    if (type === 'work') {
      return (
        <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>
        </svg>
      );
    }
    return (
      <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
      </svg>
    );
  };

  const getTypeColor = (type) => {
    if (type === 'work') {
      return 'bg-gradient-to-br from-blue-500 to-indigo-600';
    }
    return 'bg-gradient-to-br from-green-500 to-emerald-600';
  };

  return (
    <section id="experience" className="max-w-6xl mx-auto py-16">
      <motion.div 
        ref={sectionRef}
        initial="initial"
        animate={sectionInView ? "animate" : "initial"}
        variants={fadeInUp}
        className="text-center mb-16"
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">Experience & Education</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          My professional journey and educational background that shaped my career in software development.
        </p>
      </motion.div>
      
      <motion.div 
        ref={timelineRef}
        initial="initial"
        animate={timelineInView ? "animate" : "initial"}
        variants={staggerContainer}
        className="relative"
      >
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-purple-200 to-green-200 dark:from-blue-800 dark:via-purple-800 dark:to-green-800"></div>
        
        <ol className="space-y-12">
          {experience.map((item, idx) => (
            <motion.li 
              key={idx} 
              variants={fadeInLeft}
              className="relative"
            >
              {/* Timeline Dot */}
              <div className={`absolute left-6 -translate-x-1/2 w-4 h-4 ${getTypeColor(item.type)} rounded-full ring-4 ring-white dark:ring-gray-950 shadow-lg z-10 flex items-center justify-center`}>
                {getIcon(item.type)}
              </div>
              
              {/* Content Card */}
              <div className="ml-16">
                <div className="group bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.role}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          item.type === 'work' 
                            ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' 
                            : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        }`}>
                          {item.type === 'work' ? 'Work' : 'Education'}
                        </span>
                      </div>
                      <span className="block text-lg font-semibold text-blue-600 dark:text-blue-400">{item.org}</span>
                      <span className="block text-sm text-gray-500 dark:text-gray-400 mt-1">{item.duration}</span>
                    </div>
                    
                    {/* Duration Badge */}
                    <div className="mt-4 sm:mt-0">
                      <div className={`px-4 py-2 rounded-full text-sm font-semibold ${
                        item.type === 'work' 
                          ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300' 
                          : 'bg-green-50 text-green-700 dark:bg-green-900/50 dark:text-green-300'
                      }`}>
                        {item.duration}
                      </div>
                    </div>
                  </div>
                  
                  {/* Highlights */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">Key Achievements</h4>
                    <ul className="space-y-2">
                      {item.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                          <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                            item.type === 'work' 
                              ? 'bg-blue-500' 
                              : 'bg-green-500'
                          }`}></div>
                          <span className="text-sm leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </div>
            </motion.li>
          ))}
        </ol>
      </motion.div>
    </section>
  );
} 