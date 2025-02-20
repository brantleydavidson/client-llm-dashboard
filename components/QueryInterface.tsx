"use client";

import React, { useState } from 'react';
import { analysisDatabase } from '../src/lib/data';
import type { Finding } from '../src/lib/types';

// ... at the top of your component, add these type definitions:
type Platform = 'chatgpt' | 'claude' | 'grok' | 'gemini' | 'perplexity';
type Category = 'technical' | 'brand' | 'content';
type Subcategory = 'specifications' | 'manufacturing' | 'applications';

export default function QueryInterface() {
  const [platform, setPlatform] = useState<Platform>('chatgpt');
  const [category, setCategory] = useState<Category>('technical');
  const [subcategory, setSubcategory] = useState<Subcategory>('specifications');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Safely access nested data
  const findings =
    analysisDatabase?.[platform]?.[category]?.[subcategory]?.limitations || [];

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold mb-4">Query Analysis Results</h2>

      {/* Dropdowns for platform, category, subcategory */}
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Platform</label>
          <select
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
            className="w-full border rounded p-2"
          >
            <option value="chatgpt">ChatGPT</option>
            <option value="claude">Claude</option>
            <option value="grok">Grok</option>
            <option value="gemini">Gemini</option>
            <option value="perplexity">Perplexity</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border rounded p-2"
          >
            <option value="technical">Technical Analysis</option>
            <option value="brand">Brand Analysis</option>
            <option value="content">Content Analysis</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Subcategory</label>
          <select
            value={subcategory}
            onChange={(e) => setSubcategory(e.target.value)}
            className="w-full border rounded p-2"
          >
            <option value="specifications">Specifications</option>
            <option value="manufacturing">Manufacturing</option>
            <option value="applications">Applications</option>
          </select>
        </div>
      </div>

      {/* Display Findings */}
      <div className="mt-6">
        <h3 className="text-lg font-medium mb-3">Findings</h3>
        <div className="space-y-4">
          {findings.length === 0 && (
            <p className="text-gray-600">No limitations found for this selection.</p>
          )}
          {findings.map((finding, idx) => (
            <div key={idx} className="border rounded-lg p-4 bg-white">
              <p className="font-medium text-red-600 mb-2">{finding.finding}</p>
              <div className="text-sm text-gray-600">
                <p>Source: {finding.source}</p>
                <p>Date: {finding.date}</p>
                <p className="mt-2">{finding.context}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
