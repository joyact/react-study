import React from 'react';
import MyTodoItem from './MyTodoItem';

const todos: Array<MyTodoProps> = [
  { text: 'Walk the dog', complete: true },
  { text: 'Sleep', complete: false },
];

const MyTodo: React.FC = () => {
  return (
    <ul className="todo">
      {todos.map((todo) => (
        <MyTodoItem todo={todo} />
      ))}
    </ul>
  );
};

export default MyTodo;
