import {useState,useEffect} from 'react';
import { FaChartLine, FaLaptop, FaBezierCurve, FaCheckCircle } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import wordpressDev from '../assets/wordpress-development.jpg'
import planningarch from '../assets/planningImg.png'
import themedevelopment from '../assets/themedevelopment.png'
import responsivewebdesign from '../assets/responsivewebdesign.png'
import pluginintegration from '../assets/pluginintegration.png'

// Heroicons for icons
import {
  CheckCircleIcon,
  ArrowRightIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/solid";

import SumanaaLogo from "../assets/sumanaaLogo1.png";
import PartnerLogoB from "../assets/logoimg.png";
import PartnerLogoC from "../assets/logo.png";
import GTR from "../assets/golden.png";
import Vagtha from "../assets/vagtha.png";
import Dharani from "../assets/dharani logo.png";
import IshaaSilks from "../assets/ishaa.png";
import Vibrant from "../assets/vibrant.webp"; 

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
export default function WordpressDevelopment(props){
    const coreElements = [
  {
    title: "Planning and Architecture",
    description:
      "The journey begins with a strategic roadmap. Luvetha Tech Solutins intricately plans and designs the architecture of each website, ensuring it aligns with the unique goals and requirements of the client.",
    image: planningarch
  },
  {
    title: "Theme Development",
    description:
      "Themes are the visual identity of a website. Luvetha Tech Solutins excels in crafting captivating and functional themes, ensuring a user experience that captivates and retains visitors.",
    image: themedevelopment
  },
  {
    title: "Plugin Integration",
    description:
      "Versatility is key, and plugins enhance the functionality of a WordPress website. Our developers adeptly integrate plugins tailored to the specific needs of each project, enhancing its capabilities.",
    image: pluginintegration
  },
  {
    title: "Responsive Design",
    description:
      "In a world of diverse devices, a responsive design is paramount. Luvetha Tech Solutins prioritizes responsiveness, guaranteeing a seamless user experience across various platforms, from desktops to mobile devices.",
    image: responsivewebdesign
  },
];

    const faqs = [
  {
    question: "How long does it take to develop a WordPress website with Luvetha Tech Solutins?",
    answer: "Our development timelines vary based on the complexity and features required. On average, we deliver fully functional websites within 4-6 weeks.",
  },
  {
    question: "Is WordPress a secure platform for website development?",
    answer: "Yes, WordPress is inherently secure. At Luvetha Tech Solutins, we implement additional security measures and regular updates to ensure your website is protected against potential threats.",
  },
  {
    question: "How secure is WordPress?",
    answer: "With proper measures and updates, WordPress is highly secure. Ratnam Solution ensures robust security for your site.",
  },
  {
    question: "What makes Luvetha Tech Solutins stand out as a WordPress Development Company?",
    answer: "Our commitment to quality, personalized solutions, and a client-centric approach sets us apart. We prioritize client satisfaction and deliver websites that align with their unique goals.",
  },
];

 const [activeIndex, setActiveIndex] = useState(0);

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

    const features = [
  {
    title: "User-Friendly Interface",
    description:
      "WordPress offers an intuitive and user-friendly interface, empowering website owners to manage and update content effortlessly. This ensures a seamless experience for both administrators and visitors.",
  },
  {
    title: "Cost-Effective Solutions",
    description:
      "Luvetha Tech Solutins emphasizes cost-effective solutions without compromising quality. WordPress development allows businesses to achieve a sophisticated online presence without breaking the bank.",
  },
  {
    title: "Scalability and Flexibility",
    description:
      "Scalability is at the core of WordPress development. Whether you’re a startup or an established enterprise, Luvetha Tech Solutins ensures that your website can evolve with your business, adapting to changing needs seamlessly.",
  },
];

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

const services = [
  {
    icon: <FaChartLine className="text-white w-10 h-10" />,
    title: "Keyword Optimization",
    description:
      "Luvetha Tech Solutins ensures your WordPress site ranks high by strategically optimizing keywords. Our meticulous approach guarantees optimal visibility on search engine results pages.",
    circleColor: "bg-yellow-400",
    hoverCircle: "hover:bg-blue-700",
  },
  {
    icon: <FaLaptop className="text-white w-10 h-10" />,
    title: "Quality Content Creation",
    description:
      "Content is king, and we understand its importance. Our team creates compelling, relevant, and shareable content to attract and retain your target audience.",
    circleColor: "bg-yellow-400",
    hoverCircle: "hover:bg-blue-700",
  },
  {
    icon: <FaBezierCurve className="text-white w-10 h-10" />,
    title: "Backlink Strategies",
    description:
      "Building a robust network of backlinks is crucial for SEO success. Luvetha Tech Solutins employs effective strategies to enhance your WordPress website’s authority and credibility.",
    circleColor: "bg-yellow-400",
    hoverCircle: "hover:bg-blue-700",
  },
];
const countersData = [
  { icon: "https://ratnamsolutions.com/wp-content/uploads/2024/08/Years-icon-1.png", value: 12, unit: "+", label: "Years of Experience" },
  { icon: "https://ratnamsolutions.com/wp-content/uploads/2024/08/Projects-icon-1.png", value: 3000, unit: "+", label: "Projects" },
  { icon: "https://ratnamsolutions.com/wp-content/uploads/2024/08/Clients-icon-1.png", value: 260, unit: "+", label: "Clients" },
  { icon: "https://ratnamsolutions.com/wp-content/uploads/2024/08/Friendly-icon-1.png", value: 100, unit: "%", label: "Friendly Support" },
];
 const [counters, setCounters] = useState(countersData.map(() => 0));

  useEffect(() => {
    // Simple counter animation
    countersData.forEach((counter, idx) => {
      let start = 0;
      const end = counter.value;
      const duration = 1500;
      const increment = end / (duration / 50);

      const interval = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(interval);
        }
        setCounters((prev) => {
          const newCounters = [...prev];
          newCounters[idx] = Math.floor(start);
          return newCounters;
        });
      }, 50);
    });
  }, []);

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
    
    
    return(<>
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
        <div className="grid md:grid-cols-3 gap-10 items-start">

          {/* LEFT SIDE (2/3 Width) */}
          <div className="md:col-span-2">
            {/* Image */}
            <div className="shadow-[0px_0px_25px_15px_rgba(16,0,51,0.05)] mb-12 overflow-visible w-full">
              <img
                src={wordpressDev}
                alt="WordPress Development"
                className="w-full h-auto max-h-[600px] object-contain rounded-md"
              />
            </div>

            {/* Heading */}
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
              WordPress Development
            </h1>

            {/* Description */}
            <p className="text-white/80 text-lg leading-relaxed">
              In the dynamic world of digital presence, Luvetha Tech Solutions emerges
              as the beacon of excellence, particularly as the go-to WordPress Development Company.
              This article delves into the intricacies of WordPress development, emphasizing its
              core elements, significance, benefits, and the crucial role of SEO in enhancing
              WordPress websites.
            </p>
          </div>

          {/* RIGHT SIDE FORM (1/3 Width) */}
          <div className="md:col-span-1 w-full">
            <div className="bg-[#0091dd] rounded-xl p-6 sm:p-8 lg:p-10 text-white shadow-xl h-fit">
              <form onSubmit={handleSubmit} className="space-y-5">
                {[
                  { label: "First name", name: "firstName", type: "text", placeholder: "Enter your first name" },
                  { label: "Last name", name: "lastName", type: "text", placeholder: "Enter your last name" },
                  { label: "Email", name: "email", type: "email", placeholder: "Enter your email" },
                  { label: "Phone no", name: "phone", type: "tel", placeholder: "Enter your phone number" },
                  { label: "Service Requirement", name: "serviceRequirement", type: "text", placeholder: "Enter your service requirement" },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="block text-lg font-medium text-white">{field.label}</label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleInputChange}
                      placeholder={field.placeholder}
                      className="mt-2 w-full rounded-md border border-white/30 bg-white px-4 py-2.5 text-black focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                    />
                    {submitted && errors[field.name] && (
                      <p className="mt-1 text-lg text-red-500">{errors[field.name]}</p>
                    )}
                  </div>
                ))}

                <div>
                  <label className="block text-lg font-medium text-white">Description</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Description"
                    rows={4}
                    className="mt-2 w-full rounded-md border border-white/30 bg-white px-4 py-2.5 text-black focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-white text-[#0091dd] font-semibold py-3 rounded-md transition duration-300 hover:bg-gray-100"
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


     <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Heading */}
        <h2
          className="text-3xl md:text-4xl font-semibold text-center mb-8"
          
        >
          Core Elements of WordPress Development
        </h2>
        <p
          className="text-center text-lg md:text-xl text-gray-900 mb-12 max-w-3xl mx-auto"
   
        >
          At the heart of every exceptional WordPress website lies a careful
          orchestration of core elements that define its development. These
          elements are the building blocks, meticulously arranged by Luvetha
          Tech Solutions, the premier WordPress Development Company in Kukatpally,
          Hyderabad, to ensure a seamless and effective online presence.
        </p>

        {/* Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {coreElements.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row bg-white shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 min-h-[220px] md:min-h-[250px]">
              <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6 flex justify-center items-start">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-48 h-48 object-contain"
                />
              </div>
              <div>
                <h4
                  className="text-xl font-semibold mb-2"
             
                >
                  {item.title}
                </h4>
                <p
                  className="text-gray-900 text-base leading-relaxed"
                
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

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

<section className="py-16 bg-gray-50 relative overflow-hidden">
      {/* Section Heading */}
      <div className="max-w-6xl mx-auto px-4 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#100033] mb-4">
          Elevate Your WordPress Presence with SEO Excellence.
        </h2>
        <p className="text-lg md:text-xl text-[#100033] max-w-2xl mx-auto">
          In the fast-paced digital era, SEO is the key to online success.
        </p>
      </div>

      {/* Services Cards */}
      <div className="max-w-6xl mx-auto px-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-[#fff7f0] hover:bg-white border border-white hover:border-blue-600 rounded-lg p-8 flex flex-col items-center text-center transition-all duration-300 shadow-md"
          >
            <div
              className={`flex items-center justify-center w-20 h-20 mb-6 rounded-full ${service.circleColor} ${service.hoverCircle} transition-colors duration-300`}
            >
              {service.icon}
            </div>
            <h4 className="text-xl font-semibold text-[#100033] mb-3">
              {service.title}
            </h4>
            <p className="text-[#100033] text-base leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>

      {/* Footer Note */}
      <div className="max-w-4xl mx-auto px-4 mt-12 text-center text-[#100033] text-lg md:text-xl">
        In a nutshell, Luvetha Tech Solutins leverages SEO tactics to elevate your online visibility and contribute to your overall digital success.
      </div>
    </section>

    <section className="py-16 bg-white">
      {/* Heading */}
      <div className="max-w-6xl mx-auto px-4 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#100033] mb-4">
          Importance of WordPress Development
        </h2>
        <p className="text-lg md:text-xl text-[#100033] max-w-2xl mx-auto">
          Understanding the pivotal role of WordPress development is crucial for businesses aiming to establish a strong online presence.
        </p>
      </div>

      {/* Features */}
      <div className="max-w-6xl mx-auto px-4 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-white border border-dashed border-gray-300 rounded-lg p-6 flex"
            style={{ transition: "transform 0.3s" }}
          >
            <div className="flex-shrink-0 flex items-start justify-center mr-4">
              <div className="bg-[#f5f7f9] rounded-lg w-20 h-20 flex items-center justify-center text-[#fdb300] hover:text-white transition-colors duration-300">
                <FaCheckCircle className="w-10 h-10" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-medium text-[#040d16] mb-2 text-left sm:text-center">
                {feature.title}
              </h3>
              <p className="text-gray-700 text-base leading-relaxed sm:text-center">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
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

      <section className="relative bg-gradient-to-b from-[#ff871a] to-[#ff871a] py-16 overflow-hidden">
      {/* Background pattern (SVG dots) */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'url("data:image/svg+xml;utf8,<svg width=\'60\' height=\'60\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'><path d=\'M6 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0\' fill=\'rgba(255,255,255,1)\'/></svg>")',
          mixBlendMode: "normal",
          filter: "blur(4px)",
        }}
      ></div>

      <div className="relative max-w-6xl mx-auto px-4 text-center text-white">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-6" style={{ fontFamily: "IBM Plex Sans" }}>
          Benefits of WordPress
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-8" style={{ color: "rgba(255,255,255,0.8)", fontFamily: "IBM Plex Sans" }}>
          WordPress is a popular choice for businesses wanting a modern, easy-to-manage website. Its advantages include being mobile-friendly, user-friendly, highly customizable, SEO-friendly, secure, and cost-effective. Our WordPress designers prioritize mobile responsiveness, ensuring your site remains user-friendly on smartphones and tablets. With optimized code and premium plugins, we guarantee a seamless user experience, aligning your website with the preferences of today’s tech-savvy users.
        </p>

        {/* Call-to-action Button */}
        <a
          href="https://ratnamsolutions.com/contact/"
          className="inline-block mt-8 px-10 py-5 text-lg font-semibold uppercase tracking-tight rounded-none bg-white text-[#ff871a] hover:bg-[#ff871a] hover:text-white transition-all duration-300"
          style={{ fontFamily: "IBM Plex Sans" }}
        >
          Get Started Today!
        </a>
      </div>
    </section>
    <section className="bg-white py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8">FAQs – WordPress Development</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-300 rounded-lg overflow-hidden shadow-sm">
              <button
                onClick={() => toggleIndex(index)}
                className="flex justify-between items-center w-full px-6 py-4 text-left text-lg md:text-xl font-medium text-gray-800 bg-gray-50 hover:bg-gray-100 focus:outline-none"
              >
                <span>{faq.question}</span>
                <span className="ml-4 text-blue-600">
                  {activeIndex === index ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  )}
                </span>
              </button>
              {activeIndex === index && (
                <div className="px-6 py-4 bg-white text-gray-700 text-base md:text-lg border-t border-gray-200">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>


  
    </>)
}