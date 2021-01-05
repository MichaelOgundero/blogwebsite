const router = require("express").Router();
const Article = require("../models/article.model");
const Section = require("../models/section.model");

router.route("/").get((req, res) => {
  Article.find()
    .then((articles) => res.json(articles))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/addArticle").post((req, res) => {
  const name = req.body.name;
  const author = req.body.author;
  const section = req.body.section;
  const date = Date.parse(req.body.date);
  const content = req.body.content;
  const userID = req.body.userID;

  const newArticle = new Article({
    name,
    author,
    section,
    date,
    content,
    userID,
  });

  newArticle
    .save()
    .then(() => {
      Section.findOne({ sectionName: req.body.section }, (err, section) => {
        if (section) {
          section.articleIDs.push(newArticle._id);
          section
            .save()
            .then(() => {
              res
                .status(200)
                .json(
                  "article added, article added to section: " +
                    section.sectionName
                );
            })
            .catch((err) => res.status(400).json("error: " + err));
        }
      });
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/deleteArticle/:sectionName/:articleID").delete((req, res) => {
  Section.findOne({ sectionName: req.params.sectionName }, (err, section) => {
    if (section) {
      section.articleIDs = section.articleIDs.filter(
        (articleID) => articleID !== req.params.articleID
      );
      section.save().then(() => {
        Article.findByIdAndDelete(req.params.articleID)
          .then(() => {
            res
              .status(200)
              .json("article: " + req.params.articleID + " deleted");
          })
          .catch((err) => res.status(400).json("err: " + err));
      });
    } else {
      res.status(400).json("error: " + err);
    }
  });
});

module.exports = router;
