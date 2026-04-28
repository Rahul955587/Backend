const express = require('express');
const {getpostlist,addNewPost,sendPostById,getById,update,change,deletepost}=require('../controllers/postController')
const router = express.Router();



router.get("/", getpostlist);
// router.get("/")
router.get('/posts/:id', getById);
router.post("/posts",addNewPost);
router.post("/posts/:id", sendPostById);
router.patch("/posts/:id", update);
router.put("/posts/:id", change);
router.delete("/posts/:id", deletepost);
module.exports = router;