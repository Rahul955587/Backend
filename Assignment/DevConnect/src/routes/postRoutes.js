const express = require("express");
const router = express.Router();
const post = require("../controllers/postController");
const auth = require("../middleware/authMiddleware");

router.post("/", auth, post.createPost);
router.get("/", post.getPosts);
router.get("/:id", post.getPost);
router.put("/:id", auth, post.updatePost);
router.delete("/:id", auth, post.deletePost);

module.exports = router;
