import React from 'react';
import Container from '@material-ui/core/Container';

function Contact() {
    const container = {
        backgroundColor: '#e4e4e4',
        padding: '2rem',
        margin: '2rem',
        borderRadius: 10,
        width: "40%",
        boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .5)',
    }
    return (
        <div className="contact">
            <h3 className="section-title">CONTACT ME</h3>
            <div className="centered line"></div>
            <div className="section-contents">

                <Container style={container}>
                    <form action="https://formspree.io/xvowqeaa"
                        method="POST">
                        <label>YourName:</label>
                        <br />
                        <input type="text" name="Name" />
                        <br />
                        <br />
                        <label>Email:</label>
                        <br />
                        <input type="text" name="Email" />
                        <br />
                        <br />
                        <label>Subject:</label>
                        <br />
                        <input type="text" name="Subject" />
                        <br />
                        <br />
                        <label>Message:</label>
                        <br />
                        <textarea name="Message" />
                        <br />
                        <br />
                        <input type="submit" value="Submit" />
                    </form>
                </Container>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3255.9329508116566!2d-80.72512788554376!3d35.307647457978454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88541c08775f9317%3A0x67356716bb2518b9!2sUniversity%20Terrace%20Dr%2C%20Charlotte%2C%20NC%2028262!5e0!3m2!1sen!2sus!4v1592956097480!5m2!1sen!2sus"
                    width="50%" height="450" style={{ border: 0, margin: "3rem" }} aria-hidden="false" tabindex="0"></iframe>

            </div>

        </div>
    )
}

export default Contact
