const mongoose = require('mongoose');

module.exports.getArticles = (req, res) => {
  const Blog = mongoose.model('articles');

  Blog.find().then(items => {
    res.status(200).json({ articles: items });
  });
};