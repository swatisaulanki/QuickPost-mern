import React, { useState } from 'react';
import { createPost } from '../services/postService';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handlePost = async (e) => {
    e.preventDefault();
    try {
      await createPost({ content });
      alert('Post created');
      setContent('');
      navigate('/'); // Redirect to Home
    } catch (err) {
      alert('Failed to create post');
    }
  };

  return (
    <div className="bg-custom-color3 min-h-screen flex justify-center items-start pt-20 font-poppins">
      <form
        className="max-w-xl w-full   bg-richblack-700 text-white p-6 rounded shadow-lg"
        onSubmit={handlePost}
      >
        <h2 className="text-2xl font-bold mb-4">Create a Post</h2>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-3 border rounded mb-4 text-black"
          rows="4"
          placeholder="What's on your mind?"
          required
        />
        <button
          type="submit"
          className="bg-black hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
