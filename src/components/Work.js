import React from "react";
import './Work.css'

import CustomButton from "./CustomButton";

const Work = (props) => {

    const workName = props.workName
    const workDescription = props.workDescription
    const workImageUrl = props.workImageUrl

    return (
        <div className="work-container">
            <div className="img-container">
                <img src={workImageUrl} alt="work-img"></img>
            </div>
            <h2>{workName}</h2>
            <p>{workDescription}</p>
            <CustomButton variant="common" >Know more</CustomButton>
        </div>
    )
}


export default Work