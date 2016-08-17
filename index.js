var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Root folder');
});

const port = 3001;

app.listen(port, function () {
  console.log('Example app listening on port ' + port + '!');
});
