const express = require('express');
const app = express();

app.set('json spaces', 0);
app.set('etag', false);

const PORT = 5000;

app.get('/', (req, res) => {
  res.status(200).json({
    message: "API is running"
  });
});

app.get('/health', (req, res) => {
  res.status(200).json({
    message: "healthy"
  });
});

app.get('/me', (req, res) => {
  res.status(200).json({
    name: "Oluwaseyi Idowu",
    email: "idowuseyi22@gmail.com",
    github: "https://github.com/idowuseyi"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});