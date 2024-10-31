const Image = require('../models/Image');

// Get all images
exports.getAllImages = async (req, res) => {
    try {
        const images = await Image.find();
        res.status(200).json(images);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Upload image
exports.uploadImage = async (req, res) => {
    try {
        const newImage = new Image({
            title: req.body.title,
            imageUrl: req.body.imageUrl,
            description: req.body.description
        });
        const savedImage = await newImage.save();
        res.status(201).json(savedImage);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete image
exports.deleteImage = async (req, res) => {
    try {
        await Image.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Image deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}; 