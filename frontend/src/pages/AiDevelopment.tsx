import { useState } from "react";
import {
  Bot,
  CalendarDays,
  CheckCircle,
  FolderKanban,
  Minus,
  Plus,
  ShieldCheck,
  Users,
} from "lucide-react";
import SumanaaLogo from "../assets/sumanaaLogo1.png";
import PartnerLogoB from "../assets/logoimg.png";
import PartnerLogoC from "../assets/logo.png";
import GTR from "../assets/golden.png";
import Vagtha from "../assets/Vagtha.png";
import Dharani from "../assets/dharani logo.png";
import IshaaSilks from "../assets/ishaa.png";
import Vibrant from "../assets/vibrant.webp";
import HeroImg from "../assets/ai.png";

const capabilities = [
  {
    title: "Smart NLP Engine",
    desc: "Build AI systems that understand user language and deliver natural, context-aware responses.",
  },
  {
    title: "Dynamic Machine Learning",
    desc: "Create ML models that improve with your data and support faster, data-driven decisions.",
  },
  {
    title: "Computer Vision and OCR",
    desc: "Extract and classify information from images, scanned files, and real-world visual inputs.",
  },
  {
    title: "AI Assistants and Chatbots",
    desc: "Deploy conversational AI for customer support, lead qualification, and workflow automation.",
  },
  {
    title: "Generative AI Solutions",
    desc: "Develop content generation systems for text, visual assets, and personalized user interactions.",
  },
  {
    title: "Custom AI Software Development",
    desc: "Design and implement AI applications tailored to your operations, users, and business goals.",
  },
];

const stats = [
  { icon: CalendarDays, value: "12+", label: "Years of Experience" },
  { icon: FolderKanban, value: "3000+", label: "Projects Delivered" },
  { icon: Users, value: "260+", label: "Clients Served" },
  { icon: ShieldCheck, value: "100%", label: "Friendly Support" },
];

type BrandItem = {
  src: string;
  alt: string;
};

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

const differentiators = [
  {
    title: "Specialized Team",
    desc: "Our AI engineers and data scientists hold expertise in ML, NLP, and cloud-native AI systems.",
  },
  {
    title: "End-to-End Execution",
    desc: "We handle consulting, architecture, development, deployment, and optimization in one cycle.",
  },
  {
    title: "Custom AI Models",
    desc: "Each model is tailored to your business process and data ecosystem, not a one-size-fits-all setup.",
  },
  {
    title: "Scalable Architecture",
    desc: "Our solutions are built to scale with your user growth, workload volume, and business complexity.",
  },
  {
    title: "Data Security First",
    desc: "We follow secure design and implementation practices to protect data privacy and model integrity.",
  },
];

const faqs = [
  {
    question: "What industries does Luvetha Tech Solutions support?",
    answer:
      "We provide AI solutions for healthcare, finance, retail, manufacturing, education, and service businesses.",
  },
  {
    question: "Can AI integrate with my existing systems?",
    answer:
      "Yes. We build integrations for your current ERP, CRM, databases, and internal tools with minimal disruption.",
  },
  {
    question: "Do you provide custom AI models?",
    answer:
      "Yes. We design and train models according to your business goals, data quality, and operational constraints.",
  },
  {
    question: "How secure are your AI implementations?",
    answer:
      "Security is part of our architecture process. We implement secure data handling, access controls, and monitoring.",
  },
];

const BrandGrid = ({ items }: { items: BrandItem[] }) => (
  <div className="relative overflow-hidden py-2 px-2">
    <div className="ai-brand-marquee-row flex w-max gap-4 pr-4">
      {items.map((item, index) => (
        <div
          key={`row1-${item.alt}-${index}`}
          className="shrink-0 w-36 h-24 border border-sky-300 bg-transparent rounded-none flex items-center justify-center p-2"
        >
          <img src={item.src} alt={item.alt} className="w-full h-full object-contain rounded-md" />
        </div>
      ))}
    </div>
    <div className="ai-brand-marquee-row-2 absolute top-2 left-full flex w-max gap-4 pr-4">
      {items.map((item, index) => (
        <div
          key={`row2-${item.alt}-${index}`}
          className="shrink-0 w-36 h-24 border border-sky-300 bg-transparent rounded-none flex items-center justify-center p-2"
        >
          <img src={item.src} alt={item.alt} className="w-full h-full object-contain rounded-md" />
        </div>
      ))}
    </div>
  </div>
);

const AIDevelopment = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const dotPattern = `url("data:image/svg+xml,${encodeURIComponent(
    "<svg width='60' height='60' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M6 4a2 2 0 11-4 0 2 2 0 014 0' fill='rgba(0,0,0,1)'/></svg>",
  )}")`;

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <style>{`
        @keyframes ai-brand-marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .ai-brand-marquee-row {
          animation: ai-brand-marquee-left 26s linear infinite;
        }
        .ai-brand-marquee-row-2 {
          animation: ai-brand-marquee-left 26s linear infinite;
        }
      `}</style>
      <section className="relative w-full bg-white pt-4 pb-10 md:pt-6 md:pb-12 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: dotPattern, opacity: 0.12, mixBlendMode: "normal" }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            <div className="lg:col-span-2 relative z-10">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#100033] leading-tight">
                AI Development Services
              </h1>

              <img
                src={HeroImg}
                alt="AI Development"
                className="mt-3 w-full rounded-2xl object-cover aspect-[16/8]"
              />

              <p className="mt-6 text-base md:text-lg text-[#100033]/80 leading-relaxed">
                <span className="font-semibold text-sky-500">Luvetha Tech Solutions</span>{" "}
                helps organizations implement practical AI
                systems that automate repetitive work, improve decisions, and
                enhance customer experience. From intelligent assistants to custom
                predictive models, we deliver full-cycle AI development aligned to
                your business outcomes.
              </p>

              <p className="mt-4 text-base md:text-lg text-[#100033]/80 leading-relaxed">
                We focus on business-ready deployment, secure integration with your
                current systems, and measurable value from day one.
              </p>

              <p className="mt-4 text-base md:text-lg text-[#100033]/80 leading-relaxed">
                Our team also supports model monitoring, retraining strategy, and
                performance optimization so your AI products stay accurate and useful
                as customer behavior and business requirements change.
              </p>
            </div>

            <div className="bg-sky-200 p-4 md:p-5 rounded-2xl shadow-xl relative z-10">
              <h2 className="text-[#100033] text-xl md:text-2xl font-semibold">
                Request a Consultation
              </h2>
              <form className="mt-3 space-y-2.5" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="text"
                  placeholder="First name"
                  className="w-full px-3 py-1.5 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-white"
                  required
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="w-full px-3 py-1.5 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-white"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-3 py-1.5 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-white"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="w-full px-3 py-1.5 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-white"
                  required
                />
                <input
                  type="text"
                  placeholder="Service requirement"
                  className="w-full px-3 py-1.5 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-white"
                  required
                />
                <textarea
                  rows={2}
                  placeholder="Description"
                  className="w-full px-3 py-1.5 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button
                  type="submit"
                  className="w-full bg-white text-sky-700 font-semibold py-1.5 rounded-md hover:bg-gray-100 transition-colors"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#100033]">
              Our Approach to AI Development
            </h2>
            <p className="mt-5 text-base md:text-lg text-[#100033]/80 max-w-4xl mx-auto leading-relaxed">
              We start with business outcomes, map your data and workflows, then
              deliver secure AI solutions that scale across operations.
            </p>
            <p className="mt-4 text-base md:text-lg text-[#100033]/80 max-w-4xl mx-auto leading-relaxed">
              From discovery workshops and data audits to model validation and
              production rollout, we follow a structured process that keeps your
              teams aligned, minimizes risk, and ensures measurable business value.
            </p>
            <p className="mt-4 text-base md:text-lg text-[#100033]/80 max-w-4xl mx-auto leading-relaxed">
              We also provide post-launch monitoring, model updates, and
              performance tuning so your AI systems remain accurate, reliable,
              and relevant as your business evolves.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Use-case discovery and solution blueprint",
              "Data readiness and model design",
              "Rapid prototyping and validation",
              "Production deployment with monitoring",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 rounded-lg border border-gray-200">
                <CheckCircle className="text-[#0091dd] w-5 h-5 mt-0.5" />
                <p className="text-[#100033]/90">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-4xl font-semibold text-[#100033]">
            AI Capabilities We Build
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((item) => (
              <div
                key={item.title}
                className="border-b border-dashed border-gray-300 pb-8 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center">
                    <Bot className="w-7 h-7 text-[#0091dd]" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-[#040d16]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm md:text-base text-[#3c4451] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative w-full bg-[#100033] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center md:text-left">
            <p className="text-sm uppercase tracking-widest text-white/70">
              Achievement
            </p>
            <h2 className="mt-3 text-2xl md:text-4xl font-semibold text-white">
              We Are Enhancing Business Success
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-white/20 bg-white/5 p-5 text-center"
              >
                <item.icon className="mx-auto w-7 h-7 text-[#57c3ff]" />
                <p className="mt-3 text-2xl md:text-3xl font-bold text-white">
                  {item.value}
                </p>
                <p className="mt-1 text-white/80 text-sm md:text-base">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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

          {/* <div className="flex items-center justify-center gap-3 mt-12 mb-8">
            <div className="h-px w-12 bg-gray-300" />
            <h3 className="text-xl md:text-2xl font-bold text-gray-800">
              <span className="text-[#0091dd]">Our</span> Trusted Partners
            </h3>
            <div className="h-px w-12 bg-gray-300" />
          </div>

          <BrandGrid items={unsplashPartners} /> */}
        </div>
      </section>

      <section className="w-full py-16 bg-[#100033]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="space-y-5">
            {differentiators.map((item) => (
              <li key={item.title} className="flex items-start gap-4">
                <CheckCircle className="text-[#57c3ff] w-6 h-6 mt-1 flex-shrink-0" />
                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-white/85">
                  <span className="font-semibold text-white">{item.title}: </span>
                  {item.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#100033] mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={faq.question}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center p-5 text-left hover:bg-gray-50 transition-colors"
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
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    openIndex === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-5 pb-5 text-base md:text-lg text-gray-700 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AIDevelopment;
