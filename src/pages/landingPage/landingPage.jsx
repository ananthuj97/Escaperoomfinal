import React, { Component } from "react";
import './landingPage.css'
import button from "../../images/B1.png";
import logo from "../../images/logo.png";
import { Link } from 'react-router-dom';
import video from "../../images/video.mp4";
class LandingPage extends Component {

    constructor(props) {
        super(props);
        this.onButtonClick = this.onButtonClick.bind(this);
    }

    onButtonClick = () => this.navigate('/introPage', { replace: true });

    render() {

        return (
            <React.Fragment>
                <div className="landing-page">
                    <video className="video" autoPlay loop>
                        <source src={video}/>
                    </video>
                    <div className="headings">
                        <img className="logo" src={logo} alt=""/>
                        <h1 className="heading-3">Check your cyber security skills to the test and help Company X.</h1>
                        <div>
                            <Link to="/introPage"><img src={button} alt=""/></Link>
                        </div>
                    </div>

                </div>
            </React.Fragment>

        );
    }
}




export default LandingPage;
