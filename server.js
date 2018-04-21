//Inital vars
const express = require('express');
const path = require('path');
const app = express();

//Select build folder
app.use(express.static(path.join(__dirname, '/client/build')));

//- API test route for pinging
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

//- Favicon.ico
app.get('/favicon.ico', function (req, res) {
  res.sendFile(path.join(__dirname, '/client/build', 'favicon.ico'));
});

//- Manifest.json
app.get('/manifest.json', function (req, res) {
  res.sendFile(path.join(__dirname, '/client/build', 'manifest.json'));
});

//- Use index.html for all other routes
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
});

//Run Server
app.listen(9000);