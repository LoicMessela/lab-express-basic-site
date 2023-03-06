const express = require("express");

const hbs = require("hbs");

const app = express();

app.use(express.static(__dirname + "/public"));
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("Home", {
    navbar: true,
  });
});

app.get("/about", (req, res) => {
  res.render("About", {});
});

app.get("/works", (req, res) => {
  res.render("Works", {});
});

app.listen(3000, () => {
  console.log(`http://localhost:3000`);
});
