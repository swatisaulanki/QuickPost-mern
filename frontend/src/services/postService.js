// services/postService.js
import API from './api';

export const createPost = async (postData) => {
  return await API.post('/posts', postData);
};

export const getAllPosts = async () => {
  return await API.get('/posts');
};

export const deletePost = async (postId) => {
  return await API.delete(`/posts/${postId}`);
};
