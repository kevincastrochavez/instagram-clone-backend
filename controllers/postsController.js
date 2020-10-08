const fs = require("fs");
const Posts = require("../models/postsModel");

exports.getPosts = (req, res) => {
  Posts.find((err, data) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(200).send(data);
    }
  });
};

exports.uploadPost = (req, res) => {
  const post = req.body;

  Posts.create(post, (err, data) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(201).send(data);
    }
  });

  //   const post = {
  //     caption: req.body.caption,
  //     user: req.body.user,
  //     image: {
  //       data: fs.readFileSync(path.join("./uploads/" + req.file.filename)),
  //       contentType: "image/*",
  //     },
  //     comments: [],
  //   };
};
