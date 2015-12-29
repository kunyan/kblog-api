var assert = require('assert');
var mongoose = require('mongoose');
var mockgoose = require('mockgoose');
var Article = require('../../models/article');

before(function(done) {
  mockgoose(mongoose);
  mongoose.connect('mongodb://localhost/blog', function(err) {
    done(err);
  });
});
describe('Article', function() {

  it('create a article', function(done) {
    var obj = {
      title: 'A blog title',
      content: 'It\'s rainning outside. I don\'t like the weather like this.',
      // author: 'kyan',
      tags: ['test', 'weather'],
    };
    Article.create(obj, function(err, article) {
      if (err) return done(err);
      assert.equal('A blog title', article.title);
      done();
    });

  });
});
