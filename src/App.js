import React from 'react';
import Home from './components/Home';
import './assets/css/App.css'
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Experience from './components/Experience';
import Projects from './components/Projects';
import About from './components/About';
import Particles from 'particlesjs';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Sidebars from './components/Sidebars';


function App() {

  // window.
  //   onload
  //   = function () {
  //     Particles.
  //       init
  //       ({
  //         selector: '.background',
  //         speed: 0.5,
  //         color: ['#ffffff', '#404B69'],
  //         connectParticles: true,
  //         responsive: [{
  //           options: {
  //             color: '#00C9B1',
  //             maxParticles: 800,
  //             connectParticles: false
  //           }
  //         }]
  //       });
  //   };

  // var main = document.querySelector('.main');
  // var nav = document.querySelector('.nav');
  // var offset = main.offsetHeight - nav.offsetHeight;

  // window.onscroll = function () {
  //   if (window.pageYOffset > offset) {
  //     nav.classList.remove('.bottom-nav');
  //     nav.classList.add('.top-nav');
  //   }
  //   else {
  //     nav.classList.remove('.top-nav');
  //     nav.classList.add('.bottom-nav');
  //   }
  // }

  return (
    <div className="App">
      <div className="main" >
        <Sidebars />
        <NavBar />
        <Home />
      </div>
      <About />
      <Skills />
      {/* <Projects /> */}
      <Education />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}


export default App;
