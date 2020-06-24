import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import meImg from '../assets/images/me.jpg';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
    profile: {
        width: theme.spacing(30),
        height: theme.spacing(30),
        margin: "60px"
    }
}))

function About() {
    const classes = useStyles();

    return (
        <div className="section">
            <h3 className="section-title">ABOUT ME</h3>
            <div className="centered line"></div>
            <div className="section-contents">
                <Avatar src={meImg} className={classes.profile} />
                <div className="contents-right">
                    Hi,
                <br />
                I'm Shreeya!
                <br />
                I am currently pursuing Master of Science in Computer Science at University of North Carolina at Charlotte, NC.
                </div>
            </div>
        </div>
    )
}

export default About
