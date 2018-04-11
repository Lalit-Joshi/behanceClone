var express = require('express');
var path = require('path');

const app = express();
const port = 3000;

app.use('/', express.static('dist'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

app.listen(port, function() {
  console.log("Server Started at port "+port);
});
