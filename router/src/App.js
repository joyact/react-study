import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Profiles from './components/Profiles';

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
        <li>
          <Link to="/profiles">프로필</Link>
        </li>
      </ul>
      <hr />
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} />
      <Route path="/profiles" component={Profiles} />
    </>
  );
}

export default App;
