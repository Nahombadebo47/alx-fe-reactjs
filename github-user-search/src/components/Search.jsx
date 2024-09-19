import React, { useState } from 'react';

function Search({ onSearch }) {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(username);
  };

  return (
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
  );
}

export default Search;
