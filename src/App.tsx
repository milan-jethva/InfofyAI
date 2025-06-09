
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import ToolDetail from "./pages/ToolDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";
import AdSenseAd from "./components/AdSenseAd";
import AdComponent from "./components/AdComponent";
const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Helmet>
          <title>infofyAI - Find the Best AI Tools & Apps | Smart AI Solutions</title>
          <meta name="description" content="Discover the latest and most powerful AI tools and applications with infofyAI. From ChatGPT to Midjourney, find comprehensive reviews, use cases, and comparisons of trending AI solutions." />
          <meta name="keywords" content="AI tools, artificial intelligence, ChatGPT, Midjourney, Copy.ai, AI applications, machine learning, AI software reviews, infofyAI" />
          <meta name="robots" content="index, follow" />
          <meta property="og:title" content="infofyAI - Find the Best AI Tools & Apps" />
          <meta property="og:description" content="Discover comprehensive reviews and comparisons of the latest AI tools and applications with infofyAI." />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://infofyai.com" />
        </Helmet>

        
        <AdSenseAd /> 
        <Toaster />
        <Sonner />
        <AdComponent/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/tool/:slug" element={<ToolDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
