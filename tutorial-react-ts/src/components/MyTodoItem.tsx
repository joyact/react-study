import React from 'react';

interface MyTodoItemProps {
  todo: MyTodoProps;
  toggleTodo: (selectedTodo: MyTodoProps) => void;
}

const MyTodoItem: React.FC<MyTodoItemProps> = ({ todo, toggleTodo }) => {
  return (
    <li>
      <label className={todo.complete ? 'complete' : undefined}>
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={() => toggleTodo}
        />
        {todo.text}
      </label>
    </li>
  );
};

export default MyTodoItem;
