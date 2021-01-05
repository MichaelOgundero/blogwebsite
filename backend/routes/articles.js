const router = require("express").Router();
const Article = require("../models/article.model");

router.route("/").get((req, res) => {
  Article.find()
    .then((articles) => res.json(articles))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const name = req.body.name;
  const author = req.body.author;
  const section = req.body.section;
  const date = Date.parse(req.body.date);
  const content = req.body.content;
  const user = req.body.user;

  const newArticle = new Article({
    name,
    author,
    section,
    date,
    content,
    user,
  });

  newArticle
    .save()
    .then(() => {
      res.status(200).json("article added: " + newArticle);
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
