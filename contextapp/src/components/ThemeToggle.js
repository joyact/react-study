import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

function ThemeToggle() {
  const context = useContext(ThemeContext);
  const { toggleTheme } = context;
  return <button onClick={() => toggleTheme()}>Toggle the Theme</button>;
}

export default ThemeToggle;
