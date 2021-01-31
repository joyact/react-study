import React from 'react';

// 프로필에서 사용될 데이터
const profileData = {
  joy: {
    name: '이주영',
    description: 'Self-taught Frontend Engineer',
  },
  velopert: {
    name: '김민준',
    description: 'Frontend Engineer @ RIDI',
  },
};

function Profile({ match }) {
  // 파라미터를 받아올 땐 match안에 들어있는 params 값을 참조
  const { username } = match.params;
  const profile = profileData[username];
  console.log(match);

  return profile ? (
    <div>
      <h3>
        {username} ({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  ) : (
    <div>존재하지 않는 사용자입니다.</div>
  );
}

export default Profile;
