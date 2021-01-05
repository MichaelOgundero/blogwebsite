const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema(
  {
    name: { type: String,  required: true,},
    author: { type: String, required: true,},
    section: { type: String, required: true,},
    date: { type: Date, required: true,},
    content: { type: String, required: true,},
    userID: { type: String, required: true,},
  },
  {
    timestamps: true,
  }
);

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
