const mongoose = require("mongoose");
const dotenv = require("dotenv");

process.on("uncaughtException", (err) => {
  console.log("Uncaught Exception");
  console.log(err.name, err.message);

  process.exit(1);
});

dotenv.config({ path: "./config.env" });
const app = require("./app");

const DB = process.env.DATABASE.replace("<PASSWORD>", process.env.PASSWORD);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Succesful Connection"));

mongoose.connection.once("open", () => {
  console.log("DB Connected");
});

const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  console.log(`Server started at port:${port}`);
});

process.on("unhandledRejection", (err) => {
  console.log("Unhandled Rejection");
  console.log(err.name, err.message);

  server.close(() => {
    process.exit(1);
  });
});
