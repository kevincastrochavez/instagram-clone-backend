const express = require("express");
const cors = require("cors");
const pusher = require("pusher");

const postsRouter = require("./routes/postsRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/posts", postsRouter);

module.exports = app;
