const Post = require("../models/Post");

exports.createPost = async (req, res) => {
  try {
    const post = await Post.create({
      title: req.body.title,
      content: req.body.content || "",
      image: req.file ? req.file.filename : null,
      author: req.user.id,
    });

    res.status(201).json(post);
  } catch (err) {
    console.log(err); // IMPORTANT
    res.status(500).json({ message: "Error creating post" });
  }
};

exports.getPosts = async (req, res) => {
  const posts = await Post.find().populate("author", "name");
  res.json(posts);
};

exports.getPost = async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (!post) return res.status(404).json({ message: "Not found" });

  res.json(post);
};

exports.updatePost = async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (post.author.toString() !== req.user.id) {
    return res.status(403).json({ message: "Not allowed" });
  }

  Object.assign(post, req.body);
  await post.save();

  res.json(post);
};

exports.deletePost = async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (post.author.toString() !== req.user.id) {
    return res.status(403).json({ message: "Not allowed" });
  }

  await post.deleteOne();

  res.json({ message: "Deleted" });
};

exports.getMyPosts = async (req, res) => {
  const posts = await Post.find({ author: req.user.id }).populate(
    "author",
    "name",
  );
  res.json(posts);
};