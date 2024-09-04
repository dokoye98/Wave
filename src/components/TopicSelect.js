import React from "react";
import { useNavigate } from "react-router-dom";

function TopicSelect(){
    const navigate = useNavigate()

    const handleNavigate = (path) =>{
        navigate(path)
    }
    return(
        <div className="homepage-container">
            <h2>Pick your posion</h2>
            <div className="button-group">
            <button onClick={() => handleNavigate('/topic/talks')} className="topic-button">Talks</button>
            <button onClick={() => handleNavigate('/topic/review')} className="topic-button">Review</button>
            <button onClick={() => handleNavigate('/topic/walkthrough')} className="topic-button">Walkthrough</button>
            </div>
        </div>
    )
}
export default TopicSelect