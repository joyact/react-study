import React from 'react';

function User({ user, onRemove }) {
  const { username, email, id } = user;
  return (
    <div>
      <b>{username}</b> <span>({email})</span>
      <button onClick={() => onRemove(id)}>X</button>
    </div>
  );
}

function UserList({ list, onRemove }) {
  return (
    <div>
      {list.map((user) => (
        <User user={user} key={user.id} onRemove={onRemove} />
      ))}
    </div>
  );
}

export default UserList;
