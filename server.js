var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var app = express();
var port = process.env.PORT || 3000;


app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');




var postData = require('./postData');

app.get('/', function (req, res, next) {

res.status(200).render('postPage', {
postItems: postData

});

});

app.use(express.static('public'));

app.listen(port, function () {
  console.log("== Server listening on port", port);
});
