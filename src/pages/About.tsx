
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - AI Discovery Guide | Your Trusted AI Tool Resource</title>
        <meta name="description" content="Learn about AI Discovery Guide's mission to help users find and evaluate the best AI tools and applications. Discover our commitment to providing accurate, unbiased reviews." />
        <meta name="keywords" content="about AI Discovery Guide, AI tool reviews, artificial intelligence resources, AI software evaluation" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <Navbar />

        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About AI Discovery Guide
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your trusted resource for discovering, evaluating, and understanding the latest AI tools and applications that are shaping the future of work and creativity.
            </p>
          </div>

          {/* Mission Section */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                At AI Discovery Guide, we believe that artificial intelligence has the power to transform how we work, create, and solve problems. However, with the rapid pace of AI development, it can be overwhelming to keep track of the countless tools and applications emerging in the market.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our mission is to bridge this gap by providing comprehensive, unbiased, and up-to-date information about the most innovative AI tools available today. We help individuals, businesses, and organizations make informed decisions about which AI solutions best fit their needs.
              </p>
            </CardContent>
          </Card>

          {/* What We Do */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">What We Do</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">Comprehensive Reviews</h3>
                  <p className="text-gray-700">
                    We thoroughly test and evaluate AI tools across various categories, providing detailed insights into features, pricing, and real-world performance.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">Unbiased Analysis</h3>
                  <p className="text-gray-700">
                    Our reviews are independent and honest, highlighting both strengths and limitations to help you make informed decisions.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">Up-to-Date Information</h3>
                  <p className="text-gray-700">
                    The AI landscape evolves rapidly. We continuously update our content to reflect the latest features, pricing changes, and new releases.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">Practical Guidance</h3>
                  <p className="text-gray-700">
                    Beyond reviews, we provide practical tips, use cases, and implementation strategies to help you get the most out of AI tools.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Our Values */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Our Values</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-purple-600">Transparency</h3>
                  <p className="text-gray-700">
                    We believe in complete transparency about our review process, potential conflicts of interest, and how we evaluate AI tools. Our readers deserve to know exactly how we form our opinions and recommendations.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-purple-600">Accessibility</h3>
                  <p className="text-gray-700">
                    AI technology should be accessible to everyone, regardless of technical background. We write our content in clear, jargon-free language that both beginners and experts can understand and benefit from.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-purple-600">Continuous Learning</h3>
                  <p className="text-gray-700">
                    The AI field is constantly evolving, and so are we. We're committed to staying at the forefront of AI developments and continuously improving our knowledge and review methodologies.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Our Process */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Our Review Process</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside space-y-4 text-gray-700">
                <li className="text-lg">
                  <strong>Discovery:</strong> We identify emerging AI tools through industry research, user recommendations, and monitoring of AI developments.
                </li>
                <li className="text-lg">
                  <strong>Hands-on Testing:</strong> Our team extensively tests each tool across various use cases and scenarios to understand its capabilities and limitations.
                </li>
                <li className="text-lg">
                  <strong>Research & Analysis:</strong> We research the company behind the tool, pricing models, user feedback, and competitive landscape.
                </li>
                <li className="text-lg">
                  <strong>Comprehensive Review:</strong> We compile our findings into detailed reviews covering features, pros, cons, use cases, and recommendations.
                </li>
                <li className="text-lg">
                  <strong>Regular Updates:</strong> We monitor tools for updates, changes, and user feedback to keep our reviews current and accurate.
                </li>
              </ol>
            </CardContent>
          </Card>

          {/* Contact CTA */}
          <Card className="bg-gradient-to-br from-blue-600 to-purple-600 text-white">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Have Questions or Suggestions?</h3>
              <p className="text-blue-100 mb-6">
                We'd love to hear from you! Whether you have questions about our reviews, suggestions for tools to cover, or just want to share your AI journey with us.
              </p>
              <a 
                href="/contact"
                className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Get in Touch
              </a>
            </CardContent>
          </Card>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default About;
