import React, { useEffect } from 'react';

const User = React.memo(function User({ user, onRemove, onToggle }) {
  const { username, email, id, active } = user;

  /*
  useEffect(() => {
    // 컴포넌트가 마운트될 때
    // props -> state / REST API / setInterval, setTimeout
    console.log('컴포넌트가 화면에 나타남');
    console.log(user);

    // 컴포넌트가 언마운트될 때
    // clearInterval, clearTimeout / 라이브러리 인스턴스 제거
    return () => {
      console.log('컴포넌트가 화면에서 사라짐');
      console.log(user);
    };
  }, [user]); // props 값 혹은 useState 값을 가져오는 경우 deps배열에 추가
  */

  return (
    <div>
      <b
        style={{
          color: active ? 'orange' : 'black',
          cursor: 'pointer',
        }}
        onClick={() => onToggle(id)}
      >
        {username}
      </b>
      <span>({email})</span>
      <button onClick={() => onRemove(id)}>X</button>
    </div>
  );
});

function UserList({ list, onRemove, onToggle }) {
  return (
    <div>
      {list.map((user) => (
        <User
          user={user}
          key={user.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

export default React.memo(UserList);
