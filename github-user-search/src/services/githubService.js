export const fetchAdvancedUserData = async ({ username, location, repoCount }) => {
    const query = [];
    if (username) query.push(`user:${username}`);
    if (location) query.push(`location:${location}`);
    if (repoCount) query.push(`repos:>${repoCount}`);
  
    const searchQuery = query.join('+');
    const API_URL = `https://api.github.com/search/users?q=${searchQuery}`;
  
    try {
      const response = await axios.get(API_URL);
      return response.data.items;
    } catch (error) {
      throw new Error('Unable to fetch user data');
    }
  };
  