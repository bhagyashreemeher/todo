import React, { useState, useEffect, useRef } from 'react';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import IconButton from '@material-ui/core/IconButton';
import SaveRoundedIcon from '@material-ui/icons/SaveRounded';

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: input
    });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      {props.edit ? (
        <>
          <input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input edit'
          />
          <IconButton className="add-button" onClick={handleSubmit}>
            <SaveRoundedIcon />
          </IconButton>
        </>
      ) : (
        <>
          <input
            placeholder='Add a todo'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
            ref={inputRef}
          />
          <IconButton onClick={handleSubmit} className="add-button" aria-label="add a todo">
            <AddCircleRoundedIcon />
          </IconButton>
        </>
      )}
    </form>
  );
}

export default TodoForm;
