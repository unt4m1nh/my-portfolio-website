import React from "react";

import "./Skills.css"

import cpp from "../img/cpp.jpg"
import web from "../img/web.jpg"
import mobile from "../img/mobile.jpg"

function Skills() {
    return (
        <div className="skills-container">
            <div className="heading">
                <h1>My Skills</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse arcu magna, tincidunt quis sagittis bibendum, scelerisque in turpis. Sed eu arcu odio. Maecenas semper eleifend odio, nec venenatis quam volutpat eu. Cras interdum tortor erat, sed pretium massa fringilla vel. Cras eget nisl laoreet nulla venenatis condimentum nec a neque
                </p>
            </div>
            <div className="work">
                <div className="work-info">
                    <h2>Work name here</h2>
                    <p className="work-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse arcu magna, tincidunt quis sagittis bibendum, scelerisque in turpis. Sed eu arcu odio. Maecenas semper eleifend odio, nec venenatis quam volutpat eu. Cras interdum tortor erat, sed pretium massa fringilla vel. Cras eget nisl laoreet nulla venenatis condimentum nec a neque
                    </p>
                </div>
                <div className="work-img">
                    <img src={web} alt="work-img"></img>
                </div>
            </div>
            <div className="work">
                <div className="work-img">
                    <img src={mobile} alt="work-img"></img>
                </div>
                <div className="work-info">
                    <h2>Work name here</h2>
                    <p className="work-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse arcu magna, tincidunt quis sagittis bibendum, scelerisque in turpis. Sed eu arcu odio. Maecenas semper eleifend odio, nec venenatis quam volutpat eu. Cras interdum tortor erat, sed pretium massa fringilla vel. Cras eget nisl laoreet nulla venenatis condimentum nec a neque
                    </p>
                </div>
            </div>
            <div className="work">
                <div className="work-info">
                    <h2>Work name here</h2>
                    <p className="work-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse arcu magna, tincidunt quis sagittis bibendum, scelerisque in turpis. Sed eu arcu odio. Maecenas semper eleifend odio, nec venenatis quam volutpat eu. Cras interdum tortor erat, sed pretium massa fringilla vel. Cras eget nisl laoreet nulla venenatis condimentum nec a neque
                    </p>
                </div>
                <div className="work-img">
                    <img src={cpp} alt="work-img"></img>
                </div>
            </div>
        </div>
    )
}

export default Skills