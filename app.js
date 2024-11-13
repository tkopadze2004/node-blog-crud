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
app.use(express.urlencoded())
app.use(morgan("dev"));











app.post("/blogs", (req, res) => {
  console.log(req.body);
  const blog = new Blog(req.body);

  blog
    .save()
    .then((result) => {
      res.redirect("/blogs");
    })
    .then((err) => console.log(err));
});












//mongoose and mongo sendbox routes

//send,create blog
app.get("/add-blog", (req, res) => {
  const blog = new Blog({
    title: "new blog 6",
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



//get all blogs
app.get("/all-blogs", (req, res) => {
  Blog.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});


//get blog by id
app.get("/get-by-id", (req, res) => {
  Blog.findById("673379b4bb1cc574a4c864a2")
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});


// app.get("/", (req, res) => {
//   // res.sendFile("./views/index.html", { root: __dirname });  ianother way we can write like this using ejs view engines
//   const blogs = [
//     { title: "blog 1", snippet: "some text " },
//     { title: "blog 2", snippet: "some text bla bla  " },
//     { title: "blog 3", snippet: "some text bla bla bla balaaa " },
//   ];
// res.render("index", { title: "Home", blogs });
//   //   res.send("<p>hello world </p>");
// });

//use redirect
app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/blogs", (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    //using createdAt we have newest item on top
    .then((result) => {
      res.render("index", { title: "all blogs", blogs: result });
    })
    .catch((err) => {
      console.log(err);
    });
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
