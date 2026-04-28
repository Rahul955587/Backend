const Post = require("../models/Post");

// CREATE
exports.createPost = async (req, res) => {
  const post = await Post.create({
    ...req.body,
    author: req.user.id,
  });

  res.status(201).json(post);
};

// GET ALL
exports.getPosts = async (req, res) => {
  const posts = await Post.find().populate("author", "name");
  res.json(posts);
};

// GET ONE
exports.getPost = async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (!post) return res.status(404).json({ message: "Not found" });

  res.json(post);
};

// UPDATE
exports.updatePost = async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (post.author.toString() !== req.user.id) {
    return res.status(403).json({ message: "Not allowed" });
  }

  Object.assign(post, req.body);
  await post.save();

  res.json(post);
};

// DELETE
exports.deletePost = async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (post.author.toString() !== req.user.id) {
    return res.status(403).json({ message: "Not allowed" });
  }

  await post.deleteOne();

  res.json({ message: "Deleted" });
};
