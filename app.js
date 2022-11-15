import express from "express";

import cookieParser from "cookie-parser";
const port = 3000;

const app = express();
app.use(cookieParser());
app.use(express.json());

app.get("/login/:username", (req, res) => {
  var { username } = req.params;
  res.cookie("username", username);
  res.end();
});

app.get("/hello", (req, res) => {
  if (req.cookies.username) res.end(`Welcome ${req.cookies.username}`);
  else {
    res.redirect("/login");
  }
});

app.listen(port, () => console.log(`Hello from ${port}`));
