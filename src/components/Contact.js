import React from 'react';
import SocialSites from './Social/SocialSites';

function Contact() {
    const container = {
        backgroundColor: '#e4e4e4',
        padding: '2rem',
        width: '30%',
        borderRadius: 10,
        boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .5)',
        textAlign: "center",
    }
    return (
        <div>
            <div className="contact ">
                <div className="in-middle_contact">
                    <h3 className="section-title">GET IN TOUCH</h3>
                    <div className="centered line"></div>
                    <div className="center-div">
                        <form method="post" action="https://formspree.io/xvowqeaa">
                            <input type="text" name="Name" placeholder="Name" required="required" /><br />
                            <input type="email" name="Email" placeholder="Email" required="required" /><br />
                            <input type="text" name="Subject" placeholder="Subject" required="required" /><br />
                            <textarea type="text" name="Message" placeholder="Message" required="required" /><br />
                            <button type="submit" className="btn btn-primary btn-block btn-large">Submit</button>
                        </form>
                        <SocialSites />

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact
