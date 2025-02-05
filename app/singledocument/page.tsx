"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { X, Loader2 } from "lucide-react";

interface Document {
  _id: string;
  template: string;
  content: string;
  createdAt: string;
}

export default function DocumentDetailPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const docId = searchParams.get("id"); // ✅ Correct way in App Router

  const [doc, setDoc] = useState<Document | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDocument() {
      if (!docId) return;
      setLoading(true);
      const token = localStorage.getItem("LegalDoc-token");

      try {
        const res = await fetch(`/api/documents/${docId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        let data;
        try {
          data = await res.json();
        } catch (error) {
          console.error("Error parsing JSON:", error);
          setLoading(false);
          return;
        }

        if (res.ok && data?.document) {
          setDoc(data.document);
        } else {
          console.error("Document not found or API error:", data?.error);
        }
      } catch (error) {
        console.error("Error fetching document:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchDocument();
  }, [docId]);

  const handleDownloadDoc = () => {
    if (!doc) return;
    const content = doc.content;

    const blob = new Blob([content], { type: "application/msword" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${doc.template}.doc`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <Loader2 className="w-12 h-12 animate-spin text-black" />
        <p className="mt-2 text-gray-600">Loading document...</p>
      </div>
    );
  }

  if (!doc) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <p className="text-red-500 text-lg">Document not found.</p>
        <button
          onClick={() => router.back()}
          className="mt-4 px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow-xl rounded-lg border border-gray-200">
      <button
        onClick={() => router.back()}
        className="mb-4 flex items-center text-gray-500 hover:text-gray-700 transition"
      >
        <X className="w-5 h-5 mr-2" /> Back
      </button>

      <h1 className="text-2x1 md:text-3x1 font-bold text-gray-900">
        {doc.template}
      </h1>
      <p className="text-gray-500 text-sm mb-4">
        {new Date(doc.createdAt).toLocaleString()}
      </p>

      <div className="mt-4 text-sm p-6 border rounded-lg bg-gray-50 text-gray-900 whitespace-pre-wrap shadow-md">
        {doc.content}
      </div>

      <button
        onClick={handleDownloadDoc}
        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Download as DOCX
      </button>
    </div>
  );
}
