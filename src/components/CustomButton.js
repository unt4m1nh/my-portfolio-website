import React from "react";
import styled from "styled-components";
import './CustomButton.css'

const CustomButton = ({ size, type, variant, className, id, onClick, children }) => {

    const ButtonComponent = styled.button`
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        background-color: ${(props) => props.variant === "common" ? "#3F8E00" : props.variant === "default" ? "#fff" : "#fff"};
        color: ${(props) => props.variant === "common" ? "#ffffff" : props.variant === "default" ? "#ffffff" : "#ffffff"};
        box-shadow: ${(props) => props.variant === "common" ? "0px 8px 30px 0px rgba(63, 142, 0, 0.50)" : props.variant === "default" ? "#ffffff" : "#ffffff"}; 
        width: ${(props) =>
            props.size === "extra" ? "350px" : 
            props.size === "large" ? "307px" : 
            props.size === "default" ? "190px" : "190px"};
        height: ${(props) => props.size === "large" || props.size === "extra" ? "63px" : props.size === "default" ? "38px" : "38px"};
        &:hover {
            background-color: ${(props) => props.variant === "common" ? "#fff" : props.variant === "default" ? "#fff" : "#fff"};
            color: ${(props) => props.variant === "common" ? "#3F8E00" : props.variant === "default" ? "#ffffff" : "#ffffff"};
        }
    `;

    return (
        <ButtonComponent
            type={type ? type : "button"}
            variant={variant}
            size={size}
            id={id}
            onClick={onClick}
            className={className ? `btn ${className}` : "btn"}
        >
            {children}
        </ButtonComponent>
    )
}


export default CustomButton