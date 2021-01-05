const router = require("express").Router();
const Section = require("../models/section.model");

router.route("/").get((req, res) => {
  Section.find()
    .then((sections) => res.json(sections))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/addSection").post((req, res) => {
  const section = req.body.sectionName;

  const newSection = new Section();
  newSection.sectionName = section;

  newSection
    .save()
    .then(() => {
      res.status(200).json("section added: " + section);
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/addArticle").post((req, res) => {
  Section.findOne({ sectionName: req.body.sectionName }, (err, section) => {
    if (section) {
      section.articleIDs.push(req.body.articleID);

      section
        .save()
        .then(() => {
          res.status(200).json("added: " + req.body.articleID);
        })
        .catch((err) => res.status(400).json("error: " + err));
    } else {
      res.status(400).json("err: " + err);
    }
  });
});

router.route("/deleteArticle/:articleID").delete((req, res) => {
  Section.findOne({ sectionName: req.body.sectionName }, (err, section) => {
    if (section) {
      section.articleIDs = section.articleIDs.filter(
        (articleID) => articleID !== req.params.articleID
      );
      section
        .save()
        .then(() => {
          res.status(200).json("item deleted: " + req.params.articleID);
        })
        .catch((err) => res.status(400).json("err: " + err));
    } else {
      res.status(400).json("err: " + err);
    }
  });
});

module.exports = router;
