import React, { useState } from 'react';

function Inputs() {
  const [inputs, setInputs] = useState({
    name: '',
    nickname: '',
  });

  // inputs에서 name, nickname 값을 비구조 할당 추출 (쉽게 사용)
  const { name, nickname } = inputs;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleReset = () => {
    setInputs({
      name: '',
      nickname: '',
    });
  };

  return (
    <div>
      <input name="name" onChange={handleChange} value={name} placeholder="이름" />
      <input name="nickname" onChange={handleChange} value={nickname} placeholder="닉네임" />
      <button onClick={handleReset}>Reset</button>
      <div>
        <b>이름: </b>
        {name}
      </div>
      <div>
        <b>닉네임: </b>
        {nickname}
      </div>
    </div>
  );
}

export default Inputs;
