"use client";
import { useEffect, useState } from "react";
import { X, Menu, FileText, Clock, Search } from "lucide-react";
import Link from "next/link";

interface DocumentHistorySidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

interface Document {
  _id: string;
  template: string;
  content: string;
  createdAt: string;
}

export default function DocumentHistorySidebar({
  isOpen,
  onClose,
  onOpen,
}: DocumentHistorySidebarProps) {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchDocuments() {
      setIsLoading(true);
      try {
        const token = localStorage.getItem("LegalDoc-token");
        const res = await fetch("/api/history", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        if (res.ok) {
          setDocuments(data.documents);
        }
      } catch (error) {
        console.error("Failed to fetch documents:", error);
      } finally {
        setIsLoading(false);
      }
    }

    if (isOpen) {
      fetchDocuments();
    }
  }, [isOpen]);

  const filteredDocuments = documents.filter((doc) =>
    doc.template.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <>
      {/* Floating Open Button */}
      {!isOpen && (
        <button
          onClick={onOpen}
          className="fixed top-20 left-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white p-3 rounded-full shadow-lg z-40 hover:shadow-xl transition-all hover:scale-105"
          aria-label="Open document history"
        >
          <Menu className="w-5 h-5" />
        </button>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white shadow-xl transition-all duration-300 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } z-50 lg:w-96`}
      >
        {/* Sidebar Header */}
        <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="flex items-center">
            <FileText className="w-5 h-5 mr-2" />
            <h2 className="text-lg font-semibold">Document History</h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-white/10 rounded-full transition-colors"
            aria-label="Close sidebar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Bar */}
        <div className="p-4 border-b border-gray-200">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search documents..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            />
          </div>
        </div>

        {/* Document List */}
        <div className="overflow-y-auto h-[calc(100%-120px)]">
          {isLoading ? (
            <div className="flex justify-center items-center h-40">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : filteredDocuments.length === 0 ? (
            <div className="text-center p-8">
              <FileText className="w-12 h-12 mx-auto text-gray-300 mb-4" />
              <p className="text-gray-500">
                {searchQuery
                  ? "No matching documents found"
                  : "No documents yet"}
              </p>
              {!searchQuery && (
                <Link
                  href="/generate-doc"
                  className="mt-4 inline-block text-blue-600 hover:underline"
                >
                  Create your first document
                </Link>
              )}
            </div>
          ) : (
            <ul className="divide-y divide-gray-200">
              {filteredDocuments.map((doc) => (
                <li
                  key={doc._id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <Link
                    href={`/singledocument?id=${doc._id}`}
                    className="block p-4"
                  >
                    <div className="flex items-start">
                      <div className="bg-blue-100 p-2 rounded-lg mr-3">
                        <FileText className="w-4 h-4 text-blue-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-medium text-gray-900 truncate">
                          {doc.template}
                        </h3>
                        <div className="flex items-center mt-1 text-xs text-gray-500">
                          <Clock className="w-3 h-3 mr-1" />
                          <span>{formatDate(doc.createdAt)}</span>
                        </div>
                        <p className="mt-2 text-xs text-gray-500 truncate">
                          {doc.content.substring(0, 80)}...
                        </p>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gray-50 border-t border-gray-200 text-center">
          <p className="text-xs text-gray-500">
            {filteredDocuments.length} document
            {filteredDocuments.length !== 1 ? "s" : ""} shown
          </p>
        </div>
      </div>

      {/* Overlay when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 backdrop-blur-sm"
          onClick={onClose}
        />
      )}
    </>
  );
}
