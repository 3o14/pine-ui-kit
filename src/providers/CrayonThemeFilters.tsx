"use client";

import React from "react";

/**
 * CrayonThemeFilters - 크레용 테마용 SVG 필터를 주입하는 컴포넌트
 * 
 * 크레용 질감 효과를 위한 SVG 필터를 정의합니다.
 * 이 컴포넌트는 크레용 테마가 활성화될 때만 렌더링되어야 합니다.
 */
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
				{/* 크레용 텍스처 필터 - solid 버튼용 */}
				<filter id="crayon-texture" x="-5%" y="-5%" width="110%" height="110%">
					{/* 거친 질감 */}
					<feTurbulence
						type="fractalNoise"
						baseFrequency="0.9"
						numOctaves="4"
						seed="2"
						result="noise"
					/>
					{/* 가장자리 흔들림 효과 */}
					<feDisplacementMap
						in="SourceGraphic"
						in2="noise"
						scale="2"
						xChannelSelector="R"
						yChannelSelector="G"
						result="displacement"
					/>
					{/* 약간의 블러로 크레용 느낌 */}
					<feGaussianBlur
						in="displacement"
						stdDeviation="0.3"
						result="blur"
					/>
					<feComposite in="blur" in2="SourceGraphic" operator="in" />
				</filter>

				{/* 크레용 엣지 필터 - outline/ghost 버튼용 */}
				<filter id="crayon-edge" x="-5%" y="-5%" width="110%" height="110%">
					{/* 테두리용 경미한 텍스처 */}
					<feTurbulence
						type="fractalNoise"
						baseFrequency="0.6"
						numOctaves="2"
						seed="5"
						result="noise"
					/>
					{/* 약한 변위 효과 */}
					<feDisplacementMap
						in="SourceGraphic"
						in2="noise"
						scale="1"
						xChannelSelector="R"
						yChannelSelector="G"
						result="displacement"
					/>
					<feComposite in="displacement" in2="SourceGraphic" operator="in" />
				</filter>
			</defs>
		</svg>
	);
};
