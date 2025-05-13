/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1.5rem', 
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1440px', 
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))', 
        foreground: 'hsl(var(--foreground))', 
        primary: {
          DEFAULT: 'hsl(var(--primary))', // Blue
          foreground: 'hsl(var(--primary-foreground))', 
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))', // Green
          foreground: 'hsl(var(--secondary-foreground))', 
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))', // Purple
          foreground: 'hsl(var(--accent-foreground))',
        },
        highlight: { // Orange
          DEFAULT: 'hsl(var(--highlight))',
          foreground: 'hsl(var(--highlight-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))', 
          foreground: 'hsl(var(--muted-foreground))', 
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))', 
          foreground: 'hsl(var(--card-foreground))', 
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        xl: 'calc(var(--radius) + 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
        'fadeIn': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'fadeInUp': {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'slideInFromLeft': {
          '0%': { opacity: 0, transform: 'translateX(-30px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        'slideInFromRight': {
          '0%': { opacity: 0, transform: 'translateX(30px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 15px hsl(var(--primary) / 0.3), 0 0 30px hsl(var(--primary) / 0.2)' },
          '50%': { boxShadow: '0 0 25px hsl(var(--primary) / 0.4), 0 0 50px hsl(var(--primary) / 0.3)' },
        },
         'subtle-glow': {
          '0%, 100%': { filter: 'drop-shadow(0 0 3px hsl(var(--primary)/0.3))' },
          '50%': { filter: 'drop-shadow(0 0 6px hsl(var(--primary)/0.5))' },
        },
        'hero-bg-animation': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fadeIn': 'fadeIn 0.7s ease-out forwards',
        'fadeInUp': 'fadeInUp 0.7s ease-out forwards',
        'slideInFromLeft': 'slideInFromLeft 0.7s ease-out forwards',
        'slideInFromRight': 'slideInFromRight 0.7s ease-out forwards',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'subtle-glow': 'subtle-glow 4s ease-in-out infinite alternate',
        'hero-bg-animation': 'hero-bg-animation 20s ease infinite',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], 
        heading: ['Poppins', 'sans-serif'],
      },
      spacing: {
        'section-sm': '4rem',  
        'section-md': '6rem', 
        'section-lg': '8rem',  
        'element-sm': '1rem', 
        'element-md': '1.5rem',
        'element-lg': '2rem',
      },
      boxShadow: {
        'soft': '0 4px 15px hsla(var(--primary-hsl, 220 15% 12%) / 0.1), 0 2px 8px hsla(var(--primary-hsl, 220 15% 12%) / 0.08)',
        'medium': '0 8px 25px hsla(var(--primary-hsl, 220 15% 12%) / 0.15), 0 4px 12px hsla(var(--primary-hsl, 220 15% 12%) / 0.1)',
        'hard': '0 12px 35px hsla(var(--primary-hsl, 220 15% 12%) / 0.2), 0 6px 18px hsla(var(--primary-hsl, 220 15% 12%) / 0.15)',
        'glow-primary': '0 0 15px 0px hsl(var(--primary) / 0.5), 0 0 5px 0px hsl(var(--primary) / 0.7)',
        'glow-secondary': '0 0 15px 0px hsl(var(--secondary) / 0.5), 0 0 5px 0px hsl(var(--secondary) / 0.7)',
        'glow-accent': '0 0 15px 0px hsl(var(--accent) / 0.5), 0 0 5px 0px hsl(var(--accent) / 0.7)',
        'glow-highlight': '0 0 15px 0px hsl(var(--highlight) / 0.5), 0 0 5px 0px hsl(var(--highlight) / 0.7)',
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(135deg, hsl(var(--background)) 25%, transparent 25%), linear-gradient(225deg, hsl(var(--background)) 25%, transparent 25%)",
        'hero-gradient-pattern': "radial-gradient(circle at 10% 20%, hsl(var(--primary)/0.1) 0%, transparent 25%), radial-gradient(circle at 90% 80%, hsl(var(--secondary)/0.1) 0%, transparent 25%)",
        'dark-abstract-layers': "radial-gradient(ellipse at top left, hsl(var(--primary)/0.15) 0%, transparent 40%), radial-gradient(ellipse at bottom right, hsl(var(--secondary)/0.15) 0%, transparent 40%), linear-gradient(hsl(var(--background)), hsl(var(--background)))",
      },
      backgroundSize: {
        'hero-bg-size': '400% 400%',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};