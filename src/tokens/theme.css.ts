/**
 * Theme CSS - Backward compatibility exports
 *
 * 이 파일은 기존 코드와의 호환성을 위해 유지됩니다.
 * 새로운 코드는 semantic layer와 theme mapping layer를 직접 사용해야 합니다.
 */

// Semantic layer에서 themeContract re-export
export { themeContract, semanticTokens } from "./semantic";

// Primary 색상 CSS 변수 관련 - import와 re-export 모두 필요
import { PRIMARY_COLOR_CSS_VAR_NAMES } from "./utils/constants";
export { PRIMARY_COLOR_CSS_VAR_NAMES };

/**
 * Primary 색상을 위한 CSS 변수 참조 (vanilla-extract에서 사용)
 *
 * 참고: createVar()를 사용하지 않고 직접 var() 문자열을 사용하는 이유:
 * - 런타임 setProperty를 위해 변수 이름 문자열이 필요
 * - createVar()는 빌드 타임에만 작동하며 런타임 이름 추출이 복잡
 * - 하드코딩된 이름을 사용하면 런타임과 빌드 타임 모두에서 일관성 유지
 */
export const primaryColorVars = {
	surface: `var(${PRIMARY_COLOR_CSS_VAR_NAMES.surface})`,
	surfaceHover: `var(${PRIMARY_COLOR_CSS_VAR_NAMES.surfaceHover})`,
	surfaceActive: `var(${PRIMARY_COLOR_CSS_VAR_NAMES.surfaceActive})`,
	text: `var(${PRIMARY_COLOR_CSS_VAR_NAMES.text})`,
	border: `var(${PRIMARY_COLOR_CSS_VAR_NAMES.border})`,
	weak: `var(${PRIMARY_COLOR_CSS_VAR_NAMES.weak})`,
} as const;

// Backward compatibility: basic 테마를 lightTheme/darkTheme으로 export
// 기존 코드가 lightTheme, darkTheme을 사용하는 경우를 위해 유지
export {
	basicLightTheme as lightTheme,
	basicDarkTheme as darkTheme,
} from "./themes/basic.css";
