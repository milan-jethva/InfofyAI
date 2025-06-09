
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ExternalLink, ArrowLeft, Star } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getToolBySlug } from '@/data/aiTools';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

const ToolDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const tool = slug ? getToolBySlug(slug) : undefined;
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>([]);

  const handleImageLoad = (index: number) => {
    setImagesLoaded(prev => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  };

  if (!tool) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-4xl mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Tool Not Found</h1>
          <p className="text-gray-600 mb-8">The AI tool you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{tool.name} Review - Features, Pricing & Use Cases | infofyAI</title>
        <meta name="description" content={`Comprehensive review of ${tool.name}: ${tool.description} Learn about features, pricing, and real use cases.`} />
        <meta name="keywords" content={`${tool.name} review, ${tool.name} features, ${tool.name} pricing, AI ${tool.category.toLowerCase()}, ${tool.name} alternatives`} />
        <link rel="preload" href={`https://images.unsplash.com/${tool.images[0]}?w=600&h=400&fit=crop&auto=format&q=75`} as="image" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <Navbar />

        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Back Button */}
          <Button variant="outline" asChild className="mb-6">
            <Link to="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Tools
            </Link>
          </Button>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Title and Overview */}
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h1 className="text-4xl font-bold text-gray-900 mb-2">{tool.name}</h1>
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="flex items-center">
                          <Star className="w-5 h-5 text-yellow-400 mr-1" />
                          <span className="font-semibold">{tool.rating}</span>
                        </div>
                        <Badge variant="secondary">{tool.category}</Badge>
                        <Badge variant="outline">{tool.pricing}</Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    {tool.description}
                  </p>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-600 leading-relaxed">
                      {tool.fullDescription}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Photos */}
              <Card>
                <CardHeader>
                  <CardTitle>Screenshots</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {tool.images.map((image, index) => (
                      <div key={index} className="aspect-video relative overflow-hidden rounded-lg bg-gray-100">
                        {!imagesLoaded[index] && (
                          <Skeleton className="w-full h-full absolute inset-0" />
                        )}
                        <img 
                          src={`https://images.unsplash.com/${image}?w=600&h=400&fit=crop&auto=format&q=75`}
                          alt={`${tool.name} screenshot ${index + 1}`}
                          className={`w-full h-full object-cover transition-opacity duration-300 ${imagesLoaded[index] ? 'opacity-100' : 'opacity-0'}`}
                          loading={index === 0 ? 'eager' : 'lazy'}
                          onLoad={() => handleImageLoad(index)}
                          decoding="async"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* CTA */}
              <Card className="bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">Try {tool.name} Today</h3>
                  <p className="text-blue-100 mb-4">
                    Experience the power of AI for yourself
                  </p>
                  <Button 
                    asChild 
                    variant="secondary" 
                    className="w-full"
                  >
                    <a 
                      href={tool.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      Visit {tool.name}
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Company Info */}
              <Card>
                <CardHeader>
                  <CardTitle>Company Info</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Founded</span>
                    <span className="font-semibold">{tool.founded}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Employees</span>
                    <span className="font-semibold">{tool.employees}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Category</span>
                    <Badge>{tool.category}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Pricing</span>
                    <Badge variant="outline">{tool.pricing}</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Disclaimer */}
              <Card>
                <CardContent className="p-4">
                  <p className="text-sm text-gray-600">
                    <strong>Disclaimer:</strong> This review is based on publicly available information and user feedback. Pricing and features may change. Please visit the official website for the most current information.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ToolDetail;
