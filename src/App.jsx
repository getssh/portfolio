import Layout from './components/Layout';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Certifications />
      <Contact />
    </Layout>
  );
}

export default App
