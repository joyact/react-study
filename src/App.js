import React, { useRef } from 'react';
import UserList from './components/UserList';

function App() {
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

  // 굳이 컴포넌트를 리렌더링 시킬 필요가 없는 경우
  // useRef를 변수에 저장해서 사용한다
  const nextId = useRef(4);

  const handleCreate = () => {
    console.log(nextId.current); // 4
    nextId.current += 1;
  };

  return <UserList users={list} />;
}

export default App;
