import React, { Component } from "react";
import "./rulesPage.css";
import checked from "../../images/checked.png";
import button from "../../images/B2.png";
import { Link } from "react-router-dom";
class RulesPage extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="rules-page">
                    <div className="heading">
                        <h1>Rules</h1>
                    </div>
                    <div className="parent-text">
                        <div className="left">
                            <div className="left-item">
                                <img src={checked} alt=""/>
                                <p>Enter full screen mode on desktop/laptop for the full experience</p>
                            </div>
                            <div className="left-item">
                                <img src={checked} alt=""/>
                                <p>Make sure you have a smartphone, QR reader, and writing tools</p>
                            </div>
                            <div className="left-item">
                                <img src={checked} alt=""/>
                                <p>If you get stuck, use the hints at the bottom of the page</p>
                            </div>
                        </div>
                        <div className="right">
                            <div className="right-item">
                                <img src={checked} alt=""/>
                                <p>Do not forget to examine the entire page by scrolling</p>
                            </div>
                            <div className="right-item">
                                <img src={checked} alt=""/>
                                <p>Write down each password before advancing</p>
                            </div>
                            <div className="right-item">
                                <img src={checked} alt=""/>
                                <p>Alphabetic passwords are lowercase and passwords never contain spaces or special characters</p>
                            </div>
                        </div>
                    </div>
                    <div>
                    <Link to="/timePage"><img src={button} alt=""/></Link>
                </div>
                </div>
                
            </React.Fragment>

        );
    }
}




export default RulesPage;
