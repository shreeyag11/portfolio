
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './education.scss';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: '10px 10px',
    },
    secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
    },
}));

export default function Education() {
    const classes = useStyles();

    return (
        <div className="education" id="education">
            <div className="in-middle_education">
                <h3 className="section-title" >Education</h3>
                <div className="centered line"></div>
                <section class="timeline">
                    <ul>
                        <li>
                            <div class="content" >
                                <div className="acad-title">University of North Carolina at Charlotte</div>
                                <div>Charlotte, North Carolina, USA<br />
                                August 2019 - Present<br />
                                Master of Science in Computer Science<br />
                                GPA: 4.0/4.0<br />
                                Related Courses: Algorithm and Data Structures, Databse Systems, Network based application development, Cloud Computing, Software system and design implementation, Knowledge discovery in databases.
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="content">
                                <div className="acad-title">University of Mumbai</div>
                                <div>Mumbai, Maharashtra, India<br />
                                August 2015 - May 2019<br />
                                Bachelor of Engineering in Information Technology<br />
                                GPA: 4.0/4.0<br />
                                Related Courses: Software Engineering, Object Oriented Programming Methodology, Advance Database Management Systems, Web Programming, Cloud Computing.
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="content">
                                <div className="acad-title">TP Bhatia College of Science</div>
                                <div>Mumbai, Maharashtra, India<br />
                                August 2013 - May 2015<br />
                                Master of Science in Computer Science<br />
                                GPA: 4.0/4.0<br />
                                </div>
                            </div>
                        </li>

                    </ul>
                </section>



            </div>
        </div>
    );
}

{/* <Timeline align="alternate">
                    <TimelineItem style={{
                        position: "static"
                    }}>
                        <TimelineOppositeContent >
                            <Typography variant="body1" color="textSecondary">
                                May 2020 - Present
                        </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot color="primary">
                                <LaptopMacIcon />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Paper elevation={5} className={classes.paper} className="stage">
                                <Typography variant="h4" component="h1">
                                    Teaching Assistant
                            </Typography>
                                <Typography variant="h5">Digital Image Processing</Typography>
                                <Typography variant="h5">Univesity of North Carolina at Charlotte - Charlotte, North Carolina, USA</Typography>
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem style={{
                        position: "static"
                    }}>
                        <TimelineOppositeContent>
                            <Typography variant="body1" color="textSecondary">
                                June 2018 - August 2018
                        </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot color="primary">
                                <LaptopMacIcon />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Paper elevation={5} className={classes.paper}>
                                <Typography variant="h4" component="h1">
                                    Web development intern
                            </Typography>
                                <Typography variant="h5">Ganyt E-commerce Solution Pvt Ltd</Typography>
                                <Typography variant="h5">Mumbai, Maharashtra, India</Typography>
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem style={{
                        position: "static"
                    }}>
                        <TimelineOppositeContent>
                            <Typography variant="body1" color="textSecondary">
                                June 2017 - July 2017
                        </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot color="primary">
                                <LaptopMacIcon />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Paper elevation={5} className={classes.paper}>
                                <Typography variant="h4" component="h1">
                                    Web development intern
                            </Typography>
                                <Typography variant="h5">Sammey Inc. </Typography>
                                <Typography variant="h5">Mumbai, Maharashtra, India</Typography>
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline> */}
