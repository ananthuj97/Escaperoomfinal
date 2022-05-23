import React, { Component } from "react";
import "./introPage.css";
import button from "../../images/B2.png";
import user from "../../images/User1.png";
import { Link } from 'react-router-dom';
import logo from "../../images/logo.png";
import video from "../../images/video.mp4";

class IntroPage extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="intro-page">
                    <video className="video" autoPlay loop>
                        <source src={video} />
                    </video>
                    <div className="headings">
                    <img className="logo" src={logo} alt=""/>
                        <h1 className="heading-3">Check your cyber security skills to the test and help Company X.</h1>
                        <img src={user} alt=""/>
                        <div>
                            <Link to="/aboutPage"><img src={button} alt=""/></Link>
                        </div>
                    </div>

                </div>
            </React.Fragment>

        );
    }
}




export default IntroPage;
