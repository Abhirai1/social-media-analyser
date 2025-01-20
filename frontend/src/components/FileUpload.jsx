import React, { useState } from "react";
import { useDropzone } from "react-dropzone";

const FileUpload = ({ onUploadSuccess }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const onDrop = async (acceptedFiles) => {
    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append("file", acceptedFiles[0]);

    try {
      const response = await fetch("https://social-media-analyser-backend.onrender.com/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Upload failed");
      }

      onUploadSuccess(data.document);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
      "image/*": [".png", ".jpg", ".jpeg"],
    },
  });

  return (
    <div className="max-w-xl mx-auto mt-8">
      <div
        {...getRootProps()}
        className={`p-8 border-2 border-dashed rounded-lg text-center cursor-pointer
          ${isDragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"}`}
      >
        <input {...getInputProps()} />
        {loading ? (
          <p>Processing...</p>
        ) : (
          <p>Drag & drop a PDF or image here, or click to select</p>
        )}
      </div>
      {error && (
        <div className="mt-4 p-4 bg-red-100 text-red-700 rounded">{error}</div>
      )}
    </div>
  );
};

export default FileUpload;
