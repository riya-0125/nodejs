const express = require('express');
const fs = require('fs');
const app = express();
const port = 6080;

app.get('/', (req, res) => {
  fs.readFile('first.txt', 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading the file');
    } else {
      res.send(data);
    }
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
