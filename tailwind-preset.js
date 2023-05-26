/* eslint-disable @typescript-eslint/no-var-requires */
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
  theme: {
    colors: {
      ...colors,
      primary: {
        50: '#eff2fd',
        100: '#dde3fb',
        200: '#b8c6f6',
        300: '#94a9f1',
        400: '#708bed',
        500: '#4c6ee8',
        600: '#1d47df',
        700: '#1637ae',
        800: '#10277c',
        900: '#0a184a',
      },
      neutral: {
        50: '#fafafa',
        100: '#f5f5f5',
        200: '#e5e5e5',
        300: '#d4d4d4',
        400: '#a3a3a3',
        500: '#737373',
        600: '#525252',
        700: '#404040',
        800: '#262626',
        900: '#171717',
      },
      warning: {
        50: '#fefce8',
        100: '#fef9c3',
        200: '#fef08a',
        300: '#fde047',
        400: '#facc15',
        500: '#eab308',
        600: '#ca8a04',
        700: '#a16207',
        800: '#854d0e',
        900: '#713f12',
      },
      critical: {
        50: '#fef2f2',
        100: '#fee2e2',
        200: '#fecaca',
        300: '#fca5a5',
        400: '#f87171',
        500: '#ef4444',
        600: '#dc2626',
        700: '#b91c1c',
        800: '#991b1b',
        900: '#7f1d1d',
      },
      success: {
        50: '#f0fdf4',
        100: '#dcfce7',
        200: '#bbf7d0',
        300: '#86efac',
        400: '#4ade80',
        500: '#22c55e',
        600: '#16a34a',
        700: '#15803d',
        800: '#166534',
        900: '#14532d',
      },
      informative: {
        50: '#eff6ff',
        100: '#dbeafe',
        200: '#bfdbfe',
        300: '#93c5fd',
        400: '#60a5Fa',
        500: '#3b82f6',
        600: '#2563eb',
        700: '#1d4ed8',
        800: '#1e40af',
        900: '#1e3a8a',
      },
    },
    extend: {
      spacing: {
        '1.5-1px': 'calc(0.375rem - 1px)',
        '2-1px': 'calc(0.5rem - 1px)',
        '2.5-1px': 'calc(0.625rem - 1px)',
        '3-1px': 'calc(0.75rem - 1px)',
        '4-1px': 'calc(1rem - 1px)',
        '6-1px': 'calc(1.5rem - 1px)',
        '8-1px': 'calc(2rem - 1px)',
      },
      outlineOffset: {
        '-2': '-2px',
      },
      boxShadow: {
        dialog:
          '0px 4px 3px rgba(0, 0, 0, 0.07), 0px 2px 2px rgba(0, 0, 0, 0.06)',
      },
      lineHeight: {
        12: '3rem',
      },
    },
  },
}
