const express=require('express')
const app=express()
const fs=require('fs')

app.use(express.urlencoded({ extended: true }));
//app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/ind.html');
});

app.post('/append', (req, res) => {
  const { firstFile, secondFile } = req.body;
  
  fs.readFile(firstFile, 'utf8', (err, data) => {
    if (err) {
      res.send('Error reading the first file');
    } else {
      fs.appendFile(secondFile, data, (err) => {
        if (err) {
          res.send('Error appending the file');
        } else {
          res.send('File appended successfully');
        }
      });
    }
  });
});

app.listen(4500);
