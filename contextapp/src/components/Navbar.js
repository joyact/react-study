import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';

function Navbar() {
  const themeContext = useContext(ThemeContext);
  const authContext = useContext(AuthContext);

  const { isLight, light, dark } = themeContext;
  const { isAuth, toggleAuth } = authContext;

  const theme = isLight ? light : dark;

  return (
    <nav style={{ background: theme.ui, color: theme.syntax }}>
      <h1>Context App</h1>
      <span onClick={() => toggleAuth()}>
        {isAuth ? 'Logged In' : 'Logged Out'}
      </span>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
