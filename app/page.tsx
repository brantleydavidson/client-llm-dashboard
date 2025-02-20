"use client";

import React from 'react';
import Dashboard from '@/components/Dashboard';
import QueryInterface from '@/components/QueryInterface';
import { Card, CardContent } from '@/components/ui/card';

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-7xl mx-auto space-y-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Copperweld LLM Analysis Dashboard
          </h1>
          <p className="text-gray-600 mt-2">
            Monitor and analyze LLM platform performance
          </p>
        </header>
        
        {/* Two columns: Dashboard on the left, Query Interface on the right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6">
              <Dashboard />
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <QueryInterface />
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
