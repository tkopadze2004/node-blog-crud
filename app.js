// With Express

const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const Blog = require("./models/blog");
const app = express();
const dbURL =
  "mongodb+srv://tamta:tamta123@cluster0.7tgwt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(dbURL)
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// register view engines
// here we say that ejs is going too be used to create our templates
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(morgan("dev"));

//mongoose and mongo sendbox routes
app.get("/add-blog", (req, res) => {
  const blog = new Blog({
    title: "new blog 4",
    snippet: "about this new blog",
    body: "more abotu thsi blog",
  });

  blog
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});



app.get("/", (req, res) => {
  // res.sendFile("./views/index.html", { root: __dirname });  ianother way we can write like this using ejs view engines
  const blogs = [
    { title: "blog 1", snippet: "some text " },
    { title: "blog 2", snippet: "some text bla bla  " },
    { title: "blog 3", snippet: "some text bla bla bla balaaa " },
  ];
  res.render("index", { title: "Home", blogs });
  //   res.send("<p>hello world </p>");
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });

  // res.sendFile("./views/about.html", { root: __dirname });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create blog" });
  // res.sendFile("./views/about.html", { root: __dirname });
});

// redirects
app.get("/about-me", (req, res) => {
  res.redirect("/about");
});

//404 page
app.use((req, res) => {
  // res.status(404).sendFile("./views/404.html", { root: __dirname });
  res.status(404).render("404", { title: "404 page" });
});
