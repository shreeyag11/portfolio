import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
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

const container = {
    backgroundColor: '#e4e4e4',
    padding: '2rem',
    margin: '2rem',
    borderRadius: 10,
    boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .5)',
    width: "100%"
}

export default function Skills() {
    const classes = useStyles();

    return (
        <div className={classes.root} className="skills section">
            {/* <h3 className="section-title" id="Skills">SKILLS</h3>
            <div className="centered line"></div>
            <div  >
                <Container style={container} className="col-lg-6 col-md-6 col-sm-12">
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
                <Container style={container} className="col-lg-6 col-md-6 col-sm-12">
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
            <div className="container">
                <Container style={container} className="col-lg-6 col-md-6 col-sm-12">
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
                <Container style={container} className="col-lg-6 col-md-6 col-sm-12">
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
            </div> */}
        </div >

    );
}