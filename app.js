const express = require('express');
const app = express();
const path = require('path');
const data = require('./data/data.json');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/data', (req, res) => {
  res.json(data);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
