const express = require('express');
const router = express.Router();
const axios = require('axios');

router.post('/', async (req, res) => {
    try {
        const response = await axios.get('https://api.thedogapi.com/v1/images/search');
        
        if (response.data && response.data.length > 0) {
            res.status(200).json({
                success: true,
                imageUrl: response.data[0].url,
                message: 'Image generated successfully'
            });
        } else {
            throw new Error('No image found');
        }

    } catch (error) {
        console.error('Error details:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to generate image',
            details: error.message
        });
    }
});

module.exports = router; 