const express = require('express');
const router = express.Router();
const imageController = require('../controllers/imageController');
const upload = require('../middleware/upload');

router.get('/', imageController.getAllImages);
router.post('/upload', upload.single('image'), imageController.uploadImage);
router.delete('/:id', imageController.deleteImage);

module.exports = router; 