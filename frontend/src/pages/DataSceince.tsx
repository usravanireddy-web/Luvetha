import { useState } from "react";
import { CheckCircle, Plus, Minus } from "lucide-react";
import SumanaaLogo from "../assets/sumanaaLogo1.png";
import PartnerLogoB from "../assets/logoimg.png";
import PartnerLogoC from "../assets/logo.png";
import GTR from "../assets/golden.png";
import Vagtha from "../assets/Vagtha.png";
import Dharani from "../assets/dharani logo.png";
import IshaaSilks from "../assets/ishaa.png";
import Vibrant from "../assets/vibrant.webp";
import HeroImg from "@/assets/datascience.png";

type BrandItem = {
  src: string;
  alt: string;
};

const BrandGrid = ({ items }: { items: BrandItem[] }) => (
  <div className="relative overflow-hidden py-2 px-2">
    <div className="ds-brand-marquee-track flex w-max gap-4 pr-4">
      {[...items, ...items].map((item, index) => (
        <div
          key={`brand-${item.alt}-${index}`}
          className="shrink-0 w-36 h-24 border border-sky-200 bg-white/70 backdrop-blur-sm rounded-lg flex items-center justify-center p-2"
        >
          <img src={item.src} alt={item.alt} className="w-full h-full object-contain rounded-md" />
        </div>
      ))}
    </div>
  </div>
);

const services = [
  {
    title: "Data Engineering & Pipelines",
    description:
      "We architect efficient data pipelines that extract, transform, and load (ETL) data from multiple sources into a centralized system ready for analysis.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Predictive Analytics & Forecasting",
    description:
      "Our models predict customer behavior, sales trends, risk factors, and more—empowering proactive business strategies.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Machine Learning Implementation",
    description:
      "We design and train ML algorithms tailored to your specific use cases, such as churn prediction, fraud detection, or personalized recommendations.",
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Big Data Platforms",
    description:
      "Our team works with Hadoop, Apache Spark, AWS, Azure, and Google Cloud to manage high-volume, high-velocity data environments.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Advanced Visualization",
    description:
      "Using tools like Power BI, Tableau, and Python-based frameworks, we create compelling dashboards and visual reports.",
    image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Data Governance & QA",
    description:
      "Our quality assurance processes ensure accuracy, consistency, and compliance with regulatory standards.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=500&q=80",
  },
];

const achievements = [
  { value: "5+", label: "Years of Experience" },
  { value: "450+", label: "Projects" },
  { value: "200+", label: "Clients" },
  { value: "100%", label: "Friendly Support" },
];

const features = [
  {
    title: "Domain Expertise",
    description:
      "Our data scientists have hands-on experience across multiple industries, ensuring contextual and relevant solutions.",
  },
  {
    title: "Custom Development",
    description:
      "We don't use generic models. All solutions are developed from scratch based on your unique data and goals.",
  },
  {
    title: "Cloud & Hybrid Integration",
    description:
      "Whether you're using AWS, Azure, or on-premise systems, we ensure seamless integration.",
  },
  {
    title: "Full Lifecycle Coverage",
    description:
      "From data cleaning to AI integration, we handle the full journey.",
  },
  {
    title: "Outcome-Driven Strategy",
    description:
      "We align all models with your business KPIs to ensure every output delivers actionable insights.",
  },
];

const localLogos: BrandItem[] = [
  { src: SumanaaLogo, alt: "Sumana" },
  { src: PartnerLogoB, alt: "Partner B" },
  { src: PartnerLogoC, alt: "Partner C" },
  { src: GTR, alt: "Golden Ratio" },
  { src: Vagtha, alt: "Vagtha" },
  { src: Dharani, alt: "Dharani" },
  { src: IshaaSilks, alt: "Ishaa Silks" },
  { src: Vibrant, alt: "Vibrant" },

];

const faqs = [
  {
    question: "What is data science?",
    answer:
      "Data science involves extracting meaningful insights from structured and unstructured data using algorithms, analytics, and machine learning.",
  },
  {
    question: "How is data engineering different?",
    answer:
      "Data engineering focuses on building the systems and pipelines that collect, store, and move data efficiently to enable analytics.",
  },
  {
    question: "What industries benefit from data science?",
    answer:
      "Any data-rich industry like retail, healthcare, manufacturing, finance, and logistics can benefit from data science.",
  },
  {
    question: "What platforms do you support?",
    answer:
      "We work with AWS, Azure, Google Cloud, Hadoop, Spark, Snowflake, and more.",
  },
];

const DataSciencePage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <style>{`
        @keyframes ds-brand-marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .ds-brand-marquee-track {
          animation: ds-brand-marquee-left 30s linear infinite;
        }
      `}</style>
      {/* Hero Section with Pattern Background */}
      <section className="relative bg-gradient-to-br from-[#0b132b] via-[#0f2b46] to-[#1b4965] py-16 overflow-hidden">
        {/* Pattern */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml;utf8,
      <svg width='60' height='60' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M6 4a2 2 0 11-4 0 2 2 0 014 0' fill='rgba(255,255,255,1)'/>
      </svg>")`,
            opacity: 0.12,
            mixBlendMode: "normal",
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <div className="w-full h-64 md:h-80 bg-white/10 rounded-2xl shadow-lg ring-1 ring-white/20 p-3">
                <img
                  src={HeroImg}
                  alt="Data science dashboards"
                  className="w-full h-full object-contain rounded-xl"
                />
              </div>
              <h1 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight">
                Data Science and Analytics Services
              </h1>
              <p className="mt-4 text-lg md:text-xl text-white/85 leading-relaxed">
                Luvetha Tech Solutions helps businesses transform complex data into
                practical insights for better decision-making and faster growth.
              </p>
            </div>

            <div className="bg-sky-300 p-5 md:p-6 rounded-2xl shadow-xl">
              <h2 className="text-[#100033] text-xl md:text-2xl font-semibold">
                Request a Consultation
              </h2>
              <form className="mt-4 space-y-3" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="text"
                  placeholder="First name"
                  className="w-full px-3 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-white"
                  required
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="w-full px-3 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-white"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-3 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-white"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="w-full px-3 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-white"
                  required
                />
                <input
                  type="text"
                  placeholder="Service requirement"
                  className="w-full px-3 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-white"
                  required
                />
                <textarea
                  rows={3}
                  placeholder="Description"
                  className="w-full px-3 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button
                  type="submit"
                  className="w-full bg-white text-sky-700 font-semibold py-2 rounded-md hover:bg-gray-100 transition-colors"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Service Offerings Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#100033] mb-6">
              Comprehensive Service Offerings
            </h2>
            <p className="text-lg md:text-xl text-[#100033] leading-relaxed">
              Would you like to turn your data into a competitive advantage? At{" "}
              <span className="font-medium">Luvetha Tech Solutions</span>, we develop data science solutions that support
              smarter decision-making and strategic planning. Our services
              include everything from data cleaning and pipeline development to
              advanced modeling, visualization, and AI integration.
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid md:grid-cols-2 gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white shadow-[0px_0px_25px_15px_rgba(16,0,51,0.05)] p-8 rounded-lg hover:shadow-lg transition duration-300"
              >
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  {/* Image */}
                  <div className="sm:w-1/3 flex justify-center">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-28 h-28 object-contain"
                    />
                  </div>

                  {/* Content */}
                  <div className="sm:w-2/3">
                    <h4 className="text-xl font-semibold text-[#100033] mb-3">
                      {service.title}
                    </h4>
                    <p className="text-base text-[#100033] leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="relative w-full bg-[gray] py-16 md:py-24">
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-sky-500/80"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-10 items-center">
            {/* Left Content (Title Area) */}
            <div className="md:col-span-3 lg:col-span-2 text-white space-y-4">
              <p className="uppercase text-sm tracking-widest font-light">
                Achievement
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight">
                We Are Enhancing <br /> Business Success
              </h2>
            </div>

            {/* Counter Boxes */}
            {achievements.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center text-white border-t md:border-t-0 md:border-l border-[#4083cd]/40 pt-6 md:pt-0"
              >
                <CheckCircle className="w-12 h-12 mb-4 text-sky-400" />
                <h3 className="text-2xl md:text-3xl font-semibold">
                  {item.value}
                </h3>
                <p className="text-sm md:text-base text-white/80 mt-2">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#100033]">
              Why Choose Luvetha Tech Solutions for Data Science
            </h2>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-6 border-b border-dashed border-gray-300 pb-8 hover:-translate-y-3 transition-transform duration-300"
              >
                {/* Icon */}
                <div className="flex-shrink-0 bg-gray-100 rounded-2xl p-5">
                  <CheckCircle className="text-sky-500" size={40} />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg font-medium text-[#040d16] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Trust Section */}
      <section className="relative bg-gradient-to-b from-[#eff6ff] via-[#e0f2fe] to-[#f0f9ff] py-16 md:py-20">
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/30"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Heading 1 */}
          <div className="flex items-center justify-center gap-6">
            <div className="h-[1px] w-16 bg-sky-500"></div>
            <h2 className="text-[#100033] text-2xl md:text-3xl font-bold text-center">
              <span className="text-[#0b132b]">Brands Trust Us</span>
            </h2>
            <div className="h-[1px] w-16 bg-sky-500"></div>
          </div>

          {/* Logo Grid */}
          <BrandGrid items={localLogos} />

          {/* Heading 2 */}
          {/* <div className="flex items-center justify-center gap-6">
            <div className="h-[1px] w-16 bg-blue-500"></div>
            <h2 className="text-[#100033] text-2xl md:text-3xl font-bold text-center">
              <span className="text-blue-500">Our</span> Trusted Partners
            </h2>
            <div className="h-[1px] w-16 bg-blue-500"></div>
          </div>

          <BrandGrid items={partners} /> */}
        </div>
      </section>

      {/* Consulting Description Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-semibold text-[#100033] leading-tight mb-8">
            <strong>Luvetha Tech Solutions – Data Science Consulting</strong>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-[#100033] leading-relaxed">
            At Luvetha Tech Solutions, we provide expert data science consultation and
            development services that help businesses convert data into actionable
            insights. Our team of skilled professionals uses advanced analytics,
            AI, and machine learning to design solutions tailored to your business
            needs.
            <br /><br />
            With a focus on simplifying complex data, we ensure that each strategy
            is practical, results-driven, and easy to understand. Whether you want
            to optimize decision-making, improve customer experience, or unlock
            new growth opportunities, our data science consulting empowers you
            with clarity and confidence.
            <br /><br />
            At Luvetha Tech Solutions, we don't just deliver reports — we partner with
            you to build intelligent systems that drive long-term success. Start
            your journey with us and turn raw data into smart business decisions.
          </p>
        </div>
      </section>

      {/* Bottom Pattern Section */}
      {/* <section className="relative overflow-hidden bg-[#100033] py-16 md:py-24">
       
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml;utf8,
        <svg width='60' height='60' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path d='M6 4a2 2 0 11-4 0 2 2 0 014 0' fill='rgba(255,255,255,1)'/>
        </svg>
      ")`,
            opacity: 0.1,
            mixBlendMode: "normal",
          }}
        /> */}

        {/* Content */}
        {/* <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Ready to Transform Your Data?
            </h2>
            <p className="text-white/80">
              Contact us today to learn how our data science services can help your business.
            </p>
          </div>
        </div> */}
      {/* </section> */}

      {/* FAQ Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-semibold text-[#100033] mb-12">
            Frequently Asked Questions
          </h2>

          {/* Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition duration-300"
              >
                {/* Question */}
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition"
                >
                  <span className="text-lg md:text-xl font-medium text-gray-800">
                    {faq.question}
                  </span>

                  {openIndex === index ? (
                    <Minus className="text-[#076ad7]" size={20} />
                  ) : (
                    <Plus className="text-[#076ad7]" size={20} />
                  )}
                </button>

                {/* Answer */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    openIndex === index
                      ? "max-h-60 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6 text-base md:text-lg text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DataSciencePage;
