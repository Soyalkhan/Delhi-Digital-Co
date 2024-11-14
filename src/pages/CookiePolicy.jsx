import React from 'react';
import Header from '../Components/Header.jsx'
import Footer from '../Components/Footer.jsx'
const CookiePolicy = () => {
  return (
    <>
    <Header/>
       <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Cookie Policy</h1>
      <div className="prose lg:prose-xl mx-auto text-gray-700">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">What are Cookies?</h2>
          <p>
            Cookies are small text files that are stored on your device when you visit a website. They help websites remember
            information about your visit, such as your preferences and login details.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How We Use Cookies</h2>
          <p>At Delhi Digital Co. we use cookies to:</p>
          <ul className="list-disc pl-6 space-y-3">
            <li><strong>Improve website performance:</strong> Cookies help us to make our website work more efficiently and smoothly.</li>
            <li><strong>Analyze website usage:</strong> We use cookies to understand how visitors interact with our website, which helps us to improve the user experience.</li>
            <li><strong>Personalize your experience:</strong> Cookies allow us to tailor our content and offers to your interests.</li>
            <li><strong>Track marketing campaigns:</strong> We use cookies to measure the effectiveness of our marketing campaigns.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Types of Cookies We Use</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li><strong>Essential Cookies:</strong> These cookies are necessary for the basic functioning of our website.</li>
            <li><strong>Performance Cookies:</strong> These cookies collect information about how visitors use our website, such as page load times and error messages.</li>
            <li><strong>Functional Cookies:</strong> These cookies allow us to remember your preferences, such as language and region settings.</li>
            <li><strong>Targeting Cookies:</strong> These cookies are used to deliver targeted advertising based on your interests.</li>
          </ul>
        </section>
      </div>
    </div>
    <Footer/>
    </>
 
  );
};

export default CookiePolicy;
