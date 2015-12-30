var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  title: String,
  content: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  tags: {
    type: [String],
    index: true,
  },
  createTime: {
    type: Date,
    default: Date.now,
  },
  updateTime: {
    type: Date,
    default: Date.now,
  },
});

var Article = mongoose.model('Article', schema);

module.exports = Article;
