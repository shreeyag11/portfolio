import React, { Component } from 'react';
import Home from './components/Home';
import './assets/css/App.css'
import NavBar from './components/Navbar/NavBar';
import Footer from './components/Footer';
import Experience from './components/Experience/Experience';
import Project from './components/Projects/Project';
import About from './components/About/About';
import Particles from 'particlesjs';
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact';
import Sidebars from './components/Sidebars';
import SideDrawer from './components/Navbar/SideDrawer/SideDrawer';
import Backdrop from './components/Navbar/Backdrop/Backdrop';


class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  }

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };
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
  render() {
    let backdrop;
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }

    return (
      <div className="App" style={{ height: "100%" }}>
        <div className="main" >
          <NavBar drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop}
          <Home />
        </div>
        <About />
        <Education />
        <Experience />
        <Project />
        <Skills />
        <Contact />
        <Footer />
      </div >
    );
  }
}

export default App;
