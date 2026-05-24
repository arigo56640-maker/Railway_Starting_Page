const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Root → index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Static assets (images, certificates)
app.get('/profile.jpg', (req, res) => res.sendFile(path.join(__dirname, 'profile.jpg')));
app.get('/profile2.png', (req, res) => res.sendFile(path.join(__dirname, 'profile2.png')));
app.get('/profile3.png', (req, res) => res.sendFile(path.join(__dirname, 'profile3.png')));
app.get('/profile4.png', (req, res) => res.sendFile(path.join(__dirname, 'profile4.png')));
app.get('/profile5.png', (req, res) => res.sendFile(path.join(__dirname, 'profile5.png')));
app.use('/Certificate', express.static(path.join(__dirname, 'Certificate')));

// Catch-all → index.html
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
