import { useEffect } from "react";

/**
 * Game Theme - Google Fonts Loader
 * Press Start 2P 폰트를 자동으로 로드합니다.
 */
export const GameFontLoader = () => {
	useEffect(() => {
		// 이미 로드되었는지 확인
		const existingLink = document.querySelector(
			'link[href*="Press+Start+2P"]'
		);

		if (existingLink) {
			return;
		}

		// Google Fonts 링크 생성
		const link = document.createElement("link");
		link.href =
			"https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap";
		link.rel = "stylesheet";
		link.crossOrigin = "anonymous";

		// head에 추가
		document.head.appendChild(link);

		// cleanup 함수 (필요시 제거)
		return () => {
			// 다른 곳에서 사용 중일 수 있으므로 제거하지 않음
			// 필요시 여기서 제거 로직 추가 가능
		};
	}, []);

	return null;
};
