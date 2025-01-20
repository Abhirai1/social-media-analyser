import React from "react";

const AnalysisResults = ({ analysis }) => {
  if (!analysis) return null;

  return (
    <div className="max-w-xl mx-auto mt-8 p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Analysis Results</h2>

      <div className="space-y-4">
        <div>
          <h3 className="font-semibold">Statistics</h3>
          <p>Characters: {analysis.characterCount}</p>
          <p>Words: {analysis.wordCount}</p>
          <p>Sentiment Score: {analysis.sentimentScore}</p>
        </div>

        <div>
          <h3 className="font-semibold">Suggestions</h3>
          <ul className="list-disc pl-5">
            {analysis.suggestions.map((suggestion, index) => (
              <li key={index}>{suggestion}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AnalysisResults;
