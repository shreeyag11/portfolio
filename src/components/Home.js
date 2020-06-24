import React from 'react';

const Home = () => {
    const content = {
        paddingTop: "10%",
        textAlign: "center"
    }

    const line1 = {
        fontSize: "80px",
        color: "#00ffff"
    }
    const line3 = {
        fontSize: "70px",
        color: "#ffbcbc"
    }

    const hrTag = {
        width: "50%",
        height: "2px",
        backgroundColor: "#000000"
    }

    return (
        <React.Fragment>
            <div style={content} className="contents">
                <br />
                <div style={line1}>
                    <b>Shreeya Gupta</b>
                </div>
                <hr style={hrTag} />
                <div style={line3}>
                    I build applications for the Web.
                    </div>
            </div>
        </React.Fragment >
    );
}

export default Home;