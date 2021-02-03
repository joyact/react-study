import React from 'react';
import Greetings from './components/Greetings';
import Counter from './components/Counter';

const App: React.FC = () => {
  const onClick = (name: string) => {
    console.log(name);
  };

  return (
    <>
      <Greetings name="JOY" onClick={onClick} />;
      <Counter />
    </>
  );
};

export default App;
