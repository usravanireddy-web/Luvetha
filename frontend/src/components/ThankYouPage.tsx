import React from "react";
import { Mail, Phone, MapPin, Linkedin,Instagram,Youtube,MessageCircle } from 'lucide-react';

const ThankYouPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f4f8f7] relative">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-yellow-500 -z-10 clip-path-diagonal-left"></div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-green-500 -z-10 clip-path-diagonal-right"></div>

      {/* Main Content */}
      <div className="text-center max-w-lg mx-auto p-6">
        <div className="flex justify-center mb-6">
          <div className="bg-green-500 rounded-full p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        <h1 className="text-3xl font-bold text-gray-800 mb-2">Thank you!</h1>
        <p className="text-gray-600 mb-8">
          We've sent your free report to your inbox so it's easy to access. You can find
          more information on our website and social pages.
        </p>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Social Links */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h2 className="text-lg font-semibold mb-4">Connect With Us</h2>
            <div className="flex justify-center gap-4 text-xl text-gray-700">
              <a 
                href="https://www.linkedin.com/company/luvetha-tech-solutions-pvt-ltd/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://www.instagram.com/lv_luvetha" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://www.youtube.com/@luvethatechsolutions" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a 
                href="https://wa.me/919000204921" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Website Link */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h2 className="text-lg font-semibold mb-4">Visit Our Website</h2>
            <a
              href="/"
              className="inline-block bg-blue-500 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-600 transition"
            >
              Visit Website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
