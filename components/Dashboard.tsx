"use client";

import React, { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { platformData } from '@/lib/data';

export default function Dashboard() {
  const [selectedMetric, setSelectedMetric] = useState<'technical' | 'brand' | 'content'>(
    'technical'
  );

  // Prepare chart data for Recharts
  const chartData = platformData.map((platform) => ({
    name: platform.name,
    score: platform.currentScore[selectedMetric]
  }));

  // Render strengths & weaknesses for each platform in the chosen metric
  const renderPlatformAnalysis = (platform: (typeof platformData)[number]) => {
    const analysisForMetric = platform.analysis[selectedMetric];

    return (
      <div key={platform.name} className="mb-6">
        <h3 className="text-lg font-semibold mb-2">{platform.name}</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-green-600 mb-1">Strengths</h4>
            <ul className="list-disc pl-5 space-y-1">
              {analysisForMetric.strengths.map((strength, idx) => (
                <li key={idx} className="text-sm">
                  {strength}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-red-600 mb-1">Weaknesses</h4>
            <ul className="list-disc pl-5 space-y-1">
              {analysisForMetric.weaknesses.map((weakness, idx) => (
                <li key={idx} className="text-sm">
                  {weakness}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Metric Selector */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Platform Performance</h2>
        <select
          value={selectedMetric}
          onChange={(e) => setSelectedMetric(e.target.value as any)}
          className="border rounded p-2"
        >
          <option value="technical">Technical Accuracy</option>
          <option value="brand">Brand Recognition</option>
          <option value="content">Content Completeness</option>
        </select>
      </div>

      {/* Chart Card */}
      <Card>
        <CardHeader>
          <CardTitle>Performance Comparison</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis domain={[0, 5]} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="score" stroke="#2563eb" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Strengths/Weaknesses for Each Platform */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {platformData.map(renderPlatformAnalysis)}
      </div>
    </div>
  );
}
