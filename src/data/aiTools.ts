
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
    fullDescription: 'ChatGPT represents a revolutionary breakthrough in artificial intelligence technology, developed by OpenAI as one of the most sophisticated conversational AI systems ever created. Built on the powerful GPT (Generative Pre-trained Transformer) architecture, ChatGPT has fundamentally changed how people interact with AI technology and has become an indispensable tool for millions of users worldwide. The system excels at natural language understanding and generation, making it incredibly versatile for a wide range of applications from creative writing and content creation to technical problem-solving and educational assistance. What sets ChatGPT apart is its ability to engage in contextual conversations, remembering previous exchanges within a session and building upon them to provide increasingly relevant and helpful responses. The AI demonstrates remarkable proficiency across diverse domains including programming, mathematics, creative writing, analysis, research, and general knowledge questions. Users can leverage ChatGPT for everything from debugging code and writing essays to brainstorming ideas and learning new concepts. The intuitive chat interface makes it accessible to users of all technical backgrounds, requiring no special training or expertise to begin benefiting from its capabilities. OpenAI has continuously improved the model through iterative updates, enhancing its accuracy, reducing harmful outputs, and expanding its knowledge base. The system supports multiple languages and can adapt its communication style to match user preferences, whether they need formal academic assistance or casual conversational help.',
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
    fullDescription: 'Midjourney stands as one of the most innovative and influential AI image generation platforms in the creative technology landscape, transforming the way artists, designers, and creators approach visual content creation. This revolutionary platform utilizes cutting-edge machine learning algorithms and neural networks to interpret text prompts and generate breathtakingly beautiful, high-quality visual art that often rivals work created by human artists. The system has been trained on millions of images and artistic styles, enabling it to understand and reproduce various aesthetic approaches, from photorealistic renderings to abstract artistic interpretations, fantasy illustrations, and everything in between. What makes Midjourney particularly remarkable is its ability to understand complex artistic concepts, lighting conditions, composition rules, and stylistic elements, translating these into coherent visual outputs that maintain artistic integrity and aesthetic appeal. The platform operates through a unique Discord-based interface, creating a community-driven environment where users can share creations, learn from others, and collaborate on artistic projects. Artists worldwide have embraced Midjourney as a powerful tool for concept art, illustration, marketing materials, and personal creative expression. The AI excels at generating images in countless styles including digital art, oil paintings, watercolors, photography, 3D renders, and experimental artistic approaches. Users can specify detailed parameters such as aspect ratios, artistic styles, color palettes, and composition elements to achieve precisely the visual outcome they envision. The platform continues to evolve with regular updates that improve image quality, add new features, and expand creative possibilities.',
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
    fullDescription: 'Copy.ai has emerged as a comprehensive and powerful AI-powered writing platform specifically designed to address the growing content creation needs of modern businesses, marketers, entrepreneurs, and content creators. This sophisticated tool leverages advanced natural language processing and machine learning technologies to generate high-quality, engaging copy across a vast array of content formats and marketing channels. The platform excels at understanding brand voice, target audience preferences, and marketing objectives to produce content that not only meets technical requirements but also resonates emotionally with intended readers. Copy.ai offers an extensive library of templates and tools covering everything from social media posts and email campaigns to long-form blog articles, product descriptions, and sales copy. The system is particularly valuable for overcoming writer\'s block, providing instant inspiration and multiple content variations that users can refine and customize according to their specific needs. What distinguishes Copy.ai is its focus on marketing effectiveness, incorporating proven copywriting principles and psychological triggers that drive engagement and conversions. The platform supports multiple languages and can adapt content for different cultural contexts and regional preferences. Users benefit from features like tone adjustment, content optimization suggestions, and integrated SEO recommendations that help improve search engine visibility. The tool also includes collaboration features that enable teams to work together on content projects, maintain brand consistency, and streamline approval processes. Copy.ai continuously updates its algorithms based on performance data and user feedback, ensuring that generated content remains relevant, effective, and aligned with current marketing best practices.',
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
    fullDescription: 'GitHub Copilot represents a groundbreaking advancement in software development technology, functioning as an AI-powered pair programming assistant that has revolutionized how developers approach coding tasks and software creation. Developed through a strategic collaboration between GitHub and OpenAI, this innovative tool harnesses the power of machine learning models trained on billions of lines of publicly available code to provide intelligent, context-aware coding suggestions and completions. Copilot seamlessly integrates into popular development environments and code editors, acting as a virtual programming partner that understands project context, coding patterns, and developer intent to offer relevant suggestions ranging from single-line completions to entire function implementations. The system excels across multiple programming languages including Python, JavaScript, TypeScript, Ruby, Go, and many others, demonstrating remarkable proficiency in understanding language-specific syntax, conventions, and best practices. What makes GitHub Copilot particularly valuable is its ability to learn from the specific codebase and coding style of individual projects, adapting its suggestions to maintain consistency with existing code architecture and patterns. The AI assistant can help developers with various tasks including writing boilerplate code, implementing algorithms, creating unit tests, debugging issues, and even explaining complex code segments through natural language comments. Copilot significantly accelerates development workflows by reducing repetitive coding tasks, helping developers explore new APIs and frameworks, and providing alternative implementation approaches for complex problems. The tool also serves as an educational resource, exposing developers to different coding patterns and techniques they might not have considered, thereby contributing to professional skill development and coding knowledge expansion.',
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
    fullDescription: 'Jasper, formerly known as Jarvis, has established itself as the premier enterprise-grade AI writing assistant specifically engineered for businesses, marketing teams, and content organizations that require high-volume, brand-consistent content creation at scale. This sophisticated platform goes beyond basic AI writing tools by incorporating advanced features designed for professional content workflows, team collaboration, and enterprise-level content management. Jasper specializes in understanding and maintaining brand voice consistency across all content outputs, a critical capability for businesses that need to ensure their messaging remains cohesive across multiple channels, campaigns, and content creators. The platform offers comprehensive template libraries covering virtually every content type businesses need, from blog posts and social media content to email campaigns, product descriptions, press releases, and long-form marketing materials. What sets Jasper apart is its Brand Voice feature, which learns and adapts to specific company communication styles, ensuring that all generated content aligns with established brand guidelines and maintains the authentic voice that customers recognize and trust. The system integrates seamlessly with popular marketing tools and content management systems, enabling smooth workflows and efficient content distribution. Jasper also provides advanced collaboration features that allow marketing teams to work together on content projects, share templates, maintain content calendars, and manage approval processes. The platform includes sophisticated SEO optimization tools that help ensure content performs well in search engines while maintaining readability and engagement. Regular updates and improvements to the underlying AI models ensure that Jasper remains at the forefront of content creation technology, consistently delivering high-quality outputs that meet evolving business needs and market demands.',
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
    fullDescription: 'Notion AI represents a seamless integration of artificial intelligence capabilities directly into the Notion workspace, creating a unified environment where productivity and AI-powered assistance converge to enhance user workflows and content creation processes. This innovative feature transforms the already powerful Notion platform into an even more versatile tool by embedding intelligent writing assistance, content generation, and analytical capabilities throughout the user interface. What makes Notion AI particularly valuable is its contextual awareness of existing workspace content, enabling it to provide relevant suggestions and assistance based on the specific projects, databases, and information already present in a user\'s Notion environment. The AI seamlessly integrates with existing workflows, databases, and page structures, making it effortless to enhance productivity without disrupting established organizational systems or requiring users to learn new interfaces. Users can leverage Notion AI for a wide variety of tasks including drafting documents, summarizing meeting notes, generating project outlines, creating content ideas, and organizing information more effectively. The system excels at understanding the context of different types of content within Notion, whether it\'s project management documentation, personal notes, team wikis, or creative brainstorming sessions. Notion AI can help users overcome writer\'s block by suggesting content continuations, improve existing text through editing and refinement suggestions, and even transform bullet points into well-structured paragraphs or vice versa. The integration allows for seamless switching between manual content creation and AI assistance, enabling users to maintain creative control while benefiting from intelligent support when needed. This approach makes AI assistance feel natural and unobtrusive, enhancing rather than replacing human creativity and productivity.',
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
