import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Users() {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false); // 현재 API가 요청중인지 아닌지
  const [error, setError] = useState(null);

  // 렌더링 시
  const fetchUsers = async () => {
    try {
      setUsers(null); // 초기화
      setError(null); // 초기화
      setLoading(true); // 로딩 시작
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users/'
      );
      setUsers(response.data); // 결과값
    } catch (e) {
      console.log(e.response.status); // 에러 종류(404)
      setError(e);
    }
    setLoading(false); // 로딩 완료
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!users) return null;

  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.username} ({user.name})
          </li>
        ))}
      </ul>
      <button onClick={fetchUsers}>Reloading</button>
    </>
  );
}

export default Users;
