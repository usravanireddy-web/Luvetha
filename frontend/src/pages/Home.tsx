import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  HeartPulse,
  GraduationCap,
  Server,
  Factory,
  Film,
  DollarSign,
  HelpingHand,
  Users,
  Sparkles,
  Sun,
  ShoppingCart,
  Building2,
} from "lucide-react";

import heroImage from "@/assets/hero1.png";

/* ===== PLATFORM ICONS ===== */
import instagramIcon from "@/assets/insta1.png";
import googleAdsIcon from "@/assets/googleads1.png";
import facebookIcon from "@/assets/facebook.png";
import googleMapsIcon from "@/assets/googlemaps1.png";

/* ===== EXPERTISE IMAGES ===== */
import websiteDesign from "@/assets/websitedesign.png";
import digitalMarketing from "@/assets/digitalmarketing.png";
import dataServices from "@/assets/data-services.png";
import customDevelopment from "@/assets/customdevelopment.png";
import itConsulting from "@/assets/itconsulting.png";
import dataAnalytics from "@/assets/dataanalytics.png";
import mobileApps from "@/assets/mobileapps.png";
import retailServices from "@/assets/retailservices.png";
import dataBase from "@/assets/batabase.png";

/* ===== CLIENT LOGOS ===== */
import ptrLogo from "@/assets/logoimg.png";
import vagthaLogo from "@/assets/Vagtha.png";
import sonaLogo from "@/assets/logo.png";
import goldenLogo from "@/assets/golden.png";
import sumanaaLogo from "@/assets/sumanaaLogo1.png";

/* ===== HIGHLIGHT IMAGES ===== */
import TransparentSupporting from "@/assets/Transparent Reporting.png";
import ExpertTeam from "@/assets/Expert Team.png";
import CertifiedPartner from "@/assets/Certified Partner.png";
import Experience from "@/assets/Experience.png";
import Strategy from "@/assets/Strategy.png";
import Support from "@/assets/Support.png";


import googlePartner from "@/assets/google.png";
import googleMobile from "@/assets/googlemobile.png";
import googleSearch from "@/assets/searchads.png";
import googleAnalytics from "@/assets/googleanalytics.png";
import googleVideo from "@/assets/googlevideo.png";
import googleDisplay from "@/assets/googledisplay.png"

import award25Hot from "@/assets/hot25.png";
import awardTopDM from "@/assets/digital.png";
import awardTech50 from "@/assets/tech50.png";

import siliconIndia from "@/assets/silicon.png";
import insightsSuccess from "@/assets/insight.png";
import ceoMagazine from "@/assets/consultant.png";


/* ===== COUNT UP ===== */
const CountUp = ({ value }: { value: number }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let c = 0;
    const timer = setInterval(() => {
      c += Math.ceil(value / 40);
      if (c >= value) {
        setCount(value);
        clearInterval(timer);
      } else setCount(c);
    }, 30);
    return () => clearInterval(timer);
  }, [value]);
  return <>{count}+</>;
};


const Home = () => {
  const navigate = useNavigate();
  const expertise = [
  {
    path: "/webdevelopment",
    image: websiteDesign,
    title: "Web Designing",
    description:
      "Modern, responsive websites that perfectly reflect your brand identity and engage your audience.",
  },
  {
    path: "/digitalmarketing",
    image: digitalMarketing,
    title: "Digital Marketing",
    description:
      "Effective online marketing strategies to increase visibility, traffic, and conversions.",
  },
  {
    path: "/dataservices",
    image: dataServices,
    title: "Data Services",
    description:
      "Comprehensive data solutions to store, manage, and process your business information efficiently.",
  },
  {
    // path: "/services/customdevelopment",
    image: customDevelopment,
    title: "Custom Development",
    description:
      "Tailored software solutions built to meet the unique needs of your business.",
  },
  {
    // path: "/services/itconsulting",
    image: itConsulting,
    title: "IT Consulting",
    description:
      "Expert guidance to optimize IT infrastructure and improve overall technology strategy.",
  },
  {
    // path: "/services/dataanalytics",
    image: dataAnalytics,
    title: "Data Analytics",
    description:
      "Transform your business data into actionable insights for smarter decision-making.",
  },
  {
    // path: "/services/mobileapps",
    image: mobileApps,
    title: "Mobile Apps",
    description:
      "High-quality mobile applications for iOS and Android to enhance customer engagement.",
  },
  {
    // path: "/services/retailservices",
    image: retailServices,
    title: "Retail Services",
    description:
      "IT solutions for retail businesses to streamline operations and improve customer experience.",
  },
  {
    // path: "/services/databasemaintenance",
    image: dataBase,
    title: "Database Maintenance",
    description:
      "Reliable database management and support to ensure your systems run smoothly and securely.",
  },
];


  const platforms = [
    { name: "Instagram", desc: "Visual engagement & brand discovery.", icon: instagramIcon },
    { name: "Google Ads", desc: "High-intent traffic & conversions.", icon: googleAdsIcon },
    { name: "Facebook Ads", desc: "Precise targeting at scale.", icon: facebookIcon },
    { name: "Google Maps", desc: "Dominate local search presence.", icon: googleMapsIcon },
  ];

  const clientLogos = [ptrLogo, vagthaLogo, sonaLogo, goldenLogo, sumanaaLogo];

  /* ===== SEGMENTS WE SERVE (FIXED) ===== */
  const segments = [
    { name: "Healthcare", icon: HeartPulse },
    { name: "Education", icon: GraduationCap },
    { name: "IT & ITES", icon: Server },
    { name: "Manufacturing", icon: Factory },
    { name: "Entertainment", icon: Film },
    { name: "FinTech", icon: DollarSign },
    { name: "NGOs", icon: HelpingHand },
    { name: "Human Resources", icon: Users },
    { name: "Fashion & Beauty", icon: Sparkles },
    { name: "Solar", icon: Sun },
    { name: "E-commerce", icon: ShoppingCart },
    { name: "Real Estate", icon: Building2 },
  ];
  const [spotlightTab, setSpotlightTab] = useState<
   "awards" | "media"
>("awards");


  return (
    <div className="min-h-screen">

{/* ================= HERO ================= */}
<section className="relative min-h-[70vh] sm:min-h-screen flex items-center justify-center overflow-hidden">

  {/* ===== Background Image ===== */}
  <img
    src={heroImage}
    alt="Luvetha Tech Solutions"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* ===== BLUE OVERLAY (FINAL TUNED) ===== */}
  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/65 via-blue-500/55 to-blue-600/65" />

  {/* ===== Content ===== */}
  <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
    <div className="max-w-6xl mx-auto text-center text-white">

      {/* ===== HERO TEXT ===== */}
      <div className="relative mb-10">

        {/* Transforming */}
        <h1
          className="
            text-4xl sm:text-5xl lg:text-6xl
            font-extrabold
            tracking-tight
            leading-tight
            mb-2
          "
        >
          Transforming
        </h1>

        {/* Digital Future */}
        <h2
          className="
            text-4xl sm:text-6xl lg:text-7xl
            font-extrabold
            tracking-tight
            text-sky-200/35
            leading-none
          "
        >
          Digital Future
        </h2>

      </div>

      {/* ===== DESCRIPTION ===== */}
      <p
        className="
          text-base sm:text-xl lg:text-2xl
          text-white/90
          max-w-3xl mx-auto
          mb-12
          leading-relaxed
        "
      >
        Empowering businesses with innovative technology solutions, expert
        consulting, and seamless digital transformation services.
      </p>

      {/* ===== BUTTONS ===== */}
      <div className="flex flex-col sm:flex-row justify-center gap-4">

        <Link
          to="/services"
          className="
            inline-flex items-center justify-center
            px-8 py-3
            rounded-md
            font-semibold
            bg-white text-blue-700
            hover:bg-gray-100
            transition shadow-md
          "
        >
          Explore Services →
        </Link>

        <Link
          to="/contact#contact-form"
          className="
            inline-flex items-center justify-center
            px-8 py-3
            rounded-md
            font-semibold
            border border-white
            text-white
            hover:bg-white hover:text-blue-700
            transition shadow-md
          "
        >
          Get Consultation
        </Link>

      </div>
    </div>
  </div>
</section>
{/* ================= OUR EXPERTISE ================= */}
<section className="pt-20 pb-12 bg-secondary">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-6">
      Our Expertise
    </h2>

    <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
      Delivering innovative IT solutions that drive business success.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {expertise.map((item, i) => (
        <Link
          key={i}
          to={item.path}
          className="block"
        >
          <Card className="hover:shadow-lg transition cursor-pointer h-full">
            <img
              src={item.image}
              alt={item.title}
              className="h-48 w-full object-cover rounded-t-lg"
            />

            <CardHeader className="text-center pb-2">
              <CardTitle className="text-lg">
                {item.title}
              </CardTitle>
            </CardHeader>

            <CardContent className="pt-0">
              <p className="text-base text-slate-700 leading-relaxed text-center">
                {item.description}
              </p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  </div>
</section>


      {/* ================= CLIENT LOGOS ================= */}
<section className="py-20 bg-sky-200 overflow-hidden">
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
    Some of Our Awesome Clients
  </h2>

  {/* Marquee Wrapper */}
  <div className="relative w-full overflow-hidden">
    <div className="flex gap-24 w-max animate-client-marquee">
      {[...clientLogos, ...clientLogos].map((logo, i) => (
        <div key={i} className="flex items-center justify-center">
          
          <img
            src={logo}
            alt="Client Logo"
            className="h-28 md:h-32 w-auto opacity-80 hover:opacity-100 transition-transform duration-300 hover:scale-110"
          />
        </div>
      ))}
    </div>
  </div>
</section>


      {/* ================= PLATFORMS ================= */}
      <section className="py-16 bg-sky-50 overflow-hidden">
        <h2 className="text-4xl font-bold text-center text-sky-900 mb-8">
          Power Your Brand with the Right Platforms
        </h2>

        <div className="flex w-max gap-16 animate-marquee px-10">
          {[...platforms, ...platforms].map((p, i) => (
            <div key={i} className="flex flex-col items-center min-w-[180px]">
              <img src={p.icon} className="h-20 mb-1" />
              <h3 className="text-base font-semibold text-sky-900">{p.name}</h3>
              <p className="text-sm text-slate-600 text-center">{p.desc}</p>
            </div>
          ))}
        </div>
        </section>
        {/* ================= SEGMENTS WE SERVE - Grid Layout ================= */}
<section className="py-28 bg-white">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 text-gray-900">
      Segments We Serve
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
      {segments.map((segment, i) => {
        const Icon = segment.icon;
        return (
          <div key={i} className="group cursor-pointer">
            <div className="relative h-full bg-gradient-to-b from-white to-gray-50 rounded-3xl 
                          p-6 border border-gray-100 hover:border-blue-100 
                          transition-all duration-300 hover:shadow-2xl">
              
              {/* Icon Container */}
              <div className="relative mb-6">
                <div className="inline-flex items-center justify-center p-4 
                              bg-gradient-to-br from-blue-50 to-white rounded-2xl 
                              shadow-md border border-blue-100">
                  <Icon className="w-10 h-10 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>

              {/* Segment Name */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {segment.name}
              </h3>

              {/* Optional Short Description */}
              <p className="text-gray-600 text-sm">
                Industry-specific solutions and services tailored to meet your unique requirements.
              </p>

              {/* Hover Indicator */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>

{/* ================= OUR HIGHLIGHTS ================= */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-12">
      Our Highlights
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

      {/* Card 1 */}
      <div className="border rounded-2xl p-8 text-center hover:shadow-xl transition">
        <img
          src={TransparentSupporting}
          alt="Transparent Reporting"
          className="h-30 w-auto mx-auto mb-6 transition-transform duration-300 hover:scale-110"
        />
        <h3 className="font-semibold text-lg mb-2">
          100% Transparent Reporting
        </h3>
        <p className="text-sm text-slate-600">
          Clear insights and detailed performance reports to keep you informed at every step.
        </p>
      </div>

      {/* Card 2 */}
      <div className="border rounded-2xl p-8 text-center hover:shadow-xl transition">
        <img
          src={ExpertTeam}
          alt="Expert Team"
          className="h-30 w-auto mx-auto mb-6 transition-transform duration-300 hover:scale-110"
        />
        <h3 className="font-semibold text-lg mb-2">
          Experienced Professionals
        </h3>
        <p className="text-sm text-slate-600">
          A skilled team with strong industry knowledge delivering reliable solutions.
        </p>
      </div>

      {/* Card 3 */}
      <div className="border rounded-2xl p-8 text-center hover:shadow-xl transition">
        <img
          src={CertifiedPartner}
          alt="Certified Partner"
          className="h-30 w-auto mx-auto mb-6 transition-transform duration-300 hover:scale-110"
        />
        <h3 className="font-semibold text-lg mb-2">
          Certified Partners
        </h3>
        <p className="text-sm text-slate-600">
          Trusted certifications ensuring best practices across digital platforms.
        </p>
      </div>

      {/* Card 4 */}
      <div className="border rounded-2xl p-8 text-center hover:shadow-xl transition">
        <img
          src={Experience}
          alt="Experience"
          className="h-30 w-auto mx-auto mb-6 transition-transform duration-300 hover:scale-110"
        />
        <h3 className="font-semibold text-lg mb-2">
          Years of Industry Experience
        </h3>
        <p className="text-sm text-slate-600">
          Proven expertise across multiple industries and business domains.
        </p>
      </div>

      {/* Card 5 */}
      <div className="border rounded-2xl p-8 text-center hover:shadow-xl transition">
        <img
          src={Strategy}
          alt="Strategy"
          className="h-30 w-auto mx-auto mb-6 transition-transform duration-300 hover:scale-110"
        />
        <h3 className="font-semibold text-lg mb-2">
          Data-Driven Strategies
        </h3>
        <p className="text-sm text-slate-600">
          Smart decisions powered by analytics, insights, and performance data.
        </p>
      </div>

      {/* Card 6 */}
      <div className="border rounded-2xl p-8 text-center hover:shadow-xl transition">
        <img
          src={Support}
          alt="Support"
          className="h-30 w-auto mx-auto mb-6 transition-transform duration-300 hover:scale-110"
        />
        <h3 className="font-semibold text-lg mb-2">
          End-to-End Support
        </h3>
        <p className="text-sm text-slate-600">
          From planning to execution and ongoing support, we handle it all.
        </p>
      </div>

    </div>
  </div>
</section>



    {/* ================= IN THE SPOTLIGHT ================= */}
<section className="py-24 bg-[#f6f9f7]">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-6">
      In The Spotlight
    </h2>

    {/* Tabs */}
    <div className="flex justify-center gap-8 mb-14 text-sm font-semibold">
      {[ "awards", "media"].map((tab) => (
        <button
          key={tab}
          onClick={() =>
            setSpotlightTab(tab as "awards" | "media")
          }
          className={`border-b-2 pb-2 transition-all duration-300 ${
            spotlightTab === tab
              ? "border-blue-600 text-blue-600"
              : "border-transparent text-gray-500 hover:text-blue-600"
          }`}
        >
          {/* {tab === "certificates" && "Certificates And Accolades"} */}
          {tab === "awards" && "Awards"}
          {tab === "media" && "Press & Media Coverage"}
        </button>
      ))}
    </div>

    {/* ================= CERTIFICATES =================
    {spotlightTab === "certificates" && (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {[
          { title: "Google Partner Certification", img: googlePartner },
          { title: "Google Ads Mobile Certification", img: googleMobile },
          { title: "Google Ads Search Certification", img: googleSearch },
          { title: "Google Ads Display Certification", img: googleDisplay }, 
          { title: "Google Analytics Certification", img: googleAnalytics },
          { title: "Google Ads Video Certification", img: googleVideo },
        ].map((item) => (
          <div
            key={item.title}
            className="bg-white rounded-3xl border p-8 hover:shadow-2xl transition-all duration-300"
          >
            <img
              src={item.img}
              alt={item.title}
              className="h-65 w-full object-contain mb-6"
            />
            <p className="text-center text-base font-semibold text-gray-800">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    )} */}

    {/* ================= AWARDS ================= */}
    {spotlightTab === "awards" && (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {[
          { title: "25 Hot Startups in India", img: award25Hot },
          { title: "Top Digital Marketing Company", img: awardTopDM },
          { title: "Tech 50 Award", img: awardTech50 },
        ].map((item) => (
          <div
            key={item.title}
            className="bg-white rounded-3xl border p-8 hover:shadow-2xl transition-all duration-300"
          >
            <img
              src={item.img}
              alt={item.title}
              className="h-60 w-full object-contain mb-6"
            />
            <p className="text-center text-base font-semibold text-gray-800">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    )}

    {/* ================= PRESS & MEDIA ================= */}
    {spotlightTab === "media" && (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {[
          { title: "Featured in Silicon India", img: siliconIndia },
          { title: "Insights Success Magazine", img: insightsSuccess },
          { title: "CEO Magazine Feature", img: ceoMagazine },
        ].map((item) => (
          <div
            key={item.title}
            className="bg-white rounded-3xl border p-8 hover:shadow-2xl transition-all duration-300"
          >
            <img
              src={item.img}
              alt={item.title}
              className="h-60 w-full object-contain mb-6"
            />
            <p className="text-center text-base font-semibold text-gray-800">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    )}
  </div>
</section>

    



      {/* ================= CTA ================= */}
      <section className="py-20 bg-gradient-hero text-primary-foreground text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl mb-8">
          Let’s build innovative solutions together.
        </p>
        <Button asChild size="lg" variant="secondary">
          <Link to="/contact#contact-form">Start Your Project →</Link>
        </Button>
      </section>

      {/* ================= ANIMATIONS ================= */}
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style> 
      <style>{`
@keyframes client-marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-client-marquee {
  animation: client-marquee 25s linear infinite;
}
`}</style>


    </div>
  );
};

export default Home;