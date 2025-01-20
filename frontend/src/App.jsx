import { useState } from "react";
import FileUpload from "./components/FileUpload";
import AnalysisResults from "./components/AnalysisResults";

function App() {
  const [analysisResults, setAnalysisResults] = useState(null);

  const handleUploadSuccess = (document) => {
    setAnalysisResults(document.analysis);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">
          Social Media Content Analyzer
        </h1>
        <FileUpload onUploadSuccess={handleUploadSuccess} />
        <AnalysisResults analysis={analysisResults} />
      </div>
    </div>
  );
}

export default App;
