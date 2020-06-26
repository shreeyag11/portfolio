import React from 'react';
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(4),
            height: "40px",
            width: "12rem",
            color: "#00ffff",
            fontSize: "12.5px",
            borderColor: "#00ffff",
            position: "static"
        },
    },
}));

const Home = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <div className="contents">
                <div className="in-middle">
                    <div className="line1">
                        <b>SHREEYA GUPTA</b>
                    </div>
                    <hr className="hrTag" />
                    <div className="line2">
                        I build applications for the Web.
                </div>
                    <br />
                    <div className="line3">
                        I'm a software engineer based in Charlotte, NC <br /> specialaizing in
                    building and designing<br /> exceptional websites & applications.<br />
                    </div>
                    <div className={classes.root}>
                        <Button variant="outlined">Get in Touch</Button>
                    </div>
                </div>
            </div>

        </React.Fragment >
    );
}

export default Home;