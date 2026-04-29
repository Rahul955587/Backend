const express = require("express");
const router = express.Router();
const post = require("../controllers/postController");
const auth = require("../middleware/authMiddleware");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

router.post("/", auth, upload.single("image"), post.createPost);
router.get("/", post.getPosts);
router.get("/me", auth, post.getMyPosts);
router.delete("/:id", auth, post.deletePost);

module.exports = router;
