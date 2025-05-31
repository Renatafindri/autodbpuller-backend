const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors());
app.use(express.json());

// ✅ Tambahkan ini:
app.get('/', (req, res) => {
  res.send('🚀 Backend is running! Welcome to AutoDBPuller API');
});

// Tambahkan route API kamu lain di bawah sini...

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
