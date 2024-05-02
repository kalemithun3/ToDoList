import React from 'react';

const TodoItem = ({ todos }) => {
    return (
        <div>
            <h2>To Do List</h2>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        <p>Task Name: {todo.taskName}</p>
                        <p>Task Description: {todo.taskDescription}</p>
                        <p>Priority: {todo.priority}</p>
                        <p>Task Status: {todo.taskStatus}</p>
                        <p>Date and Time: {todo.dateAndTime}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoItem;
