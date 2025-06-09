
export interface AITool {
  id: string;
  name: string;
  description: string;
  fullDescription: string;
  category: string;
  pricing: string;
  rating: number;
  image: string;
  slug: string;
  website: string;
  features: string[];
  useCases: string[];
  pros: string[];
  cons: string[];
  founded: string;
  employees: string;
}

export const aiTools: AITool[] = [
  {
    id: '1',
    name: 'ChatGPT',
    description: 'Advanced conversational AI that can help with writing, analysis, coding, and creative tasks.',
    fullDescription: 'ChatGPT is a state-of-the-art conversational AI developed by OpenAI, based on the GPT architecture. It excels at natural language understanding and generation, making it perfect for a wide range of applications from creative writing to technical problem-solving.',
    category: 'Conversational AI',
    pricing: 'Freemium',
    rating: 4.8,
    image: 'photo-1677442136019-21780ecad995',
    slug: 'chatgpt',
    website: 'https://chat.openai.com',
    features: [
      'Natural language conversations',
      'Code generation and debugging',
      'Creative writing assistance',
      'Data analysis and interpretation',
      'Multi-language support',
      'Custom instructions'
    ],
    useCases: [
      'Content creation and copywriting',
      'Customer service automation',
      'Educational tutoring',
      'Programming assistance',
      'Research and analysis',
      'Creative brainstorming'
    ],
    pros: [
      'Highly accurate and contextual responses',
      'Versatile across multiple domains',
      'Continuously improving',
      'User-friendly interface',
      'Strong safety measures'
    ],
    cons: [
      'Can occasionally provide incorrect information',
      'Limited knowledge cutoff date',
      'Usage limits on free tier',
      'Requires internet connection'
    ],
    founded: '2022',
    employees: '500+'
  },
  {
    id: '2',
    name: 'Midjourney',
    description: 'AI-powered image generation tool that creates stunning artwork from text descriptions.',
    fullDescription: 'Midjourney is a revolutionary AI image generation platform that transforms text prompts into breathtaking visual art. Using advanced machine learning algorithms, it produces high-quality, creative images across various styles and genres.',
    category: 'Image Generation',
    pricing: 'Subscription',
    rating: 4.7,
    image: 'photo-1547036967-23d11aacaee0',
    slug: 'midjourney',
    website: 'https://midjourney.com',
    features: [
      'Text-to-image generation',
      'Multiple artistic styles',
      'High-resolution outputs',
      'Style customization',
      'Community gallery',
      'Discord integration'
    ],
    useCases: [
      'Digital art creation',
      'Marketing visuals',
      'Concept art for games/films',
      'Social media content',
      'Book illustrations',
      'Product mockups'
    ],
    pros: [
      'Exceptional image quality',
      'Diverse artistic styles',
      'Active community',
      'Regular updates and improvements',
      'Easy to use'
    ],
    cons: [
      'Requires Discord account',
      'No free tier',
      'Limited commercial usage rights',
      'Processing time can vary'
    ],
    founded: '2021',
    employees: '50-100'
  },
  {
    id: '3',
    name: 'Copy.ai',
    description: 'AI writing assistant that helps create marketing copy, blog posts, and various content types.',
    fullDescription: 'Copy.ai is a comprehensive AI-powered writing platform designed to help marketers, entrepreneurs, and content creators generate high-quality copy quickly and efficiently. It offers various templates and tools for different content needs.',
    category: 'Content Creation',
    pricing: 'Freemium',
    rating: 4.5,
    image: 'photo-1552664730-d307ca884978',
    slug: 'copy-ai',
    website: 'https://copy.ai',
    features: [
      '90+ copywriting templates',
      'Long-form content creation',
      'Brand voice customization',
      'Multi-language support',
      'Plagiarism checker',
      'Team collaboration'
    ],
    useCases: [
      'Marketing copy creation',
      'Blog post writing',
      'Email campaigns',
      'Social media content',
      'Product descriptions',
      'Ad copy generation'
    ],
    pros: [
      'Wide variety of templates',
      'User-friendly interface',
      'Good free tier',
      'Fast content generation',
      'Regular template updates'
    ],
    cons: [
      'Output quality can be inconsistent',
      'Limited customization options',
      'Requires editing for best results',
      'Credit-based pricing system'
    ],
    founded: '2020',
    employees: '100-200'
  },
  {
    id: '4',
    name: 'GitHub Copilot',
    description: 'AI pair programmer that helps developers write code faster with intelligent suggestions.',
    fullDescription: 'GitHub Copilot is an AI-powered code completion tool developed by GitHub in collaboration with OpenAI. It acts as a virtual pair programmer, suggesting code completions, entire functions, and helping developers write better code faster.',
    category: 'Development',
    pricing: 'Subscription',
    rating: 4.6,
    image: 'photo-1461749280684-dccba630e2f6',
    slug: 'github-copilot',
    website: 'https://github.com/features/copilot',
    features: [
      'Intelligent code suggestions',
      'Multi-language support',
      'Context-aware completions',
      'Comment-to-code generation',
      'IDE integration',
      'Learning from your codebase'
    ],
    useCases: [
      'Code completion and generation',
      'Learning new programming languages',
      'Boilerplate code creation',
      'Documentation writing',
      'Test case generation',
      'Code refactoring assistance'
    ],
    pros: [
      'Significant productivity boost',
      'Supports many programming languages',
      'Seamless IDE integration',
      'Learns from context',
      'Regular improvements'
    ],
    cons: [
      'Subscription required',
      'Can suggest suboptimal code',
      'Potential security concerns',
      'Dependency on internet connection'
    ],
    founded: '2021',
    employees: 'Part of GitHub/Microsoft'
  },
  {
    id: '5',
    name: 'Jasper',
    description: 'Enterprise AI writing platform for creating marketing content, blog posts, and copy at scale.',
    fullDescription: 'Jasper (formerly Jarvis) is a professional AI writing assistant designed for businesses and marketing teams. It specializes in creating high-quality, brand-consistent content across various formats and channels.',
    category: 'Content Creation',
    pricing: 'Subscription',
    rating: 4.4,
    image: 'photo-1552664730-d307ca884978',
    slug: 'jasper',
    website: 'https://jasper.ai',
    features: [
      'Brand voice training',
      'Content templates',
      'Long-form article writing',
      'SEO optimization',
      'Team collaboration',
      'Plagiarism detection'
    ],
    useCases: [
      'Marketing content creation',
      'Blog post writing',
      'Email marketing',
      'Social media content',
      'Product descriptions',
      'Ad copywriting'
    ],
    pros: [
      'High-quality output',
      'Brand voice consistency',
      'Good for enterprises',
      'SEO-friendly content',
      'Strong customer support'
    ],
    cons: [
      'Expensive pricing',
      'Learning curve for new users',
      'Limited free trial',
      'Requires content editing'
    ],
    founded: '2021',
    employees: '200-500'
  },
  {
    id: '6',
    name: 'Notion AI',
    description: 'AI-powered writing assistant integrated into the popular productivity platform Notion.',
    fullDescription: 'Notion AI brings artificial intelligence directly into your Notion workspace, helping you write, edit, and brainstorm content without leaving your favorite productivity platform.',
    category: 'Productivity',
    pricing: 'Subscription',
    rating: 4.3,
    image: 'photo-1581091226825-a6a2a5aee158',
    slug: 'notion-ai',
    website: 'https://notion.so/product/ai',
    features: [
      'Writing assistance',
      'Content summarization',
      'Translation',
      'Brainstorming',
      'Meeting notes generation',
      'Database integration'
    ],
    useCases: [
      'Note-taking enhancement',
      'Content creation',
      'Meeting summaries',
      'Project planning',
      'Research compilation',
      'Team collaboration'
    ],
    pros: [
      'Seamless Notion integration',
      'No context switching',
      'Affordable pricing',
      'Multiple AI functions',
      'Regular feature updates'
    ],
    cons: [
      'Limited to Notion ecosystem',
      'Fewer features than standalone tools',
      'Requires Notion subscription',
      'Learning curve for new Notion users'
    ],
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
