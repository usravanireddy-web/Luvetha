import { useState } from "react";
// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import keywordSEO from '../assets/keywordSEO.png'
import seohero from '../assets/seohero.png'
import Techweb from '../assets/Techweb.png'
import contentoptimization from '../assets/contentoptimization.png'
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
 
];

// Heroicons for icons
import {
  CheckCircleIcon,
  ArrowRightIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/solid";

// Replace with actual images or keep the original URLs
const images = {
  hero: "https://ratnamsolutions.com/wp-content/uploads/2025/08/SEO-Services-in-Hyderabad-1024x633.jpg",
  keywordResearch:
    "https://ratnamsolutions.com/wp-content/uploads/2024/08/Keyword-Research-and-Optimization-1-1024x1024.jpg",
  performanceMonitoring:
    "https://ratnamsolutions.com/wp-content/uploads/2025/08/Performance-Monitoring-1024x717.jpg",
  influencerMarketing:
    "https://ratnamsolutions.com/wp-content/uploads/2024/08/Influencer-Marketing-1-1024x1024.jpg",
  searchEngineOptimization:
    "https://ratnamsolutions.com/wp-content/uploads/2024/08/7121186-1-1024x1024.jpg",
  technicalSeo:
    "https://ratnamsolutions.com/wp-content/uploads/2024/08/Technical-SEO-1.webp",
  rapidImplementation:
    "https://ratnamsolutions.com/wp-content/uploads/2025/08/Rapid-Implementation-1024x683.jpg",
};

// Client logos (first carousel)
const clients1 = [
  "https://ratnamsolutions.com/wp-content/uploads/2024/08/6-1.png",
  "https://ratnamsolutions.com/wp-content/uploads/2024/08/1-1.png",
  "https://ratnamsolutions.com/wp-content/uploads/2024/08/2-1.png",
  "https://ratnamsolutions.com/wp-content/uploads/2024/08/3-1.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/02/thebelgianwaffle.png",
  "https://ratnamsolutions.com/wp-content/uploads/2024/08/5-1.png",
];


// Second client carousel (many logos)
const clients2 = [
  "https://ratnamsolutions.com/wp-content/uploads/2025/01/Ankusha.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/01/The-Womens-Clinic.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/01/The-Concept-Clinic.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/01/Studios-Stapatia.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/01/Sri-Sri-Holistics.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/01/Satya-Big.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/01/Mygominds.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/01/La-Dezinors.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/01/Clement-Grammar-School.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/01/Anu-Rental-Bikes.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/01/Acela-Services.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/01/hitachi.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/01/i4t.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/01/premierswimmingpool.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/01/vizagflorist.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/01/kmspico.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/01/anzasys.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/01/everneeds.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/01/nutrimealbox.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/01/TedX.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/01/indausglobal.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/01/SJ-Infotech.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/01/twaccha.png",
  "https://ratnamsolutions.com/wp-content/uploads/2024/08/hypersquad.png",
  "https://ratnamsolutions.com/wp-content/uploads/2024/08/Hyra.png",
  "https://ratnamsolutions.com/wp-content/uploads/2024/08/Immigrotech.png",
  "https://ratnamsolutions.com/wp-content/uploads/2024/08/Indus-Hump.png",
  "https://ratnamsolutions.com/wp-content/uploads/2024/08/pickle.png",
  "https://ratnamsolutions.com/wp-content/uploads/2024/08/Premier-Infratech.png",
  "https://ratnamsolutions.com/wp-content/uploads/2024/08/sadhana-1.png",
  "https://ratnamsolutions.com/wp-content/uploads/2024/08/Skp.png",
  "https://ratnamsolutions.com/wp-content/uploads/2024/08/SPC-Infra-Projects.png",
  "https://ratnamsolutions.com/wp-content/uploads/2024/08/Sri-Surya-Logistics.png",
  "https://ratnamsolutions.com/wp-content/uploads/2024/08/vips.png",
  "https://ratnamsolutions.com/wp-content/uploads/2024/08/vivotex.png",
  "https://ratnamsolutions.com/wp-content/uploads/2024/08/follow-ur-arts.png",
  "https://ratnamsolutions.com/wp-content/uploads/2024/08/Gp-Unlock.png",
  "https://ratnamsolutions.com/wp-content/uploads/2024/08/Health-365.png",
  "https://ratnamsolutions.com/wp-content/uploads/2024/08/Hitha.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/01/Veminds.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/01/Career-Germany.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/01/New-Look-Lalitharaj.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/01/Bro-Car-Garage.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/01/Konfido.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/01/AS-Consultancy.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/01/Access2Fly.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/01/Prop-Connect.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/01/Satish-Dentist.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/01/SK-Jewellers-gems.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/01/Glindco.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/01/Ostrich-Solar-Energy-Solutions.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/01/lendingexpert.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/01/Jaya-Ragavendra-mahalaxmi-Masala.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/01/ics_logo.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/01/Feder-Path.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/01/dental.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/01/Canfin-Service.png",
];

// Third client carousel (recent)
const clients3 = [
  "https://ratnamsolutions.com/wp-content/uploads/2025/08/Vivekananda-school-01.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/08/Laurus-01.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/08/Vidyarthi-Vikas-01.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/08/Insta-Token-01.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/08/Harsha-Networks-01.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/08/SVC-Infra-01.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/08/Veeramaneni-01.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/08/Bhart-Udyog-01.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/08/Niche-Softsol-01.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/08/G-mart-01.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/08/I-A-Design-01.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/08/Tekisho-01.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/08/Suguna-01.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/08/zpos-01.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/08/Cimhans-01.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/08/Mochive-01.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/08/Star-Education-Academy-01.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/08/Country-Oven-01.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/08/Thirumala-Diagnostics-01.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/08/Chennais-Amirta-01.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/08/Career-Germany-01.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/08/Legal-Capital-01.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/08/HABIBS-01.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/08/YELLOWCABS-01.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/08/CloudCode-01.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/08/Dezinors-01.png",
];

// Partners carousel
const partners = [
  "https://ratnamsolutions.com/wp-content/uploads/2024/08/7-1.png",
  "https://ratnamsolutions.com/wp-content/uploads/2024/08/8-1.png",
  "https://ratnamsolutions.com/wp-content/uploads/2024/08/9-1.png",
  "https://ratnamsolutions.com/wp-content/uploads/2024/08/10-1.png",
  "https://ratnamsolutions.com/wp-content/uploads/2024/08/11-1.png",
  "https://ratnamsolutions.com/wp-content/uploads/2024/08/12-1.png",
  "https://ratnamsolutions.com/wp-content/uploads/2024/09/13.png",
];

// FAQ data
const faqs = [
  {
    question: "What is SEO and why is it important for my business?",
    answer:
      "SEO (Search Engine Optimization) is the process of improving your website's visibility on search engines like Google. A higher ranking means more visitors, more leads, and more sales for your business.",
  },
  {
    question: "How long does it take to see results from SEO?",
    answer:
      "SEO is a long-term strategy. You can start seeing improvements in 3–6 months, but significant results usually take 6–12 months depending on competition and your current website status.",
  },
  {
    question: "What SEO services does Luvetha Tech Solutins provide?",
    answer:
      "We offer complete SEO solutions including keyword research, on-page optimization, technical SEO, content creation, link building, and local SEO to help your business rank higher.",
  },
  {
    question: "How do you choose the right keywords for my business?",
    answer:
      "We conduct detailed keyword research based on your industry, target audience, competition analysis, and search trends to select high-converting keywords that drive traffic.",
  },
  {
    question: "Will SEO work for a small business?",
    answer:
      "Yes! SEO is one of the most cost-effective ways for small businesses to compete with larger brands by targeting local customers and niche keywords.",
  },
  {
    question: "Do you guarantee first-page rankings on Google?",
    answer:
      "No ethical SEO agency can guarantee rankings. However, our proven strategies improve your chances significantly, and we focus on delivering measurable traffic and lead growth.",
  },
  {
    question: "What is an SEO Audit Report?",
    answer:
      "An SEO audit report is a detailed analysis of your website's performance in search engines. It highlights issues, strengths, and opportunities to improve your rankings, visibility, and user experience.",
  },
  {
    question: "What is local SEO and do I need it?",
    answer:
      "Local SEO helps your business appear in searches for services in your area (e.g., 'best digital marketing agency in Hyderabad'). If you serve local customers, it's essential.",
  },
  {
    question: "How can I track my SEO progress?",
    answer:
      "We provide detailed monthly reports showing keyword rankings, traffic growth, and conversion metrics so you can see the results of our SEO efforts.",
  },
];

// Reusable icon component for circular check
const CircleCheckIcon = () => (
  <div className="flex h-[84px] w-[84px] items-center justify-center rounded-3xl bg-[#f5f7f9] text-[#fdb300]">
    <CheckCircleIcon className="h-10 w-10" />
  </div>
);

// Reusable card for benefits
const BenefitCard = ({ title, description }) => (
  <div className="flex transform flex-col items-start gap-4 border-b border-dashed border-gray-200 pb-8 transition-transform duration-300 hover:-translate-y-4 md:flex-row md:items-center">
    <CircleCheckIcon />
    <div>
      <h3 className="mb-2 font-manrope text-xl font-medium text-[#040d16]">
        {title}
      </h3>
      <p className="font-manrope text-lg text-[#3c4451]">{description}</p>
    </div>
  </div>
);

// Reusable card for strategy
const StrategyCard = ({ image, title, description }) => (
  <div className="flex flex-col items-start gap-6 rounded-2xl bg-white p-8 shadow-2xl shadow-[#100033]/5 transition-all duration-300 hover:scale-105 md:flex-row">
    <img
      src={image}
      alt={title}
      className="h-24 w-24 rounded-2xl object-cover flex-shrink-0"
    />
    <div>
      <h4 className="mb-2 font-ibm-plex-sans text-2xl font-semibold text-[#100033]">
        {title}
      </h4>
      <p className="font-ibm-plex-sans text-base text-[#100033]">
        {description}
      </p>
    </div>
  </div>
);

// Reusable specialized service card
const SpecializedCard = ({ title, description }) => (
  <div className="flex transform flex-col items-start gap-4 border-b border-dashed border-gray-200 pb-8 transition-transform duration-300 hover:-translate-y-4 md:flex-row">
    <CircleCheckIcon />
    <div>
      <h3 className="mb-2 font-manrope text-xl font-medium text-[#040d16]">
        {title}
      </h3>
      <p className="font-manrope text-lg text-[#3c4451]">{description}</p>
    </div>
  </div>
);

// Accordion Item
const AccordionItem = ({ faq, isOpen, toggle }) => (
  <div className="border-b border-gray-200 py-4">
    <button
      className="flex w-full items-center justify-between text-left text-xl font-medium text-gray-900"
      onClick={toggle}
    >
      <span>{faq.question}</span>
      {isOpen ? (
        <ChevronUpIcon className="h-5 w-5 text-[#076ad7]" />
      ) : (
        <ChevronDownIcon className="h-5 w-5 text-[#076ad7]" />
      )}
    </button>
    {isOpen && <p className="mt-2 text-gray-600">{faq.answer}</p>}
  </div>
);

export default function SEOPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(8); // last one open by default as in original
  const [formData, setFormData] = useState<any>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    serviceRequirement: "",
    description: "",
  });
  const [errors, setErrors] = useState({});
const [submitted, setSubmitted] = useState(false);
const [isSuccess, setIsSuccess] = useState(false);

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

const handleSubmit = (e) => {
  e.preventDefault();

  setSubmitted(true);

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



  return (
    <>
    <div className="font-sans">
      {/* Hero Section with gradient and form */}
      <section className="relative w-full overflow-hidden
         bg-[linear-gradient(270deg,rgba(75,85,99,0.88)_0%,rgba(31,41,55,0.97)_100%)] 
                    py-12 md:py-[50px]">

  {/* Pattern Background */}
  <div
    className="absolute inset-0 opacity-[0.12]"
    style={{
      backgroundImage: `url("data:image/svg+xml;utf8,%3Csvg width='60' height='60' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 4a2 2 0 11-4 0 2 2 0 014 0' fill='rgba(255,255,255,1)'/%3E%3C/svg%3E")`,
    }}
  />

  <div className="relative max-w-7xl mx-auto px-2 md:0
                  flex flex-col lg:flex-row 
                  justify-between items-start gap-20">

    {/* LEFT COLUMN */}
    <div className="w-full lg:w-2/3 lg:-ml-20">

      {/* Image */}
      <div className="relative aspect-[2/1] w-full overflow-hidden rounded">
        <img
          src={seohero}
          alt="SEO Services in Hyderabad"
          className="absolute inset-0 w-full h-full object-cover object-[55%_38%]"
        />
      </div>

      {/* Title */}
      <h1 className="mt-6 mb-6 text-3xl md:text-[48px] 
                     font-bold capitalize 
                     tracking-[-0.015em] 
                     leading-[1.4] text-white">
        SEO Services in Hyderabad
      </h1>

      {/* Paragraphs */}
      <div className="space-y-6 text-white/80 
                      text-lg md:text-[20px] 
                      leading-[1.8] tracking-[-0.015em]">

        <p>
          Are you looking to grow your business online? Would you like your
          site to be ranked at the first page of Google results for searches?
          If yes, then Luvetha Tech Solutins is here to help with best seo services
          in hyderabad designed to bring you more customers, more traffic,
          and better growth.
        </p>

        <p>
          In today’s world of digital technology, having a website is not
          enough. Your website must rank higher in search engines so that
          people can easily find your business. This is precisely the point
          at which SEO (Search engine Optimization) is a factor.
        </p>

      </div>
    </div>

    {/* RIGHT COLUMN (FORM) */}
    <div className="w-full lg:w-1/3 
                    lg:-mr-20
                    bg-[#0096c7]
                    rounded-[10px] 
                    p-6 md:p-10 
                    text-white 
                    shadow-lg">
                        

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
              
              className="mt-1 w-full rounded 
                         border border-gray-300 
                         px-3 py-2 text-black 
                         focus:outline-none focus:ring-2 
                         focus:ring-white/70"
            />
            {submitted && errors[field.name] && (
  <p className="mt-1 text-lg text-red-500">
    {errors[field.name]}
  </p>
)}
          </div>
        ))}

        {/* Description */}
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
            className="mt-1 w-full rounded 
                       border border-gray-300 
                       px-3 py-2 text-black 
                       focus:outline-none focus:ring-2 
                       focus:ring-white/70"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-white text-[#0091dd] 
                     font-semibold py-2 rounded 
                     transition hover:bg-gray-100"
        >
          Submit
        </button>
         {isSuccess && (
    <div className="mb-4 rounded bg-green-100 p-3 text-green-700 font-medium">
      Thank you! Your form has been submitted successfully.
    </div>
  )}

      </form>
    </div>

  </div>
</section>

      {/* What is SEO Services */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-4xl">
          <h2 className="mb-6 font-ibm-plex-sans text-3xl font-semibold text-[#100033] md:text-4xl">
            What is SEO Services?
          </h2>
          <p className="mb-4 font-ibm-plex-sans text-xl leading-relaxed text-[#100033]">
            SEO stands for Search Engine Optimization. It is a method used to
            improve your website's position in search engines like Google, Bing,
            and Yahoo. When someone searches for services or products you offer,
            you want your website to appear on the first page of search results,
            and preferably at the top.
          </p>
          <p className="mb-4 font-ibm-plex-sans text-xl leading-relaxed text-[#100033]">
            SEO services are a set of tasks and strategies that help in making
            this happen. These include:
          </p>
          <ul className="list-disc pl-6 font-ibm-plex-sans text-xl leading-relaxed text-[#100033]">
            <li>Researching the best keywords your customers search for</li>
            <li>Making changes to your website content and structure</li>
            <li>Creating high-quality content regularly</li>
            <li>Building good-quality backlinks from other trusted websites</li>
            <li>Ensuring your website works well on mobile and loads fast</li>
            <li>Improving user experience (UX) and navigation</li>
          </ul>
          <p className="mt-4 font-ibm-plex-sans text-xl leading-relaxed text-[#100033]">
            At Luvetha Tech Solutins, our best seo agency in hyderabad focus on both
            on-page SEO (things we do on your website) and off-page SEO (things
            we do outside your website) to help your business grow steadily and
            organically.
          </p>
        </div>
      </section>

      {/* Achievement Section */}
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

      {/* Achievement mini section */}
      <div className="bg-gradient-to-r from-[#003d84]/88 to-[#100033]/97 py-8 text-white">
        <div className="container mx-auto px-4">
          <div className="ml-0 md:ml-12">
            <h6 className="font-kumbh-sans text-sm font-light uppercase tracking-wide">
              Achievement
            </h6>
            <h6 className="font-kumbh-sans text-3xl font-semibold">
              We Are Enhancing
              <br />
              Business Success
            </h6>
          </div>
        </div>
      </div>

      {/* How Does SEO Help a Business? */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <h2 className="mb-4 text-center font-ibm-plex-sans text-3xl font-semibold text-[#100033] md:text-4xl">
          How Does SEO Help a Business?
        </h2>
        <p className="mb-12 text-center font-ibm-plex-sans text-xl text-[#100033]">
          You may be asking, “How can SEO actually aid my business?” Let us
          discuss the easy benefits:
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <BenefitCard
            title="More Website Traffic"
            description="If your website is found to rank higher in search results you will see more people come to your website. This will increase the chance for potential customers to buy your products or even book your services."
          />
          <BenefitCard
            title="More Leads and Sales"
            description="People searching for your services are already interested. SEO brings you qualified leads, users who are ready to convert into customers."
          />
          <BenefitCard
            title="Builds Trust and Brand Visibility"
            description="A website that appears at the top of search results builds trust among users. It demonstrates that you are credible and relevant in your field."
          />
          <BenefitCard
            title="Cost-Effective Marketing"
            description="Contrary to paid advertising which ceases once the budget is exhausted, SEO gives long-term results. It’s a smart investment that continues to bring traffic even after the work is done."
          />
          <div className="md:col-span-2">
            <BenefitCard
              title="Be Ahead of Your Competitors"
              description="If your competitors are doing SEO and you’re not, you are missing out. With our expert SEO strategies, you’ll not only catch up, but also outrank them."
            />
          </div>
        </div>
      </section>

      {/* ROI-Driven SEO Strategies */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <h2 className="mb-2 text-center font-ibm-plex-sans text-3xl font-semibold text-[#100033] md:text-4xl">
          ROI-Driven SEO Strategies That Work
        </h2>
        <h2 className="mb-4 text-center font-ibm-plex-sans text-3xl font-semibold text-[#100033] md:text-4xl">
          Scale Website Traffic for More Inbound Leads
        </h2>
        <p className="mx-auto max-w-4xl text-center font-ibm-plex-sans text-xl text-[#100033]">
          At Luvetha Tech Solutins, we don’t believe in random SEO tactics. We
          believe in data-driven SEO that brings a high ROI (Return on
          Investment). Our team focuses on the right keywords, right audience,
          and right content, all backed by analytics and proven strategies.
        </p>

        {/* Strategy Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <StrategyCard
            image={keywordSEO}
            title="Keyword Research & Competitor Analysis"
            description="We begin by identifying the right keywords your potential customers are searching for. This includes short-tail and long-tail keywords that have high search volume and buyer intent. We also analyze your competitors to find opportunities you can capitalize on."
          />
          <StrategyCard
            image={Techweb}
            title="Technical Website Audit"
            description="We perform a thorough audit of your website to identify any technical SEO issues that may be affecting your rankings, like slow loading speed, broken links, poor mobile usability, or improper URL structures."
          />
          <StrategyCard
            image={contentoptimization}
            title="Content Optimization"
            description="Content is the backbone of SEO. Our team refines your existing content and creates new, SEO-friendly content that answers your customer’s queries and matches search engine algorithms. This includes blogs, service pages, FAQs, and more."
          />
          <StrategyCard
            image={images.searchEngineOptimization}
            title="High-Quality Backlink Building"
            description="Backlinks are like votes of trust. We build strong backlinks from reputable sites that help improve your domain authority and push your rankings upward."
          />
          <StrategyCard
            image={images.technicalSeo}
            title="Local SEO Optimization"
            description="For businesses in Hyderabad, local SEO is a game-changer. We optimize your Google Business Profile, local directories, maps listings, and location-based keywords so that you rank higher for searches like 'Best SEO company near me' or 'SEO services in Hyderabad'."
          />
          <StrategyCard
            image={images.rapidImplementation}
            title="Continuous Monitoring & Reporting"
            description="SEO is not a one-time task. We continuously track your website's performance, keyword rankings, and user behavior, and provide monthly reports to show progress and adjust the strategy accordingly."
          />
        </div>
      </section>

      {/* Brands Carousels */}
      <section
        className="bg-cover bg-center py-12"
        style={{ backgroundImage: "url('/clientBg-1.jpg')" }}
      >
        <div className="container mx-auto px-4">
          {/* <h4 className="mb-8 text-center font-kumbh-sans text-3xl font-bold text-gray-900">
             Brands Trust Us
          </h4> */}

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
          {/* <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={10}
            slidesPerView={2}
            navigation
            autoplay={{ delay: 3000 }}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
            }}
            className="mb-8"
          >
            {clients1.map((src, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={src}
                  alt={`client-${idx}`}
                  className="mx-auto h-auto max-w-full"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={10}
            slidesPerView={2}
            navigation
            autoplay={{ delay: 3000 }}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
            }}
            className="mb-8"
          >
            {clients2.map((src, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={src}
                  alt={`client-${idx}`}
                  className="mx-auto h-auto max-w-full"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={10}
            slidesPerView={2}
            navigation
            autoplay={{ delay: 3000 }}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
            }}
            className="mb-8"
          >
            {clients3.map((src, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={src}
                  alt={`client-${idx}`}
                  className="mx-auto h-auto max-w-full"
                />
              </SwiperSlide>
            ))}
          </Swiper> */}

          {/* <h4 className="mb-8 text-center font-kumbh-sans text-3xl font-bold text-gray-900">
            <span className="text-[#076ad7]">Our</span> Trusted Partners
          </h4>
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={10}
            slidesPerView={2}
            navigation
            autoplay={{ delay: 3000 }}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
            }}
          >
            {partners.map((src, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={src}
                  alt={`partner-${idx}`}
                  className="mx-auto h-auto max-w-full"
                />
              </SwiperSlide>
            ))}
          </Swiper> */}
        </div>
      </section>

    

      <section className="w-full bg-[#100033] py-12 md:py-16">
  <div className="container mx-auto px-4 md:px-6">
    
    <div className="md:w-4/5 w-full mx-auto">
      
      {/* Heading */}
      <h2 className="mb-6 font-ibm-plex-sans text-3xl font-semibold leading-relaxed text-white md:text-4xl">
        Why Choose Luvetha Tech Solutins for SEO Services in Hyderabad?
      </h2>

      {/* Bullet Points */}
      <ul className="mb-6 list-disc space-y-3 pl-6 font-ibm-plex-sans text-lg leading-relaxed text-white/80 md:text-xl">
        <li>Experienced SEO Experts with proven results</li>
        <li>Customized SEO plans tailored to your business goals</li>
        <li>Transparent, ethical, and white-hat SEO practices</li>
        <li>Local Hyderabad SEO expertise</li>
        <li>Affordable pricing with measurable results</li>
        <li>Dedicated support and detailed monthly reports</li>
      </ul>

      {/* Paragraph */}
      <p className="font-ibm-plex-sans text-lg leading-relaxed text-white/80 md:text-xl">
        We help businesses in all industries, from real estate, healthcare,
        education, eCommerce, IT, and more, grow organically using effective
        SEO strategies.
      </p>

    </div>
  </div>
</section>

      {/* Command the Premier Position */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <h2 className="mb-4 font-ibm-plex-sans text-3xl font-semibold text-[#100033] md:text-4xl">
          Command the Premier Position on SERPs with Our SEO Services
        </h2>
        <p className="mb-6 font-ibm-plex-sans text-xl leading-relaxed text-[#100033]">
          At Luvetha Tech Solutins, we don’t just improve rankings, we help
          businesses dominate the search results with tailored strategies that
          deliver real, measurable results. Whether you’re a startup, a growing
          business, or a global enterprise, our best seo services in hyderabad
          are designed to position your brand at the top of Search Engine
          Results Pages (SERPs).
        </p>
        <p className="mb-8 font-ibm-plex-sans text-xl leading-relaxed text-[#100033]">
          With over 5+ years of trust, knowledge, experience, and authority in
          the SEO industry, we understand what it takes to build visibility,
          traffic, and revenue in competitive markets.
        </p>
        <h3 className="mb-6 font-ibm-plex-sans text-2xl font-semibold text-[#100033] md:text-3xl">
          Explore our specialized SEO services:
        </h3>

        <div className="grid gap-6 md:grid-cols-2">
          <SpecializedCard
            title="Enterprise SEO Services"
            description="Built for large-scale websites with complex architecture. We offer scalable strategies for high-volume traffic, multiple locations, and advanced tracking—helping big brands lead the digital race."
          />
          <SpecializedCard
            title="B2B SEO Services"
            description="Get in front of decision-makers. Our B2B SEO focuses on long sales cycles, high-value keywords, and lead-generating content to connect your business with the right audience."
          />
          <SpecializedCard
            title="B2C SEO Services"
            description="Drive more consumers to your website. We focus on user intent, product relevance, and conversion-driven pages that increase sales and engagement across digital platforms."
          />
          <SpecializedCard
            title="Ecommerce SEO Services"
            description="Turn your online store into a sales machine. From product page optimization to category structure, we ensure your store ranks high and attracts ready-to-buy customers."
          />
          <SpecializedCard
            title="SEO Content Writing"
            description="Content is the backbone of SEO. Our expert writers create keyword-rich, reader-friendly, and conversion-oriented content that helps you build authority and rank for relevant searches."
          />
          <SpecializedCard
            title="Technical SEO Services"
            description="We optimize your website's backend, ensuring fast load speeds, mobile responsiveness, structured data, XML sitemaps, and crawlability to improve indexation and ranking."
          />
          <SpecializedCard
            title="Performance SEO"
            description="Focuses on ROI and results. With real-time tracking and KPI-based strategies, our performance SEO aligns with your business goals whether that’s traffic, leads, or sales."
          />
          <SpecializedCard
            title="International SEO"
            description="Going global? We optimize your multilingual and multi-regional websites for international search engines, languages, and audiences to help you expand your digital footprint globally."
          />
        </div>
      </section>



      {/* FAQ Section */}
      <section className="bg-white px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 font-kumbh-sans text-3xl font-medium md:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                faq={faq}
                isOpen={openFaqIndex === index}
                toggle={() =>
                  setOpenFaqIndex(openFaqIndex === index ? -1 : index)
                }
              />
            ))}
          </div>
        </div>
      </section>
    </div>
    </>
  );
}