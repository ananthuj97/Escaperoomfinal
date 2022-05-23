import React, {useEffect, useState} from "react";
import { useParams } from "react-router";
import back from "../../images/Frame.png"
import "./answerPage.css";
import answers from "../../answer.json";

const AnswerPage = () => {
    const [answer, setAnswer] = useState("");
    const [error, setError] = useState("");
    const [backUrl, setBackUrl] = useState("");
    let params = useParams();
    useEffect(() => {
        let ansObj = answers.filter((item) => item.id == params.id)[0];
        setBackUrl(ansObj.backLink)
    }, [])
    const validateAnser = () => {
        setError("");
        let ansObj = answers.filter((item) => item.id == params.id)[0];
        if(ansObj.ans != answer) {
            setError("Worng code !!!")
        } else {
            window.location.replace(ansObj.link)
        }
    }
    return (
        <React.Fragment>
            <div className="answer-page">
                <a href={backUrl}><img className="back" src={back} alt=""/></a>
                <h1>Answer</h1>
                { error != "" ? <div><h1>{error}</h1></div> : <span/>}
                <div><input className="input" onChange={e => setAnswer(e.target.value)}/></div>
                <div><button className="button" onClick={validateAnser}>Submit</button></div>
            </div>
        </React.Fragment>

    );
}




export default AnswerPage;
