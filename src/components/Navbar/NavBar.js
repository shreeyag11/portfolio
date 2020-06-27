import React from 'react';
import DrawerToggleButton from './SideDrawer/DrawerToggleButton';

const NavBar = props => {
    return (
        <div >
            <div className="toolbar__toggle-button odd top-nav">
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <nav className="nav top-nav odd">
                <ul>
                    <li><a href="#about" className="nav-link">ABOUT</a></li>
                    <li><a href="#skills" className="nav-link">SKILLS</a></li>
                    <li><a href="#education" className="nav-link">EDUCATION</a></li>
                    <li><a href="#experience" className="nav-link">EXPERIENCE</a></li>
                    <li><a href="#projects" className="nav-link">PROJECTS</a></li>
                    <li><a href="#contact" className="nav-link">CONTACT</a></li>
                </ul>
            </nav>

        </div>
    );
}

export default NavBar;
