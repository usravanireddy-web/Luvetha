import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Store, 
  Truck, 
  CreditCard, 
  TrendingUp, 
  Users,
  Shield,
  Smartphone,
  Package,
  BarChart3,
  Settings,
  HeadphonesIcon,
  ChevronRight,
  Star,
  CheckCircle,
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Globe,
  Clock,
  Award,
  Zap
} from 'lucide-react';

const RetailServicesPage: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  
  // Services data
  const services = [
    {
      icon: <Store className="w-8 h-8" />,
      title: "Store Management",
      description: "Comprehensive point-of-sale and inventory management solutions for physical retail stores.",
      features: ["POS Systems", "Inventory Tracking", "Employee Management"],
      color: "blue",
      path: "/services/store-management"
    },
    {
      icon: <ShoppingBag className="w-8 h-8" />,
      title: "E-Commerce Solutions",
      description: "End-to-end online store setup and management with seamless integration.",
      features: ["Custom Storefront", "Payment Integration", "Mobile Commerce"],
      color: "purple",
      path: "/services/ecommerce"
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Supply Chain",
      description: "Optimize your supply chain with real-time tracking and analytics.",
      features: ["Logistics Management", "Supplier Portal", "Demand Forecasting"],
      color: "green",
      path: "/services/supply-chain"
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Payment Processing",
      description: "Secure and versatile payment solutions for modern retail businesses.",
      features: ["Multi-payment Options", "Fraud Protection", "Recurring Billing"],
      color: "orange",
      path: "/services/payments"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "CRM & Loyalty",
      description: "Build lasting customer relationships with advanced CRM tools.",
      features: ["Customer Profiles", "Loyalty Programs", "Marketing Automation"],
      color: "pink",
      path: "/services/crm"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Analytics & Insights",
      description: "Data-driven insights to optimize your retail operations.",
      features: ["Sales Analytics", "Customer Behavior", "Performance Reports"],
      color: "indigo",
      path: "/services/analytics"
    }
  ];

  // Stats with icons and descriptions
  const stats = [
    {
      icon: <Store className="w-6 h-6" />,
      value: "10,000+",
      label: "Active Stores",
      description: "Retailers trust our platform",
      trend: "+25% this year",
      path: "/stats/stores"
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      value: "$2.5B+",
      label: "Transactions",
      description: "Processed annually",
      trend: "+40% YoY",
      path: "/stats/transactions"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      value: "50+",
      label: "Countries",
      description: "Global presence",
      trend: "Expanding rapidly",
      path: "/stats/countries"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      value: "99.99%",
      label: "Uptime",
      description: "Enterprise reliability",
      trend: "Guaranteed SLA",
      path: "/stats/uptime"
    }
  ];

  // Benefits
  const benefits = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Security",
      description: "Bank-level encryption and security protocols for all transactions",
      highlight: "SOC 2 Type II Certified",
      path: "/security"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast",
      description: "Optimized performance with sub-second response times",
      highlight: "< 100ms latency",
      path: "/performance"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile First",
      description: "Fully responsive design for all devices and platforms",
      highlight: "Native mobile apps",
      path: "/mobile"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Easy Integration",
      description: "Seamless integration with existing business systems",
      highlight: "100+ integrations",
      path: "/integrations"
    }
  ];

  // Testimonials
  const testimonials = [
    {
      name: "Sarah Johnson",
      // role: "CEO, FashionHub",
      content: "This platform transformed our retail operations completely. Sales increased by 40% in just 3 months. The analytics alone are worth the investment.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      path: "/services"
    },
    {
      name: "Michael Chen",
      // role: "Owner, TechStore",
      content: "The inventory management system saved us countless hours and reduced stockouts by 60%. Highly recommended for any retailer looking to scale.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      path: "/services"
    },
    {
      name: "Emma Davis",
      // role: "Manager, HomeDecor",
      content: "Outstanding customer support and feature-rich platform. The team helped us migrate seamlessly and we were live in under 48 hours.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      path: "/services"
    }
  ];

  // FAQ data with comprehensive retail questions
  const faqs = [
    {
      question: "How quickly can I get my store up and running?",
      answer: "Most retailers are up and running within 24-48 hours. Our onboarding team provides personalized setup assistance, data migration support, and training sessions to ensure a smooth transition. We also offer a quick-start template that can have you operational in as little as 2 hours."
    },
    {
      question: "What kind of support do you offer for large retailers?",
      answer: "Enterprise clients receive dedicated account managers, 24/7 priority support with <15 minute response times, custom integration assistance, and quarterly business reviews. We also offer on-site training for your team and customized feature development based on your specific needs."
    },
    {
      question: "Can I integrate with my existing accounting software?",
      answer: "Yes! We offer seamless integrations with all major accounting platforms including QuickBooks, Xero, FreshBooks, and NetSuite. Our two-way sync ensures your financial data is always up-to-date across all systems. We also provide API access for custom integrations."
    },
    {
      question: "How does your pricing work for multi-location businesses?",
      answer: "We offer flexible pricing for multi-location retailers. Our enterprise plan includes unlimited locations with centralized management, consolidated reporting, and volume discounts. You can choose between monthly subscriptions or annual plans with significant savings."
    },
    {
      question: "What security measures do you have in place?",
      answer: "We implement bank-level security including end-to-end encryption, PCI DSS compliance, regular security audits, two-factor authentication, and role-based access control. Your data is backed up in real-time across multiple secure data centers."
    },
    {
      question: "Do you offer offline mode for stores with internet issues?",
      answer: "Yes! Our POS system works seamlessly offline, automatically syncing transactions once connectivity is restored. This ensures you never miss a sale, even during internet outages. All data is encrypted and stored locally until sync is possible."
    },
    {
      question: "Can I customize the platform for my specific retail niche?",
      answer: "Absolutely! Our platform is highly customizable for various retail verticals including fashion, electronics, groceries, furniture, and more. We offer custom fields, specialized reporting, and industry-specific features. Our API allows for unlimited customization possibilities."
    },
    {
      question: "What's your refund policy if I'm not satisfied?",
      answer: "We offer a 30-day money-back guarantee with no questions asked. If you're not completely satisfied with our platform within the first month, we'll provide a full refund. We also offer extended trial periods for enterprise clients to ensure the platform meets all their requirements."
    },
    {
      question: "Do you provide training for my staff?",
      answer: "Yes! We offer comprehensive training options including video tutorials, live webinars, documentation, and on-site training for enterprise clients. Our customer success team ensures your entire staff is comfortable with the platform before going live."
    },
    {
      question: "Can I migrate data from my current system?",
      answer: "Absolutely! Our data migration team will help you seamlessly transfer all your customer data, product information, and transaction history from your existing system. We support imports from all major retail platforms and can handle custom data formats."
    }
  ];

  // Navigation handler
  const navigateTo = (path: string) => {
    window.location.href = path;
  };

  // Toggle FAQ function
  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Zap className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">Trusted by 10,000+ retailers</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Complete Retail Solutions for{' '}
                <span className="text-yellow-300">Modern Business</span>
              </h1>
              
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto lg:mx-0">
                Transform your retail operations with our comprehensive suite of tools 
                designed to boost sales, streamline management, and delight customers.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <button 
                  onClick={() => navigateTo('/contact#contact-form')}
                  className="group bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 flex items-center justify-center"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => navigateTo('/services')}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300"
                >
                  Watch Demo
                </button>
              </div>
              
              <div className="flex flex-wrap items-center gap-6 justify-center lg:justify-start">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map((i) => (
                    <img
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-white"
                      src={`https://randomuser.me/api/portraits/${i % 2 ? 'women' : 'men'}/${i}.jpg`}
                      alt={`User ${i}`}
                    />
                  ))}
                </div>
                <div className="text-sm">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current text-yellow-400" />
                    ))}
                  </div>
                  <p className="opacity-80">4.9/5 from 2,500+ reviews</p>
                </div>
              </div>
            </div>
            
            {/* Right content - Dashboard preview */}
            <div className="hidden lg:block relative">
              <div 
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 cursor-pointer"
                onClick={() => navigateTo('/dashboard-preview')}
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-sm opacity-80">Total Sales</div>
                    <div className="text-2xl font-bold">$124.5K</div>
                    <div className="text-xs text-green-300">↑ 23%</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-sm opacity-80">Orders</div>
                    <div className="text-2xl font-bold">1,245</div>
                    <div className="text-xs text-green-300">↑ 12%</div>
                  </div>
                  <div className="col-span-2 bg-white/20 rounded-lg p-4">
                    <div className="text-sm opacity-80 mb-2">Top Products</div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Product A</span>
                        <span>345 units</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Product B</span>
                        <span>278 units</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 cursor-pointer"
                onClick={() => navigateTo(stat.path)}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                    <div className="text-blue-600">{stat.icon}</div>
                  </div>
                  <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                    {stat.trend}
                  </span>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-lg font-semibold text-gray-700 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-500">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Retail Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to run a successful retail business, from storefront to backend operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                onClick={() => navigateTo(`/services`)}
              >
                <div className={`text-${service.color}-600 mb-4 transform group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateTo(`/services`);
                  }}
                  className="mt-6 text-blue-600 font-semibold flex items-center group-hover:translate-x-2 transition-transform"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide the tools and support you need to succeed in today's competitive retail landscape
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="relative group cursor-pointer"
                onClick={() => navigateTo(benefit.path)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -m-1"></div>
                <div className="relative bg-white p-8 rounded-lg border border-gray-200 group-hover:border-transparent transition-all duration-300">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                    {benefit.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{benefit.description}</p>
                  <p className="text-xs font-semibold text-blue-600">{benefit.highlight}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     {/* Testimonials Section */}
<section className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    {/* Heading */}
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Trusted by Retailers Worldwide
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        See what our clients have to say about their experience with our platform
      </p>
    </div>

    {/* Testimonials Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {testimonials.map((testimonial, index) => (
        <div 
          key={index}
          className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300"
        >
          {/* Top Section */}
          <div className="flex items-center mb-5">
            <img 
              src={testimonial.image}
              alt={testimonial.name}
              className="w-14 h-14 rounded-full object-cover border-2 border-blue-500"
            />
            <div className="ml-4">
              <p className="font-semibold text-gray-900">
                {testimonial.name}
              </p>
              {/* <p className="text-sm text-gray-500">
                {testimonial.role}
              </p> */}
            </div>
          </div>

          {/* Rating */}
          <div className="flex gap-1 mb-3">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star 
                key={i} 
                className="w-4 h-4 fill-current text-yellow-400" 
              />
            ))}
          </div>

          {/* Content */}
          <p className="text-gray-600 text-sm italic leading-relaxed">
            "{testimonial.content}"
          </p>
        </div>
      ))}
    </div>

  </div>
</section>

      {/* FAQ Section with Accordion */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Got questions? We've got answers
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden hover:border-blue-300 transition-colors"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center bg-white hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 pr-8">{faq.question}</span>
                  {openFaqIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                
                {/* Answer section with conditional rendering */}
                {openFaqIndex === index && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          
        </div>
      </section>

      {/* CTA Section - Reduced padding and added margin bottom */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>
        
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Transform Your Retail Business?
          </h2>
          <p className="text-base md:text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            Join thousands of successful retailers who have already modernized their operations with our platform and seen an average 40% increase in efficiency.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
            <button 
              onClick={() => navigateTo('/contact#contact-form')}
              className="group bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 flex items-center justify-center text-sm md:text-base"
            >
              Start Free Trial
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => navigateTo('/contact-sales')}
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300 text-sm md:text-base"
            >
              Contact Sales
            </button>
          </div>
          
          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs md:text-sm">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default RetailServicesPage;