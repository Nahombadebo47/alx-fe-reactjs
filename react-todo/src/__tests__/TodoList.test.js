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

        // Toggle the completion status
        fireEvent.click(screen.getByText('Learn Testing'));
        expect(screen.getByText('Learn Testing')).toHaveStyle(
            'text-decoration: line-through'
        );

        // Toggle back to incomplete
        fireEvent.click(screen.getByText('Learn Testing'));
        expect(screen.getByText('Learn Testing')).toHaveStyle(
            'text-decoration: none'
        );
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
