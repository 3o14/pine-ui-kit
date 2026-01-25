export const shadow = {
	none: "none",
	xs: "0 1px 2px rgba(15, 23, 42, 0.08)",
	sm: "0 1px 3px rgba(15, 23, 42, 0.12), 0 1px 2px rgba(15, 23, 42, 0.08)",
	md: "0 4px 6px -1px rgba(15, 23, 42, 0.12), 0 2px 4px -2px rgba(15, 23, 42, 0.1)",
	lg: "0 10px 15px -3px rgba(15, 23, 42, 0.18), 0 4px 6px -4px rgba(15, 23, 42, 0.12)",
	xl: "0 20px 25px -5px rgba(15, 23, 42, 0.2), 0 10px 10px -5px rgba(15, 23, 42, 0.12)",
} as const;

export type FoundationShadowToken = keyof typeof shadow;
