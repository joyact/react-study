import React, { useState, useEffect } from 'react';

function Users() {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false); // 현재 API가 요청중인지 아닌지
  const [error, setError] = useState(null);

  // 렌더링 시
  const fetchUsers = async () => {};

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.username} ({user.name})
        </li>
      ))}
    </ul>
  );
}

export default Users;
