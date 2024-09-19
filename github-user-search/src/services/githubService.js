import axios from 'axios';

// Function to fetch user data from GitHub API
export const fetchUserData = async (username) => {
  const API_URL = `https://api.github.com/users/${username}`;
  
  try {
    // Make a GET request to the GitHub API
    const response = await axios.get(API_URL);
    return response.data;  // Return the user data
  } catch (error) {
    // Throw an error if the API call fails
    throw new Error('Unable to fetch user data');
  }
};
