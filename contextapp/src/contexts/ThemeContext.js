import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

function ThemeContextProvider({ children }) {
  const state = {
    light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
    dark: { syntax: '#ddd', ui: '#333', bg: '#555' },
  };

  const [isLight, setIsLight] = useState(true);
  const toggleTheme = () => {
    setIsLight(!isLight);
  };

  return (
    <ThemeContext.Provider value={{ ...state, isLight, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
