export type ColorIntent =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'neutral';

export type ColorState = 'surface' | 'surfaceHover' | 'surfaceActive' | 'text' | 'border';

export type ColorScale = Record<ColorState, string>;

export type SurfaceTokenSet = {
  background: string;
  backgroundElevated: string;
  outline: string;
  text: string;
  textMuted: string;
  divider: string;
};

export type ColorTokens = {
  palette: Record<ColorIntent, ColorScale>;
  surface: SurfaceTokenSet;
};

const lightPalette: Record<ColorIntent, ColorScale> = {
  primary: {
    surface: '#2563eb',
    surfaceHover: '#1d4ed8',
    surfaceActive: '#1e40af',
    text: '#ffffff',
    border: '#1d4ed8',
  },
  secondary: {
    surface: '#475569',
    surfaceHover: '#334155',
    surfaceActive: '#1f2937',
    text: '#ffffff',
    border: '#334155',
  },
  success: {
    surface: '#16a34a',
    surfaceHover: '#15803d',
    surfaceActive: '#166534',
    text: '#ffffff',
    border: '#15803d',
  },
  warning: {
    surface: '#facc15',
    surfaceHover: '#eab308',
    surfaceActive: '#ca8a04',
    text: '#0f172a',
    border: '#eab308',
  },
  danger: {
    surface: '#ef4444',
    surfaceHover: '#dc2626',
    surfaceActive: '#b91c1c',
    text: '#ffffff',
    border: '#dc2626',
  },
  neutral: {
    surface: '#e2e8f0',
    surfaceHover: '#cbd5f5',
    surfaceActive: '#94a3b8',
    text: '#0f172a',
    border: '#cbd5f5',
  },
};

const darkPalette: Record<ColorIntent, ColorScale> = {
  primary: {
    surface: '#3b82f6',
    surfaceHover: '#2563eb',
    surfaceActive: '#1d4ed8',
    text: '#0b1120',
    border: '#2563eb',
  },
  secondary: {
    surface: '#64748b',
    surfaceHover: '#475569',
    surfaceActive: '#334155',
    text: '#0b1120',
    border: '#475569',
  },
  success: {
    surface: '#22c55e',
    surfaceHover: '#16a34a',
    surfaceActive: '#15803d',
    text: '#0b1120',
    border: '#16a34a',
  },
  warning: {
    surface: '#fde047',
    surfaceHover: '#facc15',
    surfaceActive: '#eab308',
    text: '#0b1120',
    border: '#facc15',
  },
  danger: {
    surface: '#f87171',
    surfaceHover: '#ef4444',
    surfaceActive: '#dc2626',
    text: '#0b1120',
    border: '#ef4444',
  },
  neutral: {
    surface: '#1e293b',
    surfaceHover: '#334155',
    surfaceActive: '#475569',
    text: '#e2e8f0',
    border: '#334155',
  },
};

const lightSurface: SurfaceTokenSet = {
  background: '#ffffff',
  backgroundElevated: '#f8fafc',
  outline: '#cbd5f5',
  text: '#0f172a',
  textMuted: '#475569',
  divider: 'rgba(15, 23, 42, 0.08)',
};

const darkSurface: SurfaceTokenSet = {
  background: '#0b1120',
  backgroundElevated: '#111827',
  outline: '#1e293b',
  text: '#e2e8f0',
  textMuted: '#94a3b8',
  divider: 'rgba(148, 163, 184, 0.24)',
};

export const lightColors: ColorTokens = {
  palette: lightPalette,
  surface: lightSurface,
};

export const darkColors: ColorTokens = {
  palette: darkPalette,
  surface: darkSurface,
};

export const colors = {
  light: lightColors,
  dark: darkColors,
};

export type ColorMode = keyof typeof colors;


