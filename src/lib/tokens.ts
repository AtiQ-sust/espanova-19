// Design Tokens for Espanova
export const tokens = {
  // Colors
  colors: {
    primary: '#0D6EFD',
    success: '#16a34a', 
    warning: '#f59e0b',
    danger: '#ef4444',
    slate: {
      900: '#0f172a',
      800: '#1e293b', 
      700: '#334155',
      600: '#64748b',
      500: '#94a3b8',
      400: '#cbd5e1',
      300: '#e2e8f0',
      200: '#f1f5f9',
      100: '#f8fafc',
    }
  },

  // Typography Scale
  typography: {
    fontSize: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px 
      base: '1rem',     // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
      '2xl': '1.5rem',  // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem', // 36px
      '5xl': '3rem',    // 48px
      '6xl': '3.75rem', // 60px
    },
    lineHeight: {
      tight: 1.1,  // Headings
      body: 1.6,   // Body text
    }
  },

  // Container Widths
  containers: {
    xl: '1200px',
    lg: '960px', 
    md: '720px',
  },

  // Spacing & Layout
  spacing: {
    section: {
      sm: '2rem',
      md: '4rem', 
      lg: '6rem',
    }
  },

  // Border Radius
  radius: {
    sm: '0.5rem',
    md: '0.75rem',
    lg: '1rem',
    xl: '1.5rem',
  }
} as const;

export type Tokens = typeof tokens;