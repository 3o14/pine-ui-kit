import { type StyleRule } from "@vanilla-extract/css";

/**
 * Extract SelectorMap type from StyleRule
 * (SelectorMap is not exported from @vanilla-extract/css)
 */
export type SelectorMap = NonNullable<StyleRule["selectors"]>;
