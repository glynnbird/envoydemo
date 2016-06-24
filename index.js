var express = require('express'),
  app = express(),
  cfenv = require('cfenv'),
  appEnv = cfenv.getAppEnv();

//setup static public directory
app.use(express.static(__dirname + '/public')); 

app.get('/config.js', function(req, res) {
  res.header('Content-type','application/json');
  var url = process.env.ENVOY_URL || 'http://localhost:8000';
  res.send('var envoy = ' + JSON.stringify(url) + ';\n');
})
app.listen(appEnv.port, function () {
  console.log('Example app started on', appEnv.url);
});