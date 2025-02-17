const express = require('express');
const app = express();
const PORT = 3000;

app.get('/api/content', (req, res) => {
  const content = [
    { title: 'Movie 1', thumbnail: 'movie1.jpg' },
    { title: 'Movie 2', thumbnail: 'movie2.jpg' },
  ];
  res.json(content);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});