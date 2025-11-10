export type FontWeightToken = 'regular' | 'medium' | 'semibold' | 'bold';

export type FontSizeToken =
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'display-sm'
  | 'display-md'
  | 'display-lg';

export const fontFamily = {
  sans:
    "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
  mono: "'Roboto Mono', 'SFMono-Regular', Menlo, Monaco, Consolas, 'Liberation Mono', monospace",
} as const;

export const fontWeight: Record<FontWeightToken, number> = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
};

export const fontSize: Record<FontSizeToken, string> = {
  xs: '0.75rem',
  sm: '0.875rem',
  md: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  'display-sm': '1.5rem',
  'display-md': '1.875rem',
  'display-lg': '2.25rem',
};

export const lineHeight: Record<FontSizeToken, number> = {
  xs: 1.4,
  sm: 1.45,
  md: 1.5,
  lg: 1.55,
  xl: 1.6,
  'display-sm': 1.3,
  'display-md': 1.25,
  'display-lg': 1.2,
};


