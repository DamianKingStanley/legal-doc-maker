"use client";
import React, { useState } from "react";
import { FaFileAlt, FaSearch } from "react-icons/fa";

const legalDocuments = {
  "Business & Contracts": [
    "Business Partnership Agreement",
    "Non-Compete Agreement",
    "Service Agreement",
    "Consulting Agreement",
    "Independent Contractor Agreement",
    "Sales Agreement",
    "Non-Disclosure Agreement",
    "Employment Contract",
  ],
  "Employment & HR": [
    "Offer Letter",
    "Employee Handbook",
    "Severance Agreement",
    "Non-Solicitation Agreement",
    "Service Agreement",
  ],
  "Real Estate & Property": [
    "Lease Agreement",
    "Sublease Agreement",
    "Eviction Notice",
    "Property Sale Agreement",
    "Power of Attorney",
  ],
  "Finance & Banking": [
    "Loan Agreement",
    "Promissory Note",
    "Debt Settlement Agreement",
    "Investment Agreement",
  ],
  "Personal & Family": [
    "Last Will and Testament",
    "Living Will",
    "Prenuptial Agreement",
    "Child Custody Agreement",
    "Lease Agreement",
    "Affidavit",
    "Divorce Settlement",
  ],
};

const LegalDocumentsList = () => {
  const [search, setSearch] = useState("");
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const filteredDocuments = (category: keyof typeof legalDocuments) =>
    legalDocuments[category].filter((doc) =>
      doc.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div className="bg-white text-black">
      <div className="max-w-4xl mx-auto py-10 px-6  my-8 text-black bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Legal Documents List
        </h2>
        <div className="flex items-center bg-gray-100 px-4 py-2 rounded-lg mb-6">
          <FaSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search legal documents..."
            className="w-full bg-transparent outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div>
          {Object.keys(legalDocuments).map((category) => (
            <div
              key={category}
              className="mb-4 border rounded-lg overflow-hidden"
            >
              <button
                className="w-full text-left px-4 py-2 bg-gray-200 font-semibold flex justify-between items-center"
                onClick={() =>
                  setExpandedCategory(
                    expandedCategory === category ? null : category
                  )
                }
              >
                {category}
                <span>{expandedCategory === category ? "▲" : "▼"}</span>
              </button>
              {expandedCategory === category && (
                <ul className="p-4 bg-gray-50">
                  {filteredDocuments(
                    category as keyof typeof legalDocuments
                  ).map((doc) => (
                    <li key={doc} className="flex items-center gap-2 py-1">
                      <FaFileAlt className="text-blue-500" /> {doc}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LegalDocumentsList;
