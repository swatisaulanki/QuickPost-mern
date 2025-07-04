// src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import { getAllPosts } from '../services/postService';
import PostCard from '../components/PostCard';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAllPosts()
      .then(res => setPosts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-6 min-h-screen bg-custom-color2 font-poppins">
      <h2 className="text-3xl text-white py-5 ">📢 Latest Posts</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {posts.map(post => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Home;
