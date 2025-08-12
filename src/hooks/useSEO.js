import { useEffect } from 'react';
import { generatePageMeta, generateStructuredData } from '../config/seo';

export const useSEO = (page = 'home', additionalMeta = {}) => {
  useEffect(() => {
    const pageMeta = generatePageMeta(page);
    
    document.title = additionalMeta.title || pageMeta.title;
    
    updateMetaTag('name', 'description', additionalMeta.description || pageMeta.description);
    
    updateMetaTag('name', 'keywords', additionalMeta.keywords || pageMeta.keywords);
    
    updateMetaTag('property', 'og:title', additionalMeta.ogTitle || pageMeta.ogTitle || pageMeta.title);
    updateMetaTag('property', 'og:description', additionalMeta.ogDescription || pageMeta.ogDescription || pageMeta.description);
    
    updateMetaTag('property', 'twitter:title', additionalMeta.twitterTitle || pageMeta.twitterTitle || pageMeta.title);
    updateMetaTag('property', 'twitter:description', additionalMeta.twitterDescription || pageMeta.twitterDescription || pageMeta.description);
    
    if (additionalMeta.canonical) {
      updateCanonicalUrl(additionalMeta.canonical);
    }
    
    addStructuredData(generateStructuredData('person'));
    
    return () => {
      removeStructuredData();
    };
  }, [page, additionalMeta]);
};

const updateMetaTag = (attribute, value, content) => {
  let meta = document.querySelector(`meta[${attribute}="${value}"]`);
  
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute(attribute, value);
    document.head.appendChild(meta);
  }
  
  meta.setAttribute('content', content);
};

const updateCanonicalUrl = (url) => {
  let canonical = document.querySelector('link[rel="canonical"]');
  
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  
  canonical.setAttribute('href', url);
};

const addStructuredData = (data) => {
  removeStructuredData();
  
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(data);
  script.id = 'dynamic-structured-data';
  document.head.appendChild(script);
};

const removeStructuredData = () => {
  const existingScript = document.getElementById('dynamic-structured-data');
  if (existingScript) {
    existingScript.remove();
  }
};

export const usePageSEO = (page, meta = {}) => {
  useSEO(page, meta);
};


export const useSectionSEO = (section, meta = {}) => {
  useSEO('home', {
    ...meta,
    title: `${meta.title || section} - Getayawkal Tamrat | Full-Stack Developer`,
    description: meta.description || `Explore the ${section.toLowerCase()} section of my portfolio showcasing my skills, projects, and experience as a Full-Stack Developer.`
  });
};
