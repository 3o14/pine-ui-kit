/**
 * Game Theme - Google Fonts import
 * Press Start 2P 폰트를 로드합니다.
 * 
 * 사용법:
 * import "@pine-ui-kit/tokens/game.css";
 * 또는
 * import "@pine-ui-kit/tokens/game";
 */

import { globalStyle } from "@vanilla-extract/css";

// Google Fonts import를 위한 global style
// vanilla-extract는 @import를 직접 지원하지 않으므로,
// 빌드된 CSS에 @import가 포함되도록 처리합니다.
globalStyle(":root", {
	// @import는 빌드 시점에 처리되어야 하므로,
	// 실제로는 사용자가 HTML head에 추가해야 합니다.
	// 이 파일은 game 테마 사용을 위한 플레이스홀더입니다.
});
