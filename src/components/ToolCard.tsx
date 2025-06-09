
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

interface ToolCardProps {
  tool: {
    id: string;
    name: string;
    description: string;
    category: string;
    pricing: string;
    rating: number;
    image: string;
    slug: string;
    website: string;
  };
}

const ToolCard = ({ tool }: ToolCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-video relative overflow-hidden rounded-t-lg bg-gray-100">
        {!imageLoaded && (
          <Skeleton className="w-full h-full absolute inset-0" />
        )}
        {!imageError ? (
          <img 
            src={`https://images.unsplash.com/${tool.image}?w=400&h=300&fit=crop&auto=format&q=75`}
            alt={`${tool.name} AI tool interface`}
            className={`w-full h-full object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            loading="lazy"
            onLoad={handleImageLoad}
            onError={handleImageError}
            decoding="async"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
            <span className="text-gray-500 text-sm">Image unavailable</span>
          </div>
        )}
        <div className="absolute top-4 right-4">
          <Badge variant="secondary">{tool.category}</Badge>
        </div>
      </div>
      
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-xl font-bold">{tool.name}</CardTitle>
            <div className="flex items-center space-x-2 mt-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <span 
                    key={i} 
                    className={`text-sm ${i < Math.floor(tool.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                  >
                    ★
                  </span>
                ))}
                <span className="text-sm text-gray-600 ml-1">({tool.rating})</span>
              </div>
            </div>
          </div>
          <Badge variant="outline">{tool.pricing}</Badge>
        </div>
      </CardHeader>
      
      <CardContent>
        <CardDescription className="text-gray-600 line-clamp-3">
          {tool.description}
        </CardDescription>
      </CardContent>
      
      <CardFooter className="flex space-x-2">
        <Button asChild variant="default" className="flex-1">
          <Link to={`/tool/${tool.slug}`}>
            Learn More
          </Link>
        </Button>
        <Button variant="outline" size="icon" asChild>
          <a href={tool.website} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="w-4 h-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ToolCard;
