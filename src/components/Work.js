import React from "react";
import './Work.css'

import CustomButton from "./CustomButton";

const Work = (props) => {

    const workName = props.workName
    const workDescription = props.workDescription
    const workImageUrl = props.workImageUrl
    const githubUrl = props.githubUrl
    const id = props.id
    const navigateToLink = () => {
        var link = githubUrl;

        window.location.href = link;
    }

    return (
        <div className="work-container" id={id}>
            <div className="content">
                <div className="img-container">
                    <img src={workImageUrl} alt="work-img"></img>
                </div>
                <h2>{workName}</h2>
                <p>{workDescription}</p>
                <CustomButton variant="common" onClick={navigateToLink}>Know more</CustomButton>
            </div>
            <div className="content-mobile">
                <div className="img-container">
                    <img src={workImageUrl} alt="work-img"></img>
                </div>
                <div className="info">
                    <h2>{workName}</h2>
                    <p>{workDescription}</p>
                    <CustomButton variant="common" onClick={navigateToLink}>Know more</CustomButton>
                </div>
            </div>
        </div>
    )
}


export default Work