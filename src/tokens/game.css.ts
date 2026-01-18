/**
 * Game Theme - DungGeunMo 폰트 로드
 * 로컬 폰트 파일 DungGeunMo.woff2를 사용합니다.
 * 
 * 사용법:
 * import "@pine-ui-kit/tokens/game.css";
 * 또는
 * import "@pine-ui-kit/tokens/game";
 */

import { globalFontFace } from "@vanilla-extract/css";

// DungGeunMo 폰트 @font-face 선언
// public 폴더의 파일은 빌드 시 루트로 복사되므로 /font/DungGeunMo.woff2 경로 사용
globalFontFace("DungGeunMo", {
	src: 'url("/font/DungGeunMo.woff2") format("woff2")',
	fontWeight: "normal",
	fontStyle: "normal",
	fontDisplay: "swap",
});
