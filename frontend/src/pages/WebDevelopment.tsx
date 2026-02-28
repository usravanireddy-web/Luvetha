import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/web1.png";
import { 
  Code, ShoppingCart, Layout, Smartphone, Cpu,
  CheckCircle, ArrowRight, Rocket, Star, Clock,
  TrendingUp, ShieldCheck, Database, Cloud,
  Terminal, Palette, Zap, Globe, Users,
  BarChart, Target, MessageSquare, Calendar,
  Award, Heart, Settings, Briefcase, Coffee,
  GraduationCap, ExternalLink, Eye, Monitor,
  Server, Wifi, Battery, Lock, PieChart
} from "lucide-react";

const WebDevelopment = () => {
  const coreServices = [
    {
      title: "Custom Website Development",
      description: "Tailor-made websites built from scratch for unique business requirements.",
      icon: <Code className="w-10 h-10 md:w-12 md:h-12" />,
      color: "text-blue-600"
    },
    {
      title: "E-Commerce Development",
      description: "Build powerful online stores with seamless shopping experiences.",
      icon: <ShoppingCart className="w-10 h-10 md:w-12 md:h-12" />,
      color: "text-green-600"
    },
    {
      title: "CMS Development",
      description: "Manage content easily using WordPress, Drupal, Joomla.",
      icon: <Layout className="w-10 h-10 md:w-12 md:h-12" />,
      color: "text-purple-600"
    },
    {
      title: "Mobile-First Design",
      description: "Responsive websites optimized for all devices and screen sizes.",
      icon: <Smartphone className="w-10 h-10 md:w-12 md:h-12" />,
      color: "text-orange-600"
    },
    {
      title: "Web Application Development",
      description: "Progressive web applications for startups and enterprises.",
      icon: <Cpu className="w-10 h-10 md:w-12 md:h-12" />,
      color: "text-red-600"
    },
    {
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that enhance user experience.",
      icon: <Palette className="w-10 h-10 md:w-12 md:h-12" />,
      color: "text-pink-600"
    }
  ];

  const technologies = [
    { name: "React", icon: <Code className="w-6 h-6 md:w-8 md:h-8" /> },
    { name: "Next.js", icon: <Terminal className="w-6 h-6 md:w-8 md:h-8" /> },
    { name: "Node.js", icon: <Database className="w-6 h-6 md:w-8 md:h-8" /> },
    { name: "TypeScript", icon: <Code className="w-6 h-6 md:w-8 md:h-8" /> },
    { name: "MongoDB", icon: <Database className="w-6 h-6 md:w-8 md:h-8" /> },
    { name: "PostgreSQL", icon: <Database className="w-6 h-6 md:w-8 md:h-8" /> },
    { name: "AWS", icon: <Cloud className="w-6 h-6 md:w-8 md:h-8" /> },
    { name: "Firebase", icon: <Zap className="w-6 h-6 md:w-8 md:h-8" /> },
    { name: "WordPress", icon: <Layout className="w-6 h-6 md:w-8 md:h-8" /> },
    { name: "Shopify", icon: <ShoppingCart className="w-6 h-6 md:w-8 md:h-8" /> },
    { name: "Tailwind CSS", icon: <Palette className="w-6 h-6 md:w-8 md:h-8" /> },
    { name: "GraphQL", icon: <BarChart className="w-6 h-6 md:w-8 md:h-8" /> }
  ];

  const features = [
    {
      title: "Fast Loading Speed",
      description: "Optimized websites that load in under 2 seconds",
      icon: <Zap className="w-8 h-8 md:w-10 md:h-10" />
    },
    {
      title: "SEO Optimized",
      description: "Built for search engine success from day one",
      icon: <Eye className="w-8 h-8 md:w-10 md:h-10" />
    },
    {
      title: "Mobile Responsive",
      description: "Perfect experience on all devices",
      icon: <Smartphone className="w-8 h-8 md:w-10 md:h-10" />
    },
    {
      title: "Secure & Reliable",
      description: "Enterprise-grade security and 99.9% uptime",
      icon: <ShieldCheck className="w-8 h-8 md:w-10 md:h-10" />
    }
  ];

  const testimonials = [
    {
      quote: "Luvetha Tech transformed our online presence. Our new website increased conversions by 40%.",
      name: "Rajesh Kumar",
      // role: "CEO, RetailChain India",
      image: "RK"
    },
    {
      quote: "Professional team, excellent communication, and delivered exactly what we needed.",
      name: "Priya Sharma",
      // role: "Marketing Director, TechFusion",
      image: "PS"
    },
    {
      quote: "Our e-commerce platform built by them handles 1000+ daily orders seamlessly.",
      name: "Amit Patel",
      // role: "Operations Head, FashionHub",
      image: "AP"
    }
  ];

  const industries = [
    {
      name: "E-commerce",
      icon: <ShoppingCart className="w-6 h-6 md:w-8 md:h-8" />,
      projects: "150+"
    },
    {
      name: "Healthcare",
      icon: <Heart className="w-6 h-6 md:w-8 md:h-8" />,
      projects: "80+"
    },
    {
      name: "Education",
      icon: <GraduationCap className="w-6 h-6 md:w-8 md:h-8" />,
      projects: "60+"
    },
    {
      name: "Real Estate",
      icon: <Briefcase className="w-6 h-6 md:w-8 md:h-8" />,
      projects: "45+"
    },
    {
      name: "Hospitality",
      icon: <Coffee className="w-6 h-6 md:w-8 md:h-8" />,
      projects: "35+"
    },
    {
      name: "Manufacturing",
      icon: <Settings className="w-6 h-6 md:w-8 md:h-8" />,
      projects: "55+"
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[75vh] sm:min-h-[85vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Web Development Services"
            className="w-full h-full object-cover object-center md:object-left"
          />
          <div className="absolute inset-0 bg-gradient-to-r 
            from-black/85 via-black/65 to-transparent 
            md:from-black/75 md:via-black/55 md:to-transparent"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-xl md:max-w-2xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 
                bg-white/20 backdrop-blur-sm 
                rounded-full px-3 py-1.5 mb-5">
                <Globe className="w-4 h-4 text-white" />
                <span className="text-sm font-medium text-white">
                  Top Web Development Company
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
                font-bold text-white mb-5 leading-tight">
               Website Development Company in {" "}
                <span className="text-blue-400">Hyderabad</span>
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg md:text-xl 
                text-gray-200 mb-7 leading-relaxed">
                Luvetha Tech Solutions is a professional web development company in Hyderabad building fast, secure, and SEO-friendly websites.
              </p>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  asChild
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 
                    text-white px-6 py-5 shadow-lg w-full sm:w-auto"
                >
                  <Link to="/contact#contact-form" className="flex items-center justify-center">
                    Get Free Consultation
                    <MessageSquare className="ml-2 w-5 h-5" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="bg-transparent border-2 border-white 
                    text-white hover:bg-white/10 
                    px-6 py-5 w-full sm:w-auto"
                >
                  <Link to="/ourwork" className="flex items-center justify-center">
                    View Our Work
                    <ExternalLink className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-20 px-4">
        <div className="max-w-7xl mx-auto -mt-8 md:-mt-12">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {[
              { 
                value: "500+", 
                label: "Websites Built", 
                icon: <Code className="w-5 h-5 md:w-6 md:h-6" />,
                bg: "bg-blue-600"
              },
              { 
                value: "300+", 
                label: "Happy Clients", 
                icon: <Users className="w-5 h-5 md:w-6 md:h-6" />,
                bg: "bg-green-600"
              },
              { 
                value: "98%", 
                label: "Satisfaction Rate", 
                icon: <Heart className="w-5 h-5 md:w-6 md:h-6" />,
                bg: "bg-purple-600"
              },
              { 
                value: "24/7", 
                label: "Support", 
                icon: <ShieldCheck className="w-5 h-5 md:w-6 md:h-6" />,
                bg: "bg-orange-600"
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-lg md:shadow-xl border border-gray-100 hover:shadow-xl md:hover:shadow-2xl transition-all"
              >
                <div className="flex items-center gap-3 md:gap-4">
                  <div className={`${stat.bg} p-2 md:p-3 rounded-lg`}>
                    <div className="text-white">{stat.icon}</div>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">{stat.value}</h3>
                    <p className="text-xs md:text-sm text-gray-600">{stat.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Why Choose Our <span className="text-blue-600">Web Solutions</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              We deliver websites that perform exceptionally well and drive business results.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group text-center p-4 md:p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:bg-blue-100 transition-all">
                  <div className="text-blue-600">{feature.icon}</div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 md:mb-3">{feature.title}</h3>
                <p className="text-sm md:text-base text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Our <span className="text-blue-600">Services</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive web development solutions for all your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {coreServices.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl p-4 sm:p-6 md:p-8 border border-gray-200 hover:border-blue-300 hover:shadow-xl md:hover:shadow-2xl transition-all duration-300"
              >
                <div className="mb-4 md:mb-6">
                  <div className={`${service.color} w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center mb-3 md:mb-4`}>
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 md:mb-4">{service.title}</h3>
                <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">{service.description}</p>
                <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 text-sm md:text-base">
                  <span>Learn More</span>
                  <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Technology <span className="text-blue-600">Stack</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              We use modern technologies to build fast, secure, and scalable web solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="group bg-gray-50 rounded-lg p-3 sm:p-4 flex flex-col items-center hover:bg-blue-50 hover:shadow-lg transition-all"
              >
                <div className="mb-2 md:mb-3 text-blue-600 group-hover:scale-110 transition-transform">
                  {tech.icon}
                </div>
                <span className="font-medium text-center text-xs sm:text-sm md:text-base">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Industries We <span className="text-blue-600">Serve</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              We have extensive experience building solutions for various industries.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-4 md:p-6 text-center hover:shadow-lg transition-all"
              >
                <div className="text-blue-600 mb-3 md:mb-4 flex justify-center">
                  {industry.icon}
                </div>
                <h4 className="font-bold text-sm sm:text-base md:text-lg mb-1 md:mb-2">{industry.name}</h4>
                <div className="text-blue-600 font-bold text-sm md:text-base">{industry.projects}</div>
                <div className="text-xs md:text-sm text-gray-600">Projects</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Client <span className="text-blue-600">Testimonials</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from businesses we've helped transform with our web solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-b from-gray-50 to-white rounded-xl p-6 md:p-8 border border-gray-200"
              >
                <div className="flex mb-3 md:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 md:w-5 md:h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm sm:text-base md:text-lg italic mb-4 md:mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="font-bold text-blue-600 text-sm md:text-base lg:text-lg">{testimonial.image}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm sm:text-base md:text-lg">{testimonial.name}</h4>
                    {/* <p className="text-gray-600 text-xs sm:text-sm md:text-base">{testimonial.role}</p> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Added bottom padding to create space before footer */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white pb-16 md:pb-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1.5 md:px-4 md:py-2 mb-4 md:mb-6">
            <Rocket className="w-4 h-4 md:w-5 md:h-5" />
            <span className="text-xs md:text-sm font-medium">Ready to Get Started?</span>
          </div>
          
          {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
            Let's Build Your Dream Website
          </h2>
          
          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-blue-100 mb-6 md:mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and see how we can transform your online presence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-700 hover:bg-gray-100 px-6 py-5 md:px-8 md:py-6 font-bold shadow-lg w-full sm:w-auto text-sm sm:text-base md:text-lg"
            >
              <Link to="/contact#contact-form" className="flex items-center justify-center">
                Get Free Quote 
                <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
              </Link>
            </Button>
            
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-6 py-5 md:px-8 md:py-6 w-full sm:w-auto text-sm sm:text-base md:text-lg"
            >
              <Link to="/contact#contact-form" className="flex items-center justify-center">
                <Calendar className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                Schedule Call
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopment;