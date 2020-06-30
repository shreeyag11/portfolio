import React from 'react';
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';
import SocialSites from './Social/SocialSites';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(4),
            height: "40px",
            width: "12rem",
            color: "#03e9f4",
            fontSize: "12.5px",
            borderColor: "#03e9f4",

        },
    },
}));

const Home = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <div className="contents">
                <div className="in-middle_home">
                    <div className="line1">
                        <b>Shreeya Gupta</b>
                    </div>
                    <hr className="hrTag" />
                    <div className="line2">
                        I build applications for the Web.
                </div>
                    <br />
                    <div className="line3">
                        I'm a software engineer based in Charlotte, NC <br /> specializing in
                    building and designing<br /> exceptional websites &amp; applications.<br />
                    </div>
                    <div className={classes.root}>
                        <Button variant="outlined" className="nav-resume">Get in Touch</Button>
                    </div>
                    <SocialSites />
                </div>
            </div>

        </React.Fragment >
    );
}

export default Home;