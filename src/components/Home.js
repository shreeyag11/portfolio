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
            borderColor: "#00ffff"
        },
    },
}));

const Home = () => {
    const classes = useStyles();

    const content = {
        paddingTop: "14%",
        textAlign: "center",
        justifyContent: "center"
    }

    const line1 = {
        fontSize: "53px",
        color: "#00ffff"
    }
    const line2 = {
        fontSize: "35px",
        color: "#ffbcbc"
    }
    const line3 = {
        fontSize: "20px"
    }

    const hrTag = {
        width: "20%",
        height: "2px",
        backgroundColor: "#000000"
    }

    return (
        <React.Fragment>
            <div style={content} className="contents">
                <div style={line1}>
                    <b>SHREEYA GUPTA</b>
                </div>
                <hr style={hrTag} />
                <div style={line2}>
                    I build applications for the Web.
                </div>
                <br />
                <div style={line3}>
                    I'm a software engineer based in Charlotte, NC <br /> specialaizing in
                    building and designing<br /> exceptional websites & applications.<br />
                </div>
                <div className={classes.root}>
                    <Button variant="outlined">Get in Touch</Button>
                </div>
            </div>
        </React.Fragment >
    );
}

export default Home;