import React, { useRef, useState, useMemo, useCallback } from 'react';
import NewUser from './components/NewUser';
import UserList from './components/UserList';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는 중...');
  return users.filter((user) => user.active).length;
}

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

  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setInputs({
        ...inputs,
        [name]: value,
      });
    },
    [inputs]
  );

  const handleCreate = useCallback(() => {
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
  }, [username, email, list]);

  const handleRemove = useCallback(
    (id) => {
      setList(list.filter((user) => user.id !== id));
    },
    [list]
  );

  const handleToggle = useCallback(
    (id) => {
      setList(
        list.map((user) =>
          user.id === id ? { ...user, active: !user.active } : user
        )
      );
    },
    [list]
  );

  // list가 바뀔 때만 호출 되고, 그 외는 재사용 됨
  const count = useMemo(() => countActiveUsers(list), [list]);

  return (
    <>
      <NewUser
        username={username}
        email={email}
        onChange={handleChange}
        onCreate={handleCreate}
      />
      <UserList list={list} onRemove={handleRemove} onToggle={handleToggle} />
      <div>활성 사용자 수 : {count}</div>
    </>
  );
}

export default App;
