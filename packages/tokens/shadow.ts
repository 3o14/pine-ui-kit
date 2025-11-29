export const shadow = {
	none: "none",
	xsmall: "0 1px 2px rgba(15, 23, 42, 0.08)",
	small: "0 1px 3px rgba(15, 23, 42, 0.12), 0 1px 2px rgba(15, 23, 42, 0.08)",
	medium: "0 4px 6px -1px rgba(15, 23, 42, 0.12), 0 2px 4px -2px rgba(15, 23, 42, 0.1)",
	large: "0 10px 15px -3px rgba(15, 23, 42, 0.18), 0 4px 6px -4px rgba(15, 23, 42, 0.12)",
	xlarge: "0 20px 25px -5px rgba(15, 23, 42, 0.2), 0 10px 10px -5px rgba(15, 23, 42, 0.12)",
} as const;

export type ShadowToken = keyof typeof shadow;


