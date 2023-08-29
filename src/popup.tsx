import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { HeartOutline } from 'react-ionicons'
import { NotificationMenu } from "./popupMenus/notificationMenu/notificationMenu";
import { Header } from "./components/Header/Header";

import "./popup.css";

interface dotIcon {
	iconSize: string;
	iconTransition: string;
	// color: string;
	// filter: string;
	}
interface dotProps {
	dotPosition: number;
	dotSize: number;
	dotBackground: string;
}


//background #333849
const Popup = () => {
	const [dotPosition, setDotPosition] = useState<number>(12);
	const [dotSize, setDotSize] = useState<number>(7);
	const [dotBackground, setDotBackground] = useState<string>("white");
	const [iconSize, setIconProps] = useState<dotIcon>({iconSize: "0px", iconTransition: "0.9s"});
	const [hoveredDot, setHoveredDot] = useState<number | null>(null);
	const [expandedDot, setExpandedDot] = useState<number | null>(null);

	const onNavigationHover = ():void => {
		setDotPosition(60);
		setDotSize(45);
		setDotBackground("#333849");
		setIconProps({iconSize: "30px", iconTransition: "1.2s"});

  	}
	const onNavigationLeave = ():void => {
		setDotPosition(12);
		setDotSize(7)
		setDotBackground("white");
		setIconProps({iconSize: "0px", iconTransition: "0.5s"});
	}

	const onDotHover = (idx: number):void => {
		setHoveredDot(idx);
	}
	const onDotLeave = ():void => {
		setHoveredDot(null);
	}
	const onDotClick = (idx: number):void => {
		setExpandedDot(idx);
	}

const dotCoords = [ 
	[0, -1, 0],
	[1, 1, 0],
	[2, 0, -1],
	[3, 0, 1],
	[4, 1, 1],
	[5, -1, -1],
	[6, 0, 0],
	[7, -1, 1],
	[8, 1, -1],
]
  return (
	<div 
		className="popupNavigation"
		onMouseEnter={onNavigationHover}
		onMouseLeave={onNavigationLeave}
	>
		<NotificationMenu/>
		{/* <Header/> */}
			{dotCoords.map((innerArray, index) => (
			<span
				onMouseEnter={() => onDotHover(index)}
				onMouseLeave={onDotLeave}
				onClick={() => onDotClick(index)}
				key={index}
				className={`navigationDot ${expandedDot === index ? 'expanded' : ''}`}
				style={ index === expandedDot ? {} :
					{
						transform: `translate(calc(${dotPosition}px * ${innerArray[1]}), calc(${dotPosition}px * ${innerArray[2]}))`,
						transitionDelay: `${index * 0.1}s`,
						background: `${dotBackground}`,
						width: `${dotSize}px`,
						height: `${dotSize}px`,
					}
				
			}>
				<HeartOutline
					height={iconSize.iconSize}
				  	width={iconSize}
					color="white"
					key={index}
					style={
						{
							transitionDelay: `${index * 0.1}s`,
							transition: `${iconSize.iconTransition}`,
							filter: `${hoveredDot === index ? "drop-shadow(0px 0px 2px #2dfc52) drop-shadow(0px 0px 5px #2dfc52) drop-shadow(0px 0px 15px #2dfc52)" : "none"}`,

							display: `${expandedDot === index ? "none" : "block"}`,
						}
					}
				/>
			</span>
			))}
	</div>
  )
}
const root = createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>
);
