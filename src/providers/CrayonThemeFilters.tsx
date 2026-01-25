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
				<filter id="crayon-texture" x="-5%" y="-5%" width="110%" height="110%">
					<feTurbulence
						type="fractalNoise"
						baseFrequency="0.9"
						numOctaves="4"
						seed="2"
						result="noise"
					/>
					<feDisplacementMap
						in="SourceGraphic"
						in2="noise"
						scale="2"
						xChannelSelector="R"
						yChannelSelector="G"
						result="displacement"
					/>
					<feGaussianBlur in="displacement" stdDeviation="0.3" result="blur" />
					<feComposite in="blur" in2="SourceGraphic" operator="in" />
				</filter>

				<filter id="crayon-edge" x="-5%" y="-5%" width="110%" height="110%">
					<feTurbulence
						type="fractalNoise"
						baseFrequency="0.8"
						numOctaves="3"
						seed="5"
						result="noise"
					/>
					<feDisplacementMap
						in="SourceGraphic"
						in2="noise"
						scale="1.5"
						xChannelSelector="R"
						yChannelSelector="G"
						result="displacement"
					/>
					<feGaussianBlur in="displacement" stdDeviation="0.2" result="blur" />
					<feComposite in="blur" in2="SourceGraphic" operator="in" />
				</filter>
			</defs>
		</svg>
	);
};
