import axios from 'axios';

// Function to fetch users based on a query
export const fetchUsersData = async (query) => {
  const API_URL = `https://api.github.com/search/users?q=${query}`;
  
  try {
    const response = await axios.get(API_URL);
    return response.data.items;  // Return the array of user results
  } catch (error) {
    throw new Error('Unable to fetch users');
  }
};
