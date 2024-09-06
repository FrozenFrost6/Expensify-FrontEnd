const path = require('path');
const express = require('express');
const app = express();

const publicPath = path.join(__dirname, '..', 'build');

// Serve static files
app.use(express.static(publicPath));

// Fallback to serve index.html for all other routes
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(3000, () => {
    console.log('Server is up on port 3000');
});
