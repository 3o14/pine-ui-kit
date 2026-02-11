"use client";

import React from "react";

export const CrayonThemeFilters: React.FC = () => {
	return (
		<svg
			className="crayon-filter"
			style={{
				position: "absolute",
				width: 0,
				height: 0,
				pointerEvents: "none",
			}}
			xmlns="http://www.w3.org/2000/svg"
		>
			<defs>
				<filter id="crayon-bumpy" x="-10%" y="-10%" width="120%" height="120%">
					<feTurbulence
						type="fractalNoise"
						baseFrequency="0.08"
						numOctaves="3"
						seed="2"
						result="noise"
					/>
					<feDisplacementMap
						in="SourceGraphic"
						in2="noise"
						scale="2.5"
						xChannelSelector="R"
						yChannelSelector="G"
						result="displacement"
					/>
				</filter>
			</defs>
		</svg>
	);
};
