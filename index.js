var express = require('express');

var app = express();
var PORT = 8000;

app.get('/', function(request, response) {
  response.send('Hello World');
});

app.listen(PORT, function() {
  console.log('Server is listening on port ' + PORT);
});
