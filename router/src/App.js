import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './components/Profile';

function App() {
  return (
    <>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
      </ul>
      <hr />
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} />
      <Route path="/profile/:username" component={Profile} />
    </>
  );
}

export default App;
