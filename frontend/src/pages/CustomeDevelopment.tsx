import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Code2, Settings, Cloud, Shield, 
  CheckCircle, ArrowRight, Rocket, Star, Clock,
  TrendingUp, ShieldCheck, Database, Cpu,
  Terminal, Palette, Zap, Globe, Users,
  BarChart, Target, MessageSquare, Calendar,
  Award, Heart, Settings as SettingsIcon, Briefcase, Coffee,
  GraduationCap, ExternalLink, Eye, Monitor,
  Server, Wifi, Battery, Lock, PieChart,
  Workflow, GitBranch, AppWindow, GanttChart,
  Sparkles, Building2, Factory, Stethoscope,
  Landmark, Store, Truck, Network,
  Brain, Microscope, FlaskConical, GraduationCap as GraduationIcon,
  Wallet, LineChart, RefreshCw, Layers,
  Split, Blocks, Box, Fingerprint,
  DollarSign, Clock3, ThumbsUp, Headphones,
  Users2, BadgeCheck, Medal, Trophy,
  Lightbulb, PenTool, Megaphone, Target as TargetIcon
} from "lucide-react";

const CustomSoftwareDevelopment = () => {
  const coreServices = [
    {
      title: "Enterprise Software Development",
      description: "Scalable, secure enterprise applications that streamline operations and boost productivity.",
      icon: <Building2 className="w-10 h-10 md:w-12 md:h-12" />,
      color: "text-sky-600"
    },
    {
      title: "SaaS Application Development",
      description: "Multi-tenant cloud applications with subscription management and analytics.",
      icon: <Cloud className="w-10 h-10 md:w-12 md:h-12" />,
      color: "text-blue-600"
    },
    {
      title: "CRM & ERP Solutions",
      description: "Custom CRM and ERP systems tailored to your business processes.",
      icon: <Network className="w-10 h-10 md:w-12 md:h-12" />,
      color: "text-cyan-600"
    },
    {
      title: "Healthcare Software",
      description: "HIPAA-compliant healthcare solutions including EHR and telemedicine platforms.",
      icon: <Stethoscope className="w-10 h-10 md:w-12 md:h-12" />,
      color: "text-sky-600"
    },
    {
      title: "FinTech Applications",
      description: "Secure, compliant financial software with real-time processing.",
      icon: <Landmark className="w-10 h-10 md:w-12 md:h-12" />,
      color: "text-blue-600"
    },
    {
      title: "AI & ML Integration",
      description: "Intelligent software solutions with predictive analytics and automation.",
      icon: <Brain className="w-10 h-10 md:w-12 md:h-12" />,
      color: "text-cyan-600"
    }
  ];

  const features = [
    {
      title: "Custom Architecture",
      description: "Tailored software architecture designed for your specific needs",
      icon: <Workflow className="w-8 h-8 md:w-10 md:h-10" />
    },
    {
      title: "Enterprise Security",
      description: "Bank-level encryption and compliance with industry standards",
      icon: <Fingerprint className="w-8 h-8 md:w-10 md:h-10" />
    },
    {
      title: "Scalable Solutions",
      description: "Grow from startup to enterprise without changing platforms",
      icon: <TrendingUp className="w-8 h-8 md:w-10 md:h-10" />
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock maintenance and technical support",
      icon: <Headphones className="w-8 h-8 md:w-10 md:h-10" />
    }
  ];

  const developmentProcess = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We analyze your requirements, market needs, and create a detailed roadmap."
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
      description: "Rigorous testing including security, performance, and user acceptance."
    },
    {
      step: "05",
      title: "Deployment",
      description: "Smooth deployment with zero downtime and data migration."
    },
    {
      step: "06",
      title: "Maintenance",
      description: "Continuous monitoring, updates, and feature enhancements."
    }
  ];

  const whyChooseUs = [
    {
      title: "10+ Years Experience",
      description: "Over a decade of delivering enterprise software solutions",
      icon: <Medal className="w-8 h-8 md:w-10 md:h-10" />,
      stats: "10+ Years"
    },
    {
      title: "250+ Projects Delivered",
      description: "Successful software deployments across industries",
      icon: <Trophy className="w-8 h-8 md:w-10 md:h-10" />,
      stats: "250+"
    },
    {
      title: "98% Client Retention",
      description: "Long-term partnerships with our clients",
      icon: <Users2 className="w-8 h-8 md:w-10 md:h-10" />,
      stats: "98%"
    },
    {
      title: "Agile Methodology",
      description: "Fast, iterative development with regular updates",
      icon: <RefreshCw className="w-8 h-8 md:w-10 md:h-10" />,
      stats: "2-Week Sprints"
    },
    {
      title: "Dedicated Team",
      description: "Full-time developers assigned to your project",
      icon: <Users className="w-8 h-8 md:w-10 md:h-10" />,
      stats: "40+ Experts"
    },
    {
      title: "Post-Launch Support",
      description: "24/7 maintenance and quick issue resolution",
      icon: <Headphones className="w-8 h-8 md:w-10 md:h-10" />,
      stats: "24/7 Support"
    }
  ];

  const testimonials = [
    {
      quote: "The custom inventory management system transformed our operations. We've reduced errors by 95%.",
      name: "Vikram Reddy",
      
      image: "VR"
    },
    {
      quote: "Their healthcare platform helped us serve 50,000+ patients seamlessly. Outstanding compliance work.",
      name: "Dr. Meera Krishnan",
      image: "MK"
    },
    {
      quote: "The AI-powered analytics dashboard gave us insights we never had before. Game-changer for our business.",
      name: "Arjun Nair",
      image: "AN"
    }
  ];

  const industries = [
    {
      name: "Healthcare",
      icon: <Stethoscope className="w-6 h-6 md:w-8 md:h-8" />,
      projects: "120+"
    },
    {
      name: "Finance",
      icon: <Landmark className="w-6 h-6 md:w-8 md:h-8" />,
      projects: "95+"
    },
    {
      name: "Manufacturing",
      icon: <Factory className="w-6 h-6 md:w-8 md:h-8" />,
      projects: "85+"
    },
    {
      name: "Retail",
      icon: <Store className="w-6 h-6 md:w-8 md:h-8" />,
      projects: "110+"
    },
    {
      name: "Logistics",
      icon: <Truck className="w-6 h-6 md:w-8 md:h-8" />,
      projects: "70+"
    },
    {
      name: "Education",
      icon: <GraduationIcon className="w-6 h-6 md:w-8 md:h-8" />,
      projects: "60+"
    }
  ];

  const stats = [
    { 
      value: "250+", 
      label: "Custom Solutions", 
      icon: <Settings className="w-5 h-5 md:w-6 md:h-6" />,
      bg: "bg-sky-600"
    },
    { 
      value: "180+", 
      label: "Enterprise Clients", 
      icon: <Building2 className="w-5 h-5 md:w-6 md:h-6" />,
      bg: "bg-blue-600"
    },
    { 
      value: "99.9%", 
      label: "Uptime SLA", 
      icon: <Shield className="w-5 h-5 md:w-6 md:h-6" />,
      bg: "bg-cyan-600"
    },
    { 
      value: "15+", 
      label: "Industry Awards", 
      icon: <Award className="w-5 h-5 md:w-6 md:h-6" />,
      bg: "bg-sky-700"
    },
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-16 md:pb-20 lg:pb-24 flex items-center overflow-hidden">
        
        {/* Background with gradient overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-900 via-blue-900 to-sky-800">
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-xl md:max-w-2xl">

              {/* Badge */}
              <div className="inline-flex items-center gap-2 
                bg-white/10 backdrop-blur-sm border border-white/20
                rounded-full px-3 py-1.5 mb-4 md:mb-5">
                <Sparkles className="w-4 h-4 text-sky-300" />
                <span className="text-xs md:text-sm font-medium text-white">
                  Enterprise Software Development Company
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
                font-bold text-white mb-4 md:mb-5 leading-tight">
                Custom Software {" "}
                <span className="text-sky-400">Development</span> Services
              </h1>

              {/* Description */}
              <p className="text-sm sm:text-base md:text-lg 
                text-gray-200 mb-6 md:mb-7 leading-relaxed max-w-2xl">
                Luvetha Tech Solutions builds enterprise-grade custom software solutions 
                that automate workflows, integrate systems, and drive business growth.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  asChild
                  size="lg"
                  className="bg-sky-600 hover:bg-sky-700 
                    text-white px-6 py-4 md:py-5 shadow-lg w-full sm:w-auto text-sm md:text-base"
                >
                  <Link to="/contact#contact-form" className="flex items-center justify-center">
                    Discuss Your Project
                    <MessageSquare className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="bg-transparent border-2 border-white 
                    text-white hover:bg-white/10 
                    px-6 py-4 md:py-5 w-full sm:w-auto text-sm md:text-base"
                >
                  <Link to="/ourwork" className="flex items-center justify-center">
                    View Case Studies
                    <ExternalLink className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                  </Link>
                </Button>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ================= STATS SECTION - FIXED SPACING ================= */}
      <section className="relative z-10 px-4 -mt-8 md:-mt-12 mb-8 md:mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-lg md:shadow-xl border border-gray-100 hover:shadow-xl md:hover:shadow-2xl transition-all"
              >
                <div className="flex items-center gap-3 md:gap-4">
                  <div className={`${stat.bg} p-2 md:p-3 rounded-lg`}>
                    <div className="text-white">{stat.icon}</div>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">{stat.value}</h3>
                    <p className="text-xs md:text-sm text-gray-600">{stat.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FEATURES SECTION ================= */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Why Custom <span className="text-sky-600">Software?</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Off-the-shelf software can't address your unique business challenges. 
              Get solutions built exactly for your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group text-center p-4 md:p-6 rounded-xl border border-gray-200 hover:border-sky-300 hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-sky-50 flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:bg-sky-100 transition-all">
                  <div className="text-sky-600">{feature.icon}</div>
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 md:mb-3">{feature.title}</h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CORE SERVICES ================= */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Our <span className="text-sky-600">Services</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive custom software solutions for businesses of all sizes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {coreServices.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl p-4 sm:p-6 md:p-8 border border-gray-200 hover:border-sky-300 hover:shadow-xl md:hover:shadow-2xl transition-all duration-300"
              >
                <div className="mb-4 md:mb-6">
                  <div className={`${service.color} w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center mb-3 md:mb-4`}>
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 md:mb-4">{service.title}</h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-4 md:mb-6">{service.description}</p>
                <div className="flex items-center text-sky-600 font-medium group-hover:text-sky-700 text-xs sm:text-sm md:text-base">
                  <span>Learn More</span>
                  <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= DEVELOPMENT PROCESS ================= */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Our <span className="text-sky-600">Process</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              A systematic approach to delivering high-quality software solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {developmentProcess.map((phase, index) => (
              <div key={index} className="relative">
                <div className="bg-gray-50 rounded-xl p-5 md:p-6 lg:p-8 border border-gray-200 hover:border-sky-300 hover:shadow-lg transition-all">
                  <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-sky-100 absolute top-3 right-3 md:top-4 md:right-4">
                    {phase.step}
                  </span>
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 md:mb-3 relative z-10">{phase.title}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US SECTION ================= */}
      <section className="py-12 md:py-16 bg-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Why <span className="text-sky-600">Choose Us</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              What makes us the preferred partner for enterprise software development
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-5 md:p-6 lg:p-8 flex items-start gap-4 hover:shadow-xl transition-all border border-sky-100 hover:border-sky-300"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-sky-100 flex items-center justify-center text-sky-600">
                    {item.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-lg md:text-xl font-bold text-sky-600 mb-1">{item.stats}</div>
                  <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= INDUSTRIES ================= */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Industries We <span className="text-sky-600">Serve</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Deep domain expertise across multiple industries.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-sky-50 rounded-xl p-4 md:p-6 text-center hover:shadow-lg transition-all"
              >
                <div className="text-sky-600 mb-2 md:mb-3 flex justify-center">
                  {industry.icon}
                </div>
                <h4 className="font-bold text-sm md:text-base lg:text-lg mb-1">{industry.name}</h4>
                <div className="text-sky-600 font-bold text-xs md:text-sm lg:text-base">{industry.projects}</div>
                <div className="text-xs text-gray-600">Projects</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Client <span className="text-sky-600">Success Stories</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              See how we've helped businesses achieve their goals with custom software.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-b from-white to-gray-50 rounded-xl p-5 md:p-6 lg:p-8 border border-gray-200"
              >
                <div className="flex mb-3 md:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm md:text-base lg:text-lg italic mb-4 md:mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-sky-100 flex items-center justify-center">
                    <span className="font-bold text-sky-600 text-xs md:text-sm lg:text-base">{testimonial.image}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm md:text-base lg:text-lg">{testimonial.name}</h4>
                    {/* <p className="text-gray-600 text-xs md:text-sm">{testimonial.role}</p> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA SECTION ================= */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-r from-sky-600 via-blue-600 to-sky-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1.5 mb-4 md:mb-5">
            <Rocket className="w-4 h-4 md:w-5 md:h-5" />
            <span className="text-sm md:text-base font-medium">Ready to Build Something Amazing?</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
            Let's Create Your Custom Software
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-sky-100 mb-6 md:mb-8 max-w-2xl mx-auto">
            Schedule a free consultation with our experts. We'll analyze your needs and provide 
            a detailed roadmap and estimate.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-sky-700 hover:bg-gray-100 px-6 py-4 md:px-8 md:py-6 font-bold shadow-lg w-full sm:w-auto text-sm md:text-base"
            >
              <Link to="/contact#contact-form" className="flex items-center justify-center">
                Get Free Consultation <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-6 py-4 md:px-8 md:py-6 w-full sm:w-auto text-sm md:text-base"
            >
              <Link to="/ourwork" className="flex items-center justify-center">
                <Eye className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                View Case Studies
              </Link>
            </Button>
          </div>

          {/* Trust badges */}
          <div className="mt-8 md:mt-10 flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-sky-200" />
              <span className="text-sm text-sky-200">ISO 27001 Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-sky-200" />
              <span className="text-sm text-sky-200">HIPAA Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-sky-200" />
              <span className="text-sm text-sky-200">Clutch Top Developer</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomSoftwareDevelopment;