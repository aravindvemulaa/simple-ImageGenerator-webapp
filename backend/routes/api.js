const express = require('express');
const router = express.Router();
const OpenAI = require('openai');

// Initialize OpenAI with your API key
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY // Make sure this is your actual OpenAI API key
});

router.post('/generate', async (req, res) => {
    try {
        const { prompt } = req.body;
        console.log("Received prompt:", prompt); // Debug log

        if (!prompt) {
            return res.status(400).json({
                success: false,
                error: 'Prompt is required'
            });
        }

        // Generate image using DALL-E
        const response = await openai.images.generate({
            prompt: prompt,
            n: 1,                // Number of images to generate
            size: "1024x1024",   // Image size
            response_format: 'url'
        });

        console.log("OpenAI Response:", response); // Debug log

        // Send back the generated image URL
        res.json({
            success: true,
            imageUrl: response.data[0].url
        });

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({
            success: false,
            error: error.message || 'Failed to generate image'
        });
    }
});

module.exports = router; 