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
                    <li><a href="#about" className="nav-link">About</a></li>
                    <li><a href="#education" className="nav-link">Academics</a></li>
                    <li><a href="#experience" className="nav-link">Experience</a></li>
                    <li><a href="#projects" className="nav-link">Projects</a></li>
                    <li><a href="#skills" className="nav-link">Skills</a></li>
                    <li><a href="#contact" className="nav-link">Contact</a></li>
                </ul>
            </nav>

        </div>
    );
}

export default NavBar;
