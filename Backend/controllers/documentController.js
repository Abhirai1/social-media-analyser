const Document = require("../models/Document");
const {
  extractTextFromPDF,
  extractTextFromImage,
} = require("../service/textExtractor");

const analyzeText = (text) => {
  // Basic analysis example - expand based on requirements
  return {
    characterCount: text.length,
    wordCount: text.split(/\s+/).length,
    sentimentScore: 0, // Implement sentiment analysis here
    suggestions: [
      "Consider adding more engaging hashtags",
      "Try including a call-to-action",
    ],
  };
};

exports.uploadDocument = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const fileType = req.file.mimetype;
    let extractedText;

    if (fileType.includes("pdf")) {
      extractedText = await extractTextFromPDF(req.file.buffer);
    } else if (fileType.includes("image")) {
      extractedText = await extractTextFromImage(req.file.buffer);
    } else {
      return res.status(400).json({ message: "Unsupported file type" });
    }

    const analysis = analyzeText(extractedText);

    const document = new Document({
      fileName: req.file.originalname,
      fileType,
      text: extractedText,
      analysis,
    });

    await document.save();

    res.status(201).json({
      message: "Document processed successfully",
      document,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
