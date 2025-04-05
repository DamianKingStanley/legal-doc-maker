"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import DocumentHistorySidebar from "../components/DocumentHistorySidebar";
import { FileText, Download, RefreshCw, ChevronDown, Plus } from "lucide-react";

const legalDocuments = [
  { name: "Non-Disclosure Agreement", category: "Business" },
  { name: "Employment Contract", category: "Employment" },
  { name: "Lease Agreement", category: "Real Estate" },
  { name: "Power of Attorney", category: "Personal" },
  { name: "Affidavit", category: "Legal" },
  { name: "Last Will & Testament", category: "Personal" },
  { name: "Divorce Settlement", category: "Family" },
  { name: "Business Partnership Agreement", category: "Business" },
  { name: "Loan Agreement", category: "Finance" },
  { name: "Service Agreement", category: "Business" },
  { name: "Non-Compete Agreement", category: "Employment" },
  { name: "Consulting Agreement", category: "Business" },
  { name: "Independent Contractor Agreement", category: "Employment" },
  { name: "Sales Agreement", category: "Business" },
  { name: "Offer Letter", category: "Employment" },
  { name: "Employee Handbook", category: "Employment" },
  { name: "Severance Agreement", category: "Employment" },
  { name: "Non-Solicitation Agreement", category: "Employment" },
  { name: "Sublease Agreement", category: "Real Estate" },
  { name: "Eviction Notice", category: "Real Estate" },
  { name: "Property Sale Agreement", category: "Real Estate" },
  { name: "Living Will", category: "Personal" },
  { name: "Prenuptial Agreement", category: "Family" },
  { name: "Child Custody Agreement", category: "Family" },
];

export default function GenerateDocument() {
  const [selectedTemplate, setSelectedTemplate] = useState("");
  const [userInput, setUserInput] = useState("");
  const [generatedDocument, setGeneratedDocument] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const router = useRouter();
  const [isGenerated, setIsGenerated] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [userPlan, setUserPlan] = useState("Free");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = Array.from(
    new Set(legalDocuments.map((doc) => doc.category))
  );

  const handleDownloadDoc = () => {
    const blob = new Blob([generatedDocument], { type: "application/msword" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${selectedTemplate.replace(/ /g, "_")}.doc`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  useEffect(() => {
    const token = localStorage.getItem("LegalDoc-token");
    if (!token) {
      router.push("/login");
    } else {
      axios
        .get("/api/user/subscription", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setUserPlan(response.data.subscriptionPlan || "Free");
        })
        .catch(() => {
          setErrorMessage("Failed to fetch user data.");
        });
    }
  }, [router]);

  const handleGenerate = async () => {
    try {
      setIsLoading(true);
      setErrorMessage("");
      setSuccessMessage("");
      const token = localStorage.getItem("LegalDoc-token");
      if (!token) {
        setErrorMessage("Please log in to generate documents");
        router.push("/login");
        return;
      }

      const { data } = await axios.post(
        "/api/documents/generate",
        { template: selectedTemplate, userInput },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setGeneratedDocument(data.document);
      setIsGenerated(true);
      setSuccessMessage("Document generated successfully!");
      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (error) {
      setErrorMessage(
        axios.isAxiosError(error) && error.response?.data?.message
          ? error.response.data.message
          : "Failed to generate document. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <button
            onClick={() => setSidebarOpen(true)}
            className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors"
          >
            <FileText className="w-5 h-5" />
            <span>Document History</span>
          </button>
          <p className="text-sm hidden md:block">
            {userPlan === "Premium" ? "Premium Plan" : "Free Plan"}
          </p>
        </div>
      </header>

      {/* Document History Sidebar */}
      <DocumentHistorySidebar
        isOpen={isSidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onOpen={() => setSidebarOpen(true)}
      />

      {/* Messages */}
      {errorMessage && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mx-4 mt-4 rounded-lg">
          <p>{errorMessage}</p>
        </div>
      )}
      {successMessage && (
        <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mx-4 mt-4 rounded-lg">
          <p>{successMessage}</p>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 container mx-auto p-4 flex flex-col lg:flex-row gap-8">
        {/* Document Selection Panel */}
        <div className="lg:w-1/3 bg-white rounded-xl shadow-md p-6 h-fit">
          <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
            <Plus className="w-5 h-5 mr-2 text-blue-600" />
            Create New Document
          </h2>

          <div className="space-y-6">
            {/* Template Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Document Type
              </label>
              <div className="space-y-2">
                {categories.map((category) => (
                  <div
                    key={category}
                    className="border rounded-lg overflow-hidden"
                  >
                    <button
                      onClick={() =>
                        setActiveCategory(
                          activeCategory === category ? null : category
                        )
                      }
                      className="w-full flex justify-between items-center px-4 py-3 bg-gray-50 hover:bg-gray-100"
                    >
                      <span className="font-medium text-gray-800">
                        {category}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-500 transition-transform ${
                          activeCategory === category
                            ? "transform rotate-180"
                            : ""
                        }`}
                      />
                    </button>
                    {activeCategory === category && (
                      <div className="p-2 space-y-2">
                        {legalDocuments
                          .filter((doc) => doc.category === category)
                          .map((doc, index) => (
                            <button
                              key={index}
                              onClick={() => setSelectedTemplate(doc.name)}
                              disabled={userPlan === "Free" && index >= 5}
                              className={`w-full text-left px-4 py-2 rounded-md text-sm ${
                                selectedTemplate === doc.name
                                  ? "bg-blue-100 text-blue-800"
                                  : "hover:bg-gray-100"
                              } ${
                                userPlan === "Free" && index >= 5
                                  ? "text-gray-400 cursor-not-allowed"
                                  : "text-gray-700"
                              }`}
                            >
                              {doc.name}
                              {userPlan === "Free" && index >= 5 && (
                                <span className="ml-2 text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                                  Premium
                                </span>
                              )}
                            </button>
                          ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Details */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Additional Details
              </label>
              <textarea
                placeholder="Names, dates, specific terms, etc."
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                rows={4}
              />
            </div>

            {/* Generate Button */}
            <button
              onClick={handleGenerate}
              disabled={isLoading || !selectedTemplate}
              className={`w-full py-3 px-4 rounded-lg font-medium text-white transition-all flex items-center justify-center ${
                isLoading || !selectedTemplate
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 shadow-md hover:shadow-lg"
              }`}
            >
              {isLoading ? (
                <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
              ) : (
                <FileText className="w-5 h-5 mr-2" />
              )}
              Generate Document
            </button>
          </div>
        </div>

        {/* Document Preview Panel */}
        <div className="lg:w-2/3 bg-white rounded-xl shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-800">
              {selectedTemplate || "Document Preview"}
            </h2>
            {isGenerated && (
              <button
                onClick={handleDownloadDoc}
                className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <Download className="w-5 h-5" />
                <span>Download</span>
              </button>
            )}
          </div>

          {isGenerated ? (
            <div className="border rounded-lg p-6 bg-gray-50">
              <textarea
                className="w-full min-h-[500px] p-4 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition font-mono text-sm"
                value={generatedDocument}
                onChange={(e) => setGeneratedDocument(e.target.value)}
              />
              <div className="mt-4 flex justify-end space-x-3">
                <button
                  onClick={() => {
                    setGeneratedDocument("");
                    setIsGenerated(false);
                  }}
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Clear
                </button>
                <button
                  onClick={handleGenerate}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Regenerate
                </button>
              </div>
            </div>
          ) : (
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
              <FileText className="w-12 h-12 mx-auto text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-500">
                {selectedTemplate
                  ? "Click 'Generate Document' to create your legal document"
                  : "Select a document type to get started"}
              </h3>
              {selectedTemplate && (
                <p className="mt-2 text-sm text-gray-400">
                  Provide any additional details in the input field for better
                  results
                </p>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
