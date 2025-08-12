export const seoConfig = {
  title: "Getayawkal Tamrat - Full-Stack Developer | AWS Certified | Portfolio",
  description: "Full-Stack Developer with 3+ years experience in React, Node.js, Ruby on Rails, and MERN stack. AWS certified practitioner specializing in scalable web applications and cloud-native architectures.",
  keywords: "Full-Stack Developer, React Developer, Node.js Developer, Ruby on Rails, MERN Stack, AWS Certified, Web Development, JavaScript, Frontend Developer, Backend Developer, Portfolio",
  author: "Getayawkal Tamrat",
  url: "https://getayawkal.com",
  
  og: {
    type: "website",
    title: "Getayawkal Tamrat - Full-Stack Developer | AWS Certified | Portfolio",
    description: "Full-Stack Developer with 3+ years experience in React, Node.js, Ruby on Rails, and MERN stack. AWS certified practitioner specializing in scalable web applications and cloud-native architectures.",
    image: "https://getayawkal.com/og-image.jpg",
    siteName: "Getayawkal Tamrat Portfolio",
    locale: "en_US"
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Getayawkal Tamrat - Full-Stack Developer | AWS Certified | Portfolio",
    description: "Full-Stack Developer with 3+ years experience in React, Node.js, Ruby on Rails, and MERN stack. AWS certified practitioner specializing in scalable web applications and cloud-native architectures.",
    image: "https://getayawkal.com/og-image.jpg"
  },
  
  social: {
    linkedin: "https://www.linkedin.com/in/getayawkal-tamrat/",
    github: "https://github.com/getssh"
  },
  
  structuredData: {
    person: {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Getayawkal Tamrat",
      "jobTitle": "Full-Stack Developer",
      "description": "Full-Stack Developer with over 3 years of experience delivering high-impact web applications",
      "url": "https://getayawkal.com",
      "image": "https://getayawkal.com/profile7.png",
      "sameAs": [
        "https://linkedin.com/in/getayawkal-tamrat",
        "https://github.com/getssh"
      ],
      "knowsAbout": [
        "JavaScript",
        "React",
        "Node.js",
        "Ruby on Rails",
        "MERN Stack",
        "AWS",
        "Cloud Computing",
        "Web Development",
        "Full-Stack Development"
      ],
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "AWS Certification",
          "recognizedBy": "Amazon Web Services"
        }
      ],
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "ALX Tech Program"
      },
      "worksFor": {
        "@type": "Organization",
        "name": "MMCY Tech"
      }
    },
    
    organization: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Getayawkal Tamrat Portfolio",
      "url": "https://getayawkal.com",
      "logo": "https://getayawkal.com/logo.png",
      "description": "Professional portfolio showcasing full-stack development work and expertise",
      "sameAs": [
        "https://linkedin.com/in/getayawkal-tamrat",
        "https://github.com/getssh"
      ]
    },
    
    website: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Getayawkal Tamrat Portfolio",
      "url": "https://getayawkal.com",
      "description": "Professional portfolio website showcasing full-stack development projects and skills",
      "author": {
        "@type": "Person",
        "name": "Getayawkal Tamrat"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://getayawkal.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
  },
  
  pages: {
    home: {
      title: "Getayawkal Tamrat - Full-Stack Developer | AWS Certified | Portfolio",
      description: "Full-Stack Developer with 3+ years experience in React, Node.js, Ruby on Rails, and MERN stack. AWS certified practitioner specializing in scalable web applications and cloud-native architectures.",
      keywords: "Full-Stack Developer, React Developer, Node.js Developer, Ruby on Rails, MERN Stack, AWS Certified, Web Development, JavaScript, Frontend Developer, Backend Developer, Portfolio"
    },
    projects: {
      title: "Projects - Getayawkal Tamrat | Full-Stack Developer Portfolio",
      description: "Explore my portfolio of web applications, including UNIverse platform, task management systems, real-time chat apps, and more. Built with modern technologies like React, Node.js, and Ruby on Rails.",
      keywords: "Web Development Projects, React Projects, Node.js Projects, Ruby on Rails Projects, MERN Stack Projects, Portfolio Projects, Web Applications"
    },
    skills: {
      title: "Skills & Expertise - Getayawkal Tamrat | Full-Stack Developer",
      description: "Comprehensive overview of my technical skills including Frontend (React, TypeScript), Backend (Node.js, Ruby on Rails), DevOps (AWS, Docker), and development tools.",
      keywords: "Technical Skills, Frontend Development, Backend Development, DevOps, AWS, React, Node.js, Ruby on Rails, Programming Languages, Development Tools"
    },
    experience: {
      title: "Experience & Work History - Getayawkal Tamrat | Full-Stack Developer",
      description: "Professional experience as a Full-Stack Developer with expertise in building scalable web applications, working with agile teams, and delivering high-impact solutions.",
      keywords: "Work Experience, Professional Experience, Full-Stack Developer Experience, Web Development Experience, Software Development Experience"
    },
    contact: {
      title: "Contact - Getayawkal Tamrat | Full-Stack Developer",
      description: "Get in touch with me for collaboration opportunities, project inquiries, or to discuss how I can help bring your web development ideas to life.",
      keywords: "Contact, Hire Developer, Web Development Services, Full-Stack Developer Contact, Project Collaboration"
    }
  }
};

export const generatePageMeta = (page) => {
  const pageConfig = seoConfig.pages[page] || seoConfig.pages.home;
  
  return {
    title: pageConfig.title,
    description: pageConfig.description,
    keywords: pageConfig.keywords,
    ogTitle: pageConfig.title,
    ogDescription: pageConfig.description,
    twitterTitle: pageConfig.title,
    twitterDescription: pageConfig.description
  };
};

export const generateStructuredData = (type) => {
  return seoConfig.structuredData[type] || seoConfig.structuredData.person;
};
