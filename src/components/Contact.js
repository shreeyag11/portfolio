import React from 'react';
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';
import SocialSites from './Social/SocialSites';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            height: "40px",
            color: "#03e9f4",
            fontSize: "12.5px",
            borderColor: "#03e9f4",

        },
    },
}));
function Contact() {

    const classes = useStyles();


    return (
        <div>
            <div className="contact ">
                <div className="in-middle_contact">
                    <h3 className="section-title" id="contact">GET IN TOUCH</h3>
                    <div className="centered line"></div>
                    <div className="center-div">
                        <form method="post" action="https://formspree.io/xvowqeaa">
                            <input type="text" name="Name" placeholder="Name" required="required" /><br />
                            <input type="email" name="Email" placeholder="Email" required="required" /><br />
                            <input type="text" name="Subject" placeholder="Subject" required="required" /><br />
                            <textarea type="text" name="Message" placeholder="Message" required="required" /><br />
                            <div className={classes.root}>
                                <Button type="submit" variant="outlined" className="btn-block btn-large">Submit</Button>
                            </div>
                        </form>
                        <SocialSites />

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact
