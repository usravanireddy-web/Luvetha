import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

import heroBanner from "@/assets/dataservices.png";
import heroImage from "@/assets/dataser.png"; // 


import {
  BarChart3,
  Database,
  ShieldCheck,
  TrendingUp,
  Cloud,
  Layers,
  ArrowRight,
  Zap,
  Target,
  Globe,
  PieChart,
  Activity,
  Code,
  Brain,
  Rocket,
  CheckCircle,
  Award,
  Clock,
  Sparkles,
  Workflow,
  ShoppingCart,
  GitBranch,
  DatabaseZap,
  CloudLightning,
  PlayCircle,
  Star,
  Building,
  Factory,
} from "lucide-react";

/* ================= TYPES ================= */
interface Service {
  title: string;
  desc: string;
  icon: JSX.Element;
  features: string[];
}

interface Step {
  title: string;
  desc: string;
  icon: JSX.Element;
}

interface Industry {
  name: string;
  desc: string;
  icon: JSX.Element;
}

interface CaseStudy {
  title: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
}

/* ================= CORE SERVICES ================= */
const coreServices: Service[] = [
  {
    title: "Advanced Analytics & AI",
    desc: "Leverage machine learning and predictive analytics to uncover hidden patterns.",
    icon: <Brain className="w-8 h-8 md:w-12 md:h-12" />,
    features: [
      "Predictive Modeling",
      "Machine Learning Pipelines",
      "AI-Driven Insights",
      "Real-time Analytics",
    ],
  },
  {
    title: "Business Intelligence",
    desc: "Interactive dashboards and KPI tracking for business visibility.",
    icon: <PieChart className="w-8 h-8 md:w-12 md:h-12" />,
    features: [
      "Executive Dashboards",
      "KPI Scorecards",
      "Interactive Reports",
      "Self-Service Analytics",
    ],
  },
  {
    title: "Data Engineering",
    desc: "End-to-end data pipeline development with modern architectures.",
    icon: <Workflow className="w-8 h-8 md:w-12 md:h-12" />,
    features: [
      "Data Pipeline Architecture",
      "Real-time Streaming",
      "Data Warehouse Design",
      "Data Quality Management",
    ],
  },
  {
    title: "Cloud Data Migration",
    desc: "Seamless migration to cloud platforms with minimal downtime.",
    icon: <CloudLightning className="w-8 h-8 md:w-12 md:h-12" />,
    features: [
      "Cloud Strategy Planning",
      "Migration Automation",
      "Cost Optimization",
      "Performance Tuning",
    ],
  },
  {
    title: "Data Governance",
    desc: "Comprehensive data governance ensuring compliance and security.",
    icon: <ShieldCheck className="w-8 h-8 md:w-12 md:h-12" />,
    features: [
      "Data Security & Privacy",
      "Regulatory Compliance",
      "Master Data Management",
      "Data Cataloging",
    ],
  },
  {
    title: "Real-time Analytics",
    desc: "Streaming analytics for immediate insights and decisions.",
    icon: <Activity className="w-8 h-8 md:w-12 md:h-12" />,
    features: [
      "Stream Processing",
      "Event-driven Architecture",
      "Real-time Dashboards",
      "Alerting Systems",
    ],
  },
];

/* ================= PROCESS ================= */
const processSteps: Step[] = [
  {
    title: "Discovery & Assessment",
    desc: "Analyze data landscape and business objectives.",
    icon: <Target className="w-8 h-8 md:w-10 md:h-10" />,
  },
  {
    title: "Strategy & Architecture",
    desc: "Design scalable data architectures.",
    icon: <Layers className="w-8 h-8 md:w-10 md:h-10" />,
  },
  {
    title: "Implementation",
    desc: "Develop data pipelines and analytics solutions.",
    icon: <Code className="w-8 h-8 md:w-10 md:h-10" />,
  },
  {
    title: "Optimization & Scale",
    desc: "Monitor performance and scale as business grows.",
    icon: <TrendingUp className="w-8 h-8 md:w-10 md:h-10" />,
  },
];

/* ================= INDUSTRIES ================= */
const industries: Industry[] = [
  {
    name: "Healthcare & Life Sciences",
    desc: "Patient analytics and clinical research",
    icon: <Activity className="w-8 h-8 md:w-10 md:h-10" />,
  },
  {
    name: "Financial Services",
    desc: "Risk analysis and fraud detection",
    icon: <TrendingUp className="w-8 h-8 md:w-10 md:h-10" />,
  },
  {
    name: "Retail & E-commerce",
    desc: "Customer analytics and sales forecasting",
    icon: <ShoppingCart className="w-8 h-8 md:w-10 md:h-10" />,
  },
  {
    name: "Manufacturing",
    desc: "IoT analytics and supply chain optimization",
    icon: <Factory className="w-8 h-8 md:w-10 md:h-10" />,
  },
  {
    name: "Technology & SaaS",
    desc: "Product analytics and growth metrics",
    icon: <Cloud className="w-8 h-8 md:w-10 md:h-10" />,
  },
  {
    name: "Government",
    desc: "Citizen services and policy analytics",
    icon: <Building className="w-8 h-8 md:w-10 md:h-10" />,
  },
];

/* ================= CASE STUDIES ================= */
const caseStudies: CaseStudy[] = [
  {
    title: "Retail Chain Optimization",
    industry: "Retail",
    challenge: "Fragmented sales data across 200+ stores",
    solution: "Centralized data warehouse with real-time dashboards",
    results: [
      "25% reduction in stockouts",
      "18% increase in sales",
      "30% faster reporting",
    ],
  },
  {
    title: "Healthcare Analytics Platform",
    industry: "Healthcare",
    challenge: "Inability to analyze patient outcomes",
    solution: "Integrated platform with AI-powered predictive models",
    results: [
      "40% improvement in predictions",
      "22% reduced readmission rates",
      "Real-time dashboards",
    ],
  },
];

/* ================= TOOLS ================= */
const tools = [
  { name: "Power BI", icon: <BarChart3 className="w-5 h-5 md:w-7 md:h-7" />, category: "Viz" },
  { name: "Tableau", icon: <PieChart className="w-5 h-5 md:w-7 md:h-7" />, category: "Viz" },
  { name: "Snowflake", icon: <DatabaseZap className="w-5 h-5 md:w-7 md:h-7" />, category: "Warehouse" },
  { name: "Azure", icon: <Cloud className="w-5 h-5 md:w-7 md:h-7" />, category: "Cloud" },
  { name: "AWS", icon: <Database className="w-5 h-5 md:w-7 md:h-7" />, category: "Cloud" },
  { name: "Python", icon: <Code className="w-5 h-5 md:w-7 md:h-7" />, category: "Code" },
  { name: "Spark", icon: <Zap className="w-5 h-5 md:w-7 md:h-7" />, category: "Processing" },
  { name: "dbt", icon: <Workflow className="w-5 h-5 md:w-7 md:h-7" />, category: "Transform" },
  { name: "Kafka", icon: <Activity className="w-5 h-5 md:w-7 md:h-7" />, category: "Streaming" },
  { name: "TensorFlow", icon: <Brain className="w-5 h-5 md:w-7 md:h-7" />, category: "AI/ML" },
  { name: "Git", icon: <GitBranch className="w-5 h-5 md:w-7 md:h-7" />, category: "DevOps" },
];

/* ================= BENEFITS ================= */
const benefits = [
  {
    title: "Increased Revenue",
    desc: "20-30% higher revenue growth",
    icon: <TrendingUp className="w-8 h-8 md:w-10 md:h-10" />,
  },
  {
    title: "Cost Reduction",
    desc: "15-25% cost optimization",
    icon: <Zap className="w-8 h-8 md:w-10 md:h-10" />,
  },
  {
    title: "Faster Decisions",
    desc: "60% faster decision making",
    icon: <Clock className="w-8 h-8 md:w-10 md:h-10" />,
  },
  {
    title: "Competitive Edge",
    desc: "Strategic advantage through analytics",
    icon: <Award className="w-8 h-8 md:w-10 md:h-10" />,
  },
];

/* ================= COMPONENT ================= */
const DataServices: React.FC = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">

      {/* ================= HERO ================= */}
      <section className="relative w-full overflow-hidden pt-0">
        <img
          src={heroImage}
          alt="Data Services"
          className="w-full h-[60vh] sm:h-[70vh] md:h-[80vh] object-cover object-center"
        />

        <div className="absolute inset-0 flex items-start md:items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 md:pt-0 w-full">
            <div
              className="max-w-3xl text-white"
              style={{ textShadow: "0 2px 14px rgba(0,0,0,0.65)" }}
            >
              <div className="inline-flex items-center gap-2 bg-black/40 rounded-full px-3 py-1.5 md:px-4 md:py-2 mb-3 md:mb-4">
                <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
                <span className="text-xs md:text-sm font-medium">
                  Transforming Data Into Business Value
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 md:mb-4 leading-tight">
                Data Services That Drive{" "}
                <span className="text-sky-300">Digital Transformation</span>
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-gray-100 mb-4 md:mb-6 leading-relaxed max-w-2xl">
                We architect, build, and optimize data ecosystems that empower organizations
                to make smarter decisions and accelerate growth.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <Button
                  asChild
                  size="default"
                  className="bg-sky-500 hover:bg-sky-600 text-white px-4 sm:px-6 md:px-8 py-2.5 md:py-5 text-sm md:text-base w-full sm:w-auto"
                >
                  <Link to="/contact">
                    Start Your Journey <ArrowRight className="ml-1.5 md:ml-2 w-4 h-4 md:w-5 md:h-5" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="default"
                  className="border-white text-white hover:bg-white/10 px-4 sm:px-6 md:px-8 py-2.5 md:py-5 text-sm md:text-base w-full sm:w-auto"
                >
                  <Link to="/contact">
                    View Case Studies
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="relative -mt-8 sm:-mt-10 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
            {[
              { label: "Projects", value: "500+", icon: <Database className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" /> },
              { label: "Dashboards", value: "850+", icon: <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" /> },
              { label: "Industries", value: "20+", icon: <Globe className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" /> },
              { label: "Satisfaction", value: "98%", icon: <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" /> },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                  <div className="bg-sky-100 p-1.5 sm:p-2 md:p-3 rounded-lg">
                    <div className="text-sky-600">{item.icon}</div>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">{item.value}</h3>
                    <p className="text-xs sm:text-sm text-gray-600">{item.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BENEFITS ================= */}
      <section className="py-10 sm:py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-4">
              Why Choose Our <span className="text-sky-600">Data Expertise?</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Technical expertise with business acumen for measurable impact.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
            {benefits.map((benefit, i) => (
              <div
                key={i}
                className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 border border-gray-200 hover:border-sky-200 hover:shadow-lg transition-all"
              >
                <div className="bg-sky-100 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 sm:mb-3 md:mb-4">
                  <div className="text-sky-600">{benefit.icon}</div>
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-bold mb-1 sm:mb-2">{benefit.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-10 sm:py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-4">
              End-to-End <span className="text-sky-600">Data Solutions</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Complete services covering every aspect of your data journey.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {coreServices.map((service, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 border border-gray-200 hover:border-sky-200 hover:shadow-lg transition-all"
              >
                <div className="mb-3 sm:mb-4 md:mb-5">
                  <div className="bg-sky-100 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl flex items-center justify-center">
                    <div className="text-sky-600">{service.icon}</div>
                  </div>
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3">{service.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">{service.desc}</p>
                <ul className="space-y-1.5 sm:space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 sm:gap-3">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= INDUSTRIES ================= */}
      <section className="py-10 sm:py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-4">
              Industries We <span className="text-sky-600">Transform</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Tailored solutions for diverse industry challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
            {industries.map((industry, i) => (
              <div
                key={i}
                className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-sky-100 p-2 sm:p-2.5 md:p-3 rounded-lg flex-shrink-0">
                    <div className="text-sky-600">{industry.icon}</div>
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base md:text-lg font-bold mb-0.5 sm:mb-1">{industry.name}</h3>
                    <p className="text-xs sm:text-sm text-gray-600">{industry.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="py-10 sm:py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-4">
              Our <span className="text-sky-600">Implementation Process</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Structured approach ensuring success at every stage.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
            {processSteps.map((step, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 text-center"
              >
                <div className="mb-3 sm:mb-4">
                  <div className="bg-sky-100 w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto">
                    <div className="text-sky-600">{step.icon}</div>
                  </div>
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-bold mb-1 sm:mb-2">{step.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CASE STUDIES ================= */}
      <section className="py-10 sm:py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-4">
              Success <span className="text-sky-600">Stories</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Real-world examples of business transformation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
            {caseStudies.map((study, i) => (
              <div
                key={i}
                className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 border border-gray-200"
              >
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="bg-sky-100 text-sky-600 px-2.5 sm:px-3 md:px-4 py-1 rounded-full text-xs sm:text-sm font-medium">
                    {study.industry}
                  </div>
                  <div className="text-xs text-gray-500">Case Study</div>
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4">{study.title}</h3>
                <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-5">
                  <div>
                    <h4 className="font-semibold text-sm text-gray-700 mb-0.5 sm:mb-1">Challenge</h4>
                    <p className="text-xs sm:text-sm text-gray-600">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-gray-700 mb-0.5 sm:mb-1">Solution</h4>
                    <p className="text-xs sm:text-sm text-gray-600">{study.solution}</p>
                  </div>
                </div>
                <div className="bg-sky-50 rounded-lg p-3 sm:p-4 md:p-5">
                  <h4 className="font-bold text-sm sm:text-base text-gray-900 mb-2 sm:mb-3">Results</h4>
                  <ul className="space-y-1.5 sm:space-y-2">
                    {study.results.map((result, idx) => (
                      <li key={idx} className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-gray-700">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TECHNOLOGY ================= */}
      <section className="py-10 sm:py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-4">
              Our Technology <span className="text-sky-600">Stack</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Industry-leading tools for robust, scalable solutions.
            </p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 sm:gap-3 md:gap-4">
            {tools.map((tool, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-lg p-2 sm:p-3 md:p-4 flex flex-col items-center hover:bg-sky-50 hover:shadow transition-all"
              >
                <div className="mb-1.5 sm:mb-2 md:mb-3 text-sky-600">{tool.icon}</div>
                <span className="text-xs sm:text-sm font-medium text-center">{tool.name}</span>
                <span className="text-[10px] sm:text-xs text-gray-500 mt-0.5 sm:mt-1">{tool.category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-10 sm:py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-4">
              Advanced <span className="text-sky-600">Capabilities</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Cutting-edge features that set our solutions apart.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {[
              {
                title: "Automated Data Quality",
                desc: "AI-powered validation ensures 99.9% accuracy",
                icon: <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />,
              },
              {
                title: "Predictive Analytics",
                desc: "Forecast trends with 95% confidence intervals",
                icon: <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />,
              },
              {
                title: "Real-time Monitoring",
                desc: "24/7 monitoring with instant alerts",
                icon: <Activity className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />,
              },
              {
                title: "Data Visualization",
                desc: "Interactive dashboards with drill-down",
                icon: <PieChart className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />,
              },
              {
                title: "API Integration",
                desc: "Seamless integration with 500+ applications",
                icon: <Workflow className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />,
              },
              {
                title: "Security & Compliance",
                desc: "Enterprise-grade security with compliance",
                icon: <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />,
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 hover:shadow-lg transition-all"
              >
                <div className="bg-sky-100 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 sm:mb-3 md:mb-4">
                  <div className="text-sky-600">{feature.icon}</div>
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-bold mb-1 sm:mb-2">{feature.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="py-10 sm:py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-4">
              What Our Clients <span className="text-sky-600">Say</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Trusted by industry leaders worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {[
              {
                quote: "Reduced our reporting time by 80% and gave us new insights.",
                author: "Sarah Chen",
                // role: "CTO, RetailCorp",
              },
              {
                quote: "Helped reduce inventory costs by 35% while improving availability.",
                author: "Michael Rodriguez",
                // role: "Operations Director",
              },
              {
                quote: "Transformed our data chaos into clear business intelligence.",
                author: "Jessica Williams",
                // role: "Data VP, HealthFirst",
              },
            ].map((testimonial, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6"
              >
                <div className="flex mb-2 sm:mb-3 md:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-gray-700 italic mb-3 sm:mb-4">"{testimonial.quote}"</p>
                <div>
                  <h4 className="font-bold text-sm sm:text-base md:text-lg">{testimonial.author}</h4>
                  {/* <p className="text-xs text-gray-600">{testimonial.role}</p> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-10 sm:py-12 md:py-16 bg-gradient-to-r from-sky-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <Rocket className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto mb-4 sm:mb-5 md:mb-6 text-sky-200" />
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 px-4">
            Ready to Transform Your Data?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-sky-100 mb-6 sm:mb-7 md:mb-8 max-w-xl mx-auto px-4">
            Schedule a free data strategy consultation with our experts.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Button
              asChild
              size="default"
              className="bg-white text-sky-700 hover:bg-gray-100 px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 text-sm md:text-base w-full sm:w-auto"
            >
              <Link to="/contact#contact-form">
                Start Free Consultation <ArrowRight className="ml-1.5 md:ml-2 w-4 h-4 md:w-5 md:h-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="default"
              className="bg-transparent border border-white text-white hover:bg-white/10 px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 text-sm md:text-base w-full sm:w-auto"
            >
              <Link to="/contact">
                <PlayCircle className="w-4 h-4 md:w-5 md:h-5 mr-1.5 md:mr-2" />
                View Demo
              </Link>
            </Button>
          </div>

          <div className="mt-6 sm:mt-7 md:mt-8 text-sky-200 text-xs sm:text-sm">
            <p>✓ 24/7 Support • ✓ 30-Day Guarantee • ✓ Certified Experts</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DataServices;