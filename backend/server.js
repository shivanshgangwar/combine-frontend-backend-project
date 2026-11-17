const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
// Middleware
app.use(cors());
app.use(express.json());
// Test API Route
app.get('/api/data', (req, res) => {
    res.json({ message: 'hello from backend ,data is coming from backend' });
});
app.listen(port,() => {
    console.log(`Server is running on http://localhost:${port}`);
})
