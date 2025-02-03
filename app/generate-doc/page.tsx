"use client";

import { useState } from "react";
import axios from "axios";

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
  const [document, setDocument] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async () => {
    try {
      setIsLoading(true);
      const token = localStorage.getItem("LegalDoc-token");
      if (!token) {
        console.error("User not authenticated");
        return;
      }
      const { data } = await axios.post(
        "/api/documents/generate",
        { template: selectedTemplate, userInput },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setDocument(data.document);
    } catch (error) {
      console.error("Error generating document:", error);
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

      {/* Generated Document (Centered) */}
      <div className="flex-1 flex items-center justify-center p-4 overflow-y-auto">
        {document && (
          <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-2xl">
            <div className="flex items-start space-x-2">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-[#2C3E50] rounded-full flex items-center justify-center text-white font-bold">
                  AI
                </div>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg max-w-[80%]">
                <pre className="whitespace-pre-wrap break-words">
                  {document}
                </pre>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input Form (Fixed at Bottom) */}
      <div className="p-4 shadow-lg">
        <div className="max-w-2xl mx-auto">
          <select
            className="w-full h-50  p-2 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            className="w-full p-2 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
