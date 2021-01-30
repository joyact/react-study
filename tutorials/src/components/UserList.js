import React, { useContext } from 'react';
import { UserDispatch } from '../App';

const User = React.memo(function User({ user }) {
  const { username, email, id, active } = user;
  const dispatch = useContext(UserDispatch);

  return (
    <div>
      <b
        style={{
          color: active ? 'orange' : 'black',
          cursor: 'pointer',
        }}
        onClick={() => dispatch({ type: 'TOGGLE_USER', id })}
      >
        {username}
      </b>
      <span>({email})</span>
      <button onClick={() => dispatch({ type: 'REMOVE_USER', id })}>X</button>
    </div>
  );
});

function UserList({ list }) {
  return (
    <div>
      {list.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
}

export default React.memo(UserList);
