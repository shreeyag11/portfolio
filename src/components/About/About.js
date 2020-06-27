import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import meImg from '../../assets/images/me.jpg';
import Avatar from '@material-ui/core/Avatar';
import "./about.css"

const useStyles = makeStyles((theme) => ({
    profile: {
        width: theme.spacing(30),
        height: theme.spacing(30),
        padding: "60px",
        position: "static",
    }
}))

function About() {
    const classes = useStyles();

    return (
        <div className="about" id="about" >
            <div className="in-middle-about">
                <h3 className="section-title">ABOUT ME</h3>
                <div className="centered line"></div>
                <div>

                    <div class="container">

                        <div class="card card-color-3" >
                            <div class="border"></div>
                            <img src={meImg} />
                            <div >
                                <div className="card-content">
                                    Hello, <br />
                                    I am Shreeya, a software engineer based in Charlotte, NC.
                                    Just after completing my Bachelor of Engineering  in
                                    Information Technology at University of Mumbai, I joined
                                    University of North Carolina at Charlotte for pursuing
                                    Master of Science in Computer Science where I have
                                     taken some very interesting courses and developed a lot of projects.
                                    Currently, I am working as a Teaching Assistant under a
                                    professor at University of North Carolina at Charlotte
                                    for the course Digital Image Processing.
                                    During my Bachelor’s degree, I have done couple of internships at Sammey Inc. and Ganyt Ecommerce Solution Pvt Ltd
                                    as a Web developer intern.
                                    Apart from these, I like to learn new technologies, design and develop websites as well as mobile applications.

                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </div >

    )
}

export default About
