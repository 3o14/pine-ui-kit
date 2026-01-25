// Foundation layer exports
export * from "./foundation";

// Semantic layer exports
export * from "./semantic";

// Theme mapping layer exports
export * from "./themes";

// Backward compatibility: 기존 exports 유지
export * from "./colors";
// typography, spacing, radius, shadow는 foundation에서 이미 export됨
export * from "./appearanceTheme";
export * from "./theme.css";

import "./global.css";
import "./crayon.css";