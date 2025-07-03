const Post = require('../models/Post');

exports.createPost = async (req, res) => {
  const post = await Post.create({
    content: req.body.content,
    author: req.user.id,
  });
  res.status(201).json(post);
};

exports.getAllPosts = async (req, res) => {
  const posts = await Post.find().populate('author', 'name email').sort({ createdAt: -1 });
  res.json(posts);
};

exports.deletePost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (post.author.toString() !== req.user.id) {
    return res.status(403).json({ message: "Not authorized to delete" });
  }
  await post.deleteOne();
  res.status(204).end();
};
