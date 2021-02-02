import React from 'react'

type GreetingsProps = {
  name: string;
  mark?: string; // default 값이 부여된 경우 '?' 처리
  onClick: (name: string) => void; // 아무것도 리턴하지 않는 함수
}


// const Greetings: React.FC<GreetingsProps> = () => {} 
function Greetings({ name, mark, onClick}: GreetingsProps) {
  const handleClick = () => onClick(name);

  return (
    <>
      <div>Hello, {name} {mark}</div>
      <div>
        <button onClick={handleClick}>Click</button>
      </div>
    </>
  )
}

// React.FC 에서는 defaultProps 작동 x
Greetings.defaultProps = {
  mark: '!'
}


export default Greetings;
