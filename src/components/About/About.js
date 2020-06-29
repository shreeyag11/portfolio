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
                <div className="about-main">
                    <div className="card-text">
                        Hello! I am Shreeya, a software engineer based in Charlotte, NC.<br /><br />
                                    Just after completing my Bachelor of Engineering  in
                                    Information Technology at University of Mumbai, I joined
                                    University of North Carolina at Charlotte for pursuing
                                    Master of Science in Computer Science.<br /><br />
                                    Currently, I am working as a Teaching Assistant under a
                                    professor at University of North Carolina at Charlotte
                                    for the course Digital Image Processing.<br />
                                    During my Bachelor’s degree, I have done couple of internships at Sammey Inc. and Ganyt Ecommerce Solution Pvt Ltd
                                    as a Web developer intern.<br /><br />
                                    Apart from these, I like to learn new technologies, design and develop websites as well as mobile applications.

                    </div>
                    <div className="image-align">
                        <img src={meImg} className="in-middle" />
                    </div>
                </div>


            </div>

        </div>

    )
}

export default About



// <div style={{ display: "flex" }}>
//                     <div class="container">
//                         <div class="card card-color-3" >
//                             <div class="border"></div>
//                             <div >

//                             </div>
//                         </div>
//                     </div>
//                    

//                 </div>

