import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';

const BorderLinearProgress = withStyles((theme) => ({
    root: {
        height: 10,
        borderRadius: 5,
    },
    colorPrimary: {
        backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
        borderRadius: 5,
        backgroundColor: '#1a90ff',
    },
}))(LinearProgress);

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
});

const useStyleGrid = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: "12rem"
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const container = {
    backgroundColor: '#e4e4e4',
    padding: '2rem',
    margin: '2rem',
    borderRadius: 10,
    boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .5)',
}

export default function Skills() {
    const classes = useStyles();
    const classesGrid = useStyleGrid();


    return (
        <div className={classes.root}>
            <h3 className="section-title">SKILLS</h3>
            <div className="centered line"></div>
            <div className="container" style={{ display: "flex" }}>
                <Container style={container}>
                    <h3 className="container-title">Programming Languages</h3>
                    <hr />
                    <div>
                        Java
                        <BorderLinearProgress variant="determinate" value={50} />
                    </div>
                    <div>
                        JavaScript
                        <BorderLinearProgress variant="determinate" value={50} />
                    </div>
                </Container>
                <Container style={container}>
                    <h3 className="container-title">Database</h3>
                    <hr />
                    <div>
                        Python
                     <BorderLinearProgress variant="determinate" value={50} />
                    </div>
                    <div>
                        HTML
                        <BorderLinearProgress variant="determinate" value={50} />
                    </div>
                </Container>
            </div>
            <div className="container" style={{ display: "flex" }}>
                <Container style={container}>
                    <h3 className="container-title">Project Management</h3>
                    <hr />
                    <div>
                        Java
                        <BorderLinearProgress variant="determinate" value={50} />
                    </div>
                    <div>
                        JavaScript
                        <BorderLinearProgress variant="determinate" value={50} />
                    </div>
                </Container>
                <Container style={container}>
                    <h3 className="container-title">Web development</h3>
                    <hr />
                    <div>
                        Python
                     <BorderLinearProgress variant="determinate" value={50} />
                    </div>
                    <div>
                        HTML
                        <BorderLinearProgress variant="determinate" value={50} />
                    </div>
                </Container>
            </div>
        </div >

    );
}