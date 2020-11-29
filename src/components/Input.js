import React, { useState } from 'react';

function Input() {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleReset = () => {
    setText('');
  };

  return (
    <div>
      <input onChange={handleChange} value={text} />
      <button onClick={handleReset}>Reset</button>
      <div>
        <b>입력값: </b>
        {text}
      </div>
    </div>
  );
}

export default Input;
