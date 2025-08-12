import { useState, useEffect } from 'react';

const navLinks = [
  { to: '#home', label: 'About Me' },
  { to: '#projects', label: 'Projects' },
  { to: '#skills', label: 'Skills' },
  { to: '#experience', label: 'Experience' },
  { to: '#certifications', label: 'Certifications' },
  { to: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Initialize dark mode from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      setDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDark = () => {
    const newDarkMode = !dark;
    setDark(newDarkMode);
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.to.replace('#', ''));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg sticky top-0 z-50 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="flex items-center gap-2">
          <span className="font-bold text-xl text-gray-900 dark:text-white transition-colors duration-200">Portfolio</span>
        </div>
        <div className="hidden md:flex gap-4">
          {navLinks.map((link) => {
            const sectionId = link.to.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <button
                key={link.to}
                onClick={() => scrollToSection(sectionId)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive 
                    ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 shadow-sm' 
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={toggleDark} 
            className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all duration-200 group" 
            aria-label="Toggle dark mode"
          >
            {dark ? (
              <svg className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"/>
              </svg>
            ) : (
              <svg className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.893a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.06l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"/>
              </svg>
            )}
          </button>
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-200" 
            onClick={() => setMenuOpen((m) => !m)} 
            aria-label="Toggle menu"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="h-6 w-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-2 pt-2 pb-3 space-y-1 border-t border-gray-200 dark:border-gray-700 transition-colors duration-200">
          {navLinks.map((link) => {
            const sectionId = link.to.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <button
                key={link.to}
                onClick={() => scrollToSection(sectionId)}
                className={`block w-full text-left px-3 py-2 rounded-lg text-base font-medium transition-all duration-200 ${
                  isActive 
                    ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 shadow-sm' 
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </div>
      )}
    </nav>
  );
} 