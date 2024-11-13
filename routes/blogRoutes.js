const express = require("express");
const router = express.Router();
const Blog = require("../models/blog");

router.post("/", (req, res) => {
  console.log(req.body);
  const blog = new Blog(req.body);

  blog
    .save()
    .then((result) => {
      res.redirect("/blogs");
    })
    .then((err) => console.log(err));
});

router.get("/create", (req, res) => {
  res.render("create", { title: "Create a new blog" });
});

router.get("/:id", (req, res) => {
  const id = req.params.id.trim();
  Blog.findById(id)
    .then((result) => {
      res.render("details", { blog: result, title: "blog details" });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id.trim();

  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/blogs" });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/", (req, res) => {
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

module.exports = router;
