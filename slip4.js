const express = require('express');
const app = express();
const port = 3000;

// Student routes
app.get('/students', (req, res) => {
  res.send('Welcome to the Students section!');
});

app.get('/students/:id', (req, res) => {
  const studentId = req.params.id;
  res.send(`Showing details for student with ID ${studentId}`);
});

// Course routes
app.get('/courses', (req, res) => {
  res.send('Welcome to the Courses section!');
});

app.get('/courses/:id', (req, res) => {
  const courseId = req.params.id;
  res.send(`Showing details for course with ID ${courseId}`);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
