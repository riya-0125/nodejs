const express = require('express')
const path = require('path')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'index.html'));
})

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname,'contact.html'));
  })

  app.get('/recipe', (req, res) => {
    res.sendFile(path.join(__dirname,'recipe.html'));
  })

 app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
 });