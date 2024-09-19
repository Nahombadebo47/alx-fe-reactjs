import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

function Search() {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setUser(null);  // Clear the previous user data
    try {
      const userData = await fetchUserData(username);  // Fetch user data from GitHub API
      setUser(userData);  // Set the user data in state
    } catch (err) {
      setError('Looks like we can’t find the user');  // Set the error message
    }
    setLoading(false);
  };

  return (
    <div className="search-container">
      {/* Search Form */}
      <form onSubmit={handleSubmit} className="flex justify-center mt-10">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          className="border border-gray-400 p-2 rounded"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 ml-2 rounded">
          Search
        </button>
      </form>

      <div className="result-container mt-5">
        {/* Loading State */}
        {loading && <p>Loading...</p>}

        {/* Error State */}
        {error && <p className="text-red-500">{error}</p>}

        {/* User Display */}
        {user && (
          <div className="user-card bg-white shadow rounded p-5 mt-5 text-center">
            {/* User Avatar */}
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-20 h-20 rounded-full mx-auto"
            />
            {/* User Login */}
            <h2 className="text-xl font-bold mt-3">{user.login}</h2>
            {/* Link to GitHub Profile */}
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              View Profile
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
