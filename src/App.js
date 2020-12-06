import React, { useRef, useReducer, useMemo, useCallback } from 'react';
import NewUser from './components/NewUser';
import UserList from './components/UserList';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는 중...');
  return users.filter((user) => user.active).length;
}

const initialState = {
  inputs: {
    username: '',
    email: '',
  },
  list: [
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
  ],
};

function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE_INPUT':
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name]: action.value,
        },
      };
    case 'CREATE_USER':
      return {
        inputs: initialState.inputs,
        list: state.list.concat(action.user),
      };
    case 'TOGGLE_USER':
      return {
        ...state,
        list: state.list.map((user) =>
          user.id === action.id ? { ...user, active: !user.active } : user
        ),
      };
    case 'REMOVE_USER':
      return {
        ...state,
        list: state.list.filter((user) => user.id !== action.id),
      };
    default:
      throw new Error('Unhandled action');
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { list } = state;
  const { username, email } = state.inputs;

  // 굳이 컴포넌트를 리렌더링 시킬 필요가 없는 경우
  // useRef를 변수에 저장해서 사용한다
  const nextId = useRef(4);

  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      dispatch({
        type: 'CHANGE_INPUT',
        name,
        value,
      });
  }, []);

  const handleCreate = useCallback(() => {
    dispatch({
      type: 'CREATE_USER',
      user: {
        id: nextId.current,
        username,
        email,
      },
    });

    nextId.current += 1;
  }, [username, email]);

  const handleRemove = useCallback((id) => {
    dispatch({
      type: 'REMOVE_USER',
      id,
    });
  }, []);

  const handleToggle = useCallback((id) => {
    dispatch({
      type: 'TOGGLE_USER',
      id,
    });
  }, []);

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
