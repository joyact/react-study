import React, { useState } from 'react';
import MyTodoItem from './MyTodoItem';

const initialTodos: Array<MyTodoProps> = [
  { text: 'Walk the dog', complete: true, id: 1 },
  { text: 'Sleep', complete: false, id: 2 },
];

const MyTodo: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo = (selectedTodo: MyTodoProps) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === selectedTodo.id
          ? {
              ...todo,
              complete: !todo.complete,
            }
          : todo;
      })
    );
  };

  console.log(todos);

  return (
    <ul className="todo">
      {todos.map((todo) => (
        <MyTodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </ul>
  );
};

export default MyTodo;
