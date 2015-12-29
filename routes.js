var restify = require('restify');
var Article = require('./models/article');
var User = require('./models/user');

exports.getArticle = function(req, res, next) {
  Article.findById(req.params.id, function(err, article) {
    if (err) return next(err);
    if (!article) return next(new restify.errors.NotFoundError());
    res.send(200, article);
    return next();
  });
};

exports.createArticle = function(req, res, next) {
  var obj = {
    title: req.params.title,
    content: req.params.content,
    author: req.params.author,
    tags: req.params.tags,
  };
  Article.create(obj, function(err, article) {
    if (err) return next(err);
    res.send(article);
    return next();
  });
};
