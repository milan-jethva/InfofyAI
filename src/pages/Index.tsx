
import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ToolCard from '@/components/ToolCard';
import { aiTools, searchTools } from '@/data/aiTools';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = useMemo(() => {
    const cats = ['All', ...new Set(aiTools.map(tool => tool.category))];
    return cats;
  }, []);

  const filteredTools = useMemo(() => {
    let tools = searchQuery ? searchTools(searchQuery) : aiTools;
    
    if (selectedCategory !== 'All') {
      tools = tools.filter(tool => tool.category === selectedCategory);
    }
    
    return tools;
  }, [searchQuery, selectedCategory]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <>
      <Helmet>
        <title>AI Discovery Guide - Find the Best AI Tools & Apps 2024</title>
        <meta name="description" content="Discover and compare the best AI tools and applications of 2024. Find comprehensive reviews of ChatGPT, Midjourney, Copy.ai, and more AI solutions for productivity, creativity, and business." />
        <meta name="keywords" content="AI tools 2024, best AI apps, ChatGPT alternatives, Midjourney review, AI productivity tools, artificial intelligence software" />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        <Navbar onSearch={handleSearch} />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Discover the Future of AI
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Find, compare, and choose the best AI tools and applications that will transform your workflow and boost your productivity.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-lg px-4 py-2">
                50+ AI Tools Reviewed
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                Updated Daily
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                Expert Analysis
              </Badge>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Category Filter */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Browse by Category</h2>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className="mb-2"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Search Results Info */}
          {searchQuery && (
            <div className="mb-6">
              <p className="text-gray-600">
                Showing {filteredTools.length} result(s) for "{searchQuery}"
              </p>
            </div>
          )}

          {/* Featured AI Tools Section */}
          <section>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">
                {selectedCategory === 'All' ? 'Featured AI Tools' : `${selectedCategory} Tools`}
              </h2>
              <span className="text-gray-600">{filteredTools.length} tools found</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>

            {filteredTools.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">
                  No tools found matching your criteria. Try adjusting your search or category filter.
                </p>
              </div>
            )}
          </section>

          {/* Why Choose AI Tools Section */}
          <section className="mt-16 bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Why Choose AI Tools for Your Business?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Boost Productivity</h3>
                <p className="text-gray-600">
                  AI tools can automate repetitive tasks and streamline workflows, allowing you to focus on high-value activities.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💡</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Enhance Creativity</h3>
                <p className="text-gray-600">
                  From writing to design, AI tools provide creative assistance and inspiration to help you produce better content.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Scale Operations</h3>
                <p className="text-gray-600">
                  AI solutions enable businesses to scale their operations efficiently without proportional increases in resources.
                </p>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Index;
