export const radius = {
	none: "0px",
	small: "8px",
	medium: "16px",
	large: "24px",
	xlarge: "32px",
	full: "100%",
} as const;

export type RadiusToken = keyof typeof radius;


