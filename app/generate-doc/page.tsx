"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // If using Next.js
import axios from "axios";
// import fileDownload from "js-file-download";

const legalDocuments = [
  "Non-Disclosure Agreement",
  "Employment Contract",
  "Lease Agreement",
  "Power of Attorney",
  "Affidavit",
  "Last Will & Testament",
  "Divorce Settlement",
  "Business Partnership Agreement",
  "Loan Agreement",
  "Service Agreement",
];

export default function GenerateDocument() {
  const [selectedTemplate, setSelectedTemplate] = useState("");
  const [userInput, setUserInput] = useState("");
  const [generatedDocument, setGeneratedDocument] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter(); // Next.js router for redirection

  const [isGenerated, setIsGenerated] = useState(false); // Track if document is generated

  const handleDownloadDoc = () => {
    const blob = new Blob([generatedDocument], { type: "application/msword" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${selectedTemplate}.doc`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
  // Check if the user is logged in
  useEffect(() => {
    const token = localStorage.getItem("LegalDoc-token");
    if (!token) {
      router.push("/login"); // Redirect to login page if not logged in
    }
  }, [router]);

  const handleGenerate = async () => {
    try {
      setIsLoading(true);
      setErrorMessage(""); // Clear previous errors
      const token = localStorage.getItem("LegalDoc-token");
      if (!token) {
        setErrorMessage("User not authenticated. Please log in.");
        return;
      }

      const { data } = await axios.post(
        "/api/documents/generate",
        { template: selectedTemplate, userInput },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setGeneratedDocument(data.document);
      setIsGenerated(true);
    } catch {
      setErrorMessage("Failed to generate document. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <div className="bg-[#2C3E50] text-white p-4">
        <h1 className="text-xl font-bold">Legal Document Generator</h1>
        <p className="text-sm">
          Generate professional legal documents in seconds
        </p>
      </div>

      {/* Error Message Display */}
      {errorMessage && (
        <div className="bg-red-500 text-white p-2 text-center">
          {errorMessage}
        </div>
      )}

      {/* Generated Document (Centered) */}
      {/* Generated Document */}
      <div className="flex-1 flex items-center justify-center p-4 overflow-y-auto">
        {isGenerated && (
          <div className="bg-white text-black p-4 rounded-lg shadow-lg w-full max-w-2xl">
            <div className="flex items-start space-x-2">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-[#2C3E50] rounded-full flex items-center justify-center text-white font-bold">
                  AI
                </div>
              </div>
              {/* Editable Textarea */}
              <textarea
                className="w-full bg-gray-50 p-3 rounded-lg border text-black"
                rows={10}
                value={generatedDocument}
                onChange={(e) => setGeneratedDocument(e.target.value)}
              />
            </div>

            {/* Buttons */}
            <div className="mt-4 flex space-x-2">
              <button
                onClick={handleGenerate}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Regenerate
              </button>
              <button
                onClick={handleDownloadDoc}
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
              >
                Download .DOC
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Input Form (Fixed at Bottom) */}
      <div className="p-4 shadow-lg">
        <div className="max-w-2xl mx-auto">
          <select
            className="w-full h-50 text-black p-2 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={selectedTemplate}
            onChange={(e) => setSelectedTemplate(e.target.value)}
          >
            <option value="">Select a Legal Document</option>
            {legalDocuments.map((doc, index) => (
              <option key={index} value={doc}>
                {doc}
              </option>
            ))}
          </select>

          <textarea
            placeholder="Provide additional details (e.g., names, dates, terms)"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            className="w-full p-2 border text-black rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
          />

          <button
            onClick={handleGenerate}
            disabled={isLoading || !selectedTemplate}
            className="w-full bg-[#2C3E50] text-white p-2 rounded-md hover:bg-blue-700 disabled:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                <span className="ml-2">Generating...</span>
              </div>
            ) : (
              "Generate Document"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
