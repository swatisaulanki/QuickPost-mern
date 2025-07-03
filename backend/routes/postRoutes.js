const express = require('express');
const { createPost, getAllPosts, deletePost } = require('../controllers/postController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', getAllPosts);
router.post('/', auth, createPost);
router.delete('/:id', auth, deletePost);

module.exports = router;
