export const radius = {
  none: '0px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  full: '100%',
} as const;

export type RadiusToken = keyof typeof radius;


