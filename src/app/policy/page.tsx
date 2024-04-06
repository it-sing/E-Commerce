import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "policy",
  description: "This is policy LY STORE",
  keywords: ['store', 'ecommerce', 'sell']
};

const PolicyPage: React.FC = () => {
  return (
    <div className=" p-20">
      <div className="container mx-auto ">
      <h1 className="text-3xl font-bold mb-4 text-center">Privacy Policy</h1>
      <section className="text-lg p-10 bg-slate-50 rounded ">
        <p className="mb-4">We are committed to protecting your privacy and ensuring the security of your personal information.</p>
        <p className="mb-4">Your personal data, including name, address, email, and payment details, are securely stored and used only for order processing and communication purposes.</p>
        <p className="mb-4">We do not sell or share your information with third parties, except as required by law or to fulfill orders through trusted partners such as payment processors and shipping companies.</p>
        <p className="mb-4">By using our website, you consent to the collection, processing, and storage of your personal data as outlined in this privacy policy.</p>
        <p className="mb-4">You have the right to request access to your personal information, as well as the right to rectify or delete any inaccurate or outdated data.</p>
        <p className="mb-4">We may use cookies and similar technologies to enhance your browsing experience and provide personalized content based on your preferences.</p>
        <p className="mb-4">You can manage your cookie preferences through your browser settings or by opting out of non-essential cookies on our website.</p>
        <p className="mb-4">This privacy policy may be updated from time to time to reflect changes in our practices or legal requirements. Any updates will be posted on this page.</p>
        <p className="mb-4">If you have any questions or concerns about our privacy practices, please contact us for further assistance.</p>
        <p className="mb-4">By continuing to use our website, you acknowledge that you have read and understood our privacy policy and agree to its terms and conditions.</p>
      </section>
      </div>
    </div>
  );
};

export default PolicyPage;
