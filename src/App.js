import React, { useRef, useState } from 'react';
import NewUser from './components/NewUser';
import UserList from './components/UserList';

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });

  const { username, email } = inputs;

  const [list, setList] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true,
    },
    {
      id: 2,
      username: 'joy',
      email: 'joy@gmail.com',
      active: false,
    },
    {
      id: 3,
      username: 'lee',
      email: 'lee@gmail.com',
      active: false,
    },
  ]);

  // 굳이 컴포넌트를 리렌더링 시킬 필요가 없는 경우
  // useRef를 변수에 저장해서 사용한다
  const nextId = useRef(4);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleCreate = () => {
    // input에 입력된 값
    const user = {
      id: nextId.current,
      username,
      email,
    };

    // 기존 배열에 새 항목 추가해서 렌더링
    // setList([...list, user]);
    setList(list.concat(user));

    // input reset
    setInputs({
      username: '',
      email: '',
    });

    nextId.current += 1;
  };

  const handleRemove = (id) => {
    setList(list.filter((user) => user.id !== id));
  };

  const handleToggle = (id) => {
    setList(
      list.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };

  return (
    <>
      <NewUser
        username={username}
        email={email}
        onChange={handleChange}
        onCreate={handleCreate}
      />
      <UserList list={list} onRemove={handleRemove} onToggle={handleToggle} />
    </>
  );
}

export default App;
