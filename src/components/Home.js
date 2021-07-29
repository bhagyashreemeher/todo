import React from 'react';
import '../App.css';
import TodoList from './TodoList';

function Home() {
    return (
        <div className='todo-app'>
            <TodoList />
        </div>
    )
}
export default Home;