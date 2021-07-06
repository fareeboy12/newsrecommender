const express = require("express");
const path = require("path");
const app = express();

app.use(expresds.urlencoded({ extended: false }));
app.use(express.json());

// app.use("/");

app.listen(5000, () => {
  console.log("Server is running on port: http://localhost:5000/");
});
