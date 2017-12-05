var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var app = express();
var port = process.env.PORT || 3000;
var MongoClient = require('mongodb').MongoClient;

var mongoURL = 'mongodb://' + 'cs290_larseno' + ':' + 'cs290_larseno' +
  '@' + 'classmongo.engr.oregonstate.edu' + ':' + 27017 + '/' + 'cs290_larseno';
  var mongoConnection = null;
  var mongoDBDatabase;


app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//var postData = require('./postData');



app.get('/', function (req, res) {
var allPosts = mongoDBDatabase.collection('posts');

  allPosts.find({}).toArray(function (err, results) {
    if (err) {
      res.status(500).send("Error fetching people from DB");
    } else {
      console.log("== query results:", results);
      res.status(200).render('postPage', {
      postItems: results
      });
    }
  });
});





app.use(express.static('public'));

MongoClient.connect(mongoURL, function (err, db) {
  if (err) {
    throw err;
  }
  mongoDBDatabase = db;

});
app.listen(port, function () {
  console.log("== Server listening on port 3000");
});
