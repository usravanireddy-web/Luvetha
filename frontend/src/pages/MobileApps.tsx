import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Smartphone, Tablet, 
  Apple, Gitlab as Google,
  CheckCircle, ArrowRight, Rocket, Star, 
  TrendingUp, ShieldCheck, 
  Palette, Zap, Globe as GlobeIcon, Users,
  Award, 
  Eye, 
  Lock, 
  Sparkles, 
  GraduationCap as GraduationIcon,
  RefreshCw, 
  Fingerprint,
  Headphones,
  Users2, Medal, Trophy,
  Download, 
  CreditCard, ShoppingBag, 
  Heart as HeartIcon,
  Plane, 
  Coffee as CoffeeIcon, 
  Bell, WifiOff,
  Code2, Settings, Briefcase, Building2,
  ThumbsUp, Clock, Calendar,
  BarChart, Target, MessageSquare
} from "lucide-react";

const MobileAppDevelopment = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  // Hero Stats (Only one set - these will be in hero section)
  const heroStats = [
    { value: "200+", label: "Apps Delivered" },
    { value: "50M+", label: "Downloads" },
    { value: "4.8★", label: "Average Rating" },
    { value: "24/7", label: "Client Support" }
  ];

  // Core Services
  const coreServices = [
    {
      title: "iOS App Development",
      description: "Native iOS apps with Swift and SwiftUI for iPhone, iPad, and Apple Watch.",
      icon: <Apple className="w-10 h-10 md:w-12 md:h-12" />,
      color: "text-sky-600",
      features: ["Swift/SwiftUI", "iOS 15+", "App Store", "WatchOS"]
    },
    {
      title: "Android App Development",
      description: "Native Android apps with Kotlin and Jetpack Compose.",
      icon: <Google className="w-10 h-10 md:w-12 md:h-12" />,
      color: "text-blue-600",
      features: ["Kotlin/Java", "Material Design", "Play Store", "Wear OS"]
    },
    {
      title: "Cross-Platform Development",
      description: "Build once, deploy everywhere with React Native and Flutter.",
      icon: <GlobeIcon className="w-10 h-10 md:w-12 md:h-12" />,
      color: "text-cyan-600",
      features: ["React Native", "Flutter", "Code Push", "Web Support"]
    },
    {
      title: "App UI/UX Design",
      description: "Beautiful, intuitive interfaces that users love.",
      icon: <Palette className="w-10 h-10 md:w-12 md:h-12" />,
      color: "text-sky-600",
      features: ["Wireframing", "Prototyping", "Design Systems", "User Testing"]
    },
    {
      title: "App Store Optimization",
      description: "Maximize visibility and downloads with ASO.",
      icon: <TrendingUp className="w-10 h-10 md:w-12 md:h-12" />,
      color: "text-blue-600",
      features: ["Keyword Research", "Store Listings", "Review Management", "Analytics"]
    },
    {
      title: "App Maintenance",
      description: "Continuous updates, bug fixes, and feature enhancements.",
      icon: <RefreshCw className="w-10 h-10 md:w-12 md:h-12" />,
      color: "text-cyan-600",
      features: ["Bug Fixes", "OS Updates", "Performance Tuning", "Security Patches"]
    }
  ];

  // Features
  const features = [
    {
      title: "Native Performance",
      description: "Blazing fast apps with platform-specific optimizations",
      icon: <Zap className="w-8 h-8 md:w-10 md:h-10" />
    },
    {
      title: "Offline Support",
      description: "Work seamlessly without internet connection",
      icon: <WifiOff className="w-8 h-8 md:w-10 md:h-10" />
    },
    {
      title: "Push Notifications",
      description: "Engage users with timely updates",
      icon: <Bell className="w-8 h-8 md:w-10 md:h-10" />
    },
    {
      title: "Biometric Auth",
      description: "Secure login with FaceID and fingerprint",
      icon: <Fingerprint className="w-8 h-8 md:w-10 md:h-10" />
    }
  ];

  // Development Process
  const developmentProcess = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We analyze your requirements and create a detailed app roadmap."
    },
    {
      step: "02",
      title: "UI/UX Design",
      description: "Create intuitive interfaces with user-centered design principles."
    },
    {
      step: "03",
      title: "Agile Development",
      description: "Iterative development with regular sprints and client feedback."
    },
    {
      step: "04",
      title: "Testing & QA",
      description: "Rigorous testing across devices and user scenarios."
    },
    {
      step: "05",
      title: "App Store Deployment",
      description: "Smooth deployment to Apple App Store and Google Play Store."
    },
    {
      step: "06",
      title: "Maintenance & Updates",
      description: "Continuous monitoring, updates, and feature enhancements."
    }
  ];

  // Why Choose Us - Redesigned with better cards
  const whyChooseUs = [
    {
      title: "8+ Years Excellence",
      description: "Over eight years of delivering successful mobile apps across industries",
      icon: <Medal className="w-8 h-8" />,
      color: "from-sky-500 to-blue-500"
    },
    {
      title: "200+ Apps Launched",
      description: "Successful app launches from startups to Fortune 500 companies",
      icon: <Trophy className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "95% Client Retention",
      description: "Long-term partnerships built on trust and exceptional results",
      icon: <Users2 className="w-8 h-8" />,
      color: "from-cyan-500 to-sky-500"
    },
    {
      title: "Agile Methodology",
      description: "Fast, iterative development with 2-week sprints",
      icon: <RefreshCw className="w-8 h-8" />,
      stats: "2-Week Sprints",
      color: "from-sky-500 to-blue-500"
    },
    {
      title: "Dedicated Team",
      description: "Full-time developers and project managers assigned to your project",
      icon: <Users className="w-8 h-8" />,
      stats: "30+ Experts",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock maintenance and quick issue resolution",
      icon: <Headphones className="w-8 h-8" />,
      color: "from-cyan-500 to-sky-500"
    }
  ];

  // Testimonials
  const testimonials = [
    {
      quote: "The FoodieHub app transformed our business. Order volume tripled in 6 months.",
      name: "Mike Chen",
      // role: "Founder, FoodieHub",
      image: "MC"
    },
    {
      quote: "Users love the smooth experience. Best fitness app on the market.",
      name: "Sarah Johnson",
      // role: "CEO, FitTrack",
      image: "SJ"
    },
    {
      quote: "Secure, fast, and user-friendly. Exactly what we needed.",
      name: "Raj Kumar",
      // role: "CTO, BankEase",
      image: "RK"
    }
  ];

  // Industries
  const industries = [
    {
      name: "E-commerce",
      icon: <ShoppingBag className="w-6 h-6 md:w-8 md:h-8" />,
      projects: "45+"
    },
    {
      name: "Healthcare",
      icon: <HeartIcon className="w-6 h-6 md:w-8 md:h-8" />,
      projects: "35+"
    },
    {
      name: "FinTech",
      icon: <CreditCard className="w-6 h-6 md:w-8 md:h-8" />,
      projects: "40+"
    },
    {
      name: "Food & Drink",
      icon: <CoffeeIcon className="w-6 h-6 md:w-8 md:h-8" />,
      projects: "30+"
    },
    {
      name: "Travel",
      icon: <Plane className="w-6 h-6 md:w-8 md:h-8" />,
      projects: "25+"
    },
    {
      name: "Education",
      icon: <GraduationIcon className="w-6 h-6 md:w-8 md:h-8" />,
      projects: "30+"
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">

      {/* ================= HERO SECTION - SIMPLIFIED ================= */}
      <section className="relative pt-20 md:pt-24 pb-16 md:pb-20 bg-gradient-to-br from-sky-900 via-blue-900 to-sky-800 overflow-hidden">
        
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-sky-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-sky-300" />
              <span className="text-sm font-medium text-white">Mobile App Development Experts</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
              Turn Your App Idea{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-blue-300">
                Into Reality
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl mx-auto">
              We build powerful, scalable mobile apps for iOS and Android. 
              From concept to App Store, we deliver exceptional experiences that users love.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white px-8 py-6 shadow-xl shadow-sky-600/20 text-base"
              >
                <Link to="/contact" className="flex items-center justify-center">
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-base"
              >
                <Link to="/ourwork" className="flex items-center justify-center">
                  <Eye className="mr-2 w-5 h-5" />
                  View Our Apps
                </Link>
              </Button>
            </div>

            {/* Stats - Only one set */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {heroStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= NO STATS CARD SECTION - REMOVED ================= */}

      {/* ================= FEATURES SECTION ================= */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose{' '}
              <span className="text-sky-600">Mobile Apps?</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Reach your customers where they are. Mobile apps provide unparalleled engagement and convenience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group text-center p-6 md:p-8 rounded-xl border border-gray-200 hover:border-sky-300 hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-sky-50 flex items-center justify-center mx-auto mb-6 group-hover:bg-sky-100 transition-all">
                  <div className="text-sky-600">{feature.icon}</div>
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-sm md:text-base text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CORE SERVICES ================= */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our{' '}
              <span className="text-sky-600">Services</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive mobile app development solutions for businesses of all sizes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {coreServices.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl p-6 md:p-8 border border-gray-200 hover:border-sky-300 hover:shadow-xl transition-all duration-300"
              >
                <div className={`${service.color} w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center mb-4`}>
                  {service.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-sm md:text-base text-gray-600 mb-4">{service.description}</p>
                
                {/* Features */}
                <div className="space-y-2 mb-4">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-sky-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center text-sky-600 font-medium group-hover:text-sky-700 text-sm md:text-base">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= DEVELOPMENT PROCESS ================= */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our{' '}
              <span className="text-sky-600">Process</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              A systematic approach to delivering high-quality mobile apps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {developmentProcess.map((phase, index) => (
              <div key={index} className="relative">
                <div className="bg-gray-50 rounded-xl p-6 md:p-8 border border-gray-200 hover:border-sky-300 hover:shadow-lg transition-all">
                  <span className="text-4xl md:text-5xl font-bold text-sky-100 absolute top-4 right-4">
                    {phase.step}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 relative z-10">{phase.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US SECTION - IMPROVED ================= */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-sky-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why{' '}
              <span className="text-sky-600">Choose Us</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              What makes us the preferred partner for mobile app development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl p-6 border border-gray-200 hover:border-sky-300 hover:shadow-xl transition-all relative overflow-hidden"
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
                
                <div className="relative">
                  <div className="flex items-start gap-4">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center text-white shadow-lg flex-shrink-0`}>
                      {item.icon}
                    </div>
                    <div>
                      <div className={`text-xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-1`}>
                        {item.stats}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= INDUSTRIES ================= */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Industries We{' '}
              <span className="text-sky-600">Serve</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Deep domain expertise across multiple industries.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-sky-50 rounded-xl p-6 text-center hover:shadow-lg transition-all group"
              >
                <div className="text-sky-600 mb-3 flex justify-center group-hover:scale-110 transition-transform">
                  {industry.icon}
                </div>
                <h4 className="font-bold text-base mb-1">{industry.name}</h4>
                <div className="text-sky-600 font-bold text-sm">{industry.projects}</div>
                <div className="text-xs text-gray-500">Projects</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Client{' '}
              <span className="text-sky-600">Success Stories</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              See how we've helped businesses achieve their goals with mobile apps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 md:p-8 border border-gray-200 hover:border-sky-300 hover:shadow-xl transition-all"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 md:w-5 md:h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 text-base md:text-lg italic mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    {/* <p className="text-gray-600 text-sm">{testimonial.role}</p> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA SECTION ================= */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-sky-600 via-blue-600 to-sky-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
            <Rocket className="w-4 h-4" />
            <span className="text-sm font-medium">Ready to Build Your App?</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
            Let's Create Your Mobile App
          </h2>
          <p className="text-sm md:text-base text-sky-100 mb-6 max-w-2xl mx-auto">
            Schedule a free consultation with our app experts. We'll analyze your requirements and provide 
            a detailed roadmap and estimate.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-sky-700 hover:bg-gray-100 px-6 py-4 font-bold shadow-lg text-sm"
            >
              <Link to="/contact#contact-form" className="flex items-center justify-center">
                Get Free Consultation
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-6 py-4 text-sm"
            >
              <Link to="/ourwork">
                <Eye className="w-4 h-4 mr-2" />
                View Our Apps
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobileAppDevelopment;