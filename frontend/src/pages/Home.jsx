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
    <div className="p-6 md:h-[680px] bg-custom-color3">
      <h2 className="text-2xl font-bold text-white mb-6">📢 Latest Posts</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {posts.map(post => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Home;
