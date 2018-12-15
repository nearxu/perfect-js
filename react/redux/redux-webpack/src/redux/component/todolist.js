import React from 'react';

const Todo = ({ onClick, completed, text }) => {
    return (
        <li
            onClick={onClick}
            style={{
                textDecoration: completed ? 'line-through' : 'none'
            }}
        >
            {text}
        </li>
    )
}

const TodoList = ({ todos, toggleTodo }) => {
    return (
        <ul>
            {todos.map(todo => (
                <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
            ))}
        </ul>
    )
}

export default TodoList;