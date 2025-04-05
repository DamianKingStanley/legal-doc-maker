"use client";
import React, { useState } from "react";
import { FaFileAlt, FaSearch, FaChevronDown, FaChevronUp } from "react-icons/fa";

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
    "Affidavit",
    "Divorce Settlement",
  ],
};

const LegalDocumentsList = () => {
  const [search, setSearch] = useState("");
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>(
    Object.keys(legalDocuments).reduce((acc, category) => ({ ...acc, [category]: false }), {})
  );

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const filteredDocuments = (category: keyof typeof legalDocuments) =>
    legalDocuments[category].filter((doc) =>
      doc.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Browse Our Legal Document Library
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professionally drafted templates you can customize in minutes
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-2xl mx-auto mb-12">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <FaSearch className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search for contracts, agreements, forms..."
            className="block w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Document Categories */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {Object.keys(legalDocuments).map((category) => (
            <div key={category} className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
              <button
                onClick={() => toggleCategory(category)}
                className={`w-full flex justify-between items-center px-6 py-4 text-left transition-colors ${expandedCategories[category] ? 'bg-blue-50' : 'bg-white hover:bg-gray-50'}`}
              >
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{category}</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {legalDocuments[category as keyof typeof legalDocuments].length} documents available
                  </p>
                </div>
                {expandedCategories[category] ? (
                  <FaChevronUp className="text-blue-500 text-lg" />
                ) : (
                  <FaChevronDown className="text-gray-400 text-lg" />
                )}
              </button>

              {expandedCategories[category] && (
                <div className="bg-white px-6 py-4 border-t border-gray-100">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {filteredDocuments(category as keyof typeof legalDocuments).map((doc) => (
                      <li key={doc}>
                        <a 
                          href="#" // Replace with actual link to document generation
                          className="flex items-start p-3 rounded-lg hover:bg-blue-50 transition-colors group"
                        >
                          <div className="bg-blue-100 p-2 rounded-lg mr-4 group-hover:bg-blue-200 transition-colors">
                            <FaFileAlt className="text-blue-600" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-800">{doc}</h4>
                            <p className="text-sm text-gray-500 mt-1">Generate document →</p>
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">Can you not find what you are looking for?</p>
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all">
            Request Custom Document
          </button>
        </div>
      </div>
    </div>
  );
};

export default LegalDocumentsList;