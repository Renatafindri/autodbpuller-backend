
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

let dummyData = [];

app.post('/upload', (req, res) => {
  const { name, email } = req.body;
  dummyData.push({ name, email });
  res.status(200).json({ message: 'Data saved' });
});

app.get('/data', (req, res) => {
  res.status(200).json(dummyData);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
