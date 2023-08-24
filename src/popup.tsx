import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./popup.css";
//background #333849
const Popup = () => {
	const [dotPosition, setDotPosition] = useState<number>(12);
	const [dotSize, setDotSize] = useState<number>(7);
	const [dotBackground, setDotBackground] = useState<string>("white");

	const onNavigationHover = ():void => {
		setDotPosition(60);
		setDotSize(45);
		setDotBackground("#333849");
		console.log("hover")
		console.log(dotPosition)

  	}
	const onNavigationLeave = ():void => {
		setDotPosition(12);
		setDotSize(7)
		setDotBackground("white");
		console.log("unhover")
		console.log(dotPosition)
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
			key={innerArray[0]}
			className="navigationDot"
			style={
				{
					transform: `translate(calc(${dotPosition}px * ${innerArray[1]}), calc(${dotPosition}px * ${innerArray[2]}))`,
					transitionDelay: `${index * 0.1}s`,
					background: `${dotBackground}`,
					width: `${dotSize}px`,
					height: `${dotSize}px`,
				}
			}></span>
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
