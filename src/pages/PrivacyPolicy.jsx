import React from 'react';
import Header from '../Components/Header.jsx'
import Footer from '../Components/Footer.jsx'
const PrivacyPolicy = () => {
  return (
<>
    <Header/>
    <div className="p-6 md:p-12 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold text-center mb-6">Privacy Policy</h1>
      <p className="text-sm text-gray-500 text-center mb-8">Last updated: [01/11/2024]</p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p>
          At <strong>Delhi Digital Co.</strong>, your privacy is of paramount importance. This Privacy Policy describes how we collect, use, and protect your personal information when you engage with our digital services, including web development, Shopify development, app development, performance marketing, brand building, social media management, graphics and video creation, and our Shopify app, <em>Indian GST Invoice</em>.
        </p>
        <p className="mt-4">
          By using our website and services, you agree to the terms outlined in this Privacy Policy. We encourage you to read through the document to understand how we handle your personal data.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
        <p>
          We collect several types of information to provide our services effectively:
        </p>
        <ul className="list-disc ml-6 mt-2 space-y-2">
          <li><strong>Personal Information:</strong> When you reach out for inquiries or service contracts, we may collect personal data, such as your name, email address, phone number, and company information.</li>
          <li><strong>Technical Data:</strong> To optimize your experience, we collect data on your interactions with our website, such as your IP address, browser type, and device information.</li>
          <li><strong>Service-Specific Data:</strong> For services like our <em>Indian GST Invoice</em> app, we may collect transaction-related information for invoice processing and compliance.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
        <p>
          We use the collected information to:
        </p>
        <ul className="list-disc ml-6 mt-2 space-y-2">
          <li>Provide and enhance our services, including project management, customer support, and technical assistance.</li>
          <li>Customize user experience, ensuring relevant content and targeted service offerings.</li>
          <li>Develop and improve our <em>Indian GST Invoice</em> app and other applications to meet user needs.</li>
          <li>Conduct marketing efforts, such as email campaigns, promotions, or other communication aligned with your interests.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Sharing of Information</h2>
        <p>We limit the sharing of your data to the following cases:</p>
        <ul className="list-disc ml-6 mt-2 space-y-2">
          <li><strong>With Service Providers:</strong> We may share your information with trusted partners for tasks such as payment processing, data analysis, and technical support. These providers are obligated to protect your information and adhere to our data protection standards.</li>
          <li><strong>For Legal Requirements:</strong> We may disclose your data in response to legal obligations, such as subpoenas, or to safeguard our rights, property, or safety.</li>
          <li><strong>With Your Consent:</strong> In cases where you authorize sharing with third parties or in ways not described in this policy.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Security of Your Information</h2>
        <p>
          We implement strict security measures to protect your information from unauthorized access or misuse. These include technical safeguards, data encryption, and limited access control to sensitive data. However, please note that no online transmission or electronic storage method is entirely secure. We are committed to regularly reviewing our security practices to protect your data.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Cookies and Tracking Technologies</h2>
        <p>
          Our website uses cookies and similar technologies to enhance your browsing experience and gather information on site usage. Cookies help personalize content, streamline navigation, and analyze visitor behavior. You can disable cookies through your browser settings, although doing so may affect certain site functionalities.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Links to Third-Party Websites</h2>
        <p>
          Our website may contain links to third-party sites, plugins, or applications. We are not responsible for the privacy practices of these external sites, and we recommend reviewing their privacy policies before sharing personal information.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">7. Your Rights and Choices</h2>
        <p>Depending on your location, you may have the following rights regarding your data:</p>
        <ul className="list-disc ml-6 mt-2 space-y-2">
          <li><strong>Access and Correction:</strong> You can request access to your personal data and correct inaccuracies.</li>
          <li><strong>Data Deletion:</strong> In certain circumstances, you may request the deletion of your data, provided it doesn’t interfere with legal obligations.</li>
          <li><strong>Data Portability:</strong> You may request a copy of your data in a structured, machine-readable format.</li>
        </ul>
        <p className="mt-4">
          To exercise any of these rights, please contact us at <a href="mailto:support@delhidigital.co" className="text-blue-600 hover:underline">support@delhidigital.co</a>.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">8. Updates to This Privacy Policy</h2>
        <p>
          We may periodically update this Privacy Policy to reflect changes in our practices or for legal reasons. The updated version will be posted on our website, and we encourage you to review it frequently.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
        <p>
          For any questions or concerns about our Privacy Policy or how we handle your personal data, please contact us at:
        </p>
        <p>
          <strong>Delhi Digital Co.</strong><br />
          Email: <a href="mailto:support@delhidigital.co" className="text-blue-600 hover:underline">support@delhidigital.co</a>
        </p>
      </section>
    </div>
    <Footer/>
    </>
  );
};

export default PrivacyPolicy;
