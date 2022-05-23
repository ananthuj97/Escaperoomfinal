import React, { Component } from "react";
import "./timePage.css";
import time from "../../images/time.png";
import timeGif from "../../images/timegif.gif";
import button from "../../images/B3.png";

class TimePage extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="time-page">
                    <div className="images">
                        <img src={timeGif} alt="" />
                        <img src={time} alt="" />
                    </div>
                    <div className="text">
                        <h1>Time</h1>
                        <p>
                            The game will be played for one hour.
                            Set a timer on your phone or watch for
                            60 minutes <u>(or click here for an online
                            timer.)</u> When you're ready, click "START
                            GAME" to go to your first mission.
                        </p>
                        <div>
                            <a href="https://www.figma.com/proto/wtwFtKzyOwIiYorBUnYTnI/Escaperoom?page-id=2%3A3&node-id=81%3A24140&viewport=-3177%2C4742%2C0.19&scaling=scale-down-width&starting-point-node-id=81%3A24140&hotspot-hints=0"><img src={button} alt="" /></a>
                        </div>
                    </div>
                </div>

            </React.Fragment>

        );
    }
}




export default TimePage;
