export interface AITool {
  id: string;
  name: string;
  description: string;
  fullDescription: string;
  category: string;
  pricing: string;
  rating: number;
  image: string;
  images: string[];
  slug: string;
  website: string;
  founded: string;
  employees: string;
}

export const aiTools: AITool[] = [
  {
    id: '1',
    name: 'ChatGPT',
    description: 'Advanced conversational AI that can help with writing, analysis, coding, and creative tasks.',
    fullDescription: 'ChatGPT is a state-of-the-art conversational AI developed by OpenAI, based on the GPT architecture. It excels at natural language understanding and generation, making it perfect for a wide range of applications from creative writing to technical problem-solving. With its intuitive chat interface, users can engage in natural conversations to get help with various tasks.',
    category: 'Conversational AI',
    pricing: 'Freemium',
    rating: 4.8,
    image: 'photo-1677442136019-21780ecad995',
    images: ['photo-1677442136019-21780ecad995', 'photo-1581091226825-a6a2a5aee158'],
    slug: 'chatgpt',
    website: 'https://chat.openai.com',
    founded: '2022',
    employees: '500+'
  },
  {
    id: '2',
    name: 'Midjourney',
    description: 'AI-powered image generation tool that creates stunning artwork from text descriptions.',
    fullDescription: 'Midjourney is a revolutionary AI image generation platform that transforms text prompts into breathtaking visual art. Using advanced machine learning algorithms, it produces high-quality, creative images across various styles and genres. Artists, designers, and creators worldwide use Midjourney to bring their imagination to life with just a few words.',
    category: 'Image Generation',
    pricing: 'Subscription',
    rating: 4.7,
    image: 'photo-1547036967-23d11aacaee0',
    images: ['photo-1547036967-23d11aacaee0', 'photo-1541961017774-22349e4a1262'],
    slug: 'midjourney',
    website: 'https://midjourney.com',
    founded: '2021',
    employees: '50-100'
  },
  {
    id: '3',
    name: 'Copy.ai',
    description: 'AI writing assistant that helps create marketing copy, blog posts, and various content types.',
    fullDescription: 'Copy.ai is a comprehensive AI-powered writing platform designed to help marketers, entrepreneurs, and content creators generate high-quality copy quickly and efficiently. It offers various templates and tools for different content needs, from social media posts to long-form articles, helping users overcome writer\'s block and create engaging content.',
    category: 'Content Creation',
    pricing: 'Freemium',
    rating: 4.5,
    image: 'photo-1552664730-d307ca884978',
    images: ['photo-1552664730-d307ca884978', 'photo-1486312338219-ce68d2c6f44d'],
    slug: 'copy-ai',
    website: 'https://copy.ai',
    founded: '2020',
    employees: '100-200'
  },
  {
    id: '4',
    name: 'GitHub Copilot',
    description: 'AI pair programmer that helps developers write code faster with intelligent suggestions.',
    fullDescription: 'GitHub Copilot is an AI-powered code completion tool developed by GitHub in collaboration with OpenAI. It acts as a virtual pair programmer, suggesting code completions, entire functions, and helping developers write better code faster. Trained on billions of lines of code, it understands context and provides relevant suggestions across multiple programming languages.',
    category: 'Development',
    pricing: 'Subscription',
    rating: 4.6,
    image: 'photo-1461749280684-dccba630e2f6',
    images: ['photo-1461749280684-dccba630e2f6', 'photo-1498050108023-c5249f4df085'],
    slug: 'github-copilot',
    website: 'https://github.com/features/copilot',
    founded: '2021',
    employees: 'Part of GitHub/Microsoft'
  },
  {
    id: '5',
    name: 'Jasper',
    description: 'Enterprise AI writing platform for creating marketing content, blog posts, and copy at scale.',
    fullDescription: 'Jasper (formerly Jarvis) is a professional AI writing assistant designed for businesses and marketing teams. It specializes in creating high-quality, brand-consistent content across various formats and channels. With advanced features like brand voice training and team collaboration, Jasper helps enterprises scale their content creation while maintaining quality and consistency.',
    category: 'Content Creation',
    pricing: 'Subscription',
    rating: 4.4,
    image: 'photo-1552664730-d307ca884978',
    images: ['photo-1552664730-d307ca884978', 'photo-1488590528505-98d2b5aba04b'],
    slug: 'jasper',
    website: 'https://jasper.ai',
    founded: '2021',
    employees: '200-500'
  },
  {
    id: '6',
    name: 'Notion AI',
    description: 'AI-powered writing assistant integrated into the popular productivity platform Notion.',
    fullDescription: 'Notion AI brings artificial intelligence directly into your Notion workspace, helping you write, edit, and brainstorm content without leaving your favorite productivity platform. It seamlessly integrates with your existing workflows, databases, and pages, making it easy to enhance your productivity with AI-powered assistance for writing, summarizing, and organizing information.',
    category: 'Productivity',
    pricing: 'Subscription',
    rating: 4.3,
    image: 'photo-1581091226825-a6a2a5aee158',
    images: ['photo-1581091226825-a6a2a5aee158', 'photo-1649972904349-6e44c42644a7'],
    slug: 'notion-ai',
    website: 'https://notion.so/product/ai',
    founded: '2023',
    employees: 'Part of Notion Labs'
  }
];

export const getToolBySlug = (slug: string): AITool | undefined => {
  return aiTools.find(tool => tool.slug === slug);
};

export const getToolsByCategory = (category: string): AITool[] => {
  return aiTools.filter(tool => tool.category === category);
};

export const searchTools = (query: string): AITool[] => {
  const lowercaseQuery = query.toLowerCase();
  return aiTools.filter(tool => 
    tool.name.toLowerCase().includes(lowercaseQuery) ||
    tool.description.toLowerCase().includes(lowercaseQuery) ||
    tool.category.toLowerCase().includes(lowercaseQuery)
  );
};
