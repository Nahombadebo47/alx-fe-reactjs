import axios from 'axios';

export const fetchUserData = async (username, location = '', minRepos = 0) => {
  // Construct the search query with optional location and minimum repositories
  let query = `q=${username}`;
  
  if (location) {
    query += `+location:${location}`;
  }

  if (minRepos) {
    query += `+repos:>=${minRepos}`;
  }

  const API_URL = `https://api.github.com/search/users?${query}`;

  try {
    const response = await axios.get(API_URL);
    return response.data.items;  // Return the list of users
  } catch (error) {
    throw new Error('Unable to fetch user data');
  }
};
