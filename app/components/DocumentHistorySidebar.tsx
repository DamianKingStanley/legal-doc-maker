"use client";
import { useEffect, useState } from "react";
import { X, Menu } from "lucide-react";
import { useRouter } from "next/navigation";

interface DocumentHistorySidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
  id: string;
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
  const router = useRouter();

  useEffect(() => {
    async function fetchDocuments() {
      const token = localStorage.getItem("LegalDoc-token");
      const res = await fetch("/api/history", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (res.ok) {
        setDocuments(data.documents);
      }
    }

    if (isOpen) {
      fetchDocuments();
    }
  }, [isOpen]);

  return (
    <>
      {/* Floating Open Button */}
      {!isOpen && (
        <button
          onClick={onOpen}
          className=" top-20 bg-transparent left-1 text-white p-2  shadow-lg z-50"
        >
          <Menu className="w-6 h-6" />
        </button>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white shadow-xl transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } z-50 md:w-96`}
      >
        <div className="p-4 border-b flex justify-between items-center bg-gray-100">
          <h2 className="text-sm md:text-lg font-semibold">Document History</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-200 rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 overflow-y-auto h-[calc(100%-50px)]">
          {documents.length === 0 ? (
            <p className="text-gray-600">No documents found.</p>
          ) : (
            <ul>
              {documents.map((doc) => (
                <li key={doc._id} className="p-3 border-b">
                  <h3
                    className="font-semibold cursor-pointer text-sm"
                    onClick={() => router.push(`/singledocument?id=${doc._id}`)}
                  >
                    {doc.template}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    {new Date(doc.createdAt).toLocaleString()}
                  </p>
                  {/* <p className="mt-2 text-sm">
                  {doc.content.substring(0, 100)}...
                </p> */}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}
