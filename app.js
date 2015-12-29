var env = process.env.NODE_ENV || 'development';
var restify = require('restify');
var mongoose = require('mongoose');
// var autoIncrement = require('mongoose-auto-increment');

mongoose.connect('mongodb://localhost/blog');
// autoIncrement.initialize(mongoose.connection);

var server = restify.createServer({
  name: 'kblog-api',
  version: '1.0.0',
});
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());
server.use(restify.CORS());

var routes = require('./routes');

server.get('/article/:id', routes.getArticle);
server.post('/article', routes.createArticle);

server.listen(3000, function() {
  console.log('%s listening at %s', server.name, server.url);
});
