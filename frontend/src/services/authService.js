// services/authService.js
import API from './api';  //import configured Axios instance

// Register user
export const registerUser = async (userData) => {
  return await API.post('/users/register', userData);
};

// Login user
export const loginUser = async (userData) => {
  return await API.post('/users/login', userData);
};
