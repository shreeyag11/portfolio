import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { BrowserRouter } from 'react-router-dom';

const NavBar = ({ element }) => {

    return (
        <div>
            <nav className="nav top-nav odd">
                <ul>
                    <li><a href="" className="nav-link">ABOUT ME</a></li>
                    <li><a href="" className="nav-link">SKILLS</a></li>
                    <li><a href="" className="nav-link">EDUCATION</a></li>
                    <li><a href="" className="nav-link">EXPERIENCE</a></li>
                    <li><a href="" className="nav-link">PROJECTS</a></li>
                    <li><a href="" className="nav-link">CONTACT ME</a></li>
                </ul>
            </nav>

        </div>
    );
}

export default NavBar;
