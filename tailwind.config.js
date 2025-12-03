/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        emerald: {
          50: '#f4fdf6',
          100: '#eefcf1',
          200: '#dcf9e3',
          300: '#bbf2c8',
          400: '#8ce9a0',
          500: '#5de075', // Lighter
          600: '#4cd964', // Brand Color (Primary Action)
          700: '#3dae50', // Darker (Hover)
          800: '#328e42',
          900: '#297436',
          950: '#153d1c',
        },
        border: 'var(--color-border)', // gray-300
        input: 'var(--color-input)', // gray-300
        ring: 'var(--color-ring)', // green-800
        background: 'var(--color-background)', // gray-50
        foreground: 'var(--color-foreground)', // gray-900
        primary: {
          DEFAULT: 'var(--color-primary)', // green-800
          foreground: 'var(--color-primary-foreground)', // white
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)', // blue-800
          foreground: 'var(--color-secondary-foreground)', // white
        },
        destructive: {
          DEFAULT: 'var(--color-destructive)', // red-700
          foreground: 'var(--color-destructive-foreground)', // white
        },
        muted: {
          DEFAULT: 'var(--color-muted)', // gray-100
          foreground: 'var(--color-muted-foreground)', // gray-600
        },
        accent: {
          DEFAULT: 'var(--color-accent)', // orange-700
          foreground: 'var(--color-accent-foreground)', // white
        },
        popover: {
          DEFAULT: 'var(--color-popover)', // white
          foreground: 'var(--color-popover-foreground)', // gray-900
        },
        card: {
          DEFAULT: 'var(--color-card)', // white
          foreground: 'var(--color-card-foreground)', // gray-900
        },
        success: {
          DEFAULT: 'var(--color-success)', // green-700
          foreground: 'var(--color-success-foreground)', // white
        },
        warning: {
          DEFAULT: 'var(--color-warning)', // orange-600
          foreground: 'var(--color-warning-foreground)', // white
        },
        error: {
          DEFAULT: 'var(--color-error)', // red-700
          foreground: 'var(--color-error-foreground)', // white
        },
        brand: {
          primary: 'var(--color-brand-primary)', // green-500
          secondary: 'var(--color-brand-secondary)', // blue-500
          accent: 'var(--color-brand-accent)', // orange-500
          dark: 'var(--color-brand-dark)', // gray-950
        },
        text: {
          primary: 'var(--color-text-primary)', // gray-800
          secondary: 'var(--color-text-secondary)', // gray-500
        },
      },
      fontFamily: {
        headline: ['Poppins', 'sans-serif'],
        body: ['Poppins', 'sans-serif'],
        cta: ['Poppins', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontWeight: {
        headline: '700',
        'headline-medium': '600',
        body: '400',
        'body-medium': '500',
        cta: '500',
        'cta-bold': '600',
      },
      borderRadius: {
        lg: "var(--radius-base)",
        md: "calc(var(--radius-base) - 2px)",
        sm: "calc(var(--radius-base) - 4px)",
      },
      spacing: {
        'base': 'var(--spacing-base)',
      },
      boxShadow: {
        'card': 'var(--shadow-card)',
        'modal': 'var(--shadow-modal)',
        'hover': 'var(--shadow-hover)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "pulse-subtle": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "slide-in-left": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "scale-in": {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-subtle": "pulse-subtle 2s ease-in-out infinite",
        "slide-in-right": "slide-in-right 0.3s ease-out",
        "slide-in-left": "slide-in-left 0.3s ease-out",
        "fade-in": "fade-in 0.3s ease-in-out",
        "scale-in": "scale-in 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0.0, 0.2, 1)',
      },
      transitionDuration: {
        'smooth': '220ms',
      },
    },
  },
  plugins: [],
}