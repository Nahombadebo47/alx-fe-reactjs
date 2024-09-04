// src/components/TodoList.jsx
import React, { useState } from 'react';

const TodoList = () => {
    const [todos, setTodos] = useState([]); // State to hold the list of todos
    const [inputValue, setInputValue] = useState(''); // State to manage input value

    // Function to handle adding a new todo
    const addTodo = () => {
        if (inputValue.trim() === '') return; // Prevent adding empty todos
        const newTodo = { id: Date.now(), text: inputValue, completed: false };
        setTodos([...todos, newTodo]);
        setInputValue(''); // Clear input after adding
    };

    // Function to toggle the completion status of a todo
    const toggleTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    // Function to delete a todo
    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <div>
            <h2>Todo List</h2>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Add a new todo"
            />
            <button onClick={addTodo}>Add Todo</button>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                        <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
