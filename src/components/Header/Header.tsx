import React, { useState } from "react";
import "./styles.css"
import { Button, buttonProps } from "@baseComponents/Button";
import { ArrowBack } from 'react-ionicons'


export interface headerProps {
    height: string;
    color: string;
}
let buttonProperties: buttonProps = {
    size: "25px",
    color: "blue",
    icon: <ArrowBack style={
        {
            width: "15px",
            height: "15px"
        }
    }/>
}


export const Header = (props:headerProps) => {
    return (
	    <div
            className="header"
            style={{height: props.height, backgroundColor: props.color}}
         >
            <Button {...buttonProperties} />
        </div>
    )
}