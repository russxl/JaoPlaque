'use client'

import React, { createContext, useContext, useState, useEffect } from 'react';

interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
}

interface ThemeConfig {
  colors: ThemeColors;
  fonts: {
    heading: string;
    body: string;
  };
}

interface ThemeContextType {
  theme: ThemeConfig;
  updateTheme: (newTheme: ThemeConfig) => void;
}

const defaultTheme: ThemeConfig = {
  colors: {
    primary: '#000000',
    secondary: '#4A5568',
    accent: '#3182CE',
    background: '#FFFFFF',
    text: '#1A202C',
  },
  fonts: {
    heading: 'Geist',
    body: 'Geist',
  },
};

const ThemeContext = createContext<ThemeContextType>({
  theme: defaultTheme,
  updateTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeConfig>(defaultTheme);

  useEffect(() => {
    // Load theme from localStorage on initial mount
    const savedTheme = localStorage.getItem('siteTheme');
    if (savedTheme) {
      try {
        setTheme(JSON.parse(savedTheme));
      } catch (error) {
        console.error('Error loading theme:', error);
      }
    }
  }, []);

  const updateTheme = (newTheme: ThemeConfig) => {
    setTheme(newTheme);
    localStorage.setItem('siteTheme', JSON.stringify(newTheme));
  };

  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      <div style={{ 
        '--primary-color': theme.colors.primary,
        '--secondary-color': theme.colors.secondary,
        '--accent-color': theme.colors.accent,
        '--background-color': theme.colors.background,
        '--text-color': theme.colors.text,
        '--heading-font': theme.fonts.heading,
        '--body-font': theme.fonts.body,
      } as React.CSSProperties}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);

export type { ThemeConfig, ThemeColors }; 