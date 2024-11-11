// With Express

const express = require("express");
const app = express();

//listen for requests
app.listen(3000);

app.get("/", (req, res) => {
  res.sendFile("./views/index.html", { root: __dirname });
  //   res.send("<p>hello world </p>");
});

app.get("/about", (req, res) => {
  res.sendFile("./views/about.html", { root: __dirname });
});

// redirects
app.get("/about-me", (req, res) => {
  res.redirect("/about");
});

//404
app.use((req, res) => {
  res.status(404).sendFile("./views/404.html", { root: __dirname });
});
