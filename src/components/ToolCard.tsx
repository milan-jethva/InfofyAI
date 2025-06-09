
import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

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
  };
}

const ToolCard = ({ tool }: ToolCardProps) => {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-video relative overflow-hidden rounded-t-lg">
        <img 
          src={`https://images.unsplash.com/${tool.image}`}
          alt={`${tool.name} AI tool interface`}
          className="w-full h-full object-cover"
        />
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
          <a href="#" target="_blank" rel="noopener noreferrer">
            <ExternalLink className="w-4 h-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ToolCard;
