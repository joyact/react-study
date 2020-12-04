import React from 'react';

function User({ user }) {
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
    </div>
  );
}

function UserList() {
  const list = [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
    },
    {
      id: 2,
      username: 'joy',
      email: 'joy@gmail.com',
    },
    {
      id: 3,
      username: 'lee',
      email: 'lee@gmail.com',
    },
  ];

  return (
    <div>
      {list.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
}

export default UserList;
