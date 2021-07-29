import React, { useState } from 'react';
import TodoForm from './TodoForm';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className='todo-row'
      key={index}
    >
      <div className='icons'>
        <EditRoundedIcon
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className='edit-icon'
        />
      </div>
      <div key={todo.id}>
        <span>{todo.text}</span>
      </div>
      <div className='icons'>
        <DeleteRoundedIcon
          onClick={() => removeTodo(todo.id)}
          className='delete-icon'
        />

      </div>
    </div>
  ));
};

export default Todo;
