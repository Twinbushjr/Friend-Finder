var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.static('app/public'));
app.use(express.urlencoded({
 extended: true
}));
app.use(express.json());

const htmlRouter = require('./app/routing/htmlRoutes.js');
const apiRouter = require('./app/routing/apiRoutes.js');

app.use(htmlRouter);
app.use(apiRouter);

app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
 });