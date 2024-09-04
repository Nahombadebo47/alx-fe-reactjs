// src/components/PostsComponent.jsx
import React from 'react';
import { useQuery } from '@tanstack/react-query';

// Function to fetch posts data from the JSONPlaceholder API
const fetchPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
        throw new Error('Failed to fetch posts'); // Throw an error if the response is not OK
    }
    return response.json(); // Return the JSON data
};

const PostsComponent = () => {
    // Use the useQuery hook to fetch data with the new object syntax
    const { data, error, isLoading, isError } = useQuery({
        queryKey: ['posts'], // Equivalent to the key used in v4
        queryFn: fetchPosts, // The function that fetches the data
    });

    // Show loading state while data is being fetched
    if (isLoading) {
        return <div>Loading posts...</div>;
    }

    // Show error message if the fetch fails
    if (isError) {
        return <div>Error: {error.message}</div>;
    }

    // Render the list of posts once data is successfully fetched
    return (
        <div>
            <h2>Posts</h2>
            <ul>
                {data.map((post) => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostsComponent;
