// src/__tests__/TodoList.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
    test('renders TodoList component correctly', () => {
        render(<TodoList />);
        expect(screen.getByText('Todo List')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Add a new todo')).toBeInTheDocument();
        expect(screen.getByText('Add Todo')).toBeInTheDocument();
    });

    test('adds a new todo item', () => {
        render(<TodoList />);
        fireEvent.change(screen.getByPlaceholderText('Add a new todo'), {
            target: { value: 'Learn React Testing' },
        });
        fireEvent.click(screen.getByText('Add Todo'));
        expect(screen.getByText('Learn React Testing')).toBeInTheDocument();
    });

    test('toggles the completion status of a todo item', () => {
        render(<TodoList />);
        fireEvent.change(screen.getByPlaceholderText('Add a new todo'), {
            target: { value: 'Learn Testing' },
        });
        fireEvent.click(screen.getByText('Add Todo'));

        // Find the todo item element
        const todoItem = screen.getByText('Learn Testing');

        // Toggle the completion status to complete
        fireEvent.click(todoItem);

        // Ensure the list item parent has the correct style applied
        expect(todoItem.closest('li')).toHaveStyle('text-decoration: line-through');

        // Toggle back to incomplete
        fireEvent.click(todoItem);
        expect(todoItem.closest('li')).toHaveStyle('text-decoration: none');
    });

    test('deletes a todo item', () => {
        render(<TodoList />);
        fireEvent.change(screen.getByPlaceholderText('Add a new todo'), {
            target: { value: 'Delete this todo' },
        });
        fireEvent.click(screen.getByText('Add Todo'));

        // Delete the todo item
        fireEvent.click(screen.getByText('Delete'));
        expect(screen.queryByText('Delete this todo')).not.toBeInTheDocument();
    });
});
