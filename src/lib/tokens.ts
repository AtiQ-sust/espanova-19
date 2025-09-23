// Design tokens for Espanova
// Keeping current brand colors while adding production-ready tokens

export const tokens = {
  // Typography scale (px)
  fontSize: {
    xs: '12px',
    sm: '14px', 
    base: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '30px',
    '4xl': '36px',
    '5xl': '48px',
    '6xl': '60px',
  },
  
  // Line heights
  lineHeight: {
    tight: '1.25',
    normal: '1.5',
    relaxed: '1.6',
  },
  
  // Container widths
  containers: {
    sm: '720px',
    md: '960px', 
    lg: '1200px',
  },
  
  // Spacing scale
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    '2xl': '4rem',
    '3xl': '6rem',
  },
  
  // Current brand colors (HSL values from index.css)
  colors: {
    primary: {
      DEFAULT: 'hsl(276 47% 34%)',
      mid: 'hsl(308 49% 41%)',
      light: 'hsl(334 72% 59%)',
      foreground: 'hsl(0 0% 100%)',
    },
    accent: {
      DEFAULT: 'hsl(41 85% 62%)',
      foreground: 'hsl(0 0% 0%)',
    },
    gold: {
      DEFAULT: 'hsl(41 85% 62%)',
      light: 'hsl(48 100% 67%)',  
      foreground: 'hsl(0 0% 0%)',
    },
    neutral: {
      50: 'hsl(0 0% 98%)',
      100: 'hsl(0 0% 96%)',
      200: 'hsl(0 0% 90%)',
      300: 'hsl(0 0% 83%)',
      400: 'hsl(0 0% 64%)',
      500: 'hsl(0 0% 45%)',
      600: 'hsl(0 0% 32%)',
      700: 'hsl(0 0% 25%)',
      800: 'hsl(0 0% 15%)',
      900: 'hsl(0 0% 9%)',
    },
  },
  
  // Gradients
  gradients: {
    primary: 'linear-gradient(135deg, hsl(276 47% 34%), hsl(308 49% 41%), hsl(334 72% 59%))',
    hero: 'linear-gradient(135deg, hsl(276 47% 34% / 0.95), hsl(308 49% 41% / 0.9))',
    card: 'linear-gradient(145deg, hsl(0 0% 100%), hsl(0 0% 98%))',
  },
  
  // Shadows
  shadows: {
    soft: '0 2px 20px hsl(276 47% 34% / 0.08)',
    medium: '0 8px 30px hsl(276 47% 34% / 0.12)',
    strong: '0 20px 60px hsl(276 47% 34% / 0.15)',
    glow: {
      primary: '0 0 40px hsl(276 47% 34% / 0.3)',
      gold: '0 0 30px hsl(41 85% 62% / 0.4)',
    },
  },
  
  // Border radius
  borderRadius: {
    sm: '0.5rem',
    md: '0.75rem',
    lg: '1rem',
    xl: '1.5rem',
    '2xl': '2rem',
  },
  
  // Transitions
  transitions: {
    default: 'all 0.2s ease-in-out',
    smooth: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    bounce: 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },
} as const;

export type Tokens = typeof tokens;
