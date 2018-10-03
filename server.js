// \brucedell\nodebh\exp\server.js, B. Harmon 9/26/2018
// excursions with Express; develop a web server
// Use Chrome
// JSON Viewer extension to Chrome should be in place
// npm init      npm install express@4.14.0 --save

const express = require('express');
const port = process.env.PORT || 3000;
var app = express();

app.use(express.static(__dirname + '/public'));

// this is a handler for route / or "root"
app.get('/', (req, res) => {    // request & response
  res.send({ name: 'Maria',
    likes: ['raindrops', 'whiskers', 'kettles', 'mittens'] });
});

// another handler, this one for route /about
app.get('/about', (req, res) => {
  res.send('<h1>Make it so</h1>');
});

// handler for route /wha
app.get('/wha', (req, res) => {
  res.send('<h1>Captain, I cannot give you more power</h1>');
});

// handler for route /cubs
app.get('/cubs', (req, res) => {
  res.send({ name: 'Chicago Cubs',
    infield: ['Tinker', 'Evers', 'Chance'] });
});

// handler for route /bad, perhaps for an error
app.get('/bad', (req, res) => {
  res.send({ errorMessage: 'No can do' });
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});                 // port 3000 used; ^C to stop
                    // point browser at localhost:3000
