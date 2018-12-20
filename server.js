const path = require('path');
const express = require('express');
const app = express();

// Run the app by serving the static files
// in the dist directory

app.use(express.static(__dirname + '/dist'));

// Start the app by listening on the default
// Heroku port

app.listen(process.env.PORT || 5000);

// so that PathLocationStrategy can be used


app.get('/*', function(req, res, next) {
  req.url.replace(/&?fbclid(=|%3D|%3d)[^#$/]*/gi, '');
  next();
}, function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/fantasy-name' + req.url));
});
// https://nodejs.org/api/http.html#http_class_http_incomingmessage
