import React from 'react';
import Profile from './Profile';
import { Link, Route } from 'react-router-dom';

function Profiles() {
  return (
    <div>
      <h3>사용자 목록</h3>
      <ul>
        <li>
          <Link to="/profiles/joy">joy</Link>
        </li>
        <li>
          <Link to="/profiles/velopert">velopert</Link>
        </li>
      </ul>
      <Route
        path="/profiles"
        render={() => <div>사용자를 선택해주세요</div>}
        exact
      />
      <Route path="/profiles/:username" component={Profile} />
    </div>
  );
}

export default Profiles;
