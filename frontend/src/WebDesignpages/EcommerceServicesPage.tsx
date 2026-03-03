import {useState} from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ecommerce from '../assets/ecommerce.png';

import SumanaaLogo from "../assets/sumanaaLogo1.png";
import PartnerLogoB from "../assets/logoimg.png";
import PartnerLogoC from "../assets/logo.png";
import GTR from "../assets/golden.png";
import Vagtha from "../assets/vagtha.png";
import Dharani from "../assets/dharani logo.png";
import IshaaSilks from "../assets/ishaa.png";
import Vibrant from "../assets/vibrant.webp"; 
import econsulting from '../assets/econsulting.png'
import customecommerce from '../assets/customecommerce.png'
import mobileecommerce from '../assets/mobileecommerce.png'
import hostingservices from '../assets/hostingservices.png'
import ecommercemigration from '../assets/ecommercemigration.png'
import ecommercefb from '../assets/ecommercefb.png'

type BrandItem={
  src : string;
  alt : string
}

const localLogos: BrandItem[] = [
  { src: SumanaaLogo, alt: "Sumana" },
  { src: PartnerLogoB, alt: "Partner B" },
  { src: PartnerLogoC, alt: "Partner C" },
  { src: GTR, alt: "Golden Ratio" },
  { src: Vagtha, alt: "Vagtha" },
  { src: Dharani, alt: "Dharani" },
  { src: IshaaSilks, alt: "Ishaa Silks" },
    {src:Vibrant,alt:'Vibrant'}
 
]

// Heroicons for icons
import {
  CheckCircleIcon,
  ArrowRightIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/solid";

export default function EcommerceServiceDevelopment(props) {

    const faqs = [
  {
    question: "Why is E-commerce web development important?",
    answer:
      "E-commerce web development is essential for creating a seamless, engaging, and secure online shopping experience. A professionally developed website improves customer trust, enhances user experience, supports scalability, and boosts your online visibility — all of which are crucial for driving sales and growing your business.",
  },
  {
    question: "How do I choose the right E-commerce platform for my business?",
    answer:
      "Choosing the right platform depends on your business goals, budget, technical needs, and scalability requirements. Platforms like Shopify, WooCommerce, Magento, and custom-built solutions each have their strengths. At Luvetha Tech Solutins, we analyze your needs and recommend the most suitable platform for optimal performance and growth.",
  },
  {
    question: "Why is E-commerce important for small and developing businesses?",
    answer:
      "E-commerce empowers small and developing businesses to reach a wider audience beyond local boundaries. It reduces overhead costs, enables 24/7 selling, and offers data-driven insights to improve sales strategies. It’s a cost-effective way to compete with larger players and grow steadily in the digital marketplace.",
  },
  {
    question: "What is the cost of E-commerce website design in India?",
    answer:
      "The cost varies depending on factors like features, design complexity, platform choice, and integration requirements. Basic E-commerce websites may start from ₹25,000, while more advanced or custom solutions can range much higher. At Luvetha Tech Solutins, we offer flexible packages tailored to your budget and business needs.",
  },
  {
    question: "Do you offer SEO and marketing services for E-commerce stores?",
    answer:
      "Yes, we do. Our digital marketing experts offer complete SEO, PPC advertising, social media marketing, and conversion optimization services specifically designed for E-commerce businesses. We help drive quality traffic to your store and boost online sales.",
  },
  {
    question: "What payment gateways and methods should I integrate into my store?",
    answer:
      "We recommend integrating secure and widely accepted payment gateways like Razorpay, PayPal, Stripe, and Paytm, among others. The right mix depends on your target market and business model. We help you integrate multiple options, including credit/debit cards, UPI, net banking, and wallet payments for maximum convenience.",
  },
  {
    question: "Does your company offer a custom E-commerce development solution?",
    answer:
      "Absolutely. Luvetha Tech Solutins specializes in custom E-commerce development tailored to your brand and business needs. Whether you need a unique feature, third-party integrations, or a completely customized user journey, our team can build scalable, performance-driven solutions that stand out in the market.",
  },
];

 const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };


type BrandItem = {
  src: string;
  alt: string;
};

const BrandGrid = ({ items }: { items: BrandItem[] }) => (
  <Swiper
    modules={[Autoplay, Navigation]}
    spaceBetween={16}
    slidesPerView={2}
    navigation
    autoplay={{ delay: 3000, disableOnInteraction: false }}
    loop
    breakpoints={{
      640: { slidesPerView: 3 },
      768: { slidesPerView: 4 },
      1024: { slidesPerView: 5 },
    }}
    className="py-4"
  >
    {items.map((item, index) => (
      <SwiperSlide key={`brand-${item.alt}-${index}`}>
   <div className="w-full h-40 
                flex items-center justify-center p-4
                border border-sky-500
                rounded-none
                transition-all duration-300
                hover:shadow-xl 
                hover:bg-white/5">
  <img
    src={item.src}
    alt={item.alt}
    className="w-full h-full object-contain"
  />
</div>
      </SwiperSlide>
    ))}
  </Swiper>
);

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [formData, setFormData] = useState<any>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    serviceRequirement: "",
    description: "",
  });
    const handleSubmit = (e) => {
  e.preventDefault();

  setSubmitted(true);

    const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const validateForm = () => {
  const newErrors:any= {};

  if (!formData.firstName.trim())
    newErrors.firstName = "First name is required";

  if (!formData.lastName.trim())
    newErrors.lastName = "Last name is required";

  if (!formData.email.trim())
    newErrors.email = "Email is required";

  if (!formData.phone.trim())
    newErrors.phone = "Phone number is required";

  if (!formData.serviceRequirement.trim())
    newErrors.serviceRequirement = "Service requirement is required";

  return newErrors;
};

  const validationErrors = validateForm();
  setErrors(validationErrors);

  if (Object.keys(validationErrors).length === 0) {
    setIsSuccess(true);

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      serviceRequirement: "",
      description: "",
    });
  }
};

const handleInputChange = (e) => {
const { name, value } = e.target;
setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
    <section className="relative bg-[#0f172a] overflow-hidden py-16 md:py-24">

      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,%3Csvg width='60' height='60' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 4a2 2 0 11-4 0 2 2 0 014 0' fill='white'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 items-center">

          {/* LEFT SIDE (2/3 Width) */}
          <div className="md:col-span-2">

            {/* Video */}
            <div className="shadow-[0px_0px_25px_15px_rgba(16,0,51,0.05)] mb-12">
            <img
            src={ecommerce}
            alt="Ecommerce Store"
            className="w-full h-[520px] object-cover rounded-md"
            />
          </div>

            {/* Heading */}
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
              E-commerce Web and App Development Services Company in Hyderabad
            </h1>

            {/* Description */}
            <p className="text-white/80 text-lg leading-relaxed">
              At Luvetha Tech Solutins, our expert Ecommerce Web and App Development
              Services in Hyderabad are designed to help your business succeed
              in the digital marketplace. We specialize in crafting beautifully
              designed, conversion-focused storefronts that drive results.
            </p>
          </div>

          {/* RIGHT SIDE FORM (1/3 Width) */}
          {/* RIGHT SIDE FORM (1/3 Width) */}
<div className="md:col-span-1 w-full">
  <div className="bg-[#0091dd] 
                  rounded-xl 
                  p-6 sm:p-8 lg:p-10 
                  text-white 
                  shadow-xl 
                  h-fit">

    <form onSubmit={handleSubmit} className="space-y-5">

      {[
        { label: "First name", name: "firstName", type: "text", placeholder: "Enter your first name" },
        { label: "Last name", name: "lastName", type: "text", placeholder: "Enter your last name" },
        { label: "Email", name: "email", type: "email", placeholder: "Enter your email" },
        { label: "Phone no", name: "phone", type: "tel", placeholder: "Enter your phone number" },
        { label: "Service Requirement", name: "serviceRequirement", type: "text", placeholder: "Enter your service requirement" },
      ].map((field) => (
        <div key={field.name}>
          <label className="block text-lg font-medium text-white">
            {field.label}
          </label>

          <input
            type={field.type}
            name={field.name}
            value={formData[field.name]}
            onChange={handleInputChange}
            placeholder={field.placeholder}
            className="mt-2 w-full rounded-md
                       border border-white/30
                       bg-white
                       px-4 py-2.5
                       text-black
                       focus:outline-none
                       focus:ring-2
                       focus:ring-white
                       focus:border-transparent"
          />

          {submitted && errors[field.name] && (
            <p className="mt-1 text-lg text-red-500">
              {errors[field.name]}
            </p>
          )}
        </div>
      ))}

      <div>
        <label className="block text-lg font-medium text-white">
          Description
        </label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          placeholder="Description"
          rows={4}
          className="mt-2 w-full rounded-md
                     border border-white/30
                     bg-white
                     px-4 py-2.5
                     text-black
                     focus:outline-none
                     focus:ring-2
                     focus:ring-white
                     focus:border-transparent"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-white 
                   text-[#0091dd]
                   font-semibold 
                   py-3 
                   rounded-md 
                   transition 
                   duration-300
                   hover:bg-gray-100"
      >
        Submit
      </button>

      {isSuccess && (
        <div className="rounded bg-green-100 p-3 text-green-700 font-medium text-sm">
          Thank you! Your form has been submitted successfully.
        </div>
      )}
    </form>
  </div>
</div>
        </div>
      </div>
    </section>
    {/* WHY CHOOSE SECTION */}
<section className="py-12 md:py-16 lg:py-20 bg-white">
  <div className="max-w-6xl mx-auto px-6">

    {/* Heading */}
    <h2 className="text-2xl sm:text-3xl md:text-4xl 
                   font-semibold 
                   text-[#100033] 
                   leading-snug 
                   mb-6">
      Why Choose Luvetha Tech Solutions to Elevate Your E-commerce Success?
    </h2>

    {/* Description */}
    <p className="text-base sm:text-lg md:text-xl 
                  text-[#100033] 
                  leading-relaxed 
                  max-w-5xl">
      Founded in 2025, Luvetha Tech Solutions is your trusted partner for scalable 
      e-commerce solutions, specializing in Magento 2, Shopify, WooCommerce, 
      Odoo ERP, Adobe Commerce, SEO E-commerce, and mobile commerce. Discover 
      why we are the best e-commerce web development company in Hyderabad and 
      why choosing us is the right decision.
    </p>

  </div>
</section>

{/* ACHIEVEMENTS / COUNTERS SECTION */}
<section
      className="relative w-full bg-cover bg-center"
     style={{
        backgroundImage:
      "url('https://ratnamsolutions.com/wp-content/uploads/2024/08/mc-1.jpg')",
     }}
>
  {/* Overlay */}
  <div className="absolute inset-0"></div>

  <div className="relative max-w-7xl mx-auto px-6 py-12 md:py-16">
    <div className="flex flex-col lg:flex-row items-center lg:items-stretch">

      {/* LEFT TITLE COLUMN */}
      <div className="w-full lg:w-1/3 mb-10 lg:mb-0 lg:pl-12 text-white">
        <p className="uppercase text-sm tracking-widest font-light mb-2">
          Achievement
        </p>
        <h3 className="text-2xl md:text-3xl font-semibold leading-snug">
          We Are Enhancing <br /> Business Success
        </h3>
      </div>

      {/* RIGHT COUNTERS */}
      <div className="w-full lg:w-2/3 grid grid-cols-2 md:grid-cols-4 border-t lg:border-t-0 lg:border-l border-[#4083cd]">

        {/* Counter Item */}
        {[
           {
      value: "5+",
      label: "Years of Experience",
      icon: "https://cdn-icons-png.flaticon.com/512/2910/2910761.png", // Calendar icon
    },
    {
      value: "450+",
      label: "Projects",
      icon: "https://cdn-icons-png.flaticon.com/512/2942/2942285.png", // Project/Folder icon
    },
    {
      value: "200+",
      label: "Clients",
       icon: "https://cdn-icons-png.flaticon.com/512/1077/1077114.png", // Users icon
    },
    {
      value: "100%",
      label: "Friendly Support",
      icon: "https://cdn-icons-png.flaticon.com/512/725/725643.png", // Headset / Support icon
    },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center 
                       text-center text-white 
                       py-8 px-4 
                       border-b md:border-b-0 
                       md:border-r border-[#4083cd]"
          >
            <img
              src={item.icon}
              alt={item.label}
              className="w-12 h-12 mb-4 invert"
            />
            <h4 className="text-3xl md:text-4xl font-semibold">
              {item.value}
            </h4>
            <p className="mt-2 text-sm md:text-base">
              {item.label}
            </p>
          </div>
        ))}

      </div>
    </div>
  </div>
</section>

<section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    {/* Section Title */}
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#100033]">
        E-commerce Development Services
      </h2>
      <p className="mt-4 text-lg sm:text-xl text-[#100033] leading-relaxed max-w-3xl mx-auto">
        Maximize the potential of your online business with the best E-commerce development services,
        helping organizations achieve their business goals through a seamless, scalable, and high-performing shopping experience.
      </p>
    </div>

    {/* Cards Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
      {[
        {
          title: "E-commerce Consulting",
          img: econsulting,
          desc: "Our experienced consultants help you define the right strategy, select the best technology stack, and create a roadmap for building or scaling your e-commerce business. We support you at every stage, from in-depth market analysis to seamless performance optimization."
        },
        {
          title: "Custom E-commerce Development",
          img: customecommerce,
          desc: "We develop fully customized e-commerce solutions tailored to your business goals, industry demands, and customer expectations. Whether it’s B2B, B2C, or multi-vendor platforms, we build solutions that are scalable, secure, and performance-driven."
        },
        {
          title: "Mobile E-commerce App Development",
          img: mobileecommerce,
          desc: "Reach your customers anytime, anywhere with intuitive and feature-rich mobile e-commerce apps. We specialize in developing Android, iOS, and cross-platform applications that offer seamless navigation, fast loading, and secure transactions."
        },
        {
          title: "Hosting and Infrastructure Management",
          img: hostingservices,
          desc: "Ensure your online store is always up and running with our managed hosting and infrastructure solutions. We provide reliable cloud hosting, server monitoring, load balancing, security updates, and performance optimization for uninterrupted operations."
        },
        {
          title: "E-commerce Front-End & Back-End Development",
          img: ecommercefb,
          desc: "From engaging, responsive front-end interfaces to secure and scalable back-end systems, we build the complete technical foundation for your online store. Our development ensures smooth performance, fast page loads, and seamless customer experiences."
        },
        {
          title: "E-commerce Migration and Integration",
          img: ecommercemigration,
          desc: "Upgrade or switch platforms without losing data or functionality. We ensure smooth migration of your store and integrate third-party tools, payment gateways, CRM, ERP, and other systems to enhance functionality and streamline your operations."
        }
      ].map((item, idx) => (
        <div
          key={idx}
          className="bg-white shadow-lg p-8 rounded-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center w-full max-w-xl mx-auto"
        >
          <img
            src={item.img}
            alt={item.title}
            className="w-70 h-70 object-contain mb-6"
          />
          <h4 className="text-2xl sm:text-3xl font-semibold mb-4 text-[#100033]">
            {item.title}
          </h4>
          <p className="text-lg sm:text-base text-[#100033] leading-relaxed">
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

 <section
        className="bg-cover bg-center py-12"
        style={{ backgroundImage: "url('/clientBg-1.jpg')" }}
      >
        <div className="container mx-auto px-4">
       

            <section className="bg-gray-50 py-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-center gap-3 mb-8">
                  <div className="h-px w-12 bg-gray-300" />
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                    <span className="text-[#0091dd]">Brands</span> Trust Us
                  </h3>
                  <div className="h-px w-12 bg-gray-300" />
                </div>

                <BrandGrid items={localLogos} />
              </div>
            </section>

        
        </div>
      </section>

      <section className="py-16 bg-white">
  <div className="max-w-6xl mx-auto px-6">
    {/* Section Header */}
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#100033]">
        Our Spectrum of Services
      </h2>
      <p className="mt-4 text-lg sm:text-xl text-[#100033] leading-relaxed max-w-3xl mx-auto">
        At Luvetha Tech Solutins Digital Marketing Agency, we provide a comprehensive range of services designed to elevate your brand and drive measurable results. Explore our expertise:
      </p>
    </div>

    {/* Services Grid */}
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {[
        {
          title: "Search Engine Optimization (SEO)",
          desc: "Our SEO e-commerce experts help your website rank higher on search engines through keyword research, on-page optimization, link-building strategies, and technical SEO audits. We ensure long-term growth by increasing your organic traffic and driving quality leads to your business.",
          icon: "fa-search"
        },
        {
          title: "Pay-Per-Click (PPC) Advertising",
          desc: "We create and manage high-performing Google Ads, Bing Ads, and social media ad campaigns that bring measurable ROI. With precise targeting, smart bidding, and compelling ad creatives, we help you reach the right audience at the right time.",
          icon: "fa-bullseye"
        },
        {
          title: "Social Media Marketing (SMM)",
          desc: "From Facebook and Instagram to LinkedIn and Twitter, we craft custom social media strategies that boost your brand awareness, generate leads, and create meaningful engagement. Our services include content creation, scheduling, influencer outreach, and campaign management.",
          icon: "fa-users"
        },
        {
          title: "Website Development & UI/UX Design",
          desc: "We build responsive, fast-loading, and secure websites that reflect your brand identity and convert visitors into customers. With a focus on user experience (UX) and intuitive UI design, we ensure that your website delivers an exceptional digital experience across devices.",
          icon: "fa-laptop-code"
        },
        {
          title: "WordPress E-commerce Development",
          desc: "We develop custom WordPress e-commerce websites using WooCommerce and other top plugins to offer secure transactions, seamless navigation, and mobile responsiveness. Perfect for small to mid-sized businesses looking for flexible and scalable online stores.",
          icon: "fa-wordpress"
        },
        {
          title: "E-commerce Marketplace Development",
          desc: "We specialize in building robust E-commerce marketplaces that allow multiple sellers to showcase and sell their products under one digital roof. Features include vendor dashboards, order tracking, secure payments, real-time analytics, and mobile optimization.",
          icon: "fa-store"
        },
      ].map((item, idx) => (
        <div
          key={idx}
          className="bg-[#fff7f0] hover:bg-white transition-colors duration-300 p-8 rounded-lg shadow-lg flex flex-col items-center text-center"
        >
          {/* Icon */}
          <i className={`fas ${item.icon} text-4xl text-white bg-[#fdb300] rounded-full w-20 h-20 flex items-center justify-center mb-6 shadow-md`}></i>

          {/* Title */}
          <h4 className="text-xl sm:text-2xl font-semibold mb-4 text-[#100033]">
            {item.title}
          </h4>

          {/* Description */}
          <p className="text-base sm:text-lg leading-relaxed text-[#100033]">
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

<section className="relative bg-white py-12 md:py-16 lg:py-20">
  {/* Background SVG pattern */}
  <div className="absolute inset-0">
    <div
      className="w-full h-full opacity-10 mix-blend-normal"
      style={{ backgroundImage: `url('data:image/svg+xml;utf8,<svg width=60 height=60 fill=none xmlns=http://www.w3.org/2000/svg><path d=M6 4a2 2 0 11-4 0 2 2 0 014 0 fill=rgba(255,255,255,1)/></svg>')` }}
    ></div>
  </div>

  {/* Main content container */}
  <div className="relative container mx-auto px-4 max-w-7xl">
    
    {/* Header */}
    <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
      <h2 className="text-4xl md:text-5xl font-semibold text-[#100033] tracking-tight leading-tight mb-4">
        Technologies We Use for E‑commerce
      </h2>
      <p className="text-lg md:text-xl text-[#100033] leading-relaxed opacity-90">
        At Luvetha Tech Solutins, we leverage the latest and most reliable technologies to build high‑performance, scalable, and secure e‑commerce solutions tailored to your business goals. Our tech stack ensures smooth functionality, enhanced user experience, and long‑term growth.
      </p>
    </div>

    {/* E‑commerce Platforms Subheading */}
    <div className="text-center mb-10 md:mb-14">
      <h3 className="text-3xl md:text-4xl font-normal text-[#040d16] tracking-tight">
        E‑commerce <span className="text-[#fdb300]">Platforms</span>
      </h3>
    </div>

    {/* Platform Cards Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
      {/* Shopify */}
      <div className="group border-b border-dashed border-[#dce0e3] pb-6 transition-transform duration-300 hover:-translate-y-4">
        <div className="flex flex-col sm:flex-row items-start gap-4">
          <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-[#f5f7f9] flex items-center justify-center text-[#fdb300]">
            <i className="fas fa-check-circle text-4xl md:text-5xl"></i>
          </div>
          <div className="flex-1">
            <h4 className="text-xl font-medium text-[#040d16] mb-2 sm:mt-2">Shopify</h4>
            <p className="text-base md:text-lg text-[#3c4451] leading-relaxed">
              Shopify is a leading eCommerce platform that empowers businesses to create, customize, and manage online stores effortlessly.
            </p>
          </div>
        </div>
      </div>

      {/* WooCommerce */}
      <div className="group border-b border-dashed border-[#dce0e3] pb-6 transition-transform duration-300 hover:-translate-y-4">
        <div className="flex flex-col sm:flex-row items-start gap-4">
          <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-[#f5f7f9] flex items-center justify-center text-[#fdb300]">
            <i className="fas fa-check-circle text-4xl md:text-5xl"></i>
          </div>
          <div className="flex-1">
            <h4 className="text-xl font-medium text-[#040d16] mb-2 sm:mt-2">WooCommerce</h4>
            <p className="text-base md:text-lg text-[#3c4451] leading-relaxed">
              WooCommerce is a powerful, customizable eCommerce platform built for WordPress.
            </p>
          </div>
        </div>
      </div>

      {/* Magento */}
      <div className="group border-b border-dashed border-[#dce0e3] pb-6 transition-transform duration-300 hover:-translate-y-4">
        <div className="flex flex-col sm:flex-row items-start gap-4">
          <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-[#f5f7f9] flex items-center justify-center text-[#fdb300]">
            <i className="fas fa-check-circle text-4xl md:text-5xl"></i>
          </div>
          <div className="flex-1">
            <h4 className="text-xl font-medium text-[#040d16] mb-2 sm:mt-2">Magento</h4>
            <p className="text-base md:text-lg text-[#3c4451] leading-relaxed">
              Magento is a robust and scalable eCommerce platform designed for businesses seeking high customization and flexibility.
            </p>
          </div>
        </div>
      </div>

      {/* OpenCart & PrestaShop */}
      <div className="group border-b border-dashed border-[#dce0e3] pb-6 transition-transform duration-300 hover:-translate-y-4">
        <div className="flex flex-col sm:flex-row items-start gap-4">
          <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-[#f5f7f9] flex items-center justify-center text-[#fdb300]">
            <i className="fas fa-check-circle text-4xl md:text-5xl"></i>
          </div>
          <div className="flex-1">
            <h4 className="text-xl font-medium text-[#040d16] mb-2 sm:mt-2">OpenCart & PrestaShop</h4>
            <p className="text-base md:text-lg text-[#3c4451] leading-relaxed">
              OpenCart & PrestaShop are versatile, open‑source eCommerce platforms offering flexibility and powerful tools for online selling.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Full Width Custom PHP / Laravel */}
    <div className="group border-b border-dashed border-[#dce0e3] pb-8 mb-16 transition-transform duration-300 hover:-translate-y-4">
      <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
        <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-[#f5f7f9] flex items-center justify-center text-[#fdb300]">
          <i className="fas fa-check-circle text-4xl md:text-5xl"></i>
        </div>
        <div className="flex-1">
          <h4 className="text-xl font-medium text-[#040d16] mb-2 sm:mt-2">Custom PHP / Laravel Solutions</h4>
          <div className="text-base md:text-lg text-[#3c4451] leading-relaxed space-y-3">
            <p>Custom PHP and Laravel solutions provide powerful, scalable, and tailored web development for businesses seeking flexibility beyond standard eCommerce platforms.</p>
            <p>Custom PHP allows full control over functionality, performance, and integrations, making it ideal for unique business needs.</p>
            <p>Laravel, a modern PHP framework, enhances security, speed, and efficiency with built-in tools for seamless development.</p>
          </div>
        </div>
      </div>
    </div>

    {/* Three Columns: Frontend / Backend / Database */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
      {/* Frontend */}
      <div className="shadow-2xl shadow-[#100033]/5 transition-transform duration-300 hover:-translate-y-2">
        <div className="bg-gradient-to-br from-[#006db1] to-[#100033] px-6 py-10 md:px-8 md:py-12">
          <h5 className="text-white text-2xl font-semibold">Frontend Technologies</h5>
        </div>
        <div className="bg-white px-6 py-8 md:px-8">
          <ul className="space-y-4">
            <li className="flex items-start gap-3"><i className="fab fa-html5 text-[#fdb300] text-xl w-6"></i>HTML5</li>
            <li className="flex items-start gap-3"><i className="fab fa-css3-alt text-[#fdb300] text-xl w-6"></i>CSS3</li>
            <li className="flex items-start gap-3"><i className="fab fa-js text-[#fdb300] text-xl w-6"></i>JavaScript</li>
            <li className="flex items-start gap-3"><i className="fab fa-react text-[#fdb300] text-xl w-6"></i>React.js</li>
            <li className="flex items-start gap-3"><i className="fab fa-vuejs text-[#fdb300] text-xl w-6"></i>Vue.js</li>
            <li className="flex items-start gap-3"><i className="fab fa-angular text-[#fdb300] text-xl w-6"></i>Angular.js</li>
            <li className="flex items-start gap-3"><i className="fas fa-file-code text-[#fdb300] text-xl w-6"></i>Nest.js</li>
          </ul>
        </div>
      </div>

      {/* Backend */}
      <div className="shadow-2xl shadow-[#100033]/5 transition-transform duration-300 hover:-translate-y-2">
        <div className="bg-gradient-to-br from-[#006db1] to-[#100033] px-6 py-10 md:px-8 md:py-12">
          <h5 className="text-white text-2xl font-semibold">Backend Technologies</h5>
        </div>
        <div className="bg-white px-6 py-8 md:px-8">
          <ul className="space-y-4">
            <li className="flex items-start gap-3"><i className="fab fa-php text-[#fdb300] text-xl w-6"></i>PHP</li>
            <li className="flex items-start gap-3"><i className="fab fa-node text-[#fdb300] text-xl w-6"></i>Node.js</li>
            <li className="flex items-start gap-3"><i className="fab fa-python text-[#fdb300] text-xl w-6"></i>Python</li>
            <li className="flex items-start gap-3"><i className="fas fa-laptop-code text-[#fdb300] text-xl w-6"></i>RESTful APIs</li>
            <li className="flex items-start gap-3"><i className="fab fa-codepen text-[#fdb300] text-xl w-6"></i>GraphQL</li>
          </ul>
        </div>
      </div>

      {/* Database & Storage */}
      <div className="shadow-2xl shadow-[#100033]/5 transition-transform duration-300 hover:-translate-y-2">
        <div className="bg-gradient-to-br from-[#006db1] to-[#100033] px-6 py-10 md:px-8 md:py-12">
          <h5 className="text-white text-2xl font-semibold">Database & Storage</h5>
        </div>
        <div className="bg-white px-6 py-8 md:px-8">
          <ul className="space-y-4">
            <li className="flex items-start gap-3"><i className="fas fa-database text-[#fdb300] text-xl w-6"></i>MySQL</li>
            <li className="flex items-start gap-3"><i className="fas fa-server text-[#fdb300] text-xl w-6"></i>MongoDB</li>
            <li className="flex items-start gap-3"><i className="fab fa-gripfire text-[#fdb300] text-xl w-6"></i>Firebase</li>
            <li className="flex items-start gap-3"><i className="fab fa-aws text-[#fdb300] text-xl w-6"></i>AWS</li>
            <li className="flex items-start gap-3"><i className="fab fa-microsoft text-[#fdb300] text-xl w-6"></i>Azure</li>
            <li className="flex items-start gap-3"><i className="fab fa-google text-[#fdb300] text-xl w-6"></i>Google Cloud</li>
          </ul>
        </div>
      </div>
    </div> {/* end three columns */}
  </div> {/* end container */}
</section>

<section className="relative bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
  
  <div className="absolute inset-0">
    <div className="w-full h-full opacity-10 mix-blend-normal
        background-image: url('data:image/svg+xml;utf8,<svg width=60 height=60 fill=none xmlns=http://www.w3.org/2000/svg><path d=M6 4a2 2 0 11-4 0 2 2 0 014 0 fill=rgba(255,255,255,1)/></svg>');">
    </div>
  </div>

  
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col items-center text-center">
    
    <div className="w-full">
     
      <h2 className="text-white font-semibold text-3xl sm:text-4xl md:text-5xl leading-snug mb-6 font-[IBM Plex Sans]">
        Grow Your Business with Our E-commerce Development Services
      </h2>

    
      <div className="text-white/80 font-normal text-lg sm:text-xl md:text-2xl leading-relaxed space-y-4 max-w-3xl mx-auto">
        <p>
          At Luvetha Tech Solutins, we empower businesses to thrive in the digital marketplace with powerful, user-friendly E-commerce development services. Whether you’re a startup or an established brand, we build custom online stores that are fast, secure, and designed to convert visitors into loyal customers. From intuitive UI/UX design and seamless navigation to advanced backend functionality and mobile optimization, every element is crafted to enhance the shopping experience.
        </p>
        <p>
          Our team specializes in platforms like WooCommerce, Shopify, Magento, and custom solutions to suit your unique needs. We also provide integrated services including SEO, digital marketing, and payment gateway setup to give your online store a competitive edge.
        </p>
        <p>
          With Luvetha Tech Solutins, you’re not just getting a website—you’re building a smart, scalable, and results-driven E-commerce platform that fuels business growth.
        </p>
      </div>

    
      <div className="mt-8">
        <a href="https://ratnamsolutions.com/contact/"
           className="inline-block bg-gradient-to-b from-orange-500 to-orange-500 hover:from-orange-600 hover:to-orange-600 text-white font-semibold text-lg sm:text-xl px-10 py-5 rounded-none uppercase transition-all duration-300">
          Get Started Today!
        </a>
      </div>
    </div>
  </div>
</section>

 <section className="bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold text-left mb-12">
          FAQs – E-commerce Development Services
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg overflow-hidden shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 focus:outline-none"
              >
                <span className="text-left text-lg font-medium text-gray-800">
                  {faq.question}
                </span>
                <span className="ml-2 text-gray-500">
                  {activeIndex === index ? (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20 12H4"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  )}
                </span>
              </button>

              <div
                className={`transition-max-height duration-300 ease-in-out overflow-hidden ${
                  activeIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="p-4 text-gray-700">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
</>
  );
}