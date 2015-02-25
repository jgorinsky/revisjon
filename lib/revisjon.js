var _ = require('lodash');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.text({
  type: '*/*'
}));

app.all('/*', function (req, res) {
  console.log(req.method + ' ' + req.originalUrl);
  for(header in req.headers) {
    console.log('* %s: %s', header, req.get(header));
  }

  if(_.isEmpty(req.body)) {
    req.body = '[no content]';
  }

  console.log('> %s', req.body);
  console.log();


  res.sendStatus(204);
});

var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s\n', host, port);
});
