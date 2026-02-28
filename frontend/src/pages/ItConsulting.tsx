import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

// Comment out the image import if the file doesn't exist
 import heroBg from "@/assets/it consulatancy bg image.jpg";

import {
  ArrowRight,
  Sparkles,
  Shield,
  Cloud,
  Cpu,
  Brain,
  Database,
  Layers,
  Briefcase,
  Building2,
  TrendingUp,
  Award,
  CheckCircle,
  Search,
  ClipboardCheck,
  Rocket,
  LifeBuoy,
  BarChart,
  Globe,
  Users,
  Target,
  Clock,
  HeadphonesIcon,
  FileCheck,
  LineChart,
  Zap,
  Lock,
  Settings,
  Mail,
  MapPin,
  Phone,
  ChevronRight,
  Star,
  Quote,
  BookOpen,
  Youtube,
  Twitter,
  Linkedin,
  Facebook,
  Github,
  MessageCircle,
  Calendar,
  User,
} from "lucide-react";
import Client1 from "../assets/client1.png";
import Client2 from "../assets/client2.png";
import Client3 from "../assets/client3.png";
import Team1 from "../assets/client1.png";
import Team2 from "../assets/client2.png";
import Team3 from "../assets/client3.png";
import Team4 from "../assets/client4.png";


/* ================= DATA ================= */

const stats = [
  { value: "500+", label: "Projects Delivered", icon: Briefcase },
  { value: "200+", label: "Happy Clients", icon: Users },
  { value: "15+", label: "Years Experience", icon: Award },
  { value: "99.9%", label: "Client Retention", icon: TrendingUp },
  { value: "24/7", label: "Support Available", icon: Clock },
  { value: "50+", label: "Expert Consultants", icon: Users },
];

const services = [
  {
    title: "Digital Transformation",
    desc: "Modernize legacy systems, implement cutting-edge solutions, and accelerate business growth with our comprehensive digital strategy.",
    icon: Cpu,
    features: ["Legacy System Modernization", "Process Automation", "Digital Strategy"]
  },
  {
    title: "Cloud Consulting",
    desc: "Secure cloud migration, multi-cloud strategy, and infrastructure optimization for maximum performance and cost efficiency.",
    icon: Cloud,
    features: ["Cloud Migration", "Multi-Cloud Strategy", "Cost Optimization"]
  },
  {
    title: "Cybersecurity",
    desc: "Protect enterprise infrastructure, applications, and data with advanced security protocols and compliance management.",
    icon: Shield,
    features: ["Threat Detection", "Compliance Management", "Security Audits"]
  },
  {
    title: "Data & AI Consulting",
    desc: "Unlock valuable insights using advanced AI, machine learning, and data analytics to drive informed decision-making.",
    icon: Brain,
    features: ["AI Implementation", "Data Analytics", "ML Solutions"]
  },
  {
    title: "Enterprise Architecture",
    desc: "Design scalable, resilient, and future-ready IT systems that align with your business goals and objectives.",
    icon: Layers,
    features: ["System Design", "Integration Strategy", "Scalability Planning"]
  },
  {
    title: "IT Infrastructure",
    desc: "Build and maintain reliable, high-performance IT environments with proactive monitoring and management.",
    icon: Database,
    features: ["Network Design", "Server Management", "Disaster Recovery"]
  },
  {
    title: "DevOps Consulting",
    desc: "Streamline development operations with CI/CD pipelines, automation, and modern DevOps practices.",
    icon: Settings,
    features: ["CI/CD Pipeline", "Infrastructure as Code", "Automation"]
  },
  {
    title: "IT Strategy & Planning",
    desc: "Develop comprehensive IT roadmaps aligned with business objectives for sustainable growth and innovation.",
    icon: Target,
    features: ["Technology Roadmap", "Budget Planning", "Resource Optimization"]
  },
  {
    title: "Compliance & Governance",
    desc: "Ensure regulatory compliance and implement robust IT governance frameworks across your organization.",
    icon: FileCheck,
    features: ["Regulatory Compliance", "Policy Development", "Risk Management"]
  }
];

const features = [
  "Certified IT consultants with 10+ years experience",
  "Enterprise-grade security protocols",
  "Scalable architecture design",
  "Fast implementation methodology",
  "24/7 dedicated support team",
  "Proven consulting framework",
  "Industry best practices",
  "Customized solutions",
  "ROI-focused approach"
];

const process = [
  { 
    title: "Discovery", 
    icon: Search,
    desc: "Understanding your business goals, challenges, and current IT landscape"
  },
  { 
    title: "Assessment", 
    icon: ClipboardCheck,
    desc: "Comprehensive analysis of systems, processes, and requirements"
  },
  { 
    title: "Strategy", 
    icon: Target,
    desc: "Developing customized roadmap and solution architecture"
  },
  { 
    title: "Implementation", 
    icon: Rocket,
    desc: "Executing the plan with minimal disruption to operations"
  },
  { 
    title: "Testing", 
    icon: FileCheck,
    desc: "Rigorous quality assurance and performance validation"
  },
  { 
    title: "Support", 
    icon: LifeBuoy,
    desc: "Ongoing maintenance, monitoring, and continuous improvement"
  }
];

const industries = [
  { name: "Healthcare", icon: LifeBuoy, count: "45+ Projects" },
  { name: "Finance", icon: BarChart, count: "60+ Projects" },
  { name: "Retail", icon: Briefcase, count: "35+ Projects" },
  { name: "Manufacturing", icon: Settings, count: "40+ Projects" },
  { name: "Technology", icon: Cpu, count: "80+ Projects" },
  { name: "Education", icon: BookOpen, count: "25+ Projects" }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    // role: "CTO, TechCorp Inc.",
    content: "The team transformed our entire IT infrastructure. Their expertise in cloud migration saved us 40% in operational costs.",
    rating: 5,
    image: Client1
  },
  {
    name: "Michael Chen",
    // role: "CEO, InnovateLabs",
    content: "Outstanding consulting services. They helped us build a scalable architecture that grew with our business.",
    rating: 5,
    image: Client2
  },
  {
    name: "Emily Rodriguez",
    // role: "Director, Global Finance",
    content: "Their cybersecurity expertise is unmatched. We now have enterprise-grade protection with full compliance.",
    rating: 5,
    image: Client3
  }
];

const team = [
  {
    name: "David Wilson",
    role: "Lead Cloud Architect",
    expertise: "Cloud Strategy, AWS, Azure",
    image: Team1
  },
  {
    name: "Lisa Anderson",
    role: "Cybersecurity Specialist",
    expertise: "Security Audits, Compliance",
    image: Team2
  },
  {
    name: "James Martinez",
    role: "AI/ML Consultant",
    expertise: "Machine Learning, Data Science",
    image: Team3
  },
  {
    name: "Patricia Lee",
    role: "Enterprise Architect",
    expertise: "System Design, Integration",
    image: Team4
  }
];

const blogPosts = [
  {
    title: "Top 10 IT Trends in 2024",
    excerpt: "Discover the latest technology trends shaping enterprise IT strategies this year.",
    date: "Mar 15, 2024",
    readTime: "5 min read",
    category: "Trends"
  },
  {
    title: "Cloud Migration Best Practices",
    excerpt: "Learn the essential steps for successful cloud migration with minimal downtime.",
    date: "Mar 10, 2024",
    readTime: "7 min read",
    category: "Cloud"
  },
  {
    title: "Cybersecurity Threats to Watch",
    excerpt: "Stay protected with our guide to emerging cybersecurity threats and solutions.",
    date: "Mar 5, 2024",
    readTime: "6 min read",
    category: "Security"
  }
];

const faqs = [
  {
    question: "How do you ensure project success?",
    answer: "We follow a proven methodology that includes thorough planning, regular communication, milestone tracking, and quality assurance at every stage."
  },
  {
    question: "What industries do you specialize in?",
    answer: "We have extensive experience across healthcare, finance, retail, manufacturing, technology, and education sectors."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on scope and complexity. We provide detailed timelines during the discovery phase."
  },
  {
    question: "Do you offer ongoing support?",
    answer: "Yes, we provide 24/7 support and maintenance packages tailored to your specific needs."
  }
];

const ITConsultingPremium: React.FC = () => {
  return (
    <div className="bg-white text-gray-900">
      {/* ================= HERO ================= */}
      <section
        className="relative text-white overflow-hidden"
        style={{
          backgroundColor: '#1a365d',
          backgroundImage: `linear-gradient(135deg, rgba(2,6,23,.95) 0%, rgba(37,99,235,.9) 100% , url(${heroBg}))`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 md:pt-28 md:pb-32 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-blue-200 mb-4 bg-white/10 px-4 py-2 rounded-full w-fit">
              <Sparkles size={16} />
              <span className="text-sm font-medium">Enterprise IT Consulting</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Transform Your Business With <span className="text-blue-300">Expert IT Consulting</span>
            </h1>
            <p className="text-gray-200 mb-8 text-lg max-w-xl">
              Optimize your IT infrastructure, improve security, and accelerate digital transformation with our team of certified consultants.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Link to="/contact#contact-form" className="flex items-center justify-center">
                  Get Free Consultation
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link to="/services">View Services</Link>
              </Button>
            </div>
            <div className="flex items-center gap-6 mt-10">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-br from-blue-400 to-blue-600"
                  ></div>
                ))}
              </div>
              <p className="text-sm text-gray-200">
                <span className="font-bold">500+</span> companies trust us
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group hover:transform hover:-translate-y-1 transition-all">
                  <div className="bg-blue-50 w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:bg-blue-100 transition">
                    <Icon className="text-blue-600" size={24} />
                  </div>
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-600 mb-1">{stat.value}</div>
                  <div className="text-xs md:text-sm text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Comprehensive IT Consulting Services</h2>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto px-4">
              End-to-end consulting solutions tailored to your business needs, delivered by industry experts
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group border rounded-xl md:rounded-2xl p-5 md:p-6 lg:p-8 hover:shadow-xl transition-all hover:border-blue-200 hover:-translate-y-1"
                >
                  <div className="bg-blue-50 w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:bg-blue-100 transition">
                    <Icon className="text-blue-600" size={24} />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-3 md:mb-4 text-xs md:text-sm leading-relaxed">{service.desc}</p>
                  <ul className="space-y-1.5 md:space-y-2 mb-4 md:mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs md:text-sm text-gray-600">
                        <CheckCircle className="text-blue-600 flex-shrink-0" size={14} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/services" className="text-blue-600 font-medium inline-flex items-center group/link text-sm md:text-base">
                    Learn More <ChevronRight size={16} className="ml-1 group-hover/link:translate-x-1 transition" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">Why Industry Leaders Choose Us</h2>
              <p className="text-gray-600 mb-6 md:mb-8 text-base md:text-lg">
                We combine deep technical expertise with business acumen to deliver exceptional results for our clients.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2 md:gap-3">
                    <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={16} />
                    <span className="text-xs md:text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 md:mt-10 flex flex-wrap gap-3 md:gap-4">
                <div className="bg-white rounded-lg p-3 md:p-4 shadow-sm flex-1 min-w-[120px]">
                  <div className="text-xl md:text-2xl font-bold text-blue-600">98%</div>
                  <div className="text-xs md:text-sm text-gray-600">Client Satisfaction</div>
                </div>
                <div className="bg-white rounded-lg p-3 md:p-4 shadow-sm flex-1 min-w-[120px]">
                  <div className="text-xl md:text-2xl font-bold text-blue-600">150+</div>
                  <div className="text-xs md:text-sm text-gray-600">Expert Consultants</div>
                </div>
              </div>
            </div>
            <div className="bg-blue-600 text-white rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Get Your Free IT Assessment</h3>
              <p className="mb-6 md:mb-8 text-blue-100 text-sm md:text-base">Schedule a no-obligation consultation with our experts</p>
              <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                <li className="flex items-center gap-2 md:gap-3 text-sm md:text-base">
                  <CheckCircle size={18} className="text-blue-200 flex-shrink-0" />
                  <span>Comprehensive system audit</span>
                </li>
                <li className="flex items-center gap-2 md:gap-3 text-sm md:text-base">
                  <CheckCircle size={18} className="text-blue-200 flex-shrink-0" />
                  <span>Security vulnerability check</span>
                </li>
                <li className="flex items-center gap-2 md:gap-3 text-sm md:text-base">
                  <CheckCircle size={18} className="text-blue-200 flex-shrink-0" />
                  <span>Performance optimization tips</span>
                </li>
              </ul>
              <Button asChild variant="secondary" className="w-full text-sm md:text-base py-5 md:py-6">
                <Link to="/contact">Claim Your Free Assessment</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Our Proven Consulting Process</h2>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto px-4">
              A systematic approach to ensure successful project delivery and maximum value
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {process.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition"></div>
                  <div className="relative bg-white p-5 md:p-6 lg:p-8 rounded-xl md:rounded-2xl border">
                    <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                      <div className="bg-blue-50 w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-xl flex items-center justify-center">
                        <Icon className="text-blue-600" size={20} />
                      </div>
                      <span className="text-xs md:text-sm font-bold text-blue-600">Step {index + 1}</span>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-xs md:text-sm">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= INDUSTRIES ================= */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto px-4">
              Specialized expertise across multiple sectors with proven success
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 lg:gap-6">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <div key={index} className="bg-white rounded-xl md:rounded-2xl p-4 md:p-5 lg:p-6 text-center hover:shadow-lg transition group cursor-pointer">
                  <div className="bg-blue-50 w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-2 md:mb-3 lg:mb-4 group-hover:bg-blue-100 transition">
                    <Icon className="text-blue-600" size={24} />
                  </div>
                  <h3 className="font-bold text-sm md:text-base mb-1">{industry.name}</h3>
                  <p className="text-xs text-gray-500">{industry.count}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto px-4">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl md:rounded-2xl p-5 md:p-6 lg:p-8 shadow-lg border relative">
                <Quote className="absolute top-4 md:top-6 right-4 md:right-6 text-blue-100" size={32} />
                <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                  <img 
                     src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://ui-avatars.com/api/?name=${testimonial.name.replace(' ', '+')}&background=2563eb&color=fff&size=150`;
                    }}
                  />
                  <div>
                    <h4 className="font-bold text-sm md:text-base">{testimonial.name}</h4>
                    {/* <p className="text-xs md:text-sm text-gray-600">{testimonial.role}</p> */}
                  </div>
                </div>
                <p className="text-gray-700 mb-3 md:mb-4 text-sm md:text-base">"{testimonial.content}"</p>
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TEAM ================= */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Meet Our Expert Consultants</h2>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto px-4">
              Industry veterans with deep technical expertise and proven track records
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {team.map((member, index) => (
              <div key={index} className="group">
                <div className="relative mb-3 md:mb-4 overflow-hidden rounded-xl md:rounded-2xl">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-110 transition duration-500"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://ui-avatars.com/api/?name=${member.name.replace(' ', '+')}&background=2563eb&color=fff&size=300`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent opacity-0 group-hover:opacity-100 transition"></div>
                  <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 right-3 md:right-4 text-white opacity-0 group-hover:opacity-100 transition">
                    <div className="flex gap-2 md:gap-3">
                      <Linkedin size={16} className="cursor-pointer hover:text-blue-400" />
                      <Twitter size={16} className="cursor-pointer hover:text-blue-400" />
                      <Mail size={16} className="cursor-pointer hover:text-blue-400" />
                    </div>
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-bold">{member.name}</h3>
                <p className="text-blue-600 text-sm md:text-base mb-1">{member.role}</p>
                <p className="text-xs md:text-sm text-gray-600">{member.expertise}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BLOG ================= */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Latest Insights</h2>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto px-4">
              Stay updated with the latest trends and best practices in IT
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {blogPosts.map((post, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-gradient-to-br from-blue-400 to-blue-600 h-36 sm:h-40 md:h-44 lg:h-48 rounded-xl md:rounded-2xl mb-3 md:mb-4 group-hover:shadow-lg transition"></div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500">{post.date}</span>
                </div>
                <h3 className="text-base md:text-lg lg:text-xl font-bold mb-2 group-hover:text-blue-600 transition">{post.title}</h3>
                <p className="text-gray-600 text-xs md:text-sm mb-2 md:mb-3">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{post.readTime}</span>
                  <span className="text-blue-600 font-medium text-xs md:text-sm group-hover:underline">Read More</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-base md:text-lg">
              Get answers to common questions about our consulting services
            </p>
          </div>
          <div className="space-y-3 md:space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-sm hover:shadow-md transition">
                <h3 className="text-base md:text-lg font-bold mb-2">{faq.question}</h3>
                <p className="text-sm md:text-base text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-16 md:py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800"></div>
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 lg:mb-10 text-blue-100 max-w-2xl mx-auto px-4">
            Join 500+ companies that have already modernized their IT with our expert consulting
          </p>
          <div className="flex flex-wrap gap-3 md:gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 text-sm md:text-base px-4 md:px-6 py-5 md:py-6">
              <Link to="/contact#contact-form" className="flex items-center justify-center">
                Schedule Free Consultation
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-sm md:text-base px-4 md:px-6 py-5 md:py-6">
              <Link to="/services">View Case Studies</Link>
            </Button>
          </div>
          <p className="mt-6 md:mt-8 text-xs md:text-sm text-blue-200">
            No commitment required · 100% free consultation · Expert advice guaranteed
          </p>
        </div>
      </section>

      {/* Add bottom padding to prevent footer overlap */}
      <div className="pb-8 md:pb-12 lg:pb-16"></div>
    </div>
  );
};

export default ITConsultingPremium;