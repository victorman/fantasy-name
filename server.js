const path = require('path');
const express = require('express');
const app = express();

app.use(express.logger('dev'));

// Run the app by serving the static files
// in the dist directory

app.use(express.static(__dirname + '/dist'));

// Start the app by listening on the default
// Heroku port

app.listen(process.env.PORT || 5000);

// For all GET requests, send back index.html
// so that PathLocationStrategy can be used

app.request.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});
