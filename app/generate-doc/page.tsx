"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation"; // If using Next.js
import axios from "axios";
import SignatureCanvas from "react-signature-canvas";
import DocumentHistorySidebar from "../components/DocumentHistorySidebar";

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
  const [isGenerated, setIsGenerated] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [signature, setSignature] = useState<string | null>(null);
  const sigCanvas = useRef<SignatureCanvas>(null);

  const router = useRouter();

  const handleDownloadDoc = () => {
    if (!generatedDocument) {
      alert("No document to download!");
      return;
    }

    const docContent = `
      <html xmlns:o='urn:schemas-microsoft-com:office:office' 
            xmlns:w='urn:schemas-microsoft-com:office:word' 
            xmlns='http://www.w3.org/TR/REC-html40'>
        <head><meta charset='utf-8'><title>${selectedTemplate}</title></head>
        <body>
          <h2>${selectedTemplate}</h2>
          <div>${generatedDocument}</div>
          ${
            signature
              ? `<img src="${signature}" alt="Signature" width="200px" height="100px"/>`
              : ""
          }
        </body>
      </html>
    `;

    const blob = new Blob(["\ufeff", docContent], {
      type: "application/msword",
    });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `${selectedTemplate}.doc`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleGenerate = async () => {
    try {
      setIsLoading(true);
      setErrorMessage("");
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

  const handleSaveSignature = () => {
    if (sigCanvas.current) {
      const signatureData = sigCanvas.current
        .getTrimmedCanvas()
        .toDataURL("image/png");
      setSignature(signatureData);
    }
  };

  const handleClearSignature = () => {
    if (sigCanvas.current) {
      sigCanvas.current.clear();
    }
    setSignature(null);
  };

  useEffect(() => {
    const token = localStorage.getItem("LegalDoc-token");
    if (!token) {
      router.push("/login");
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <DocumentHistorySidebar
        id="document-history-sidebar"
        isOpen={isSidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onOpen={() => setSidebarOpen(true)}
      />
      <div className="bg-[#2C3E50] text-white text-center p-4">
        <h1 className="text-xl font-bold">Legal Document Generator</h1>
        <p className="text-sm">
          Generate professional legal documents in seconds
        </p>
      </div>

      {errorMessage && (
        <div className="bg-red-500 text-white p-2 text-center">
          {errorMessage}
        </div>
      )}

      <div className="flex-1 flex items-center justify-center p-4 overflow-y-auto">
        {isGenerated && (
          <div className="bg-white text-black p-4 rounded-lg shadow-lg w-full max-w-2xl">
            <div className="flex items-start space-x-2">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-[#2C3E50] rounded-full flex items-center justify-center text-white font-bold">
                  AI
                </div>
              </div>
              <textarea
                className="w-full bg-gray-50 p-3 rounded-lg border text-black"
                rows={10}
                value={generatedDocument}
                onChange={(e) => setGeneratedDocument(e.target.value)}
              />
            </div>

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
            <div className="mt-6 flex flex-col items-center w-full max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
              <h2 className="text-lg font-bold text-gray-800 mb-3">
                Add Your Signature
              </h2>

              {/* Signature Canvas */}
              <div className="w-full border border-gray-300 rounded-lg overflow-hidden">
                <SignatureCanvas
                  ref={sigCanvas}
                  canvasProps={{
                    className: "signature-canvas bg-gray-100 w-full h-40",
                  }}
                />
              </div>

              {/* Buttons */}
              <div className="mt-4 flex w-full justify-between">
                <button
                  onClick={handleSaveSignature}
                  className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all"
                >
                  Save Signature
                </button>
                <button
                  onClick={handleClearSignature}
                  className="flex-1 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-all ml-2"
                >
                  Clear Signature
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

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
            className="w-full bg-[#2C3E50] text-white p-2 rounded-md hover:bg-blue-950 disabled:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
