require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/generate', async (req, res) => {
    try {
        const { prompt } = req.body;
        
        const response = await fetch(
            `https://pixabay.com/api/?key=${process.env.PIXABAY_API_KEY}`
            + `&q=${encodeURIComponent(prompt)}`
            + '&image_type=photo'
            + '&safesearch=true'
            + '&per_page=3'
            + '&order=popular'
            + '&editors_choice=true'
        );

        const data = await response.json();

        if (data.hits && data.hits.length > 0) {
            const randomIndex = Math.floor(Math.random() * Math.min(3, data.hits.length));
            const selectedImage = data.hits[randomIndex];
            
            res.json({
                success: true,
                imageUrl: selectedImage.largeImageURL,
                credit: {
                    name: selectedImage.user,
                    link: `https://pixabay.com/users/${selectedImage.user}`,
                    views: selectedImage.views,
                    downloads: selectedImage.downloads
                }
            });
        } else {
            throw new Error('No images found for this prompt');
        }

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
}); 