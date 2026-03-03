import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  Shield,
  Cloud,
  Cpu,
  Brain,
  Database,
  Briefcase,
  Building2,
  TrendingUp,
  CheckCircle,
  Search,
  Rocket,
  BarChart,
  Globe,
  Users,
  Target,
  HeadphonesIcon,
  Zap,
  ChevronRight,
  Star,
  Quote,
  Activity,
  GitBranch,
  HeartPulse,
  Landmark,
  Store,
  Factory,
  Stethoscope,
  GraduationCap,
  TruckIcon,
  DollarSign,
  PieChart,
  ExternalLink,
  Play,
  Code,
  List,
} from "lucide-react";

const DataAnalyticsPage = () => {
  const [activeService, setActiveService] = useState<string | null>(null);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Hero Stats
  const heroStats = [
    { value: "1.2B+", label: "Data Points Processed", icon: Database, color: "from-blue-400 to-cyan-400" },
    { value: "98.5%", label: "Prediction Accuracy", icon: Target, color: "from-blue-400 to-cyan-400" },
    { value: "250+", label: "Enterprise Clients", icon: Building2, color: "from-blue-400 to-cyan-400" },
    { value: "24/7", label: "Real-time Processing", icon: Activity, color: "from-blue-400 to-cyan-400" }
  ];

  // Analytics Services
  const analyticsServices = [
    {
      id: "descriptive-analytics",
      title: "Descriptive Analytics",
      description: "Understand what happened with historical data visualization and reporting.",
      icon: BarChart,
      color: "from-blue-500 to-cyan-500",
      features: [
        "Interactive Dashboards",
        "Automated Reports",
        "Data Visualization",
        "Historical Analysis"
      ],
      benefits: ["85% Faster Reporting", "Real-time Insights", "50+ Chart Types"]
    },
    {
      id: "diagnostic-analytics",
      title: "Diagnostic Analytics",
      description: "Discover why it happened with root cause analysis and pattern detection.",
      icon: Search,
      color: "from-blue-500 to-cyan-500",
      features: [
        "Root Cause Analysis",
        "Correlation Studies",
        "Pattern Detection",
        "Anomaly Detection"
      ],
      benefits: ["95% Issue Detection", "AI-Powered", "Multi-variable Analysis"]
    },
    {
      id: "predictive-analytics",
      title: "Predictive Analytics",
      description: "Forecast what will happen using ML algorithms and predictive modeling.",
      icon: TrendingUp,
      color: "from-blue-500 to-cyan-500",
      features: [
        "Sales Forecasting",
        "Customer Churn Prediction",
        "Demand Planning",
        "Risk Assessment"
      ],
      benefits: ["98% Accuracy", "Proactive Insights", "ML-Powered"]
    },
    {
      id: "prescriptive-analytics",
      title: "Prescriptive Analytics",
      description: "Get recommendations on what to do with optimization algorithms.",
      icon: Target,
      color: "from-blue-500 to-cyan-500",
      features: [
        "Optimization Models",
        "Decision Support",
        "Automated Actions",
        "Scenario Planning"
      ],
      benefits: ["3x Faster Decisions", "ROI Optimization", "What-if Analysis"]
    },
    {
      id: "real-time-analytics",
      title: "Real-time Analytics",
      description: "Process and analyze streaming data for immediate insights.",
      icon: Zap,
      color: "from-blue-500 to-cyan-500",
      features: [
        "Stream Processing",
        "Live Dashboards",
        "Event Detection",
        "Instant Alerts"
      ],
      benefits: ["<100ms Latency", "2M+ Events/sec", "99.99% Uptime"]
    },
    {
      id: "data-integration",
      title: "Data Integration",
      description: "Unify data from multiple sources for comprehensive analysis.",
      icon: GitBranch,
      color: "from-blue-500 to-cyan-500",
      features: [
        "ETL Pipelines",
        "API Integration",
        "Data Warehousing",
        "Cloud Connectivity"
      ],
      benefits: ["200+ Sources", "Real-time Sync", "Automated Workflows"]
    },
    {
      id: "business-intelligence",
      title: "Business Intelligence",
      description: "Transform data into actionable business insights.",
      icon: PieChart,
      color: "from-blue-500 to-cyan-500",
      features: [
        "Interactive Dashboards",
        "KPI Tracking",
        "Ad-hoc Analysis",
        "Mobile BI"
      ],
      benefits: ["Self-service", "Drag & Drop", "Custom Reports"]
    },
    {
      id: "data-engineering",
      title: "Data Engineering",
      description: "Build robust data infrastructure for analytics at scale.",
      icon: Database,
      color: "from-blue-500 to-cyan-500",
      features: [
        "Data Pipeline",
        "Data Modeling",
        "Data Quality",
        "Governance"
      ],
      benefits: ["Scalable", "Reliable", "Cost-optimized"]
    },
    {
      id: "mlops",
      title: "MLOps",
      description: "Deploy and manage machine learning models in production.",
      icon: Brain,
      color: "from-blue-500 to-cyan-500",
      features: [
        "Model Deployment",
        "Model Monitoring",
        "Version Control",
        "A/B Testing"
      ],
      benefits: ["Faster Deployment", "Model Governance", "Continuous Training"]
    }
  ];

  // Why Choose Us Features
  const whyChooseUs = [
    {
      title: "Advanced Analytics",
      description: "State-of-the-art ML algorithms and statistical models",
      icon: Brain,
      color: "from-blue-500 to-cyan-500",
      stats: "50+ Algorithms"
    },
    {
      title: "Enterprise Security",
      description: "Bank-grade encryption and data protection",
      icon: Shield,
      color: "from-blue-500 to-cyan-500",
      stats: "AES-256"
    },
    {
      title: "Scalable Infrastructure",
      description: "Cloud-native architecture that grows with you",
      icon: Cloud,
      color: "from-blue-500 to-cyan-500",
      stats: "Auto-scaling"
    },
    {
      title: "Real-time Processing",
      description: "Process millions of events per second",
      icon: Zap,
      color: "from-blue-500 to-cyan-500",
      stats: "<100ms"
    },
    {
      title: "Data Visualization",
      description: "Beautiful, interactive dashboards",
      icon: BarChart,
      color: "from-blue-500 to-cyan-500",
      stats: "50+ Charts"
    },
    {
      title: "Expert Support",
      description: "24/7 support from data scientists",
      icon: HeadphonesIcon,
      color: "from-blue-500 to-cyan-500",
      stats: "Always Available"
    }
  ];

  // Process Steps
  const processSteps = [
    {
      step: "01",
      title: "Data Discovery",
      description: "Identify data sources and define analytics goals",
      icon: Search,
      color: "from-blue-500 to-cyan-500",
      deliverables: ["Data Audit", "Requirements Doc", "Success Metrics"]
    },
    {
      step: "02",
      title: "Data Integration",
      description: "Connect and unify data from multiple sources",
      icon: GitBranch,
      color: "from-blue-500 to-cyan-500",
      deliverables: ["ETL Pipeline", "Data Warehouse", "Data Quality Checks"]
    },
    {
      step: "03",
      title: "Analysis & Modeling",
      description: "Apply ML algorithms to uncover insights",
      icon: Brain,
      color: "from-blue-500 to-cyan-500",
      deliverables: ["ML Models", "Insights Report", "Validation Results"]
    },
    {
      step: "04",
      title: "Visualization",
      description: "Create intuitive dashboards and reports",
      icon: PieChart,
      color: "from-blue-500 to-cyan-500",
      deliverables: ["Interactive Dashboards", "Automated Reports", "Alerts Setup"]
    },
    {
      step: "05",
      title: "Deployment",
      description: "Deploy analytics solutions to production",
      icon: Rocket,
      color: "from-blue-500 to-cyan-500",
      deliverables: ["Production Deployment", "API Access", "Documentation"]
    },
    {
      step: "06",
      title: "Optimization",
      description: "Continuous monitoring and model improvement",
      icon: Activity,
      color: "from-blue-500 to-cyan-500",
      deliverables: ["Performance Monitoring", "Model Retraining", "Optimization"]
    }
  ];

  // Industries Served
  const industries = [
    { name: "E-commerce", icon: Store, count: "45+ Projects", color: "from-blue-500 to-cyan-500" },
    { name: "Healthcare", icon: Stethoscope, count: "60+ Projects", color: "from-blue-500 to-cyan-500" },
    { name: "Finance", icon: Landmark, count: "35+ Projects", color: "from-blue-500 to-cyan-500" },
    { name: "Retail", icon: Store, count: "40+ Projects", color: "from-blue-500 to-cyan-500" },
    { name: "Manufacturing", icon: Factory, count: "80+ Projects", color: "from-blue-500 to-cyan-500" },
    { name: "Logistics", icon: TruckIcon, count: "25+ Projects", color: "from-blue-500 to-cyan-500" },
    { name: "Education", icon: GraduationCap, count: "30+ Projects", color: "from-blue-500 to-cyan-500" },
    { name: "Technology", icon: Cpu, count: "20+ Projects", color: "from-blue-500 to-cyan-500" }
  ];

  // Success Stories
  const successStories = [
    {
      company: "ShopEase",
      industry: "E-commerce",
      challenge: "High customer churn and poor inventory management",
      solution: "Predictive analytics for customer behavior and demand forecasting",
      results: [
        { metric: "Revenue", value: "+200%", icon: TrendingUp },
        { metric: "Churn", value: "-45%", icon: Users },
        { metric: "ROI", value: "350%", icon: Target }
      ],
      testimonial: {
        quote: "Predictive analytics transformed our business decisions.",
        author: "Sarah Chen, CEO"
      },
      color: "from-blue-500 to-cyan-500"
    },
    {
      company: "City Hospital",
      industry: "Healthcare",
      challenge: "High patient readmission rates",
      solution: "ML models for patient outcome prediction",
      results: [
        { metric: "Readmission", value: "-35%", icon: HeartPulse },
        { metric: "Efficiency", value: "+50%", icon: Activity },
        { metric: "Savings", value: "$5M", icon: DollarSign }
      ],
      testimonial: {
        quote: "Data analytics revolutionized our patient care.",
        author: "Dr. James Wilson"
      },
      color: "from-blue-500 to-cyan-500"
    },
    {
      company: "FinTech Corp",
      industry: "Finance",
      challenge: "Sophisticated fraud attempts",
      solution: "Real-time fraud detection system",
      results: [
        { metric: "Fraud", value: "-80%", icon: Shield },
        { metric: "Speed", value: "50ms", icon: Zap },
        { metric: "Accuracy", value: "99.9%", icon: CheckCircle }
      ],
      testimonial: {
        quote: "Real-time analytics saves us millions annually.",
        author: "Michael Chang, CTO"
      },
      color: "from-blue-500 to-cyan-500"
    }
  ];

  // Data Sources
  const dataSources = [
    { name: "SQL Databases", icon: Database, count: "50+", color: "from-blue-500 to-cyan-500" },
    { name: "Cloud Storage", icon: Cloud, count: "10+", color: "from-blue-500 to-cyan-500" },
    { name: "APIs", icon: Globe, count: "100+", color: "from-blue-500 to-cyan-500" },
    { name: "IoT Devices", icon: Cpu, count: "1M+", color: "from-blue-500 to-cyan-500" },
    { name: "Social Media", icon: Users, count: "20+", color: "from-blue-500 to-cyan-500" },
    { name: "CRM Systems", icon: Briefcase, count: "15+", color: "from-blue-500 to-cyan-500" }
  ];

  // NEW SECTION: Client Testimonials Grid
  const clientTestimonials = [
    {
      name: "Sarah Johnson",
      // role: "CTO, TechCorp Inc.",
      content: "The team transformed our entire data infrastructure. Their expertise in predictive analytics saved us 40% in operational costs.",
      rating: 5,
      initials: "SJ",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Michael Chen",
      // role: "CEO, InnovateLabs",
      content: "Outstanding analytics services. They helped us build a scalable data architecture that grew with our business.",
      rating: 5,
      initials: "MC",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Emily Rodriguez",
      // role: "Director, Global Finance",
      content: "Their real-time analytics expertise is unmatched. We now have enterprise-grade insights with full compliance.",
      rating: 5,
      initials: "ER",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "David Kim",
      // role: "Head of Data, RetailMax",
      content: "Implemented machine learning models that increased our sales predictions accuracy by 98%. Game-changing results.",
      rating: 5,
      initials: "DK",
      color: "from-blue-500 to-cyan-500"
    }
  ];

  // NEW SECTION: Analytics Tools & Technologies
  const analyticsTools = [
    { name: "Python", icon: Code, level: "Expert", color: "from-blue-500 to-cyan-500" },
    { name: "R", icon: Code, level: "Expert", color: "from-blue-500 to-cyan-500" },
    { name: "SQL", icon: Database, level: "Expert", color: "from-blue-500 to-cyan-500" },
    { name: "Tableau", icon: BarChart, level: "Advanced", color: "from-blue-500 to-cyan-500" },
    { name: "Power BI", icon: PieChart, level: "Advanced", color: "from-blue-500 to-cyan-500" },
    { name: "TensorFlow", icon: Brain, level: "Expert", color: "from-blue-500 to-cyan-500" },
    { name: "PyTorch", icon: Brain, level: "Advanced", color: "from-blue-500 to-cyan-500" },
    { name: "Spark", icon: Zap, level: "Expert", color: "from-blue-500 to-cyan-500" },
    { name: "Hadoop", icon: Database, level: "Advanced", color: "from-blue-500 to-cyan-500" },
    { name: "Kafka", icon: GitBranch, level: "Advanced", color: "from-blue-500 to-cyan-500" },
    { name: "AWS", icon: Cloud, level: "Expert", color: "from-blue-500 to-cyan-500" },
    { name: "Azure", icon: Cloud, level: "Advanced", color: "from-blue-500 to-cyan-500" }
  ];

  // NEW SECTION: ROI Calculator
  const [roiInputs, setRoiInputs] = useState({
    employees: 50,
    dataSources: 5,
    monthlyRevenue: 100000
  });

  const calculateROI = () => {
    const efficiencyGain = roiInputs.employees * 50000;
    const revenueIncrease = roiInputs.monthlyRevenue * 12 * 0.15;
    const costSavings = roiInputs.dataSources * 200000;
    return {
      total: efficiencyGain + revenueIncrease + costSavings,
      efficiency: efficiencyGain,
      revenue: revenueIncrease,
      costs: costSavings
    };
  };

  const roi = calculateROI();

  // FAQ Data
  const faqs = [
    {
      question: "What types of data can you analyze?",
      answer: "We can analyze any structured or unstructured data including transactional data, customer behavior, IoT sensor data, social media feeds, server logs, and more."
    },
    {
      question: "How accurate are your predictive models?",
      answer: "Our predictive models typically achieve 85-98% accuracy depending on the use case and data quality. We continuously monitor and retrain models to maintain high accuracy."
    },
    {
      question: "How long does it take to implement?",
      answer: "Basic dashboards take 4-6 weeks, while full enterprise analytics solutions typically take 3-6 months depending on complexity and data sources."
    },
    {
      question: "Do you provide API access?",
      answer: "Yes, we provide comprehensive REST APIs with detailed documentation for integrating our analytics into your existing applications."
    },
    {
      question: "How do you ensure data security?",
      answer: "We implement AES-256 encryption, role-based access control, audit logging, and comply with GDPR, HIPAA, and other regulations."
    },
    {
      question: "Can you integrate with our existing tools?",
      answer: "Yes, we integrate with 200+ data sources including CRM, ERP, marketing tools like Salesforce, HubSpot, SAP, and custom applications."
    }
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900">
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left Content */}
            <div className="text-white">
              {/* Animated Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-4 py-2 mb-6 animate-pulse">
                <Sparkles className="w-4 h-4 text-blue-300" />
                <span className="text-sm font-medium">AI-Powered Data Analytics</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Transform Your{' '}
                <span className="relative">
                  <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-300">
                    Data
                  </span>
                </span>{' '}
                into{' '}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-300">
                  Business Intelligence
                </span>
              </h1>

              {/* Description */}
              <p className="text-base md:text-lg text-gray-200 mb-8 leading-relaxed max-w-xl">
                Unlock the power of your data with advanced analytics. Get real-time insights, 
                predict future trends, and make data-driven decisions.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-6 md:px-8 py-5 md:py-6 shadow-2xl text-sm md:text-base group"
                >
                  <Link to="/contact">
                    Start Analyzing
                    <ArrowRight className="ml-2 w-4 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-6 md:px-8 py-5 md:py-6 text-sm md:text-base"
                >
                  <Link to="/contact#contact-form">
                    <Play className="mr-2 w-4 h-5" />
                    Watch Demo
                  </Link>
                </Button>
              </div>

              {/* Stats with Icons */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {heroStats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="group">
                      <div className="flex items-center gap-1 md:gap-2 mb-1">
                        <Icon className="w-4 h-5 text-blue-300" />
                        <div className={`text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                          {stat.value}
                        </div>
                      </div>
                      <div className="text-xs md:text-sm text-gray-300">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Content - Analytics Card */}
            <div className="relative mt-8 lg:mt-0">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-white/20 shadow-2xl">
                <div className="flex items-center justify-between mb-4 md:mb-6">
                  <h3 className="text-lg md:text-xl font-bold text-white">Live Analytics Demo</h3>
                  <div className="flex gap-2">
                    <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-gray-300">Live Data</span>
                  </div>
                </div>

                {/* Chart Visualization */}
                <div className="space-y-4 mb-4 md:mb-6">
                  <div className="h-24 md:h-32 flex items-end gap-1 md:gap-2">
                    {[45, 70, 35, 85, 55, 95, 65].map((height, i) => (
                      <div key={i} className="flex-1 group">
                        <div 
                          className="w-full bg-gradient-to-t from-blue-400 to-cyan-400 rounded-t-lg transition-all duration-300 group-hover:from-blue-500 group-hover:to-cyan-500"
                          style={{ height: `${height}%` }}
                        ></div>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between text-xs text-white/60">
                    <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6">
                  <div className="bg-white/5 rounded-xl p-3 md:p-4">
                    <div className="text-white/60 text-xs">Active Users</div>
                    <div className="text-lg md:text-xl font-bold text-white">24.5K</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-3 md:p-4">
                    <div className="text-white/60 text-xs">Revenue</div>
                    <div className="text-lg md:text-xl font-bold text-white">₹4.2L</div>
                  </div>
                </div>

                <Button asChild className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-4 md:py-5 text-sm md:text-base">
                  <Link to="/contact#contact-form">
                    Try Interactive Demo
                    <ExternalLink className="ml-2 w-4 h-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ANALYTICS SERVICES SECTION ================= */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 font-semibold text-sm uppercase tracking-wider">
              Analytics Services
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-4">
              Comprehensive{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600">
                Data Analytics
              </span>
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              From descriptive to prescriptive analytics, we've got you covered
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {analyticsServices.map((service, index) => {
              const Icon = service.icon;
              const isExpanded = activeService === service.id;
              
              return (
                <div
                  key={index}
                  className="group bg-white rounded-xl border border-gray-200 hover:border-transparent hover:shadow-xl transition-all duration-300 overflow-hidden"
                  onMouseEnter={() => setActiveService(service.id)}
                  onMouseLeave={() => setActiveService(null)}
                >
                  {/* Header with Gradient */}
                  <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                  
                  <div className="p-5 md:p-6">
                    {/* Icon and Title */}
                    <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
                      <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center text-white shadow-lg flex-shrink-0`}>
                        <Icon className="w-6 h-6 md:w-7 md:h-7" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1">{service.title}</h3>
                        <p className="text-xs md:text-sm text-gray-500 line-clamp-2">{service.description}</p>
                      </div>
                    </div>

                    {/* Features - Expand on Hover */}
                    <div className={`space-y-2 md:space-y-3 overflow-hidden transition-all duration-300 ${
                      isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="pt-2 md:pt-3 border-t border-gray-100">
                        <p className="text-xs font-semibold text-gray-500 uppercase mb-1 md:mb-2">Features</p>
                        {service.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs md:text-sm text-gray-600 mb-1 md:mb-2">
                            <CheckCircle className={`w-3 h-4 text-blue-500 flex-shrink-0`} />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div>
                        <p className="text-xs font-semibold text-gray-500 uppercase mb-1 md:mb-2">Key Benefits</p>
                        <div className="flex flex-wrap gap-1 md:gap-2">
                          {service.benefits.map((benefit, i) => (
                            <span key={i} className={`px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium`}>
                              {benefit}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Always visible CTA */}
                    <div className="mt-3 md:mt-4 flex items-center justify-between">
                      <Link 
                        to={`/services/${service.id}`}
                        className={`text-xs md:text-sm font-medium inline-flex items-center group/link text-blue-600 hover:text-blue-700`}
                      >
                        Learn More
                        <ChevronRight className="ml-1 w-3 h-4 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                      {!isExpanded && (
                        <span className="text-xs text-gray-400">Hover for details</span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 font-semibold text-sm uppercase tracking-wider">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-4">
              The{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600">
                Analytics
              </span>{' '}
              Advantage
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-xl p-5 md:p-6 border border-gray-200 hover:border-transparent hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
                  
                  <div className="relative">
                    <div className="flex items-start justify-between mb-3 md:mb-4">
                      <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center text-white shadow-lg`}>
                        <Icon className="w-6 h-6 md:w-7 md:h-7" />
                      </div>
                      <span className={`px-2 md:px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-bold`}>
                        {item.stats}
                      </span>
                    </div>

                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1 md:mb-2">{item.title}</h3>
                    <p className="text-xs md:text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= DATA SOURCES ================= */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 font-semibold text-sm uppercase tracking-wider">
              Data Sources
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-4">
              Connect to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600">
                Any Data Source
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
            {dataSources.map((source, index) => {
              const Icon = source.icon;
              return (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 md:p-5 lg:p-6 border border-gray-200 hover:border-transparent hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className={`w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 mx-auto rounded-xl bg-gradient-to-r ${source.color} flex items-center justify-center text-white mb-2 md:mb-3 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
                  </div>
                  <h3 className="text-sm md:text-base lg:text-lg font-bold text-gray-900 mb-1">{source.name}</h3>
                  <p className="text-xs text-gray-500">{source.count} Connectors</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= PROCESS SECTION ================= */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 font-semibold text-sm uppercase tracking-wider">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-4">
              From Data to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600">
                Insights
              </span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white rounded-xl p-5 md:p-6 border border-gray-200 hover:border-transparent hover:shadow-xl transition-all duration-300"
                >
                  <div className={`absolute top-0 right-0 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r ${step.color} opacity-10 rounded-bl-3xl`}></div>
                  
                  <div className="relative">
                    <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                      <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold shadow-lg text-sm md:text-base`}>
                        {step.step}
                      </div>
                      <Icon className={`w-5 h-5 md:w-6 md:h-6 text-blue-500`} />
                    </div>

                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1 md:mb-2">{step.title}</h3>
                    <p className="text-xs md:text-sm text-gray-600 mb-3 md:mb-4">{step.description}</p>

                    <div className="space-y-1 md:space-y-2">
                      {step.deliverables.map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-gray-500">
                          <CheckCircle className="w-3 h-4 text-green-500 flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= INDUSTRIES SECTION ================= */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 font-semibold text-sm uppercase tracking-wider">
              Industries
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-4">
              Analytics for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600">
                Every Industry
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-xl p-4 md:p-5 lg:p-6 border border-gray-200 hover:border-transparent hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className={`w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 mx-auto rounded-xl bg-gradient-to-r ${industry.color} flex items-center justify-center text-white mb-2 md:mb-3 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
                  </div>
                  <h3 className="text-sm md:text-base lg:text-lg font-bold text-gray-900 mb-1">{industry.name}</h3>
                  <p className="text-xs text-gray-500">{industry.count}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= SUCCESS STORIES ================= */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 font-semibold text-sm uppercase tracking-wider">
              Success Stories
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-4">
              Real Results for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600">
                Real Businesses
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {successStories.map((story, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-transparent hover:shadow-xl transition-all duration-300"
              >
                <div className={`h-2 bg-gradient-to-r ${story.color}`}></div>
                
                <div className="p-5 md:p-6">
                  <div className="flex items-center gap-3 mb-3 md:mb-4">
                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-r ${story.color} flex items-center justify-center text-white font-bold text-base md:text-lg flex-shrink-0`}>
                      {story.company[0]}
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-bold text-gray-900">{story.company}</h3>
                      <span className="text-xs text-gray-500">{story.industry}</span>
                    </div>
                  </div>

                  <div className="space-y-2 mb-3 md:mb-4">
                    <p className="text-xs md:text-sm text-gray-600">
                      <span className="font-semibold">Challenge:</span> {story.challenge}
                    </p>
                    <p className="text-xs md:text-sm text-gray-600">
                      <span className="font-semibold">Solution:</span> {story.solution}
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-1 md:gap-2 mb-3 md:mb-4">
                    {story.results.map((result, i) => {
                      const ResultIcon = result.icon;
                      return (
                        <div key={i} className="text-center">
                          <ResultIcon className={`w-3 h-4 mx-auto mb-1 text-blue-500`} />
                          <div className="text-xs md:text-sm font-bold text-gray-900">{result.value}</div>
                          <div className="text-xs text-gray-500">{result.metric}</div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="border-t border-gray-200 pt-3 md:pt-4">
                    <Quote className={`w-6 h-6 md:w-8 md:h-8 text-blue-200 mb-1 md:mb-2`} />
                    <p className="text-xs md:text-sm text-gray-600 italic mb-1 md:mb-2">"{story.testimonial.quote}"</p>
                    <p className="text-xs font-semibold text-gray-900">{story.testimonial.author}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ANALYTICS TOOLS SECTION (NEW) ================= */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 font-semibold text-sm uppercase tracking-wider">
              Tech Stack
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-4">
              Analytics{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600">
                Tools & Technologies
              </span>
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              We use the latest tools to deliver cutting-edge analytics solutions
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 md:gap-4">
            {analyticsTools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-gray-50 to-white rounded-xl p-3 md:p-4 border border-gray-200 hover:border-transparent hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className={`w-10 h-10 md:w-12 md:h-12 mx-auto rounded-xl bg-gradient-to-r ${tool.color} flex items-center justify-center text-white mb-2 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <h3 className="text-xs md:text-sm font-bold text-gray-900 mb-1">{tool.name}</h3>
                  <span className="text-xs text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                    {tool.level}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= CLIENT TESTIMONIALS SECTION (NEW) ================= */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 font-semibold text-sm uppercase tracking-wider">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-4">
              What Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600">
                Clients Say
              </span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {clientTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl p-5 md:p-6 border border-gray-200 hover:border-transparent hover:shadow-xl transition-all duration-300 relative"
              >
                <Quote className="absolute top-3 md:top-4 right-3 md:right-4 text-blue-100" size={32} />
                
                <div className="flex items-center gap-3 mb-3 md:mb-4">
                  <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-r ${testimonial.color} flex items-center justify-center text-white font-bold text-base md:text-lg flex-shrink-0`}>
                    {testimonial.initials}
                  </div>
                  <div>
                    <h4 className="text-sm md:text-base font-bold text-gray-900">{testimonial.name}</h4>
                    {/* <p className="text-xs text-gray-500">{testimonial.role}</p> */}
                  </div>
                </div>

                <p className="text-xs md:text-sm text-gray-600 mb-3 md:mb-4">"{testimonial.content}"</p>

                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={12} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ROI CALCULATOR SECTION (NEW) ================= */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <div>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 font-semibold text-sm uppercase tracking-wider">
                ROI Calculator
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-4">
                Calculate Your{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600">
                  Potential Savings
                </span>
              </h2>
              <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8">
                See how much you can save with our analytics solutions
              </p>

              <div className="space-y-4 md:space-y-5">
                <div>
                  <div className="flex justify-between mb-1 md:mb-2">
                    <label className="text-xs md:text-sm font-medium text-gray-700">Employees</label>
                    <span className="text-xs md:text-sm font-bold text-blue-600">{roiInputs.employees}</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="500"
                    value={roiInputs.employees}
                    onChange={(e) => setRoiInputs({...roiInputs, employees: parseInt(e.target.value)})}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                </div>

                <div>
                  <div className="flex justify-between mb-1 md:mb-2">
                    <label className="text-xs md:text-sm font-medium text-gray-700">Data Sources</label>
                    <span className="text-xs md:text-sm font-bold text-blue-600">{roiInputs.dataSources}</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="50"
                    value={roiInputs.dataSources}
                    onChange={(e) => setRoiInputs({...roiInputs, dataSources: parseInt(e.target.value)})}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                </div>

                <div>
                  <div className="flex justify-between mb-1 md:mb-2">
                    <label className="text-xs md:text-sm font-medium text-gray-700">Monthly Revenue</label>
                    <span className="text-xs md:text-sm font-bold text-blue-600">₹{roiInputs.monthlyRevenue.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="50000"
                    max="10000000"
                    step="50000"
                    value={roiInputs.monthlyRevenue}
                    onChange={(e) => setRoiInputs({...roiInputs, monthlyRevenue: parseInt(e.target.value)})}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                </div>
              </div>
            </div>

            {/* Right Content - Results */}
            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-6 md:p-8 text-white">
              <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-5">Your Estimated Annual Savings</h3>
              
              <div className="space-y-2 md:space-y-3 mb-4 md:mb-5">
                <div className="flex justify-between items-center pb-1 md:pb-2 border-b border-white/20">
                  <span className="text-sm md:text-base">Efficiency Gains</span>
                  <span className="font-bold text-base md:text-lg">₹{(roi.efficiency / 100000).toFixed(1)}L</span>
                </div>
                <div className="flex justify-between items-center pb-1 md:pb-2 border-b border-white/20">
                  <span className="text-sm md:text-base">Revenue Increase</span>
                  <span className="font-bold text-base md:text-lg">₹{(roi.revenue / 100000).toFixed(1)}L</span>
                </div>
                <div className="flex justify-between items-center pb-1 md:pb-2 border-b border-white/20">
                  <span className="text-sm md:text-base">Cost Savings</span>
                  <span className="font-bold text-base md:text-lg">₹{(roi.costs / 100000).toFixed(1)}L</span>
                </div>
              </div>

              <div className="text-center">
                <div className="text-xs md:text-sm opacity-80 mb-1 md:mb-2">Total Potential Savings</div>
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold">₹{(roi.total / 100000).toFixed(1)}L</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 font-semibold text-sm uppercase tracking-wider">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-4">
              Frequently Asked{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600">
                Questions
              </span>
            </h2>
          </div>

          <div className="space-y-3 md:space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden hover:border-blue-200 transition-colors bg-white"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full px-4 md:px-6 py-3 md:py-4 text-left flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
                >
                  <span className="text-sm md:text-base font-semibold text-gray-900">{faq.question}</span>
                  <ChevronRight
                    className={`w-4 h-4 md:w-5 md:h-5 text-gray-500 transition-transform flex-shrink-0 ${
                      activeFaq === index ? 'rotate-90' : ''
                    }`}
                  />
                </button>
                
                <div
                  className={`px-4 md:px-6 overflow-hidden transition-all duration-300 ${
                    activeFaq === index ? 'py-3 md:py-4 max-h-40' : 'max-h-0'
                  }`}
                >
                  <p className="text-xs md:text-sm text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="relative py-16 md:py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600"></div>
        
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-white rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-white rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6">
            Ready to Unlock Your Data?
          </h2>
          <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 lg:mb-10 text-blue-100 max-w-2xl mx-auto px-4">
            Join 250+ companies already using our analytics to drive growth
          </p>
          <div className="flex flex-wrap gap-3 md:gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 text-sm md:text-base px-4 md:px-6 py-4 md:py-5">
              <Link to="/contact#contact-form">
                Start Free Trial
                <ArrowRight className="ml-2 w-4 h-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-sm md:text-base px-4 md:px-6 py-4 md:py-5">
              <Link to="/services">View Case Studies</Link>
            </Button>
          </div>
          <p className="mt-4 md:mt-6 lg:mt-8 text-xs md:text-sm text-blue-200">
            No credit card required · 14-day free trial · Cancel anytime
          </p>
        </div>
      </section>

      {/* Bottom padding for external footer */}
      <div className="pb-8 md:pb-12 lg:pb-16"></div>

      {/* Custom Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default DataAnalyticsPage;