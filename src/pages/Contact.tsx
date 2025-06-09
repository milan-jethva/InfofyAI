
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, MessageSquare, Users, Globe } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - AI Discovery Guide | Get in Touch</title>
        <meta name="description" content="Contact AI Discovery Guide for questions, suggestions, or partnership opportunities. We're here to help you discover the best AI tools for your needs." />
        <meta name="keywords" content="contact AI Discovery Guide, AI tool questions, partnership opportunities, suggest AI tools" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <Navbar />

        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions about AI tools? Want to suggest a tool for review? We're here to help and would love to hear from you.
            </p>
          </div>

          {/* Contact Options */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle>General Inquiries</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">
                  For general questions, feedback, or information about our reviews.
                </p>
                <Button asChild>
                  <a href="mailto:createbusiness47@gmail.com">
                    createbusiness47@gmail.com
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle>Tool Suggestions</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">
                  Know of an AI tool we should review? Let us know!
                </p>
                <Button asChild>
                  <a href="mailto:createbusiness47@gmail.com">
                    createbusiness47@gmail.com
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle>Partnerships</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">
                  Interested in collaborating or partnership opportunities?
                </p>
                <Button asChild>
                  <a href="mailto:createbusiness47@gmail.com">
                    createbusiness47@gmail.com
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle>Press & Media</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">
                  Media inquiries, interviews, or press-related questions.
                </p>
                <Button asChild>
                  <a href="mailto:createbusiness47@gmail.com">
                    createbusiness47@gmail.com
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Section */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-blue-600">
                    How do you choose which AI tools to review?
                  </h3>
                  <p className="text-gray-700">
                    We select tools based on popularity, innovation, user demand, and potential impact. We also consider suggestions from our community and track emerging trends in the AI space.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-blue-600">
                    Are your reviews sponsored or biased?
                  </h3>
                  <p className="text-gray-700">
                    Our reviews are independent and unbiased. While we may earn affiliate commissions from some tools, this never influences our honest assessment or ratings. We clearly disclose any potential conflicts of interest.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-blue-600">
                    How often do you update your reviews?
                  </h3>
                  <p className="text-gray-700">
                    We continuously monitor the AI tools we've reviewed for updates, pricing changes, and new features. Major updates are reviewed and incorporated into our articles as they occur.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-blue-600">
                    Can I suggest an AI tool for review?
                  </h3>
                  <p className="text-gray-700">
                    Absolutely! We welcome suggestions from our community. Please email us at suggest@aidiscoveryguide.com with details about the tool and why you think it would be valuable to review.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Response Time */}
          <Card className="bg-gradient-to-br from-blue-600 to-purple-600 text-white">
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-bold mb-2">Response Time</h3>
              <p className="text-blue-100">
                We typically respond to all inquiries within 24-48 hours during business days. For urgent matters, please mention "URGENT" in your subject line.
              </p>
            </CardContent>
          </Card>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Contact;
