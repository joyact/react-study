import React from 'react';
import Greetings from './components/Greetings';
import Counter from './components/Counter';
import MyForm from './components/MyForm';
import ReducerExample from './components/ReducerExample';
import { ContextProvider } from './contexts/ContextExample';

const App: React.FC = () => {
  const onClick = (name: string) => {
    console.log(name);
  };

  const onSubmit = (form: { name: string; description: string }) => {
    console.log(form);
  };

  return (
    <ContextProvider>
      <Greetings name="JOY" onClick={onClick} />;
      <Counter />
      <MyForm onSubmit={onSubmit} />
      <ReducerExample />
    </ContextProvider>
  );
};

export default App;
