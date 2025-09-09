import { useState } from "react";

const sections = [
  {
    title: "1. Information We Collect",
    content: (
      <div>
        <p className="mb-2">We may collect the following types of information:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <strong>Personal Information:</strong> Name, email address, phone number, etc. (usually via contact forms, registration, or course enrollment).
          </li>
          <li>
            <strong>Non-Personal Information:</strong> Browser type, IP address, device type, and pages visited (via cookies and analytics tools).
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "2. How We Use Your Information",
    content: (
      <ul className="list-disc pl-6 space-y-1">
        <li>Provide and improve our services (web development, digital marketing, cloud solutions, etc.).</li>
        <li>Respond to your inquiries and customer support requests.</li>
        <li>Send important updates, promotional content, or service-related communications.</li>
        <li>Analyze trends, monitor website performance, and enhance user experience.</li>
        <li>Ensure compliance with legal obligations.</li>
      </ul>
    ),
  },
  {
    title: "3. Cookies and Tracking Technologies",
    content: (
      <p>
        We use cookies to enhance user experience. You can disable cookies in your browser settings, but this may affect website functionality.
      </p>
    ),
  },
  {
    title: "4. Third-Party Services",
    content: (
      <p>
        We may use tools like Google Analytics, email marketing platforms, or payment gateways. These third parties have their own privacy policies.
      </p>
    ),
  },
  {
    title: "5. Data Security",
    content: (
      <p>
        We implement reasonable technical and organizational measures to protect your data from unauthorized access, disclosure, or misuse.
      </p>
    ),
  },
  {
    title: "6. Your Rights",
    content: (
      <ul className="list-disc pl-6 space-y-1">
        <li>Request access to or correction of your personal data.</li>
        <li>Opt out of marketing emails.</li>
        <li>Request deletion of your data (where applicable).</li>
      </ul>
    ),
  },
  {
    title: "7. Updates to this Policy",
    content: (
      <p>
        We may update this Privacy Policy occasionally. Changes will be posted on this page with a revised date.
      </p>
    ),
  },
  {
    title: "8. Contact Us",
    content: (
      <div>
        <p>If you have questions or concerns, contact:</p>
        <p className="mt-2">📧 <strong>Email:</strong> lakshmareddy@luvetha.com</p>
        <p>📞 <strong>Phone:</strong> 9000204921</p>
      </div>
    ),
  },
];

export default function PrivacyPolicy() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 mt-5">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      

      <div className="space-y-4">
        {sections.map((section, index) => (
          <div key={index} className="border rounded-xl shadow-sm">
            <button
              onClick={() => toggleSection(index)}
              className="w-full flex justify-between items-center px-4 py-3 text-left font-semibold text-lg bg-gray-100 hover:bg-gray-200 rounded-t-xl"
            >
              {section.title}
              <span>{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <div className="p-4 text-gray-700">{section.content}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
