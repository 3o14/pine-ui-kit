import { useEffect } from "react";

export const GameFontLoader = () => {
	useEffect(() => {
		const existingLink = document.querySelector(
			'link[href*="Press+Start+2P"]'
		);

		if (existingLink) {
			return;
		}

		const link = document.createElement("link");
		link.href =
			"https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap";
		link.rel = "stylesheet";
		link.crossOrigin = "anonymous";

		document.head.appendChild(link);

		return () => {
		};
	}, []);

	return null;
};
