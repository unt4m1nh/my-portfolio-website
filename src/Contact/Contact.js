import React from "react";

import "./Contact.css"

import CustomButton from "../components/CustomButton";

function Contact() {
    return (
        <div className="contact-container">
            <div className="heading">
                <h1>Get in touch</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse arcu magna, tincidunt quis sagittis bibendum, scelerisque in turpis.
                </p>
            </div>
            <form className="contact-form">
                <div className="input-form">
                    <p>Email</p>
                    <input placeholder="Please enter your email"></input>
                </div>
                <div className="input-form">
                    <p>Mobile</p>
                    <input placeholder="Enter mobile"></input>
                </div>
                <div className="input-form-large">
                    <p>Message</p>
                    <input placeholder="Enter your message"></input>
                </div>
                <CustomButton size="extra" variant="common">Submit </CustomButton>
            </form>
            <div className="footer">
                <p>Made with love 💝 </p>
            </div>
        </div>
    )
}

export default Contact