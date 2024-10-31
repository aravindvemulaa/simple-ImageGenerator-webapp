const OpenAI = require('openai');

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

exports.generateImage = async (req, res) => {
    try {
        const { prompt } = req.body;

        if (!prompt) {
            return res.status(400).json({ message: "Please provide a prompt" });
        }

        const response = await openai.images.generate({
            prompt: prompt,
            n: 1,
            size: "1024x1024",
        });

        res.status(200).json({
            success: true,
            data: response.data[0].url
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            error: 'The image could not be generated'
        });
    }
}; 