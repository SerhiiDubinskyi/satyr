import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { HeartOutline } from 'react-ionicons'
// import { dot } from "./types/popup_types"

import "./popup.css";

interface dotIcon {
	iconSize: string;
	iconTransition: string;
	// color: string;
	// filter: string;
  }

//background #333849
const Popup = () => {
	const [dotPosition, setDotPosition] = useState<number>(12);
	const [dotSize, setDotSize] = useState<number>(7);
	const [dotBackground, setDotBackground] = useState<string>("white");
	const [iconSize, setIconProps] = useState<dotIcon>({iconSize: "0px", iconTransition: "0.9s"});
	const [hoveredDot, setHoveredDot] = useState<number | null>(null);

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
		// setIconProps(
		// 	{
		// 		iconSize: "30px",
		// 		iconTransition: "1.6s",
		// 		color: "#2dfc52",
		// 		filter: "drop-shadow(0px 0px 2px #2dfc52) drop-shadow(0px 0px 5px #2dfc52) drop-shadow(0px 0px 15px #2dfc52)" 
				
		// 	}
		// );
	}
	const onDotLeave = ():void => {
		setHoveredDot(null);
		// setIconProps(
		// 	{
		// 		iconSize: "30px",
		// 		iconTransition: "1.6s",
		// 		color: "white",
		// 		filter: "none" 
				
		// 	}
		// );
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
			{dotCoords.map((innerArray, index) => (
			<span
				onMouseEnter={() => onDotHover(index)}
				onMouseLeave={onDotLeave}
				key={index}
				className="navigationDot"
				style={
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
							filter: `${hoveredDot === index ? "drop-shadow(0px 0px 2px #2dfc52) drop-shadow(0px 0px 5px #2dfc52) drop-shadow(0px 0px 15px #2dfc52)" : "none"}`
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
