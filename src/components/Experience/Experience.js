import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import {
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    Divider,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "80%",
        marginLeft: "auto",
        marginRight: "auto"
    },
    panel: {
        backgroundColor: "#adb0c4",
        border: "4px solid #d6d7e1"
    },
    icon: {
        color: "#072142",
        fontSize: "18px",
        fontFamily: "Espuma Pro Medium",
    },
    date: {
        fontSize: "15px",
        color: "#072142",
        marginRight: 0,
        marginLeft: "auto",
        fontFamily: "Espuma Pro Medium",

    },
    heading: {
        textAlign: "center",
    },
    content: {
        fontSize: "18px",
        fontFamily: "Espuma Pro Medium",
        backgroundColor: "#d6d7e1",

    }
}));

export default function Experience() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState("panel1");

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className="experience" id="experience">
            <div className="in-middle_experience">
                <h3 className="section-title">Work Experience</h3>
                <div className="centered line"></div>

                <div className={classes.root}>
                    <ExpansionPanel
                        expanded={expanded === "panel1"}
                        onChange={handleChange("panel1")}
                    >
                        <ExpansionPanelSummary
                            className={classes.panel}
                            expandIcon={<ExpandMoreIcon className={classes.icon} />}
                        >
                            <Typography variant="h6" className={classes.icon}>
                                University of North Carolina at Charlotte
                                </Typography>
                            <Typography className={classes.date}>May 2020 - Present</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails className={classes.content}>
                            <div>
                                <b>Position:</b> Teaching Assistant<br />
                                <b>Course:</b> ITCS 3134<br />
                                <b>Responsibilities:</b><br />
                                   o Responsibilities include the creation and maintenance of web application
                                    software using Vue.js used throughout the course.<br /> o Along with grading coursework
                                     of the students, conducting class activities, and addressing student issues during
                                      office hours.

                                </div>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <br />
                    <ExpansionPanel
                        expanded={expanded === "panel2"}
                        onChange={handleChange("panel2")}
                    >
                        <ExpansionPanelSummary
                            className={classes.panel}
                            expandIcon={<ExpandMoreIcon className={classes.icon} />}
                        >
                            <Typography variant="h6" className={classes.icon}>
                                Ganyt E-commerce Solution Pvt Ltd.
                                 </Typography>
                            <Typography className={classes.date}>
                                June 2018- August 2018
                                </Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails className={classes.content}>
                            <div>
                                <b>Position:</b> Web development intern<br />
                                <b>Responsibilities:</b><br />
                                    o Designed and developed user-friendly interface to easily navigate the web application in HTML and JavaScript using ReactJS.
                                 <br />   o Participation in fundamental activities like gathering business requirements, collection, analysis, design, development, and testing.
                                 <br />   o Developed the components in React using CSS and Bootstrap to provide design view in the web page.
                                 <br />   o Developed SQL Queries, Stored Procedures, function, tables and data connectivity and data integration for the application.

                                </div>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <br />
                    <ExpansionPanel
                        expanded={expanded === "panel3"}
                        onChange={handleChange("panel3")}
                    >
                        <ExpansionPanelSummary
                            className={classes.panel}
                            expandIcon={<ExpandMoreIcon className={classes.icon} />}
                        >
                            <Typography variant="h6" className={classes.icon}>
                                Sammey Inc.
                              </Typography>
                            <Typography className={classes.date}>
                                June 2017 - July 2017
                             </Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails className={classes.content}>
                            <div>
                                <b>Position:</b> Web development intern<br />
                                <b>Responsibilities:</b><br />
                                     o Drafted SEO friendly content for website which lead to more lead generation to the clients which helped excel in various online marketing methods.
                                   <br /> o Designed front-end UI for web applications as per the requirements of company's client, with regular updates and modifications as and when required.
                                   <br /> o Developed and formulated a robust and strong backend scripting which not only led to streamline flow of UI but also functioned to have a full control to the user making it highly dynamic and more functional in nature.
                                </div>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </div>
            </div>
        </div>

    );
}