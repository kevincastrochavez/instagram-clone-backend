const express = require("express");

const postsController = require("../controllers/postsController");
const router = express.Router();

router.get("/", postsController.getPosts);
router.post("/upload", postsController.uploadPost);

module.exports = router;
