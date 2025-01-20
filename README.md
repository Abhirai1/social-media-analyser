# Social Media Content Analyzer

A MERN stack application that analyzes social media posts from uploaded documents (PDF/Images) and provides engagement improvement suggestions.

## Features

- 📁 Document Upload (PDF and Images)
  - Drag-and-drop interface
  - File type validation
  - Progress indication
- 📊 Text Analysis
  - PDF text extraction
  - Image OCR (Optical Character Recognition)
  - Text statistics (character count, word count)
  - Basic sentiment analysis
- 💡 Engagement Suggestions
  - AI-powered content recommendations
  - Hashtag suggestions
  - Engagement improvement tips

## Tech Stack

- **Frontend:**
  - React (Vite)
  - TailwindCSS
  - React-Dropzone
  - Axios
- **Backend:**
  - Node.js
  - Express.js
  - MongoDB
  - Multer (file handling)
  - PDF-Parse (PDF text extraction)
  - Tesseract.js (OCR)

## Prerequisites

- Node.js (v14+ recommended)
- MongoDB
- npm or yarn

## Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd social-media-analyzer
   ```

2. **Backend Setup:**
   ```bash
   cd Backend
   npm install
   ```
   Create a `.env` file in the server directory:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000
   ```

3. **Frontend Setup:**
   ```bash
   cd frontend
   npm install
   ```

## Running the Application

1. **Start the Backend:**
   ```bash
   cd server
   npm start
   ```
   Server will run on http://localhost:5000

2. **Start the Frontend:**
   ```bash
   cd client
   npm run dev
   ```
   Frontend will run on http://localhost:5173

## API Endpoints

### POST /api/upload
- Uploads and processes a document
- Request: Multipart form data with 'file' field
- Supports PDF and image files
- Returns processed text and analysis

## Deployment

### Backend Deployment (e.g., on Render):
1. Create a new Web Service
2. Connect your repository
3. Set environment variables:
   - MONGODB_URI
   - PORT
4. Set build command: `npm install`
5. Set start command: `node server.js`

### Frontend Deployment (e.g., on Vercel/Netlify):
1. Connect your repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Update API endpoint in frontend code to match your deployed backend URL

## Environment Variables

### Backend (.env):
```env
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

### Frontend (.env):
```env
VITE_API_URL=your_backend_url
```

## Project Structure

```
social-media-analyzer/
├── client/                 # Frontend React application
│   ├── public/
│   └── src/
│       ├── components/     # React components
│       ├── services/       # API services
│       └── App.jsx
├── server/                 # Backend Node.js application
│   ├── controllers/        # Route controllers
│   ├── models/            # MongoDB models
│   ├── routes/            # API routes
│   ├── services/          # Business logic
│   └── server.js          # Entry point
└── README.md
```

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -am 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a Pull Request

## Error Handling

The application includes comprehensive error handling for:
- File upload failures
- Invalid file types
- Text extraction errors
- Analysis processing errors
- Database connection issues

## Future Enhancements

- Advanced sentiment analysis
- Multiple file upload support
- User authentication
- Historical analysis tracking
- Custom analysis rules
- Export functionality
- Real-time analysis updates

## License

MIT License - feel free to use this project for your own purposes.

## Support

For support, email [your-email] or open an issue in the repository.