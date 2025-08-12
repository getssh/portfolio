const certifications = [
  { 
    name: 'AWS Certified Solutions Architect Associate', 
    org: 'Amazon Web Services', 
    year: '2024',
    category: 'Cloud',
    icon: 'aws'
  },
  { 
    name: 'KCNA: Kubernetes and Cloud Native Associate', 
    org: 'Cloud Native Computing Foundation', 
    year: '2025',
    category: 'DevOps',
    icon: 'kubernetes'
  },
  { 
    name: 'ALX Software Engineering', 
    org: 'ALX Africa', 
    year: '2021',
    category: 'Programming',
    icon: 'code'
  },
  { 
    name: 'React Developer Certification', 
    org: 'Hong Kong University of Science and Technology', 
    year: '2022',
    category: 'Frontend',
    icon: 'react'
  },
  { 
    name: 'Data Science in Precision Medicine and Cloud Computing', 
    org: 'Stanford University', 
    year: '2025',
    category: 'AI',
    icon: 'ai'
  },
  { 
    name: 'Artificial Intelligence Fundamentals', 
    org: 'Udacity', 
    year: '2025',
    category: 'AI',
    icon: 'ai'
  },
];

export default function Certifications() {
  const getCategoryColor = (category) => {
    const colors = {
      'Cloud': 'from-blue-500 to-indigo-600',
      'DevOps': 'from-purple-500 to-pink-600',
      'Programming': 'from-green-500 to-emerald-600',
      'Frontend': 'from-orange-500 to-red-600',
      'Database': 'from-teal-500 to-cyan-600'
    };
    return colors[category] || 'from-gray-500 to-gray-600';
  };

  const getCategoryBg = (category) => {
    const colors = {
      'Cloud': 'from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20',
      'DevOps': 'from-purple-50 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20',
      'Programming': 'from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20',
      'Frontend': 'from-orange-50 to-red-100 dark:from-orange-900/20 dark:to-red-900/20',
      'Database': 'from-teal-50 to-cyan-100 dark:from-teal-900/20 dark:to-cyan-900/20'
    };
    return colors[category] || 'from-gray-50 to-gray-100 dark:from-gray-900/20 dark:to-gray-900/20';
  };

  const getCategoryBorder = (category) => {
    const colors = {
      'Cloud': 'border-blue-200 dark:border-blue-800',
      'DevOps': 'border-purple-200 dark:border-purple-800',
      'Programming': 'border-green-200 dark:border-green-800',
      'Frontend': 'border-orange-200 dark:border-orange-800',
      'Database': 'border-teal-200 dark:border-teal-800'
    };
    return colors[category] || 'border-gray-200 dark:border-gray-800';
  };

  const getIcon = (icon) => {
    const icons = {
      'aws': (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6.763 10.036h1.95c.276 0 .5.224.5.5v.5c0 .276-.224.5-.5.5h-1.95c-.276 0-.5-.224-.5-.5v-.5c0-.276.224-.5.5-.5z"/>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      'kubernetes': (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      'code': (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
        </svg>
      ),
      'react': (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      'database': (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      'ai': (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      )
    };
    return icons[icon] || icons['code'];
  };

  return (
    <section id="certifications" className="max-w-6xl mx-auto py-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">Certifications</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          Recognitions and credentials that highlight my commitment to professional growth and excellence.
        </p>
      </div>
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, idx) => (
          <div key={idx} className="group">
            <div className={`bg-gradient-to-br ${getCategoryBg(cert.category)} rounded-xl shadow-lg p-6 border ${getCategoryBorder(cert.category)} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}>
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-lg flex items-center justify-center">
                  <div className={`text-white bg-gradient-to-br ${getCategoryColor(cert.category)} rounded-lg p-2`}>
                    {getIcon(cert.icon)}
                  </div>
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${getCategoryColor(cert.category)}`}>
                  {cert.year}
                </div>
              </div>
              
              {/* Content */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                  {cert.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {cert.org}
                </p>
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    cert.category === 'Cloud' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                    cert.category === 'DevOps' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' :
                    cert.category === 'Programming' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                    cert.category === 'Frontend' ? 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200' :
                    cert.category === 'Database' ? 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200' :
                    'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
                  }`}>
                    {cert.category}
                  </span>
                </div>
              </div>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 