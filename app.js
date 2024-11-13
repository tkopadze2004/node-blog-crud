// With Express
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const blogRoutes = require("./routes/blogRoutes");
const { render } = require("ejs");
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
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});
app.use(morgan("dev"));
app.use("/blogs", blogRoutes);
//mongoose and mongo sendbox routes

//send,create blog

//get all blogs

//get blog by id

//use redirect
app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  res.render("blogs/about", { title: "About" });
});

// redirects

//404 page
app.use((req, res) => {
  // res.status(404).sendFile("./views/404.html", { root: __dirname });
  res.status(404).render("404", { title: "404 page" });
});
