import React from 'react';

interface MyTodoItemProps {
  todo: MyTodoProps;
}

const MyTodoItem: React.FC<MyTodoItemProps> = ({ todo }) => {
  return (
    <li>
      <label className={todo.complete ? 'complete' : undefined}>
        <input type="checkbox" checked={todo.complete} />
        {todo.text}
      </label>
    </li>
  );
};

export default MyTodoItem;
