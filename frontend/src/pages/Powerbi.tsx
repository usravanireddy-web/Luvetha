import {
  CalendarDays,
  CheckCircle,
  FolderKanban,
  Minus,
  Plus,
  ShieldCheck,
  Users,
} from "lucide-react";
import { useState } from "react";
import SumanaaLogo from "../assets/sumanaaLogo1.png";
import PartnerLogoB from "../assets/logoimg.png";
import PartnerLogoC from "../assets/logo.png";
import GTR from "../assets/golden.png";
import Vagtha from "../assets/vagtha.png";
import Dharani from "../assets/dharani logo.png";
import IshaaSilks from "../assets/ishaa.png";
import Vibrant from "../assets/vibrant.webp";
import HeroImg from "../assets/powerbi.png"

const services = [
  {
    title: "Strategic Consulting",
    description:
      "We analyze your reporting environment and build a Power BI roadmap aligned with your business goals.",
  },
  {
    title: "Data Modelling",
    description:
      "We design clean, scalable data models that improve reporting quality, speed, and accuracy.",
  },
  {
    title: "Custom Dashboards",
    description:
      "We create KPI-focused dashboards with intuitive visuals for faster decisions across teams.",
  },
  {
    title: "System Integration",
    description:
      "We integrate Power BI with Excel, SQL Server, Azure, SharePoint, SAP, and cloud data sources.",
  },
  {
    title: "Migration Services",
    description:
      "We migrate legacy reports from spreadsheets or other BI tools into modern Power BI environments.",
  },
  {
    title: "Advanced Analytics",
    description:
      "We implement forecasting, predictive models, and AI-assisted insights to enhance business planning.",
  },
];

const features = [
  {
    title: "Certified Expertise",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=500&q=80",
    description:
      "Our BI specialists bring deep technical and domain experience for real-world reporting challenges.",
  },
  {
    title: "Custom Solutions",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=500&q=80",
    description:
      "Every implementation is tailored to your teams, data sources, governance model, and growth goals.",
  },
  {
    title: "Rapid Implementation",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=500&q=80",
    description:
      "We follow proven delivery frameworks to launch dashboards quickly without compromising quality.",
  },
  {
    title: "End-to-End Support",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=500&q=80",
    description:
      "From strategy and build to training and optimization, we support your team at every phase.",
  },
  {
    title: "Training and Enablement",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=500&q=80",
    description:
      "We provide practical training to help users adopt Power BI confidently and independently.",
  },
  {
    title: "Performance Monitoring",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=80",
    description:
      "We continuously tune models, visuals, and refresh flows to keep your reports fast and reliable.",
  },
];

type BrandItem = {
  src: string;
  alt: string;
};

const localBrandLogos: BrandItem[] = [
  { src: SumanaaLogo, alt: "Sumana" },
  { src: PartnerLogoB, alt: "Partner B" },
  { src: PartnerLogoC, alt: "Partner C" },
  { src: Vagtha, alt: "Vagtha" },
  { src: IshaaSilks, alt: "Ishaa Silks" },
  { src: Dharani, alt: "Dharani" },
  { src: GTR, alt: "Golden Ratio" },
  { src: Vibrant, alt: "Vibrant" },

  
];

const faqs = [
  {
    question: "What is Power BI?",
    answer:
      "Power BI is a Microsoft business intelligence platform for interactive dashboards and real-time insights.",
  },
  {
    question: "Who can use Power BI?",
    answer:
      "Power BI works for teams of all sizes across finance, healthcare, retail, education, manufacturing, and more.",
  },
  {
    question: "Can Power BI connect to existing systems?",
    answer:
      "Yes. We connect Power BI with databases, ERP, CRM, Excel files, and cloud services for unified reporting.",
  },
  {
    question: "How much does Power BI development cost?",
    answer:
      "Cost depends on scope, integrations, and complexity. We provide flexible pricing based on your requirements.",
  },
];

const stats = [
  { icon: CalendarDays, value: "5+", label: "Years of Experience" },
  { icon: FolderKanban, value: "450+", label: "Projects Delivered" },
  { icon: Users, value: "200+", label: "Clients Served" },
  { icon: ShieldCheck, value: "100%", label: "Friendly Support" },
];

const BrandGrid = ({ items }: { items: BrandItem[] }) => (
  <div className="overflow-hidden relative py-2">
    <div className="brand-marquee-track flex w-max gap-4">
      {[...items, ...items].map((item, index) => (
        <div
          key={`${item.alt}-${index}`}
          className="shrink-0 w-36 h-24 border border-sky-300 bg-transparent rounded-none flex items-center justify-center p-2"
        >
          <img
            src={item.src}
            alt={item.alt}
            className="w-full h-full object-contain rounded-md"
          />
        </div>
      ))}
    </div>
  </div>
);

const PowerBi = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const dotPattern = `url("data:image/svg+xml,${encodeURIComponent(
    "<svg width='60' height='60' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M6 4a2 2 0 11-4 0 2 2 0 014 0' fill='rgba(0,0,0,1)'/></svg>",
  )}")`;

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <style>{`
        @keyframes brand-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .brand-marquee-track {
          animation: brand-marquee 24s linear infinite;
        }
      `}</style>
      <section className="relative w-full bg-white pt-4 pb-10 md:pt-6 md:pb-12 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: dotPattern, opacity: 0.12, mixBlendMode: "normal" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-start">
            <div className="pt-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#100033] leading-tight">
                Power BI Consulting Services by Luvetha Tech Solutions
              </h2>

              <div className="overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={HeroImg}
                  alt="Business analytics dashboard"
                  className="mt-3 w-full h-56 md:h-72 object-cover"
                />
              </div>
              <p className="mt-5 text-sm md:text-base text-[#100033]/80 leading-relaxed">
                Build modern Power BI dashboards that connect your teams to live
                performance data, KPI trends, and faster decisions.
              </p>
              <p className="mt-3 text-sm md:text-base text-[#100033]/80 leading-relaxed">
                From executive scorecards to operational drill-down reports, our
                Power BI implementations are designed for clarity, speed, and
                measurable business impact across departments.
              </p>
            </div>

            <div className="bg-sky-300 rounded-2xl shadow-xl p-4 md:p-6">
              <h3 className="text-white text-xl md:text-2xl font-semibold">
                Request a Consultation
              </h3>
              <form className="mt-4 space-y-3" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="text"
                  name="Firstname"
                  required
                  placeholder="First name"
                  className="w-full px-3 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-white"
                />
                <input
                  type="text"
                  name="Lastname"
                  required
                  placeholder="Last name"
                  className="w-full px-3 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-white"
                />
                <input
                  type="email"
                  name="Email"
                  required
                  placeholder="Email"
                  className="w-full px-3 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-white"
                />
                <input
                  type="tel"
                  name="Phoneno"
                  required
                  placeholder="Phone number"
                  className="w-full px-3 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-white"
                />
                <input
                  type="text"
                  name="servicerequirement"
                  required
                  placeholder="Service requirement"
                  className="w-full px-3 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-white"
                />
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Description"
                  className="w-full px-3 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button
                  type="submit"
                  className="w-full bg-white text-[#0091dd] font-semibold py-2 rounded-md transition duration-300 hover:bg-gray-100"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#100033] leading-tight">
              Our Approach to Power BI Consulting
            </h2>
            <p className="mt-6 text-lg md:text-xl text-[#100033] max-w-4xl mx-auto leading-relaxed">
              We begin with a clear understanding of your business objectives and data
              ecosystem, then deliver implementation plans that scale with your growth.
            </p>
            <p className="mt-4 text-base md:text-lg text-[#100033]/80 max-w-4xl mx-auto leading-relaxed">
              Our process includes requirement discovery, data source mapping, model design,
              dashboard prototyping, and user validation to ensure every report is accurate,
              intuitive, and aligned to decision-making needs.
            </p>
            <p className="mt-4 text-base md:text-lg text-[#100033]/80 max-w-4xl mx-auto leading-relaxed">
              We also provide governance guidelines, refresh optimization, and
              performance tuning so your analytics environment remains scalable
              and reliable in the long run.
            </p>
            <h3 className="mt-10 text-2xl md:text-3xl font-semibold text-[#100033] text-left">
              Core Power BI Services:
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="group border-b border-dashed border-gray-300 pb-8 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-2xl bg-[#f5f7f9] flex items-center justify-center">
                      <CheckCircle size={36} className="text-sky-500" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-medium text-[#040d16] mb-3">
                      {service.title}
                    </h4>
                    <p className="text-base md:text-lg text-[#3c4451] leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative w-full bg-sky-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center md:text-left">
            <p className="text-sm uppercase tracking-widest text-sky-700">Achievement</p>
            <h2 className="mt-3 text-2xl md:text-4xl font-semibold text-[#100033]">
              We Are Enhancing Business Success
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="rounded-xl border border-white-300 bg-blue-300 p-5 text-center"
                >
                  <Icon className="mx-auto w-7 h-7 text-white" />
                  <p className="mt-3 text-2xl md:text-3xl font-bold text-white">{item.value}</p>
                  <p className="mt-1 text-white text-sm md:text-base">{item.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#100033] leading-tight">
              Why Choose Luvetha Tech Solutions for Power BI Development Services?
            </h2>
            <p className="mt-4 text-base md:text-lg text-[#100033]/80 leading-relaxed">
              We focus on simple, effective, and result-driven Power BI solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((item) => (
              <div
                key={item.title}
                className="bg-white shadow-[0px_0px_25px_15px_rgba(16,0,51,0.05)] rounded-xl p-6 md:p-8 flex flex-col sm:flex-row items-start gap-6 transition duration-500 hover:shadow-[0px_0px_35px_20px_rgba(16,0,51,0.08)]"
              >
                <div className="flex-shrink-0">
                  <img src={item.image} alt={item.title} className="w-24 h-24 object-cover rounded-lg" />
                </div>
                <div>
                  <h4 className="text-xl md:text-2xl font-semibold text-[#100033]">{item.title}</h4>
                  <p className="mt-3 text-sm md:text-base text-[#100033]/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-black-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-[1px] w-20 bg-gray-300"></div>
            <h4 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
              <span className="text-blue-600">Brands</span> Trust Us
            </h4>
            <div className="h-[1px] w-20 bg-gray-300"></div>
          </div>
          <BrandGrid items={localBrandLogos} />

          {/* <div className="flex items-center justify-center gap-4 mt-16 mb-10">
            <div className="h-[1px] w-20 bg-gray-300"></div>
            <h4 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
              <span className="text-blue-600">Our</span> Trusted Partners
            </h4>
            <div className="h-[1px] w-20 bg-gray-300"></div>
          </div>
          <BrandGrid items={partnerLogos} /> */}
        </div>
      </section>

      <section className="bg-white py-12 md:py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#100033] leading-snug">
                Get Power BI Consulting from Our Experts
              </h2>
              <p className="text-lg md:text-xl text-[#100033] leading-relaxed">
                Our Power BI experts at Luvetha Tech Solutions are ready to help you get
                started with setup, optimization, and scaling.
              </p>
              <ul className="space-y-4">
                {[
                  "Understand your goals and current systems",
                  "Plan a clear Power BI strategy",
                  "Set up Power BI the right way",
                  "Design dashboards that show the data you need",
                  "Train your team to use Power BI",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="text-sky-500 mt-1" size={20} />
                    <span className="text-lg text-[#100033] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#100033] leading-snug">
                Client Benefits
              </h2>
              <ul className="space-y-4">
                {[
                  "Enhanced data visibility across departments.",
                  "Faster, confident decisions with live insights.",
                  "Reduced reporting time and manual effort.",
                  "Improved collaboration through shared dashboards.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="text-sky-500 mt-1" size={20} />
                    <span className="text-lg text-[#100033] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#100033] mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={faq.question} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-5 text-left transition-all duration-300 hover:bg-gray-50"
                >
                  <span className="text-lg md:text-xl font-medium text-gray-800">{faq.question}</span>
                  {openIndex === index ? (
                    <Minus className="text-blue-600" size={20} />
                  ) : (
                    <Plus className="text-blue-600" size={20} />
                  )}
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-5 pt-0 text-base md:text-lg text-gray-700 leading-relaxed">
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

export default PowerBi;
