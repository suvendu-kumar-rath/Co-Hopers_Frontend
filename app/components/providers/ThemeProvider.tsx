'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  resetToSystemTheme: () => void;
  isSystemTheme: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);
  const [isSystemTheme, setIsSystemTheme] = useState(false);

  useEffect(() => {
    // Get theme from localStorage or default to dark
    const savedTheme = localStorage.getItem('theme') as Theme;
    
    if (savedTheme) {
      // User has manually set a theme preference
      setTheme(savedTheme);
      setIsSystemTheme(false);
    } else {
      // Default to dark theme
      setTheme('dark');
      setIsSystemTheme(false);
    }
    
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      // Only save to localStorage if user has manually changed theme
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        localStorage.setItem('theme', theme);
      }
      // Apply theme to document
      document.documentElement.setAttribute('data-theme', theme);
    }
  }, [theme, mounted]);

  // Listen for system theme changes
  useEffect(() => {
    if (!mounted) return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e: MediaQueryListEvent) => {
      // Only update if user hasn't manually set a preference
      const savedTheme = localStorage.getItem('theme');
      if (!savedTheme) {
        // Default to dark theme regardless of system preference
        setTheme('dark');
        setIsSystemTheme(false);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [mounted]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    setIsSystemTheme(false);
    // Save manual preference to localStorage
    localStorage.setItem('theme', newTheme);
  };

  const resetToSystemTheme = () => {
    localStorage.removeItem('theme');
    // Default to dark theme
    setTheme('dark');
    setIsSystemTheme(false);
  };

  // Always provide the context, even during SSR
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, resetToSystemTheme, isSystemTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

