import React from 'react';
import Head from 'next/head';

interface PolicySection {
  title: string;
  content: string | string[];
}

const PRIVACY_SECTIONS: PolicySection[] = [
  {
    title: 'Information we Collect',
    content: 'We may collect personal information such as your name, email address, phone number, and postal address when you voluntarily provide it to us. Additionally, we may collect certain non-personal information automatically, including your IP address, browser type, operating system, and website usage data through cookies and other tracking technologies.'
  },
  {
    title: 'How we use your Information',
    content: [
      'Provide and personalize our services',
      'Communicate with you, including responding to your inquiries and customer support',
      'Analyze and improve our website and services',
      'Send you promotional materials and updates about our products and services, with your consent',
      'Comply with legal obligations and enforce our terms of service'
    ]
  },
  {
    title: 'Information Sharing',
    content: 'We may share your personal information with third-party service providers who assist us in operating our website, conducting our business, or servicing you. We may also share your information when required by law or to protect our rights, property, or safety, or that of others.'
  },
  {
    title: 'Data Security',
    content: 'We take reasonable measures to protect the security of your personal information and prevent unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.'
  },
  {
    title: 'Your Choices',
    content: 'You have the right to access, update, or delete your personal information. You may also opt-out of receiving promotional communications from us at any time by following the instructions provided in such communications or by contacting us directly.'
  },
  {
    title: 'Changes to this Privacy Policy',
    content: 'We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We encourage you to review this page periodically for the latest information on our privacy practices.'
  }
];

const PolicySection: React.FC<PolicySection> = ({ title, content }) => (
  <div className="flex flex-col w-full">
      
    <h2 className="text-xl font-bold leading-snug">{title}</h2>
    <div className="mt-2.5 text-base leading-7">
      {Array.isArray(content) ? (
        <ul className="list-disc list-inside">
          {content.map((item, index) => (
            <li key={index} className="mb-2">{item}</li>
          ))}
        </ul>
      ) : (
        content
      )}
    </div>
  </div>
);

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <Head>
        <title>BotWot ICX - Privacy Policy</title>
        <meta name="description" content="Privacy policy for BotWot ICX services" />
      </Head>
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <header className="mb-12">
          <h1 className="text-5xl font-bold leading-tight max-md:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-base leading-7">
            BotWot ICX is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your personal information when you visit our website or use our services.
          </p>
        </header>
        
        <div className="space-y-6">
          {PRIVACY_SECTIONS.map((section, index) => (
            <PolicySection 
              key={index} 
              title={section.title} 
              content={section.content} 
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;