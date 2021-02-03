import React from 'react';
import Greetings from './components/Greetings';
import Counter from './components/Counter';
import MyForm from './components/MyForm';
import ReducerExample from './components/ReducerExample';

const App: React.FC = () => {
  const onClick = (name: string) => {
    console.log(name);
  };

  const onSubmit = (form: { name: string; description: string }) => {
    console.log(form);
  };

  return (
    <>
      <Greetings name="JOY" onClick={onClick} />;
      <Counter />
      <MyForm onSubmit={onSubmit} />
      <ReducerExample />
    </>
  );
};

export default App;
