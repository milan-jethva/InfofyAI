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
  },
  {
    id: '7',
    name: 'Claude',
    description: 'Constitutional AI assistant by Anthropic designed for helpful, harmless, and honest interactions.',
    fullDescription: 'Claude represents Anthropic\'s groundbreaking approach to developing AI assistants that prioritize safety, helpfulness, and alignment with human values through their innovative Constitutional AI methodology. This sophisticated conversational AI system has been specifically designed to engage in thoughtful, nuanced discussions while maintaining strong ethical guidelines and avoiding harmful outputs. Claude excels at complex reasoning tasks, creative writing, analysis, and educational support, offering users a reliable and trustworthy AI companion for both professional and personal use cases. What distinguishes Claude from other AI assistants is its deep commitment to honesty and transparency, readily acknowledging the limitations of its knowledge and avoiding speculation when certainty is not possible. The system demonstrates remarkable proficiency in understanding context, maintaining coherent long-form conversations, and providing detailed explanations of complex topics across diverse fields including science, literature, philosophy, and technology. Claude\'s training methodology emphasizes constitutional principles that guide its behavior, ensuring responses are not only accurate and helpful but also considerate of potential social impacts and ethical implications. Users particularly appreciate Claude\'s ability to engage in substantive discussions about sensitive topics while maintaining appropriate boundaries and avoiding potentially harmful content. The AI assistant excels at tasks requiring careful analysis, such as reviewing documents, providing feedback on writing, explaining complex concepts, and helping with research and learning. Claude\'s responses tend to be well-structured, thoughtful, and comprehensive, making it an excellent choice for users who value depth and nuance in their AI interactions. The system continues to evolve through Anthropic\'s ongoing research into AI safety and alignment, ensuring that Claude remains a responsible and beneficial AI assistant.',
    category: 'Conversational AI',
    pricing: 'Freemium',
    rating: 4.6,
    image: 'photo-1677442136019-21780ecad995',
    images: ['photo-1677442136019-21780ecad995', 'photo-1581091226825-a6a2a5aee158'],
    slug: 'claude',
    website: 'https://claude.ai',
    founded: '2023',
    employees: '100-200'
  },
  {
    id: '8',
    name: 'DALL-E 3',
    description: 'OpenAI\'s advanced image generation model that creates detailed images from textual descriptions.',
    fullDescription: 'DALL-E 3 represents the latest evolution in OpenAI\'s revolutionary image generation technology, building upon the success of its predecessors to deliver unprecedented quality, creativity, and accuracy in AI-generated visual content. This cutting-edge system demonstrates remarkable advancement in understanding and interpreting complex textual descriptions, translating them into highly detailed, contextually appropriate, and visually stunning images that often exceed user expectations. DALL-E 3 excels at capturing nuanced details, artistic styles, and abstract concepts, making it an invaluable tool for creative professionals, marketers, educators, and anyone seeking to bring their visual ideas to life without traditional artistic skills. The system\'s enhanced understanding of spatial relationships, lighting, composition, and artistic techniques enables it to generate images that maintain coherence and visual appeal across a wide range of styles and subjects. What sets DALL-E 3 apart is its improved safety measures and ethical guidelines, which help prevent the generation of harmful, biased, or inappropriate content while maintaining creative freedom for legitimate use cases. The model demonstrates exceptional versatility in handling various artistic styles, from photorealistic renderings and classical paintings to modern digital art, illustrations, and experimental visual concepts. Users can specify detailed parameters including mood, lighting conditions, artistic mediums, color schemes, and compositional elements to achieve precisely the visual outcome they envision. DALL-E 3\'s integration with ChatGPT provides a seamless experience where users can refine their prompts through conversation, iterate on designs, and explore creative variations with unprecedented ease. The system continues to push the boundaries of what\'s possible in AI-generated imagery, consistently delivering results that inspire creativity and enable new forms of visual expression.',
    category: 'Image Generation',
    pricing: 'Pay-per-use',
    rating: 4.7,
    image: 'photo-1547036967-23d11aacaee0',
    images: ['photo-1547036967-23d11aacaee0', 'photo-1541961017774-22349e4a1262'],
    slug: 'dall-e-3',
    website: 'https://openai.com/dall-e-3',
    founded: '2023',
    employees: 'Part of OpenAI'
  },
  {
    id: '9',
    name: 'Grammarly',
    description: 'AI-powered writing assistant that helps improve grammar, style, tone, and clarity in writing.',
    fullDescription: 'Grammarly has established itself as the world\'s leading AI-powered writing assistant, revolutionizing how millions of users approach written communication across personal, academic, and professional contexts. This comprehensive platform combines advanced natural language processing, machine learning algorithms, and linguistic expertise to provide real-time writing assistance that goes far beyond basic grammar and spell-checking. Grammarly\'s sophisticated AI analyzes text for grammatical errors, punctuation mistakes, spelling issues, style inconsistencies, tone appropriateness, and clarity problems, offering contextual suggestions that help users communicate more effectively and confidently. The platform\'s strength lies in its ability to understand context and intent, providing recommendations that maintain the writer\'s voice while enhancing overall communication effectiveness. Grammarly seamlessly integrates across multiple platforms and applications, including web browsers, Microsoft Office, Google Docs, mobile devices, and email clients, ensuring consistent writing support regardless of where users are composing text. The system offers different writing goals and audience settings, allowing users to tailor suggestions based on their specific communication objectives, whether they\'re writing formal business correspondence, academic papers, creative content, or casual messages. Advanced features include plagiarism detection, vocabulary enhancement suggestions, and detailed writing insights that help users understand their writing patterns and areas for improvement. Grammarly\'s premium offerings provide sophisticated style and tone analysis, helping users ensure their writing matches their intended audience and purpose. The platform serves as both a real-time writing aid and an educational tool, helping users gradually improve their writing skills through consistent feedback and explanations of suggested changes.',
    category: 'Writing Assistant',
    pricing: 'Freemium',
    rating: 4.5,
    image: 'photo-1486312338219-ce68d2c6f44d',
    images: ['photo-1486312338219-ce68d2c6f44d', 'photo-1552664730-d307ca884978'],
    slug: 'grammarly',
    website: 'https://grammarly.com',
    founded: '2009',
    employees: '500+'
  },
  {
    id: '10',
    name: 'Loom AI',
    description: 'AI-enhanced video messaging platform that automatically generates transcripts, titles, and summaries.',
    fullDescription: 'Loom AI transforms the popular video messaging platform into an intelligent communication tool that leverages artificial intelligence to enhance every aspect of video creation, sharing, and consumption. This innovative platform has revolutionized asynchronous communication by making video messages more accessible, searchable, and actionable through advanced AI capabilities. Loom AI automatically generates accurate transcripts for all recorded videos, enabling users to quickly scan content, search for specific information, and make videos accessible to hearing-impaired viewers. The system goes beyond basic transcription by analyzing video content to automatically generate concise summaries, relevant titles, and key takeaways that help viewers quickly understand the main points without watching the entire video. These AI-powered features are particularly valuable for busy professionals who need to process large volumes of video content efficiently. Loom AI also offers intelligent video editing capabilities, including automatic removal of filler words, awkward pauses, and background noise, resulting in more polished and professional video messages. The platform\'s AI can identify and extract key moments from longer recordings, creating highlight reels that capture the most important information. Advanced features include sentiment analysis that helps users understand how their message might be received, and automatic generation of action items and follow-up suggestions based on video content. Loom AI integrates seamlessly with popular productivity tools and workflow systems, enabling users to embed AI-generated summaries and transcripts directly into project management platforms, documentation systems, and collaboration tools. This makes video content more discoverable and actionable within existing organizational workflows, significantly improving team communication and knowledge sharing efficiency.',
    category: 'Video & Communication',
    pricing: 'Freemium',
    rating: 4.4,
    image: 'photo-1649972904349-6e44c42644a7',
    images: ['photo-1649972904349-6e44c42644a7', 'photo-1581091226825-a6a2a5aee158'],
    slug: 'loom-ai',
    website: 'https://loom.com',
    founded: '2015',
    employees: '200-300'
  },
  {
    id: '11',
    name: 'Runway ML',
    description: 'Creative AI platform for video editing, image generation, and multimedia content creation.',
    fullDescription: 'Runway ML stands at the forefront of creative AI technology, offering a comprehensive suite of machine learning tools specifically designed for content creators, filmmakers, artists, and digital media professionals. This innovative platform democratizes access to cutting-edge AI technologies that were previously available only to large studios and research institutions, making powerful creative tools accessible to independent creators and small teams. Runway ML excels in video generation and editing, offering features like background removal, object tracking, style transfer, and AI-powered video effects that can transform ordinary footage into cinematic masterpieces. The platform\'s video generation capabilities enable users to create entirely new video content from text descriptions, opening up unprecedented possibilities for storytelling and visual communication. Beyond video, Runway ML provides robust image generation and manipulation tools that leverage state-of-the-art AI models to create, edit, and enhance visual content with remarkable precision and creativity. The platform supports real-time collaboration, allowing creative teams to work together seamlessly on AI-enhanced projects while maintaining creative control and artistic vision. What sets Runway ML apart is its focus on maintaining the creative process while augmenting human capabilities rather than replacing them. The intuitive interface makes complex AI operations accessible to users without technical backgrounds, while still providing the depth and flexibility that professional creators demand. Runway ML continuously updates its toolkit with the latest AI research and models, ensuring users have access to cutting-edge capabilities as they become available. The platform has been adopted by major film studios, advertising agencies, and independent creators worldwide, demonstrating its versatility and professional-grade capabilities in real-world creative production environments.',
    category: 'Video Generation',
    pricing: 'Subscription',
    rating: 4.6,
    image: 'photo-1547036967-23d11aacaee0',
    images: ['photo-1547036967-23d11aacaee0', 'photo-1649972904349-6e44c42644a7'],
    slug: 'runway-ml',
    website: 'https://runwayml.com',
    founded: '2018',
    employees: '100-200'
  },
  {
    id: '12',
    name: 'Perplexity AI',
    description: 'AI-powered search engine that provides accurate answers with real-time information and source citations.',
    fullDescription: 'Perplexity AI revolutionizes information discovery by combining the power of advanced large language models with real-time web search capabilities, creating an intelligent research assistant that provides accurate, up-to-date answers with proper source attribution. This innovative platform addresses the fundamental challenge of information reliability in the age of AI by ensuring that all responses are grounded in current, verifiable sources while maintaining the conversational ease of modern AI assistants. Perplexity AI excels at understanding complex queries and breaking them down into comprehensive, well-researched responses that go beyond simple keyword matching to provide nuanced, contextual information. The system automatically searches through vast amounts of current web content, academic papers, news articles, and authoritative sources to compile accurate answers that reflect the most recent developments in any given topic. What distinguishes Perplexity AI is its commitment to transparency and verifiability, providing clear citations and source links for every piece of information presented, enabling users to verify claims and explore topics in greater depth. The platform is particularly valuable for researchers, students, journalists, and professionals who require reliable, current information for decision-making and knowledge work. Perplexity AI handles complex, multi-part questions with sophistication, often providing comprehensive overviews that would require extensive manual research using traditional search engines. The system continuously learns from user interactions and feedback, improving its ability to understand intent and provide relevant, accurate responses. Advanced features include the ability to search within specific domains, filter results by time periods, and explore related topics through intelligent follow-up suggestions. This makes Perplexity AI an indispensable tool for anyone seeking to stay informed and conduct thorough research in our rapidly evolving information landscape.',
    category: 'Search & Research',
    pricing: 'Freemium',
    rating: 4.5,
    image: 'photo-1488590528505-98d2b5aba04b',
    images: ['photo-1488590528505-98d2b5aba04b', 'photo-1498050108023-c5249f4df085'],
    slug: 'perplexity-ai',
    website: 'https://perplexity.ai',
    founded: '2022',
    employees: '50-100'
  },
  {
    id: '13',
    name: 'Synthesia',
    description: 'AI video generation platform that creates professional videos with AI avatars from text scripts.',
    fullDescription: 'Synthesia represents a paradigm shift in video production technology, enabling users to create professional-quality videos featuring realistic AI avatars without the need for cameras, studios, or human actors. This groundbreaking platform leverages advanced deep learning and computer vision technologies to generate lifelike digital humans that can speak any text in multiple languages with natural gestures and expressions. Synthesia has democratized video production by eliminating traditional barriers such as high costs, complex equipment requirements, and scheduling challenges associated with conventional video creation. The platform offers an extensive library of diverse AI avatars representing different ethnicities, ages, and professional appearances, ensuring that users can find suitable presenters for their specific audience and content needs. What makes Synthesia particularly powerful is its multilingual capabilities, supporting over 120 languages and accents, making it an invaluable tool for global organizations seeking to create localized content efficiently. The system excels at maintaining consistent quality and messaging across multiple video productions, which is particularly valuable for corporate training, educational content, marketing materials, and internal communications. Users simply input their script text, select an avatar and voice, customize the visual elements, and Synthesia generates a complete video ready for distribution. The platform includes advanced features such as custom avatar creation, where organizations can develop personalized AI presenters that align with their brand identity and communication style. Synthesia also offers robust customization options for backgrounds, layouts, graphics, and branding elements, enabling users to create videos that match their specific visual requirements and corporate guidelines. The platform continues to evolve with improvements in avatar realism, voice quality, and gesture accuracy, pushing the boundaries of what\'s possible in AI-generated video content.',
    category: 'Video Generation',
    pricing: 'Subscription',
    rating: 4.3,
    image: 'photo-1649972904349-6e44c42644a7',
    images: ['photo-1649972904349-6e44c42644a7', 'photo-1547036967-23d11aacaee0'],
    slug: 'synthesia',
    website: 'https://synthesia.io',
    founded: '2017',
    employees: '200-300'
  },
  {
    id: '14',
    name: 'Stable Diffusion',
    description: 'Open-source AI image generation model that creates high-quality images from text descriptions.',
    fullDescription: 'Stable Diffusion has emerged as one of the most influential and democratizing forces in AI image generation, representing a breakthrough in open-source artificial intelligence that has made powerful image creation capabilities accessible to developers, artists, and creators worldwide. Unlike proprietary alternatives, Stable Diffusion\'s open-source nature allows for unprecedented customization, modification, and integration into diverse applications and workflows. This revolutionary diffusion model excels at interpreting complex text prompts and translating them into highly detailed, artistically compelling images across virtually any style, subject matter, or artistic medium imaginable. The model\'s architecture enables it to understand nuanced artistic concepts, spatial relationships, lighting conditions, and compositional elements, resulting in generated images that often rival traditional artwork in quality and creativity. What sets Stable Diffusion apart is its flexibility and adaptability, allowing users to fine-tune the model with custom datasets, create specialized versions for specific artistic styles or subjects, and integrate the technology into custom applications and creative workflows. The open-source community surrounding Stable Diffusion has fostered an ecosystem of tools, extensions, and enhancements that continuously expand its capabilities and ease of use. Artists and developers have created numerous user interfaces, prompt enhancement tools, and specialized versions optimized for different use cases, from photorealistic portraits to abstract art and technical illustrations. The model runs efficiently on consumer hardware, making it accessible to individuals and small organizations without requiring expensive cloud computing resources. Stable Diffusion supports advanced techniques such as inpainting, outpainting, and image-to-image translation, enabling sophisticated editing and manipulation of generated content. The platform continues to evolve through community contributions and regular model updates, maintaining its position as a cornerstone technology in the democratization of AI-powered creativity.',
    category: 'Image Generation',
    pricing: 'Open Source',
    rating: 4.4,
    image: 'photo-1541961017774-22349e4a1262',
    images: ['photo-1541961017774-22349e4a1262', 'photo-1547036967-23d11aacaee0'],
    slug: 'stable-diffusion',
    website: 'https://stability.ai',
    founded: '2020',
    employees: '100-200'
  },
  {
    id: '15',
    name: 'Adobe Firefly',
    description: 'Adobe\'s AI-powered creative suite for generating images, text effects, and design elements.',
    fullDescription: 'Adobe Firefly represents Adobe\'s ambitious entry into the generative AI space, seamlessly integrating cutting-edge artificial intelligence capabilities directly into the beloved Creative Cloud ecosystem that millions of designers, photographers, and creative professionals rely on daily. This comprehensive AI platform transforms traditional creative workflows by embedding intelligent generation and enhancement tools throughout Adobe\'s industry-standard applications, making AI assistance feel natural and intuitive rather than disruptive. Firefly excels at understanding creative intent and generating high-quality visual content that maintains Adobe\'s renowned standards for professional creative work. The platform offers sophisticated image generation capabilities that understand artistic styles, composition principles, and brand guidelines, enabling users to create compelling visuals that align with their creative vision and professional requirements. What distinguishes Adobe Firefly is its deep integration with existing Creative Cloud workflows, allowing users to seamlessly incorporate AI-generated elements into complex design projects without disrupting their established creative processes. The system includes advanced text effect generation, enabling designers to create stunning typography and lettering that would traditionally require significant manual effort and specialized skills. Firefly also offers intelligent object removal, background replacement, and content-aware generation that maintains the photographic quality and artistic integrity expected in professional creative work. The platform prioritizes ethical AI development, training on appropriately licensed content and providing clear attribution and compensation models for contributing artists. Adobe\'s commitment to responsible AI ensures that Firefly supports rather than replaces human creativity, offering tools that enhance creative capabilities while respecting intellectual property rights and creative authorship. Regular updates and new feature releases continuously expand Firefly\'s capabilities, integrating the latest AI research with Adobe\'s decades of experience in creative software development.',
    category: 'Design & Creative',
    pricing: 'Subscription',
    rating: 4.2,
    image: 'photo-1547036967-23d11aacaee0',
    images: ['photo-1547036967-23d11aacaee0', 'photo-1486312338219-ce68d2c6f44d'],
    slug: 'adobe-firefly',
    website: 'https://firefly.adobe.com',
    founded: '2023',
    employees: 'Part of Adobe'
  },
  {
    id: '16',
    name: 'Murf AI',
    description: 'AI voice generator that creates realistic human-like voiceovers from text in multiple languages.',
    fullDescription: 'Murf AI has revolutionized the voiceover and audio content creation industry by providing an advanced text-to-speech platform that generates remarkably realistic, human-like voices across multiple languages and speaking styles. This sophisticated AI platform addresses the growing demand for high-quality audio content in an era where podcasts, video content, e-learning, and multimedia presentations have become essential components of digital communication strategies. Murf AI excels at capturing the nuances of natural human speech, including appropriate intonation, pacing, emotional expression, and cultural accent variations that make generated audio content engaging and authentic. The platform offers an extensive library of professional voice actors representing diverse demographics, languages, and speaking styles, enabling content creators to find the perfect voice match for their specific audience and content requirements. What sets Murf AI apart is its advanced control over speech characteristics, allowing users to adjust parameters such as speed, pitch, emphasis, and emotional tone to achieve precisely the audio outcome they envision. The system supports multiple file formats and integrates seamlessly with popular content creation tools, making it easy to incorporate generated voiceovers into existing production workflows. Murf AI is particularly valuable for educational content creators, marketing professionals, podcast producers, and businesses seeking to create consistent, professional audio content without the logistical challenges and costs associated with traditional voice recording. The platform includes advanced features such as voice cloning capabilities, enabling organizations to create custom AI voices that maintain brand consistency across all audio content. Murf AI also offers collaborative features that allow teams to work together on audio projects, share voice libraries, and maintain consistent audio branding across multiple content creators and campaigns.',
    category: 'Audio & Voice',
    pricing: 'Subscription',
    rating: 4.3,
    image: 'photo-1488590528505-98d2b5aba04b',
    images: ['photo-1488590528505-98d2b5aba04b', 'photo-1649972904349-6e44c42644a7'],
    slug: 'murf-ai',
    website: 'https://murf.ai',
    founded: '2020',
    employees: '100-150'
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
