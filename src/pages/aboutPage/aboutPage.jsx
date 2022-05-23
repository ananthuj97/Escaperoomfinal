import React, { Component } from "react";
import "./aboutPage.css";
import leftDesign from "../../images/page3.png";
import button from "../../images/B2.png";
import { Link } from "react-router-dom";

class AboutPage extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="about-page">
                    <div className="design">
                        <img src={leftDesign} alt="" />
                    </div>
                    <div className="text">
                        <h1>About</h1>
                        <p>
                            Bhaskaran Pillai Technologies is a multinational
                            information technology firm with over 5000+ professionals.
                            This firm has been targeted to several cyber attacks.
                            As a result, management decided to hire a cyber specialist
                            to investigate the security breaches and report back to them.
                        </p>
                        <div>
                            <Link to="/rulesPage"><img src={button} alt="" /></Link>
                        </div>
                    </div>
                </div>

            </React.Fragment>

        );
    }
}




export default AboutPage;
