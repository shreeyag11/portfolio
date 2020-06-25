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
                    <li><a href="#" className="nav-link">ABOUT ME</a></li>
                    <li><a href="#" className="nav-link">SKILLS</a></li>
                    <li><a href="#" className="nav-link">EDUCATION</a></li>
                    <li><a href="#" className="nav-link">EXPERIENCE</a></li>
                    <li><a href="#" className="nav-link">PROJECTS</a></li>
                    <li><a href="#" className="nav-link">CONTACT ME</a></li>
                </ul>
            </nav>

        </div>
    );
}

export default NavBar;
