const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const connectDB = require("./connectDB/connectDB");
connectDB();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const userRouter = require("./routes/userRouter");
app.use("/user", userRouter);
app.listen(port, (err) => {
  err ? console.log(err) : console.log(`listening on port ${port}`);
});
