import React, {
  useRef,
  useReducer,
  useMemo,
  useCallback,
  createContext,
} from 'react';
import NewUser from './components/NewUser';
import UserList from './components/UserList';
import useInputs from './hook/useInputs';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는 중...');
  return users.filter((user) => user.active).length;
}

const initialState = {
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

export const UserDispatch = createContext(null);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [form, handleChange, reset] = useInputs({
    username: '',
    email: '',
  });
  const { username, email } = form;
  const { list } = state;

  // 굳이 컴포넌트를 리렌더링 시킬 필요가 없는 경우
  // useRef를 변수에 저장해서 사용한다
  const nextId = useRef(4);

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
    reset();
  }, [username, email, reset]);

  // list가 바뀔 때만 호출 되고, 그 외는 재사용 됨
  const count = useMemo(() => countActiveUsers(list), [list]);

  return (
    <UserDispatch.Provider value={dispatch}>
      <NewUser
        username={username}
        email={email}
        onChange={handleChange}
        onCreate={handleCreate}
      />
      <UserList list={list} />
      <div>활성 사용자 수 : {count}</div>
    </UserDispatch.Provider>
  );
}

export default App;
