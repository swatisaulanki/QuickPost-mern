// src/components/PostCard.jsx
import React from 'react';
import { deletePost } from '../services/postService';
import { jwtDecode } from 'jwt-decode';

const PostCard = ({ post }) => {
  const token = localStorage.getItem('token');
  let currentUserId = null;

  if (token) {
    const decoded = jwtDecode(token);
    currentUserId = decoded.id;
  }

  const handleDelete = async () => {
    try {
      await deletePost(post._id);
      alert('Post deleted');
      window.location.reload(); // Optional: lift state instead
    } catch (err) {
      alert('Failed to delete');
      console.error(err);
    }
  };

  return (
    <div className="border p-1 rounded  bg-custom-color2 text-white shadow-md hover:shadow-lg transition duration-300">
      <h3 className="text-lg font-semibold">👤 {post.author?.name || 'Unknown'}</h3>
      <p className="text-gray-300 mt-2">📝 {post.content}</p>
      <p className="text-xs text-gray-400 mt-2">⏰ {new Date(post.createdAt).toLocaleString()}</p>

      {currentUserId === (post.author?._id || post.author) && (
        <button
          onClick={handleDelete}
          className="mt-4  bg-yellow-100 hover:bg-pink-400 text-richblack-900 px-3 py-1 rounded text-lg"
        >
          🗑️ Delete
        </button>
      )}
    </div>
  );
};

export default PostCard;
