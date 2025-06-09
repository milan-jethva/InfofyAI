
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - AI Discovery Guide | Your Privacy Matters</title>
        <meta name="description" content="Read AI Discovery Guide's privacy policy to understand how we collect, use, and protect your personal information when you use our website." />
        <meta name="keywords" content="privacy policy, data protection, AI Discovery Guide privacy, personal information" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <Navbar />

        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-gray-600">
              <strong>Last updated:</strong> December 2024
            </p>
          </div>

          {/* Introduction */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Introduction</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                At AI Discovery Guide ("we," "our," or "us"), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website aidiscoveryguide.com and use our services.
              </p>
            </CardContent>
          </Card>

          {/* Information We Collect */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Information We Collect</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Information You Provide</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Contact information when you reach out to us via email</li>
                  <li>Feedback and suggestions you submit</li>
                  <li>Newsletter subscription information (if applicable)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Information Automatically Collected</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>IP address</li>
                  <li>Pages visited and time spent on our site</li>
                  <li>Referring website</li>
                  <li>Search terms used to find our site</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* How We Use Information */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Provide, maintain, and improve our website and services</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send you newsletters and updates (with your consent)</li>
                <li>Analyze website usage and improve user experience</li>
                <li>Comply with legal obligations</li>
                <li>Protect against fraud and abuse</li>
              </ul>
            </CardContent>
          </Card>

          {/* Cookies and Tracking */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Cookies and Tracking Technologies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                We use cookies and similar tracking technologies to enhance your browsing experience and analyze website traffic. Cookies are small text files stored on your device that help us:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Remember your preferences</li>
                <li>Understand how you use our website</li>
                <li>Improve our content and services</li>
                <li>Display relevant advertisements (through third-party services)</li>
              </ul>
              <p className="text-gray-700">
                You can control or disable cookies through your browser settings. However, disabling cookies may affect the functionality of our website.
              </p>
            </CardContent>
          </Card>

          {/* Third-Party Services */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Third-Party Services</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                We may use third-party services to help us operate our website and provide better services to you. These may include:
              </p>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Google Analytics</h4>
                <p className="text-gray-700">
                  We use Google Analytics to analyze website traffic and user behavior. Google Analytics may collect information about your use of our website. You can opt-out of Google Analytics by installing the Google Analytics Opt-out Browser Add-on.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Google AdSense</h4>
                <p className="text-gray-700">
                  We may use Google AdSense to display advertisements on our website. Google AdSense uses cookies to serve ads based on your previous visits to our website and other websites.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Affiliate Programs</h4>
                <p className="text-gray-700">
                  We participate in affiliate programs and may earn commissions from purchases made through links on our website. These programs may track clicks and purchases for commission purposes.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Data Security */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Data Security</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </CardContent>
          </Card>

          {/* Your Rights */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Your Rights and Choices</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">You have the right to:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>Disable cookies through your browser settings</li>
              </ul>
              <p className="text-gray-700 mt-4">
                To exercise these rights, please contact us at privacy@aidiscoveryguide.com.
              </p>
            </CardContent>
          </Card>

          {/* Children's Privacy */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Children's Privacy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
              </p>
            </CardContent>
          </Card>

          {/* Changes to Privacy Policy */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Changes to This Privacy Policy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically for any changes.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="bg-gradient-to-br from-blue-600 to-purple-600 text-white">
            <CardHeader>
              <CardTitle className="text-white">Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-100 leading-relaxed">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <div className="mt-4 space-y-1">
                <p className="text-white font-semibold">Email: privacy@aidiscoveryguide.com</p>
                <p className="text-blue-100">
                  We will respond to your inquiry within 30 days of receipt.
                </p>
              </div>
            </CardContent>
          </Card>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Privacy;
