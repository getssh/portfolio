import Navbar from './Components/Navbar/Navbar';
import Intro from './Components/Intro/Intro';
import Services from './Components/Services/Services';
import Exper from './Components/Exper/Exper';
import Works from './Components/Works/Works';
import Portfolio from './Components/Portfolio/Portfolio';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import './App.css'
import {themeContext} from './Context'
import { useContext } from 'react';

function App() {

  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode;
  return (
    <div className="App"
    style={{
      background: darkMode ? 'black' : '',
      color: darkMode ? 'white' : ''
    }}
    >
      <Navbar />
      <Intro />
      <Portfolio />
      <Services />
      <Exper />
      <Works />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
