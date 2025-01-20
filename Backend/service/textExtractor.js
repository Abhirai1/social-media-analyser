const pdf = require("pdf-parse");
const Tesseract = require("tesseract.js");

const extractTextFromPDF = async (buffer) => {
  try {
    const data = await pdf(buffer);
    return data.text;
  } catch (error) {
    throw new Error("Failed to extract text from PDF");
  }
};

const extractTextFromImage = async (buffer) => {
  try {
    const {
      data: { text },
    } = await Tesseract.recognize(buffer, "eng", { logger: () => {} });
    return text;
  } catch (error) {
    throw new Error("Failed to extract text from image");
  }
};

module.exports = {
  extractTextFromPDF,
  extractTextFromImage,
};
