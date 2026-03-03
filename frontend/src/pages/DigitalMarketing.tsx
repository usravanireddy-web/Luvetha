import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/digi1.png";

/* ===== PLATFORM ICONS ===== */
import instagramIcon from "@/assets/insta1.png";
import googleAdsIcon from "@/assets/googleads1.png";
import facebookIcon from "@/assets/facebook.png";
import googleMapsIcon from "@/assets/googlemaps1.png";

import googlePartner from "@/assets/google.png";
import googleMobile from "@/assets/googlemobile.png";
import googleSearch from "@/assets/searchads.png";
import googleAnalytics from "@/assets/googleanalytics.png";
import googleVideo from "@/assets/googlevideo.png";
import googleDisplay from "../assets/Google Adds Analytics.png";

import award25Hot from "@/assets/hot25.png";
import awardTopDM from "@/assets/digital.png";
import awardTech50 from "@/assets/tech50.png";

import siliconIndia from "@/assets/ivfcenter.png";
import insightsSuccess from "@/assets/ncl.png";
import ceoMagazine from "@/assets/ssim.png";

import {
  Rocket,
  BadgeDollarSign,
  Users,
  Monitor,
  TrendingUp,
  BarChart3,
  Database,
  Settings,
  PenTool,
  ArrowRight,
  CheckCircle,
  Star,
  ShieldCheck,
  Zap,
  Target,
  Award,
  MessageSquare,
  Calendar,
  Phone,
} from "lucide-react";

/* ================= SERVICES ================= */
const services = [
  { title: "SEO", description: "Rise to the top and leave competitors behind. Our SEO services and strategies are designed to help your brand dominate search results and win more customers.", icon: <Rocket className="w-10 h-10 md:w-12 md:h-12" /> },
  { title: "Paid Ads", description: "Smarter Ads, better results. Our Paid Ads approach is built to capture attention, convert more customers, and deliver measurable growth from day one.", icon: <BadgeDollarSign className="w-10 h-10 md:w-12 md:h-12" /> },
  { title: "Social Media Marketing", description: "Build a brand people love and trust. Our Social Media strategies spark engagement, grow your audience, and turn loyal followers into real business results.", icon: <Users className="w-10 h-10 md:w-12 md:h-12" /> },
  { title: "Website Development", description: "Create a website that works for your business. We build responsive, fast-loading websites that capture attention, build trust, and drive conversions.", icon: <Monitor className="w-10 h-10 md:w-12 md:h-12" /> },
  { title: "Performance Marketing", description: "Get more from your marketing spend. Our Performance Marketing strategies are optimized for high conversions, increased ROI, and sustainable business growth.", icon: <TrendingUp className="w-10 h-10 md:w-12 md:h-12" /> },
  { title: "Data Analytics", description: "Drive smarter decisions with data. Our Data Analytics services empower you to optimize performance and fuel growth with precise, real-time insights.", icon: <BarChart3 className="w-10 h-10 md:w-12 md:h-12" /> },
  { title: "CRM Integrations", description: "Streamline customer relationships. Our CRM integration services connect all touchpoints, automate workflows, and boost engagement for higher conversion rates.", icon: <Database className="w-10 h-10 md:w-12 md:h-12" /> },
  { title: "Marketing Automation", description: "Automate and scale your marketing. Our Marketing Automation services optimize workflows, nurture leads, and increase conversion rates while saving time.", icon: <Settings className="w-10 h-10 md:w-12 md:h-12" /> },
  { title: "Content Marketing", description: "Make your content work harder. We refine, optimize, and promote your content to connect with your audience and drive meaningful business outcomes.", icon: <PenTool className="w-10 h-10 md:w-12 md:h-12" /> },
];

/* ================= PLATFORMS ================= */
const platforms = [
  { name: "Instagram", desc: "Brand engagement & growth", icon: instagramIcon },
  { name: "Google Ads", desc: "High-intent lead generation", icon: googleAdsIcon },
  { name: "Facebook", desc: "Audience targeting & conversions", icon: facebookIcon },
  { name: "Google Maps", desc: "Local business visibility", icon: googleMapsIcon },
];

/* ================= WHY CHOOSE ================= */
const whyChoose = [
  { title: "Quality Leads", desc: "Reach the right audience for high-quality leads that drive impactful conversions and growth." },
  { title: "ROI Focused", desc: "Optimize your ad spend to achieve the best return on investment, efficiency, and sustained growth." },
  { title: "Campaign Experts", desc: "Our specialists fine-tune your campaigns for peak performance, ensuring maximum results." },
  { title: "Detailed Reports", desc: "Transparent, data-driven insights that provide clear visibility into your ad performance." },
  { title: "Dedicated Team", desc: "We win only when you win. Our team focuses on driving growth at the smartest cost possible." },
  { title: "Quick Results", desc: "We prioritize speed and performance to deliver fast, measurable results without losing quality." },
  { title: "Premium Support", desc: "Our dedicated support team ensures your marketing strategies stay on track." },
  { title: "100% Satisfaction", desc: "Your success is our priority. We provide full support to meet your needs and ensure success." },
];

/* ================= COMPONENT ================= */
const DigitalMarketing = () => {
  const [spotlightTab, setSpotlightTab] = useState<"certificates" | "awards" | "media">("certificates");

  return (
    <div className="min-h-screen bg-white">

      {/* ================= IMPROVED HERO ================= */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-cover bg-center overflow-hidden" style={{ backgroundImage: `url(${heroBanner})` }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-6xl mx-auto w-full py-20">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
    
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Best Digital Marketing <br className="hidden sm:block" />
            Company in Hyderabad
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
            We provide professional SEO services in Hyderabad to help businesses rank higher on Google and attract quality organic traffic. Drive growth with data-driven strategies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <Link to="/contact" className="flex items-center justify-center gap-2">
                Get Free Consultation <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg rounded-lg backdrop-blur-sm"
            >
              <Link to="/portfolio" className="flex items-center justify-center gap-2">
                View Our Work <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </Button>
          </div>
          
          {/* Stats Counter */}
          <div className="mt-10 sm:mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-lg sm:rounded-xl p-3 sm:p-4 text-center border border-white/20">
              <div className="text-xl sm:text-2xl font-bold text-white mb-1">500+</div>
              <div className="text-xs sm:text-sm text-blue-200">Projects Delivered</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg sm:rounded-xl p-3 sm:p-4 text-center border border-white/20">
              <div className="text-xl sm:text-2xl font-bold text-white mb-1">98%</div>
              <div className="text-xs sm:text-sm text-blue-200">Client Satisfaction</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg sm:rounded-xl p-3 sm:p-4 text-center border border-white/20">
              <div className="text-xl sm:text-2xl font-bold text-white mb-1">24/7</div>
              <div className="text-xs sm:text-sm text-blue-200">Support Available</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg sm:rounded-xl p-3 sm:p-4 text-center border border-white/20">
              <div className="text-xl sm:text-2xl font-bold text-white mb-1">300+</div>
              <div className="text-xs sm:text-sm text-blue-200">Happy Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SPECIALIZE ================= */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 rounded-full px-4 py-2 mb-4">
              <Zap className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-700">Our Expertise</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              We <span className="text-blue-600">Specialize</span> in:
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
              Comprehensive digital marketing solutions tailored to drive your business growth
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((s, i) => (
              <div 
                key={i} 
                className="group bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-5 sm:mb-6 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
                    <div className="text-white">{s.icon}</div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{s.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{s.description}</p>
                </div>
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

      {/* ================= WHY CHOOSE WITH LARGER ICONS ================= */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-green-50 rounded-full px-4 py-2 mb-4">
            <CheckCircle className="w-4 h-4 text-green-600" />
            <span className="text-sm font-semibold text-green-700">Why Choose Us</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our{" "}
            <span className="text-blue-600">Digital Marketing Services?</span>
          </h2>

          <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto mb-10 sm:mb-16">
            Tired of low online visibility and poor ROI? As a leading digital marketing company in Hyderabad, we create result-driven strategies that boost traffic, leads, and conversions for your business.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {whyChoose.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 text-center border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
              >
                {/* SIGNIFICANTLY LARGER ICONS */}
                <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-gradient-to-r from-blue-50 to-blue-100 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-blue-600">
                    {index === 0 && <Target className="w-12 h-12 sm:w-12 sm:h-12" />}
                    {index === 1 && <BadgeDollarSign className="w-12 h-12 sm:w-12 sm:h-12" />}
                    {index === 2 && <Users className="w-12 h-12 sm:w-12 sm:h-12" />}
                    {index === 3 && <BarChart3 className="w-12 h-12 sm:w-12 sm:h-12" />}
                    {index === 4 && <Users className="w-12 h-12 sm:w-12 sm:h-12" />}
                    {index === 5 && <Zap className="w-12 h-12 sm:w-12 sm:h-12" />}
                    {index === 6 && <ShieldCheck className="w-12 h-12 sm:w-12 sm:h-12" />}
                    {index === 7 && <CheckCircle className="w-12 h-12 sm:w-12 sm:h-12" />}
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-blue-600 mb-2 sm:mb-3 group-hover:text-blue-700">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 sm:mt-16">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 sm:px-10 py-5 sm:py-6 text-base sm:text-lg rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <Link to="/contact" className="flex items-center justify-center gap-2">
                Contact Now <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

{/* ================= SPOTLIGHT ================= */}
<section className="py-12 sm:py-16 md:py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Header */}
    <div className="text-center mb-10 sm:mb-16">
      <div className="inline-flex items-center gap-2 bg-purple-50 rounded-full px-4 py-2 mb-4">
        <Award className="w-4 h-4 text-purple-600" />
        <span className="text-sm font-semibold text-purple-700">
          Recognition
        </span>
      </div>

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        In The <span className="text-blue-600">Spotlight</span>
      </h2>

      <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
        Our certifications, awards, and media recognition
      </p>
    </div>

    {/* Tabs */}
    <div className="flex justify-center gap-3 sm:gap-4 mb-10">
      {["certificates", "awards", "media"].map((tab) => (
        <button
          key={tab}
          onClick={() => setSpotlightTab(tab as "certificates" | "awards" | "media")}
          className={`px-5 sm:px-7 py-2.5 rounded-lg text-sm sm:text-base font-semibold transition-all ${
            spotlightTab === tab
              ? "bg-blue-600 text-white shadow-md"
              : "bg-white text-gray-700 border border-gray-200 hover:border-blue-300"
          }`}
        >
          {tab === "certificates" && "Certificates"}
          {tab === "awards" && "Awards"}
          {tab === "media" && "Press & Media"}
        </button>
      ))}
    </div>

    {/* ================= CONTENT SWITCHER (KEY FIX) ================= */}
    <div key={spotlightTab}>
      
      {/* ================= CERTIFICATES ================= */}
      {spotlightTab === "certificates" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            googlePartner,
            googleMobile,
            googleSearch,
            googleDisplay,
            googleAnalytics,
            googleVideo,
          ].map((img, i) => (
            <div key={i} className="flex justify-center">
              <img
                src={img}
                alt="Google Certificate"
                className="w-full max-w-md object-contain transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      )}

      {/* ================= AWARDS ================= */}
      {spotlightTab === "awards" && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[award25Hot, awardTopDM, awardTech50].map((img, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <img
                src={img}
                alt="Award"
                className="h-64 w-full object-contain mb-4"
              />
              <p className="font-semibold text-gray-900">
                Industry Recognition
              </p>
            </div>
          ))}
        </div>
      )}

      {/* ================= PRESS & MEDIA (FIXED) ================= */}
      {spotlightTab === "media" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {[
            { title: "Featured in Silicon India", img: siliconIndia },
            { title: "Insights Success Magazine", img: insightsSuccess },
            { title: "CEO Magazine Feature", img: ceoMagazine },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-3xl border p-8 
                         transition-all duration-300 
                         hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="w-full h-64 flex items-center justify-center mb-6">
                <img
                  src={item.img}
                  alt={item.title}
                  className="max-h-full max-w-full object-contain 
                             transition-transform duration-300 hover:scale-105"
                />
              </div>
              <p className="text-center text-base font-semibold text-gray-800">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      )}

    </div>
  </div>
</section>



      {/* ================= CASE STUDIES ================= */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-green-50 rounded-full px-4 py-2 mb-4">
              <TrendingUp className="w-4 h-4 text-green-600" />
              <span className="text-sm font-semibold text-green-700">Success Stories</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transformative{" "}
              <span className="text-blue-600">Results</span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
              Real success stories from businesses we've helped grow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Card 1 */}
            <div className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img 
                  src={siliconIndia} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  alt="Ferticare IVF Centre"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">Healthcare</span>
                </div>
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  Ferticare IVF Centre
                </h3>
                <p className="text-gray-600 text-sm sm:text-base mb-5 sm:mb-6">
                  Experienced a surge in patient inquiries and organic growth with our targeted strategies.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm sm:text-base">375% increase in leads</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <BarChart3 className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm sm:text-base">244% increase in organic traffic</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img 
                  src={insightsSuccess} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  alt="NCL Homes Ltd."
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">Real Estate</span>
                </div>
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  NCL Homes Ltd.
                </h3>
                <p className="text-gray-600 text-sm sm:text-base mb-5 sm:mb-6">
                  Achieved high engagement and conversion growth through strategic digital marketing.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                      <BarChart3 className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm sm:text-base">300% increase in conversions</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-red-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm sm:text-base">45% reduction in CPL</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                      <BadgeDollarSign className="w-4 h-4 text-emerald-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm sm:text-base">150% increase in ROI</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img 
                  src={ceoMagazine} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  alt="SSIM"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">Education</span>
                </div>
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  SSIM Business School
                </h3>
                <p className="text-gray-600 text-sm sm:text-base mb-5 sm:mb-6">
                  Boosted visibility, traffic, and organic admissions with comprehensive digital strategy.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <BarChart3 className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm sm:text-base">612% increase in organic traffic</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                      <Users className="w-4 h-4 text-purple-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm sm:text-base">247% increase in total site traffic</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12 sm:mt-16">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 sm:px-10 py-5 sm:py-6 text-base sm:text-lg rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <Link to="/contact" className="flex items-center justify-center gap-2">
                Contact Now <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-sm font-semibold">Ready to Transform Your Business?</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            Let's Build Your Digital Success Story
          </h2>
          
          <p className="text-base sm:text-lg text-blue-100 mb-8 sm:mb-10 max-w-2xl mx-auto">
            Contact us today for a free consultation and see how we can transform your online presence with our expert digital marketing services.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-700 hover:bg-gray-100 px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-semibold rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <Link to="/contact" className="flex items-center justify-center gap-2">
                Get Free Audit <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg rounded-lg"
            >
              <Link to="/contact" className="flex items-center justify-center gap-2">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                Schedule Call
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ================= MARQUEE ANIMATION ================= */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
          width: max-content;
        }
        @media (max-width: 640px) {
          .animate-marquee {
            animation-duration: 25s;
          }
        }
      `}</style>
    </div>
  );
};

export default DigitalMarketing;