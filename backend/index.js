const express = require('express');
const cors = require('cors');
const generationRoutes = require('./routes/generationRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get('/test', (req, res) => {
    res.json({ message: 'Backend is working!' });
});

// Routes
app.use('/api/generate', generationRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}); 