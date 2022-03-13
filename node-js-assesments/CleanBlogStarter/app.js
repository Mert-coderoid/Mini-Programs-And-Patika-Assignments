// import express
const express = require('express');

// create express app
const app = express();

// catch endpoints
app.get('/', (req, res) => {
  const blog = { id: 1, title: 'Blog title', description: 'Blog description' };
  res.send(blog);
});

// define port
const port = process.env.PORT || 3000;

// listen port
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
