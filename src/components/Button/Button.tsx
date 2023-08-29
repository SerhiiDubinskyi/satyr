import React, { useState } from "react";
import "./styles.css"

export interface buttonProps {
    size: string; // "10px", "20px", "30px ..."
    color: string; // "red", "blue", "green" ...
    icon: React.ReactNode
}

export const Button = (props:buttonProps) => {
    const parentColor = getComputedStyle(document.documentElement).getPropertyValue('--parent-color');
    return (
	    <div
            className="baseButton"
            style={{
                height: props.size,
                width: props.size,
                backgroundColor: props.color
            }}
         >
            {props.icon}
        </div>
    )
}