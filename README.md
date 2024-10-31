# Image Generator Web Application

A simple web application that generates images based on user prompts using the Pixabay API. Built with React.js frontend and Node.js/Express.js backend.

## Features

- 🔍 Search images using text descriptions
- 🖼️ High-quality images from Pixabay
- 🔄 "Try Another" option for different results
- 📱 Responsive design
- ⚡ Fast image loading
- 💳 Free to use

## Live Demo

[View Live Demo](https://your-demo-link.com)

## Tech Stack

### Frontend
- React.js
- CSS3
- Fetch API

### Backend
- Node.js
- Express.js
- Pixabay API

## Quick Start

### Prerequisites
- Node.js installed
- Pixabay API key

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/image-generator.git
   cd image-generator
   ```

2. Install dependencies
   ```bash
   # Install backend dependencies
   cd backend
   npm install

   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

3. Configure environment variables
   ```bash
   # In the backend directory, create a .env file
   PIXABAY_API_KEY=your_pixabay_api_key
   PORT=5000
   ```

4. Start the application
   ```bash
   # Start backend server (from backend directory)
   npm start

   # Start frontend development server (from frontend directory)
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000`

## API Configuration

To use this application, you'll need a Pixabay API key:
1. Sign up at [Pixabay](https://pixabay.com/api/docs/)
2. Get your API key from the dashboard
3. Add it to your `.env` file

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature-name`)
5. Create a new Pull Request

