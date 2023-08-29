import React, { useState } from "react";
// import {Header} from "../../components/Header/Header";
import {Header, headerProps} from "@baseComponents/Header"
import "./styles.css"

interface Notification {
    title: string;
    body: string;
}

// interface NotificationMenu {
//     notifications: Array<Notification>;

// }

export const NotificationMenu = () => {
    let headerProperties: headerProps = {
        height: "50px",
        color: "red"
    }
    return (
	    <div className="sasuke">
            <Header {...headerProperties}/>
        </div>
    )
}